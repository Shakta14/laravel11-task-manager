import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head, Link, router } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ auth, project, tasks, queryParams, success }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Projects "${project.name}"`}
                </h2>
            }
        >
            <Head title={`Projects "${project.name}"`} />
            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100 ">
                            <div className="grid gap-1 grid-cols-3 text-uppercase text-left ">
                                <div className="mt-2 ">
                                    {/* <div>
                                        <label className="font-bold text-lg ">
                                            Project ID
                                        </label>
                                        <p className="font-bold mt-1 ">
                                            {project.id}
                                        </p>
                                    </div> */}
                                    <div>
                                        <label className="font-bold text-lg ">
                                            Project Name
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {project.name}
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Project Status
                                        </label>
                                        <p className="font-semibold mt-1 ">
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
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Project Created By
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {project.created_by.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 ">
                                    <div>
                                        <label className="font-bold text-lg ">
                                            Project Created At
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {project.created_at}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Project Deadline
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {project.deadline}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 ">
                                    <div>
                                        <h1 className="font-bold text-lg ">
                                            Progress Project
                                        </h1>
                                        <p className="font-semibold mt-2 ">
                                            Something here
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 ">
                                <h1 className="font-bold text-lg mt-4 mb-2">
                                    Project Description
                                </h1>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <TasksTable
                                tasks={tasks}
                                success={success}
                                queryParams={queryParams}
                                hideProjectColumn={true}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="pb-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex items-center justify-between">
                                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200">
                                    Comments
                                </h2>
                                <div>
                                    <Link
                                        // href={route(
                                        //     "task.comment.create",
                                        //     task.id
                                        // )}
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                                    >
                                        Add Comment
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-4 ">
                                <h1>COMING SOON</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
