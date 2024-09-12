import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/navigation/Sidebar";
import Navbar from "../components/navigation/Navbar";
import Breadcrumb from "../components/navigation/Breadcrumb";

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
        <div
            className={`grid min-h-screen grid-cols-1 transition-[grid-template-columns] duration-300 ease-in-out bg-gray-100 dark:bg-gray-900 ${
                sidebarCollapsed ? "md:grid-cols-sidebar-collapsed" : "md:grid-cols-sidebar"
            }`}
        >
            <Sidebar
                collapsed={sidebarCollapsed}
                setCollapsed={handleSidebarCollapsed}
                showingSidebar={showingSidebar}
            />
            <main className="bg-gray-50 dark:bg-gray-900 w-full overflow-auto h-screen">
                <Navbar
                    openSidebar={handleShowingSidebar}
                    showingSidebar={showingSidebar}
                />
                <Breadcrumb />
                <Outlet />
            </main>
        </div>
    );
}


