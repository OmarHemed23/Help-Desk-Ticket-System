import { useState } from "react";
import { FunnelIcon, PlusIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Table1 from "../../components/data-display/Table1";
import NewTicketModalForm from "../../components/form/NewTicketModalForm";
import SearchInput1 from "../../components/form/SearchInput2";
import Pagination from "../../components/navigation/Pagination";
import Badge from "../../components/ui/Badge";
import SelectMenu from "../../components/ui/SelectMenu";
import CheckBox from "../../components/form/Checkbox";

const statusColors = {
    Pending: "bg-yellow-500",
    Resolved: "bg-green-500",
    Open: "bg-blue-500",
    New: "bg-gray-500",
    Closed: "bg-red-500",
};

const priorityColors = {
    Low: "text-green-500",
    High: "text-red-500",
    Medium: "text-yellow-500",
};

const ticketTypeItems = [
    { id: 1, name: "All" },
    { id: 2, name: "New" },
    { id: 3, name: "Open" },
    { id: 4, name: "Pending" },
    { id: 5, name: "Resolved" },
    { id: 6, name: "Closed" },
]

const durationItems = [
    { id: 1, name: "Last 7 days" },
    { id: 2, name: "Last 30 days" },
    { id: 3, name: "Last 90 days" },
    { id: 4, name: "All"}
]

const categoryItems = [
    { id: 1, label:"Software" },
    { id: 2, label:"Hardware" },
    { id: 3, label:"Network" },
    { id: 4, label:"Other" }
]

const priorities = ['All', 'High', 'Medium', 'Low']
export default function MyTicketsPage() {
    const [showNewTicketModal, setShowNewTicketModal ] = useState(false);

    const openNewTicketModal = () => {
        setShowNewTicketModal(true);
    };

    const closeNewTicketModal = () => {
        setShowNewTicketModal(false);
    };

    const columns = [
        { label: "Ticket #", accessor: "ticketNumber" },
        { label: "Category", accessor: "category" },
        { 
            label: "Priority", 
            accessor: "priority",
            render: (priority) => (
                <span className={`${priorityColors[priority]}`}>{priority}</span>
            ),
        },
        { label: "Issued", accessor: "issued" },
        { label: "Assigned To", accessor: "assignedTo" },
        { 
            label: "Last Modified", 
            accessor: "lastModified",
            render: (lastModified) => {
                const date = new Date(lastModified);
                const formattedDate = date.toLocaleDateString();
                const formattedTime = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                return (
                    <span>
                        <div className="flex flex-col">
                            <span>{formattedDate}</span>
                            <span className="text-gray-500 text-sm">{formattedTime}</span>
                        </div>
                    </span>
                );
            },
        },
        {
            label: "Status",
            accessor: "status",
            render: (status) => (
                <Badge className={`text-white ${statusColors[status]}`} text={status} />
            ),
        },
    ];

    const ticketData = [
        { ticketNumber: "SOFT2001", category: "Software", priority: "Low", issued: "23/7/2024", assignedTo: "Omar Hemed", lastModified: "2024-10-24 14:30", status: "Pending" },
        { ticketNumber: "SOFT2002", category: "Software", priority: "High", issued: "24/8/2024", assignedTo: "Omar Hemed", lastModified: "2024-10-24 09:15", status: "Resolved" },
        { ticketNumber: "SOFT2003", category: "Software", priority: "Medium", issued: "7/9/2024", assignedTo: "Omar Hemed", lastModified: "2024-10-24 12:00", status: "Open" },
        { ticketNumber: "SOFT2004", category: "Software", priority: "Low", issued: "2/4/2024", assignedTo: "Omar Hemed", lastModified: "2024-10-24 10:45", status: "New" },
        { ticketNumber: "SOFT2005", category: "Software", priority: "High", issued: "5/9/2024", assignedTo: "Omar Hemed", lastModified: "2024-10-24 17:20", status: "Closed" },
    ];

    return (
        <section className="pb-4 gap-6 mb-4">
            <div className="max-w-screen-xl pb-4 w-full">
                <div className="relative sm:rounded-lg px-4">
                    <div className="flex flex-col space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <SearchInput1 />
                            </form>
                        </div>
                        <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                            <button
                                onClick={openNewTicketModal}
                                type="button"
                                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                            >
                                <PlusIcon className="h-3.5 w-3.5 mr-2"/>
                                New Ticket
                            </button>
                            <NewTicketModalForm showNewTicketModal={showNewTicketModal} closeNewTicketModal={closeNewTicketModal} />
                            <Menu>
                                <MenuButton className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:w-auto focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <FunnelIcon className="w-4 h-4 mr-2 text-gray-400"/>
                                    Filter
                                    <ChevronDownIcon className="-mr-1 ml-1.5 w-5 h-5" />
                                </MenuButton>
                                <MenuItems anchor="bottom" className="w-48 mt-2 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                        Category
                                    </h6>
                                    
                                    <ul className="space-y-2 text-sm">
                                        {categoryItems.map((categoryItem) => (
                                        <MenuItem key={categoryItem.id}>
                                            <li className="flex items-center">
                                                <CheckBox label={categoryItem.label} />
                                            </li>
                                        </MenuItem>
                                        ))}
                                    </ul>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white border-t border-gray-200 shadow-md 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                <div className="py-8 antialiased md:py-5">
                    <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
                        <div className="mx-auto max-w-5xl">
                            <div className="gap-4 sm:flex sm:items-center sm:justify-between">
                                <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
                                    Tickets: {ticketData.length > 0 ? ticketData.length : 0}
                                </h2>
                                <div className="mt-6 gap-4 space-y-4 sm:mt-0 sm:flex sm:items-center sm:justify-end sm:space-y-0">
                                    <div>
                                        <SelectMenu label="Select Ticket Type" items={ticketTypeItems} />
                                    </div>
                                    <span className="inline-block text-gray-500 dark:text-gray-400">
                                         from 
                                    </span>
                                    <div>
                                        <SelectMenu label="Select Duration" items={durationItems}/>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto pt-3">
                                <div className="hover:overflow-y-auto">
                                    <Table1 columns={columns} data={ticketData} />
                                </div>
                            </div>
                            <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );

}