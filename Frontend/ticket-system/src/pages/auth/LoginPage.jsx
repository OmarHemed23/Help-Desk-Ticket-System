import { useState } from "react";
import { Link } from "react-router-dom";
import Checkbox from "../../components/form/Checkbox";
import Label from "../../components/form/Label";
import TextInput from "../../components/form/TextInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Alert from "../../components/feeback/Alert";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [rememberMe, setRememberMe] = useState(false);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(e.target.value.includes("@"));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordValid(e.target.value.length >= 8);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (rememberMe) {
            localStorage.setItem('rememberedEmail', email);
        } else {
            localStorage.removeItem('rememberedEmail');
        }
        if (emailValid && passwordValid) {
            setAlert({ show: true, type: 'success', message: 'You are logged in' });
            console.log("Email:", email);
            console.log("Password:", password);
            setEmailValid(email.includes("@"));
            setPasswordValid(password.length >= 8);
            // Perform login logic here
        } else {
            // Handle validation errors
            setAlert({ show: true, type: 'error', message: 'Invalid credentials' });
            console.log("Email is invalid");
            console.log("Password is invalid");
        }
    };

    const getInputClassName = (isValid) => {
        if (isValid === null) return "block w-full p-2.5 mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
            return isValid ? "block w-full p-2.5 mt-2 border border-green-500 text-green-500" : "block w-full p-2.5 mt-2 border border-red-500 text-red-500";
    };

    return (
        <>
            <h1 className="text-center text-lg mb-3 text-gray-900 dark:text-white underline font-bold">
                SIGN IN
            </h1>
            {alert.show && <Alert type={alert.type} message={alert.message} />}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Your Work Email
                    </Label>
                    <TextInput
                        type="text"
                        className={getInputClassName(emailValid)}
                        placeholder="yourname@organization.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Your Password
                    </Label>
                    <TextInput
                        type="password"
                        className={getInputClassName(passwordValid)}
                        placeholder="•••••••••"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                        <div className="flex items-center h-5">
                            <Checkbox id="remember-me" name="remember-me" checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)} 
                            />
                        </div>
                        <div className="ml-3 text-sm">
                            <Label className="text-gray-500 dark:text-gray-300">
                                Remember me
                            </Label>
                        </div>
                    </div>
                    <Link to="/forgot-password" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Forgot password?
                    </Link>
                </div>
                <PrimaryButton
                    type="submit"
                    className="px-5 py-2.5"
                >
                    Sign in
                </PrimaryButton>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?  
                    <Link to="/register" className="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign up
                    </Link>
                </p>
            </form>
        </>
    );
}