import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Badge from "../../components/ui/Badge";
import Table1 from "../../components/data-display/Table1";
import VerticalStepper from "../../components/navigation/VerticalStepper";
import SearchInput from "../../components/form/SearchInput";


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

const data = [
    { ticketNumber: "SOFT2001", category: "Software", priority: "Low", issued: "23/7/2024", lastModified: "2024-10-24 14:30", status: "Pending" },
    { ticketNumber: "SOFT2002", category: "Software", priority: "High", issued: "24/8/2024", lastModified: "2024-10-24 09:15", status: "Resolved" },
    { ticketNumber: "SOFT2003", category: "Software", priority: "Medium", issued: "7/9/2024", lastModified: "2024-10-24 12:00", status: "Open" },
    { ticketNumber: "SOFT2004", category: "Software", priority: "Low", issued: "2/4/2024", lastModified: "2024-10-24 10:45", status: "New" },
    { ticketNumber: "SOFT2005", category: "Software", priority: "High", issued: "5/9/2024", lastModified: "2024-10-24 17:20", status: "Closed" },
];

function filterTicketsByDateRange(tickets, range) {
    const now = new Date();
    let filterDate;
    
    switch(range) {
        case "Last 7 days":
            filterDate = new Date();
            filterDate.setDate(now.getDate() - 7);
            break;
        case "Last 30 days":
            filterDate = new Date();
            filterDate.setDate(now.getDate() - 30);
            break;
        case "Last 90 days":
            filterDate = new Date();
            filterDate.setDate(now.getDate() - 90);
            break;
        default:
            return tickets;
    }
    
    return tickets.filter(ticket => {
        const issuedDate = new Date(ticket.issued.split('/').reverse().join('-'));
        return issuedDate >= filterDate;
    });
}

const calculateDateDifferenceInDays = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffInMs = end - start;
    return diffInMs / (1000 * 60 * 60 * 24);
};


const resolvedTickets = data.filter(ticket => ticket.status === "Resolved" || ticket.status === "Closed");


const resolutionTimes = resolvedTickets.map(ticket => calculateDateDifferenceInDays(ticket.issued, ticket.lastModified));

const totalResolutionTime = resolutionTimes.reduce((sum, time) => sum + time, 0);
const averageResolutionTime = totalResolutionTime / resolutionTimes.length;

export default function UserDashboardPage() {
    const [resolutionTimeTrend, setResolutionTimeTrend] = useState("down");
    const [selectedRange, setSelectedRange] = useState("All");
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        setFilteredData(filterTicketsByDateRange(data, selectedRange));
    }, [selectedRange]);

    return (
        <>
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-2 gap-4 mb-4">
                <div className="bg-white rounded-lg h-28 md:h-32 shadow-md flex flex-col justify-center items-center dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Open Tickets
                    </h2>
                    <p className="text-3xl font-bold text-blue-600">
                        {data.filter(ticket => ticket.status === "Open").length}
                    </p>
                    <Link to="/user/open-tickets" className="text-sm text-gray-500 hover:text-blue-600">
                        View All
                    </Link>
                </div>
                <div className="bg-white rounded-lg h-32 md:h-32 shadow-md flex flex-col justify-center items-center dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Resolved Tickets
                    </h2>
                    <p className="text-3xl font-bold text-green-600">
                        {data.filter(ticket => ticket.status === "Resolved").length}
                    </p>
                    <Link to="/user/resolved-tickets" className="text-sm text-gray-500 hover:text-blue-600">
                        View History
                    </Link>
                </div>
                <div className="bg-white rounded-lg h-32 shadow-md flex flex-col justify-center items-center dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Pending Actions
                    </h2>
                    <p className="text-3xl font-bold text-yellow-600">
                        {data.filter(ticket => ticket.status === "Pending").length}
                    </p>
                    <Link to="/user/pending-actions" className="text-sm text-gray-500 hover:text-blue-600">
                        Take Action
                    </Link>
                </div>
                <div className="bg-white rounded-lg h-32 md:h-32 shadow-md flex flex-col justify-center items-center dark:bg-gray-800">
                    <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
                        Avg Resolution Time
                    </h2>
                    <div className="flex items-center">
                        <p className="text-3xl font-bold text-yellow-600">
                            {averageResolutionTime.toFixed(2)} Days
                        </p>
                        {resolutionTimeTrend === "up" ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="ml-2 text-green-600" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="ml-2 text-red-600" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm10 11.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-1 0v2.6l-3.613-4.417a.5.5 0 0 0-.74-.037L7.06 8.233 3.404 3.206a.5.5 0 0 0-.808.588l4 5.5a.5.5 0 0 0 .758.06l2.609-2.61L13.445 11H10.5a.5.5 0 0 0-.5.5"/>
                            </svg>
                        )}
                    </div>
                    <span className="text-sm text-gray-500">Last 30 Days</span>
                </div>
            </section>

            <section className="grid grid-cols-1 p-2 gap-4 mb-4">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex justify-between text-gray-900 dark:text-white px-4 py-2">
                        <div className="flex items-start">
                            <h3>
                                Recent Tickets
                            </h3>
                        </div>
                        <div className="flex items-end">
                            <Link to="" className="text-gray-500 hover:text-primary-700 dark:hover:text-gray-100">
                                View All
                            </Link>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <div className="h-48 hover:overflow-y-auto">
                            <Table1 columns={columns} data={filteredData} className="table-fixed" />
                        </div>
                    </div>
                    <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
                        <Menu>
                            <MenuButton className="inline-flex items-center py-3 px-4 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                                {selectedRange}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2 text-gray-900 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </MenuButton>
                            <MenuItems anchor="bottom start" className="z-50 my-4 w-56 text-base bg-white rounded shadow dark:bg-gray-700">
                                <ul className="py-1 list-none divide-y divide-gray-100 dark:divide-gray-600">
                                    <MenuItem>
                                        <Link onClick={() => setSelectedRange("Last 7 days")} className="block w-full py-2 px-4 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                            Last 7 days
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={() => setSelectedRange("Last 30 days")} className="block w-full py-2 px-4 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                            Last 30 days
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={() => setSelectedRange("Last 90 days")} className="block w-full py-2 px-4 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                            Last 90 days
                                        </Link>
                                    </MenuItem>
                                    <MenuItem>
                                        <Link onClick={() => setSelectedRange("All")} className="block w-full py-2 px-4 text-start text-sm leading-5 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">
                                            All
                                        </Link>
                                    </MenuItem>
                                </ul>
                            </MenuItems>
                        </Menu>
                    </div>
                </div>
            </section>
            <section className="grid grid-cols-1 lg:grid-cols-6 p-2 gap-4 mb-4">
                <div className="flex flex-col lg:col-span-4 p-4 sm:p-6 bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-md rounded-lg">
                    <div className="flex-row md:flex justify-between text-gray-900 border-b border-gray-200 dark:border-gray-700 dark:text-white px-4 py-2">
                        <div className="flex mb-4 items-start md:mb-0">
                            <h3>
                                Activity Breakdown
                            </h3>
                        </div>
                        <div className="flex items-end">
                            <SearchInput className="w-full" placeholder="Search Ticket"/>
                        </div>
                    </div>
                    <div className="px-4 mt-5 h-[350px] overflow-y-auto">
                        <VerticalStepper />
                    </div>
                </div>
                <div className="flex flex-col lg:col-span-2 sm:p-6  bg-white border border-gray-200 dark:border-gray-700 dark:bg-gray-800 shadow-md rounded-lg">
                    <div className="flex justify-between border-b border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white px-4 py-2">
                        <div className="flex items-start">
                            <h3>
                                FAQs
                            </h3>
                        </div>
                    </div>
                    <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="hover:bg-gray-100 dark:hover:bg-gray-900">
                            <Link to="">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            How to save energy while using computer?
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                        <li className="hover:bg-gray-100 dark:hover:bg-gray-900">
                            <Link to="">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex-shrink-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            How to restart network adapter?
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}
