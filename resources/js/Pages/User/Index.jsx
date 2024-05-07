import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function Index({ auth, users, queryParams = null, success }) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("user.index"), queryParams);
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
        router.get(route("user.index"), queryParams);
    };

    const deleteUser = (user) => {
        if (!window.confirm("Are you sure you want to delete this user?")) {
            return;
        }
        router.delete(route("user.destroy", user.id));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Users
                    </h2>
                    <Link
                        href={route("user.create")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Create New User
                    </Link>
                </div>
            }
        >
            <Head title="Users" />

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
                                                name="email"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Email
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
                                                name="role"
                                                sort_fields={
                                                    queryParams.sort_fields
                                                }
                                                sort_directions={
                                                    queryParams.sort_directions
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Role
                                            </TableHeading>
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
                                                    placeholder="User Name"
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
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.email
                                                    }
                                                    placeholder="User Email"
                                                    onBlur={(e) =>
                                                        searchFieldChanged(
                                                            "email",
                                                            e.target.value
                                                        )
                                                    }
                                                    onKeyPress={(e) =>
                                                        onKeyPress("email", e)
                                                    }
                                                />
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
                                                className="px-6 py-3"
                                            ></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.data.map((user) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800
                                            dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                                key={user.id}
                                            >
                                                {/* <td className="px-3 py-2">
                                                    {user.id}
                                                </td> */}
                                                <th className="px-3 py-2 text-white hover:underline text-nowrap">
                                                    {user.name}
                                                </th>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {user.email}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {user.created_at}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    {user.role}
                                                </td>
                                                <td className="px-3 py-2 text-nowrap">
                                                    <Link
                                                        href={route(
                                                            "user.edit",
                                                            user.id
                                                        )}
                                                        className="font-medium text-blue-500
                                                    dark:text-blue-400 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={(e) =>
                                                            deleteUser(user)
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
                            <Pagination links={users.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
