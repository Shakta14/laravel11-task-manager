import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    PROJECT_STATUS_CLASS_MAP,
    PROJECT_STATUS_TEXT_MAP,
} from "@/constants.jsx";
import { Head, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, projects, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("project.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_fields) {
            if (queryParams.sort_directions === "asc") {
                queryParams.sort_directions = "desc";
            } else {
                queryParams.sort_directions = "asc";
            }
        } else {
            queryParams.sort_fields = name;
            queryParams.sort_directions = "asc";
        }
        router.get(route("project.index"), queryParams);
    };

    const deleteProject = (project) => {
        if (!window.confirm("Are you sure you want to delete this project?")) {
            return;
        }
        router.delete(route("project.destroy", project.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Projects
                    </h2>
                    <Link
                        href={route("project.create")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Create New Project
                    </Link>
                </div>
            }
        >
            <Head title="Projects" />

            {success && (
                <div
                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                    role="alert"
                >
                    <span className="block sm:inline">{success}</span>
                </div>
            )}

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-nowrap">
                                            {/* <TableHeading
                                                name="id"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading> */}
                                            <TableHeading
                                                name="name"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Name
                                            </TableHeading>
                                            <TableHeading
                                                name="status"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Status
                                            </TableHeading>
                                            <TableHeading
                                                name="created_at"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Created Date
                                            </TableHeading>
                                            <TableHeading
                                                name="deadline"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Deadline
                                            </TableHeading>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 "
                                            >
                                                Created By
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-right"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        <tr className="text-nowrap">
                                            {/* <th
                                                scope="col"
                                                className="px-6 py-3"
                                            ></th> */}
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    placeholder="Project Name"
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            "name",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("name", e)
                                                    }
                                                />
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            >
                                                <SelectInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.status
                                                    }
                                                    onChange={(e) =>
                                                        searchFieldChanged(
                                                            "status",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="pending">
                                                        Pending
                                                    </option>
                                                    <option value="ongoing">
                                                        Ongoing
                                                    </option>
                                                    <option value="completed">
                                                        Completed
                                                    </option>
                                                </SelectInput>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 "
                                            ></th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projects.data.map((project) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800
                                            dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                                key={project.id}
                                            >
                                                {/* <td className="px-3 py-2">
                                                    {project.id}
                                                </td> */}
                                                <th className="px-3 py-2 text-white hover:underline text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "project.show",
                                                            project.id
                                                        )}
                                                    >
                                                        {project.name}
                                                    </Link>
                                                </th>
                                                <td className="px-3 py-2 text-nowrap">
                                                    <span
                                                        className={
                                                            "inline-block py-1 px-2 text-xs font-medium rounded-full text-white text-center mr-2 " +
                                                            PROJECT_STATUS_CLASS_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            PROJECT_STATUS_TEXT_MAP[
                                                                project.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {project.created_at}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {project.deadline}
                                                </td>
                                                <td className="px-3 py-2 text-center">
                                                    {project.created_by.name}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "project.edit",
                                                            project.id
                                                        )}
                                                        className="font-medium text-blue-500
                                                    dark:text-blue-400 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={(e) =>
                                                            deleteProject(
                                                                project
                                                            )
                                                        }
                                                        className="font-medium text-red-500
                                                    dark:text-red-400 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={projects.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
