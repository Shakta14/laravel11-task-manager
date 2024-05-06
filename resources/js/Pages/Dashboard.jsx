import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link } from "@inertiajs/react";

export default function Dashboard({
    auth,
    myPendingTasks,
    totalPendingTasks,
    myProgressTasks,
    totalProgressTasks,
    myCompletedTasks,
    totalCompletedTasks,
    activeTasks,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Welcome, {auth.user.name}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-10">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 grid grid-cols-3 gap-2">
                    <div className="bg-red-700 dark:bg-red-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="font-bold text-center text-xl">
                                Pending Tasks
                            </h1>
                            <p className="text-center font-semibold text-xl mt-4 ">
                                <span className="mr-2 ">{myPendingTasks}</span>/
                                <span className="ml-2">
                                    {totalPendingTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-blue-700 dark:bg-blue-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="font-bold text-center text-xl">
                                Progress Tasks
                            </h1>
                            <p className="text-center font-semibold text-xl mt-4 ">
                                <span className="mr-2 ">{myProgressTasks}</span>
                                /
                                <span className="ml-2">
                                    {totalProgressTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="bg-green-700 dark:bg-green-900 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <h1 className="font-bold text-center text-xl">
                                Completed Tasks
                            </h1>
                            <p className="text-center font-semibold text-xl mt-4 ">
                                <span className="mr-2 ">
                                    {myCompletedTasks}
                                </span>
                                /
                                <span className="ml-2">
                                    {totalCompletedTasks}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-6 max-w-7xl mx-auto sm:px-6 lg:px-8 ">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-4 text-gray-900 dark:text-gray-100">
                            <div className="flex items-center justify-between text-center">
                                <h1 className="font-bold text-center text-xl text-gray-800 dark:text-gray-200">
                                    My Active Tasks
                                </h1>
                                <Link
                                    href={route("task.myTasks")}
                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                >
                                    view all
                                </Link>
                            </div>

                            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-4">
                                <thead className="text-s text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">
                                            Project Name
                                        </th>
                                        <th className="px-3 py-3">Name</th>
                                        <th className="px-3 py-3">Status</th>
                                        <th className="px-3 py-3">Deadline</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {activeTasks.data &&
                                        activeTasks.data.map((task) => (
                                            <tr key={task.id}>
                                                <td className="px-3 py-2">
                                                    {task.project.name}
                                                </td>
                                                <td className="px-3 py-2 hover:underline">
                                                    <Link
                                                        href={route(
                                                            "task.show",
                                                            task.id
                                                        )}
                                                    >
                                                        {task.name}
                                                    </Link>
                                                </td>
                                                <td className="px-3 py-2">
                                                    <span
                                                        className={
                                                            "inline-block py-1 px-2 text-xs font-medium rounded-full text-white text-center mr-2 " +
                                                            TASK_STATUS_CLASS_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    >
                                                        {
                                                            TASK_STATUS_TEXT_MAP[
                                                                task.status
                                                            ]
                                                        }
                                                    </span>
                                                </td>
                                                <td className="px-3 py-2">
                                                    {task.deadline}
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
