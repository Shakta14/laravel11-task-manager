import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        status: "",
        description: "",
        deadline: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("project.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Create New Project
                    </h2>
                </div>
            }
        >
            <Head title="Create New Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                            onSubmit={submit}
                        >
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_name"
                                    value="Project Name"
                                />
                                <TextInput
                                    id="project_name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_description"
                                    value="Project Description"
                                />
                                <TextAreaInput
                                    id="project_description"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    autoComplete="description"
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.description}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_deadline"
                                    value="Project Deadline"
                                />
                                <TextInput
                                    id="project_deadline"
                                    type="date"
                                    name="deadline"
                                    value={data.deadline}
                                    className="mt-1 block w-full"
                                    autoComplete="deadline"
                                    onChange={(e) =>
                                        setData("deadline", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.deadline}
                                    className="mt-2"
                                />
                            </div>
                            <div className="mt-4">
                                <InputLabel
                                    htmlFor="project_status"
                                    value="Project Status"
                                />
                                <SelectInput
                                    id="project_status"
                                    name="status"
                                    className="mt-1 block w-full"
                                    autoComplete="status"
                                    onChange={(e) =>
                                        setData("status", e.target.value)
                                    }
                                >
                                    <option value="">Select Status</option>
                                    <option value="pending">Pending</option>
                                    <option value="ongoing">Ongoing</option>
                                    <option value="completed">Completed</option>
                                </SelectInput>

                                <InputError
                                    message={errors.project_status}
                                    className="mt-2"
                                />
                            </div>
                            <div className="flex items-center justify-end mt-4">
                                <Link
                                    href={route("project.index")}
                                    className="mr-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
