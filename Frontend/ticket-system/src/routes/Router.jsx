import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import GuestLayout from "../layout/GuestLayout";
import ForgotPasswordPage from "../pages/auth/ForgotPasswordPage";
import NotFoundPage from "../pages/errors/NotFoundPage";

const Router = createBrowserRouter([
    {
        path: "*",
        element: <NotFoundPage />,
    },
    {
        path: "/login",
        element: <GuestLayout />,
        children: [
            { path: "", element: <LoginPage /> },
        ],
    },
    {
        path: "/register",
        element: <GuestLayout />,
        children: [
            { path: "", element: <RegistrationPage /> },
        ],
    },
    {
        path: "/forgot-password",
        element: <GuestLayout />,
        children: [
            { path: "", element: <ForgotPasswordPage /> },
        ],
    },
]);

export default Router;
