import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export default function TableHeading({
    name,
    sortable = true,
    sort_fields,
    sort_directions,
    sortChanged = () => {},
    children,
}) {
    return (
        <th onClick={(e) => sortChanged(name)} scope="col">
            <div
                className="px-3 py-3 flex
            items-center justify-between gap-1 cursor-pointer"
            >
                {children}
                {sortable && (
                    <div>
                        <ChevronUpIcon
                            className={
                                "w-4 " +
                                (sort_fields === name &&
                                sort_directions === "asc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                        <ChevronDownIcon
                            className={
                                "w-4 -mt-2 " +
                                (sort_fields === name &&
                                sort_directions === "desc"
                                    ? "text-white"
                                    : "")
                            }
                        />
                    </div>
                )}
            </div>
        </th>
    );
}
