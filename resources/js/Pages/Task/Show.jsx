import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {
    TASK_PRIORITY_CLASS_MAP,
    TASK_PRIORITY_TEXT_MAP,
    TASK_STATUS_CLASS_MAP,
    TASK_STATUS_TEXT_MAP,
} from "@/constants";
import { Head, Link, router } from "@inertiajs/react";

export default function Show({ auth, success, task }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    {`Tasks "${task.name}"`}
                </h2>
            }
        >
            <Head title={`Tasks "${task.name}"`} />
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid gap-1 grid-cols-2 mt-2 border-b pb-4 ">
                                <div className="text-uppercase text-left ">
                                    {/* <div>
                                        <label className="font-bold text-lg ">
                                            Task ID
                                        </label>
                                        <p className="font-bold mt-1 ">
                                            {task.id}
                                        </p>
                                    </div> */}
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Task Name
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {task.name}
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Task Status
                                        </label>
                                        <p className="font-semibold mt-1 ">
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
                                        </p>
                                    </div>

                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Task Created By
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {task.created_by.name}
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 ">
                                    <div>
                                        <label className="font-bold text-lg ">
                                            Task Created At
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {task.created_at}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Task Deadline
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {task.deadline}
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            Task Priority
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            <span
                                                className={
                                                    "inline-block py-1 px-2 text-xs font-medium rounded-full text-white text-center mr-2 " +
                                                    TASK_PRIORITY_CLASS_MAP[
                                                        task.priority
                                                    ]
                                                }
                                            >
                                                {
                                                    TASK_PRIORITY_TEXT_MAP[
                                                        task.priority
                                                    ]
                                                }
                                            </span>
                                        </p>
                                    </div>
                                    <div className="mt-4 ">
                                        <label className="font-bold text-lg ">
                                            PIC
                                        </label>
                                        <p className="font-semibold mt-1 ">
                                            {task.assignedUser.name}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 border-b pb-4">
                                <label className="font-bold text-xl ">
                                    Project
                                </label>
                                <p className="font-semibold mt-4 hover:underline">
                                    <Link
                                        href={route(
                                            "project.show",
                                            task.project.id
                                        )}
                                    >
                                        {task.project.name}
                                    </Link>
                                </p>
                            </div>

                            <div className="mt-6 ">
                                <h1 className="font-bold text-lg mt-4 mb-2">
                                    Task Description
                                </h1>
                                <p>{task.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
