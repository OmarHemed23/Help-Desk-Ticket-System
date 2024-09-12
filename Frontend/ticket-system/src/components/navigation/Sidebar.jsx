import Logo from "../../images/logo.jpg";
import SidebarItems from "./SidebarItems";

export default function Sidebar ({ collapsed, setCollapsed, showingSidebar }) {

    const getIcon = (collapsed) => {
        return collapsed ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M4.146 3.646a.5.5 0 0 0 0 .708L7.793 8l-3.647 3.646a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708 0M11.5 1a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-1 0v-13a.5.5 0 0 1 .5-.5"/>
            </svg>
        ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M11.854 3.646a.5.5 0 0 1 0 .708L8.207 8l3.647 3.646a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0M4.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5"/>
            </svg>
        );
    };

    const handleClick = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside 
            className={`
            bg-white dark:bg-gray-800 text-gray-900 dark:text-white z-50 h-full transition-all duration-300 ease-in-out fixed md:static md:translate-x-0
            ${!collapsed ? "w-[300px]" : "w-16"}
            ${showingSidebar ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <div className="flex flex-col justify-between h-full">
                <div className={`
                    flex items-center border-b border-gray-200 dark:border-gray-700 h-[73px]
                    ${!collapsed ? "p-4 justify-between" : "py-4 justify-center"}`}
                >
                    <img src={Logo} className={`w-6 h-6 ${collapsed ? "mx-auto md:ml-3" : "mr-2"}`} alt="" />
                    {!collapsed && 
                        <span className="whitespace-nowrap">
                            Help Desk Ticket System
                        </span>
                    }
                    <button 
                        className="place-content-center w-10 h-10 rounded-full hidden md:grid"
                        onClick={handleClick}
                    >
                        {getIcon(collapsed)}
                    </button>
                </div>
                <nav className="flex-grow border-r border-gray-200 dark:border-gray-700">
                    <SidebarItems collapsed={collapsed}/>
                </nav>
            </div>
        </aside>
    );
}



