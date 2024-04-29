import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { USER_STATUS_CLASS_MAP, USER_STATUS_TEXT_MAP } from "@/constants";
import { Head, router } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, user, tasks, queryParams }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Users "${user.name}"`}
                </h2>
            }
        >
            <Head title={`Users "${user.name}"`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2 ">
                                <div className="mt-4 ">
                                    <div>
                                        <label className="font-bold text-lg ">
                                            User ID
                                        </label>
                                        <p className="font-bold mt-1 ">
                                            {user.id}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            User Name
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {user.name}
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            User Status
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            <span
                                                className={
                                                    "inline-block py-1 px-2 text-xs font-medium rounded-full text-white text-center mr-2 " +
                                                    USER_STATUS_CLASS_MAP[
                                                        user.status
                                                    ]
                                                }
                                            >
                                                {
                                                    USER_STATUS_TEXT_MAP[
                                                        user.status
                                                    ]
                                                }
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            User Created By
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {user.created_by.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                    <div>
                                        <label className="font-bold text-lg ">
                                            User Created At
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {user.created_at}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            User Deadline
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {user.deadline}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 ">
                                <h1 className="font-bold text-lg mt-4 mb-2">
                                    User Description
                                </h1>
                                <p>{user.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable
                                tasks={tasks}
                                queryParams={queryParams}
                                hideUserColumn={true}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
