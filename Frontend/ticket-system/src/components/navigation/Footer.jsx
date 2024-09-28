import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-white border-t border-gray-200 shadow p-2 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024
                    <Link to="https://flowbite.com/" className="hover:underline ml-3">
                        Omar Hemedi
                    </Link>
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link to="https://github.com/OmarHemed23/" className="hover:underline me-4 md:me-6">
                            Github
                        </Link>
                    </li>
                    <li>
                        <Link to="#" className="hover:underline me-4 md:me-6">
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </div>
        </footer>
    );
}