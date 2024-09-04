import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";

export default function AuthenticatedLayout() {
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
    const [showingSidebar, setShowingSidebar] = useState(true);

    const handleSidebarCollapsed = () => {
        setSidebarCollapsed((prev) => !prev);
    };

    const handleShowingSidebar = () => {
        setShowingSidebar((prev) => !prev);
    };

    return (
        <div className={`
            grid min-h-screen 
            ${sidebarCollapsed ? "grid-cols-sidebar-collapsed" : "grid-cols-sidebar"}
            transition-[grid-template-columns] duration-300 ease-in-out
            bg-gray-100 dark:bg-gray-900`}
        >
            <Sidebar 
                collapsed={sidebarCollapsed}
                setCollapsed={handleSidebarCollapsed}
                showingSidebar={showingSidebar}
            />
            <main className="bg-gray-50 dark:bg-gray-900 w-screen md:w-full overflow-hidden">
                <Navbar 
                    openSidebar={handleShowingSidebar} 
                    showingSidebar={showingSidebar} 
                />
                <Outlet />
            </main>
        </div>
    );
}
