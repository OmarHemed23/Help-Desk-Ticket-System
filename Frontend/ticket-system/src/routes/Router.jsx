import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import RegistrationPage from "../pages/auth/RegistrationPage";
import GuestLayout from "../layout/GuestLayout";
import NotFoundPage from "../pages/errors/NotFoundPage";
import ResetPasswordPage from "../pages/auth/ResetPasswordPage";
import OtpPage from "../pages/auth/OtpPage";

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
            { path: "verify-email", element: <OtpPage /> },
        ],
    },
    {
        path: "/reset-password",
        element: <GuestLayout />,
        children: [
            { path: "", element: <ResetPasswordPage /> },
        ],
    },
]);

export default Router;
