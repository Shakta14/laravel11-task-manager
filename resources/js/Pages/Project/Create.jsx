import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        image: "",
        name: "",
        status: "",
        description: "",
        deadline: "",
    });

    const onSubmit = (e) => {
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
            <Head title="Projects" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <form
                                onSubmit={onSubmit}
                                className="p-4 sm:p-8 bg-white dark:bg-gray-800
                            shadow sm:rounded-lg"
                            >
                                <div>
                                    <InputLabel
                                        htmlFor="project_image_path"
                                        value="Project Image"
                                    />
                                    <TextInput
                                        id="project_image_path"
                                        type="file"
                                        name="image"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("image", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.project_image_path}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4">
                                    <InputLabel
                                        htmlFor="project_name"
                                        value="Project Name"
                                    />
                                    <TextInput
                                        id="project_name"
                                        type="text"
                                        name="name"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.project_name}
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
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.project_description}
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
                                        onChange={(e) =>
                                            setData("deadline", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.project_name}
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
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    >
                                        <option value="">Select Status</option>
                                        <option value="pending">Pending</option>
                                        <option value="ongoing">Ongoing</option>
                                        <option value="completed">
                                            Completed
                                        </option>
                                    </SelectInput>

                                    <InputError
                                        message={errors.project_status}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="mt-4 text-right">
                                    <Link
                                        href={route("project.index")}
                                        className="bg-gray-100 text-gray-700 py-1 px-3 rounded
                                        shadow transition-all hover:bg-gray-200 mr-2 "
                                    >
                                        Cancel
                                    </Link>
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white
                                    font-bold py-1 px-3 rounded shadow transition-all "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
