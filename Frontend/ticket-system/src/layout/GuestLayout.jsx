import { Link,Outlet } from "react-router-dom";
import Logo from "../images/logo.jpg";

export default function GuestLayout() {
    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
                <div>
                    <Link to="/">
                        <img src={Logo} className="w-20 h-20"/>
                    </Link>
                </div>
                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}