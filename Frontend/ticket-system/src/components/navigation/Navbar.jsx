import Dropdown from "../ui/Dropdown";
import { useTheme } from "../../hooks/useTheme";

export default function Navbar({ openSidebar, showingSidebar }) {
    const { theme, setAndApplyTheme } = useTheme();

    const getThemeIcon = (themeName) => {
        switch (themeName) {
            case "auto":
                return (
                    <svg
                        className="text-gray-500 dark:text-gray-400 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" />
                    </svg>
                );
            case "light":
                return (
                    <svg
                        className="text-yellow-500 dark:text-gray-400 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>
                );
            case "dark":
                return (
                    <svg
                        className="text-purple-500 dark:text-gray-400 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M6 .278a.77.77 0 0 1 .08.858c-1.249 2.165-.428 4.911 1.736 6.16 1.409.812 3.089.872 4.505.205a.77.77 0 0 1 1.11.86 7 7 0 1 1-8.032-8.032.77.77 0 0 1 .601-.051z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <nav 
            className={`
            bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center sticky left-0 right-0 top-0 z-10 px-4 h-[73px]
            ${!showingSidebar ? "p-4" : "py-4"}`}
        >
            <div className="font-bold text-lg text-zinc-500">
                User Panel 
            </div>
            <div className="flex-grow"></div>
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start rtl:justify-end">
                        <button 
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400"
                            onClick={openSidebar}
                        >
                            <span className="w-6 h-6">
                                <svg className={!showingSidebar ? "inline-flex" : "hidden"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
                                </svg>
                                <svg className={showingSidebar ? "inline-flex" : "hidden"} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"/>
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div className="md:flex hidden items-center">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="py-3 px-4 flex items-center cursor-pointer">
                                    {getThemeIcon(theme)}
                                </div>
                            </Dropdown.Trigger>
                            <Dropdown.Content contentClasses='bg-white dark:bg-gray-700' width='48'>
                                <div className="text-base list-none divide-y divide-gray-100 dark:divide-gray-600">
                                    <div onClick={() => setAndApplyTheme("auto") } className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                                        <span className="block text-sm">
                                            {getThemeIcon("auto")}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-900 dark:text-white">
                                            Auto
                                        </span>
                                    </div>
                                    <div onClick={() => setAndApplyTheme("light")} className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                                        <span className="block text-sm">
                                            {getThemeIcon("light")}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-900 dark:text-white">
                                            Light
                                        </span>
                                    </div>
                                    <div onClick={() => setAndApplyTheme("dark")} className="flex items-center py-3 px-4 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800">
                                        <span className="block text-sm">
                                            {getThemeIcon("dark")}
                                        </span>
                                        <span className="ml-2 text-sm text-gray-900 dark:text-white">
                                            Dark
                                        </span>
                                    </div>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                        <div className="h-4 border-l border-gray-400 mx-3"></div>
                        <Dropdown>
                            <Dropdown.Trigger>
                                <div className="py-3 px-4 flex items-center cursor-pointer">
                                    <span className="block text-sm font-semibold text-gray-900 dark:text-white mr-2">
                                        Omar Hemedi
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </Dropdown.Trigger>
                            <Dropdown.Content contentClasses='bg-white dark:bg-gray-700'>
                                <div className="text-base list-none divide-y divide-gray-100 dark:divide-gray-600">
                                    <div className="py-3 px-4">
                                        <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                                            Omar Hemedi
                                        </span>
                                        <span className="block text-sm text-gray-900 truncate dark:text-white">
                                            omarhemed800@gmail.com
                                        </span>
                                    </div>
                                    <ul className="py-1 text-gray-700 dark:text-gray-300">
                                        <li>
                                            <Dropdown.Link to="/user/profile">
                                                My profile
                                            </Dropdown.Link>
                                        </li>
                                    </ul>
                                    <ul className="py-1 text-gray-700 dark:text-gray-300">
                                        <li>
                                            <Dropdown.Link to="/login">
                                                Sign out
                                            </Dropdown.Link>
                                        </li>
                                    </ul>
                                </div>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
}

