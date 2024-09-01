import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Label from "../../components/form/Label";
import TextInput from "../../components/form/TextInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Alert from "../../components/feeback/Alert";

export default function RegistrationPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [emailValid, setEmailValid] = useState(null);
    const [passwordValid, setPasswordValid] = useState(null);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);

        setEmailValid(e.target.value.includes("@"));
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setPasswordValid(e.target.value.length >= 8);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
        setConfirmPasswordValid(e.target.value === password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

            if (emailValid && passwordValid && confirmPasswordValid) {
                setAlert({ show: true, type: 'success', message: 'Registration was successful. Check your email an OTP has been sent' });
                console.log("Email:", email);
                console.log("Password:", password);
                setEmailValid(email.includes("@"));
                setPasswordValid(password.length >= 8);
                setConfirmPasswordValid(confirmPassword === password && password.length >= 8);
                
                setTimeout(() => {
                    navigate("/register/verify-email");
                }, 3000);
            } else {
                setAlert({ show: true, type: 'error', message: 'Invalid credentials' });
                console.log("Email is invalid");
                console.log("Password is invalid");
            }
    };

    const getInputClassName = (isValid) => {
        if (isValid === null) return "block w-full p-2.5 mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
            return isValid ? "block w-full p-2.5 mt-2 border-2 border-green-500 text-green-500" : "block w-full p-2.5 mt-2 border-2 border-red-500 text-red-500";
    };

    return (
        <>
            <h1 className="text-center text-lg mb-3 text-gray-900 dark:text-white underline font-bold">
                SIGN UP
            </h1>
            {alert.show && <Alert type={alert.type} message={alert.message} />}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Your Work Email
                    </Label>
                    <TextInput
                        type="text"
                        name="email"
                        id="email"
                        className={getInputClassName(emailValid)}
                        placeholder="yourname@organization.com"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Enter Password
                    </Label>
                    <TextInput
                        type="password"
                        name="password"
                        id="password"
                        className={getInputClassName(passwordValid)}
                        placeholder="•••••••••"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Confirm Password
                    </Label>
                    <TextInput
                        type="password"
                        name="confirm-password"
                        id="confirm-password"
                        className={getInputClassName(confirmPasswordValid)}
                        placeholder="•••••••••"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        required
                    />
                </div>
                <PrimaryButton
                    type="submit"
                    className="px-5 py-2.5"
                >
                    Sign up
                </PrimaryButton>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account.  
                    <Link to="/login" className="ml-2 font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Sign in
                    </Link>
                </p>
            </form>
        </>
    );
}