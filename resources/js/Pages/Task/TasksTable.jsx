import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";

export default function TasksTable({
    tasks,
    queryParams = null,
    hideProjectColumn = false,
}) {
    queryParams = queryParams || {};
    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("task.index"), queryParams);
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
        router.get(route("task.index"), queryParams);
    };

    return (
        <>
            <div className="overflow-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-nowrap">
                            <TableHeading
                                name="id"
                                sort_fields={queryParams.sort_fields}
                                sort_directions={queryParams.sort_directions}
                                sortChanged={sortChanged}
                            >
                                ID
                            </TableHeading>
                            <th scope="col" className="px-3 py-3">
                                Image
                            </th>
                            {!hideProjectColumn && (
                                <th scope="col" className="px-3 py-3">
                                    Project Name
                                </th>
                            )}
                            <TableHeading
                                name="name"
                                sort_fields={queryParams.sort_fields}
                                sort_directions={queryParams.sort_directions}
                                sortChanged={sortChanged}
                            >
                                Name
                            </TableHeading>
                            <TableHeading
                                name="status"
                                sort_fields={queryParams.sort_fields}
                                sort_directions={queryParams.sort_directions}
                                sortChanged={sortChanged}
                            >
                                Status
                            </TableHeading>
                            <TableHeading
                                name="created_at"
                                sort_fields={queryParams.sort_fields}
                                sort_directions={queryParams.sort_directions}
                                sortChanged={sortChanged}
                            >
                                Created Date
                            </TableHeading>
                            <TableHeading
                                name="deadline"
                                sort_fields={queryParams.sort_fields}
                                sort_directions={queryParams.sort_directions}
                                sortChanged={sortChanged}
                            >
                                Deadline
                            </TableHeading>
                            <th scope="col" className="px-3 py-3 ">
                                Created By
                            </th>
                            <th scope="col" className="px-3 py-3 text-right">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="text-nowrap">
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3"></th>
                            {!hideProjectColumn && (
                                <th scope="col" className="px-6 py-3"></th>
                            )}
                            <th scope="col" className="px-6 py-3">
                                <TextInput
                                    className="w-full"
                                    defaultValue={queryParams.name}
                                    placeholder="Task Name"
                                    onBlur={(e) =>
                                        searchFieldChanged(
                                            "name",
                                            e.target.value
                                        )
                                    }
                                    onKeyPress={(e) => onKeyPress("name", e)}
                                />
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <SelectInput
                                    className="w-full"
                                    defaultValue={queryParams.status}
                                    onChange={(e) =>
                                        searchFieldChanged(
                                            "status",
                                            e.target.value
                                        )
                                    }
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="completed">Completed</option>
                                </SelectInput>
                            </th>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3"></th>
                            <th scope="col" className="px-6 py-3 "></th>
                            <th scope="col" className="px-6 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.data.map((task) => (
                            <tr
                                className="bg-white border-b dark:bg-gray-800
                                            dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                                key={task.id}
                            >
                                <td className="px-3 py-2">{task.id}</td>
                                <td className="px-3 py-2">
                                    <img
                                        src={task.image_path}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                {!hideProjectColumn && (
                                    <td className="px-3 py-2">
                                        {task.project.name}
                                    </td>
                                )}
                                <td className="px-3 py-2">{task.name}</td>
                                <td className="px-3 py-2 text-nowrap">
                                    <span
                                        className={
                                            "inline-block py-1 px-2 text-xs font-medium rounded-full text-white text-center mr-2 " +
                                            TASK_STATUS_CLASS_MAP[task.status]
                                        }
                                    >
                                        {TASK_STATUS_TEXT_MAP[task.status]}
                                    </span>
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.created_at}
                                </td>
                                <td className="px-3 py-2 text-nowrap">
                                    {task.deadline}
                                </td>
                                <td className="px-3 py-2 text-center">
                                    {task.created_by.name}
                                </td>
                                <td className="px-3 py-2">
                                    <Link
                                        href={route("task.edit", task.id)}
                                        className="font-medium text-blue-500
                                                    dark:text-blue-400 hover:underline mx-1"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={route("task.destroy", task.id)}
                                        className="font-medium text-red-500
                                                    dark:text-red-400 hover:underline mx-1"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination links={tasks.meta.links} />
        </>
    );
}
