import { useLocation,Link } from "react-router-dom";

const routeTitles = {
    "/user/dashboard": "User Dashboard",
};

export default function Breadcrumb() {
    const location = useLocation();
    const currentPath = location.pathname;
    const pageTitle = routeTitles[currentPath] || "Page Title";

    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-2 space-y-2 md:space-y-0">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                {pageTitle}
            </h1>
            <nav className="flex md:justify-end w-full md:w-auto" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li>
                        <div className="flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-400 dark:hover:text-white">
                                Home
                            </Link>
                        </div>
                    </li>
                    {currentPath !== "/" && (
                        <li>
                            <div className="flex items-center">
                                <svg className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span className="ml-1 text-sm font-medium text-gray-500">
                                    {pageTitle}
                                </span>
                            </div>
                        </li>
                    )}
                </ol>
            </nav>
        </div>
    );
}
