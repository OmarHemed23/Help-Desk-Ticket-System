import { Link } from "react-router-dom";

const SidebarItems = ( {collapsed} ) => {
    const iconClassName = "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white";
    const navItems = [
        { 
            id: 1, 
            label: "Dashboard", 
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 20 20" className={iconClassName}>
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
            ), 
            link: "/user/dashboard" 
        },
        {
            id: 2,
            label: "Create Ticket",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={iconClassName} viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                </svg>
            ),
            link: "/user/create-ticket"
        },
        {
            id: 3,
            label: "My Tickets",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={iconClassName} viewBox="0 0 16 16">
                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zm4 1a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5m0 5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5M4 8a1 1 0 0 0 1 1h6a1 1 0 1 0 0-2H5a1 1 0 0 0-1 1"/>
                </svg>
            ),
            link: "/user/my-tickets"
        },
        {
            id: 4,
            label: "My Profile",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={iconClassName} viewBox="0 0 16 16">
                    <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                </svg>
            ),
            link: "/user/profile"
        },
    ];

    return (
        <ul className="my-2 flex flex-col gap-2 items-stretch">
            {navItems.map((item) => (
                <Link
                    to={item.link}
                    key={item.id}
                    className={`
                        text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group flex transition-colors duration-300
                        ${!collapsed ? "rounded-md p-2 mx-3 gap-4" : "rounded-full p-2 mx-3 gap-4 w-10 h-10"}
                    `}>
                    <li className="flex gap-2">
                        {item.icon} <span>{!collapsed && item.label}</span>
                    </li>
                </Link>
            ))}
        </ul>
    );
};

export default SidebarItems;
