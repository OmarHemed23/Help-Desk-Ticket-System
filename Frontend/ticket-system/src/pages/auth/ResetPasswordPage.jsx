import { useState } from "react";
import { Link } from "react-router-dom";
import Label from "../../components/form/Label";
import TextInput from "../../components/form/TextInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Alert from "../../components/feeback/Alert";

export default function ResetPasswordPage() {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [emailValid, setEmailValid] = useState(null);
    const [otpValid, setOtpValid] = useState(null);
    const [newPasswordValid, setNewPasswordValid] = useState(null);
    const [confirmNewPasswordValid, setConfirmNewPasswordValid] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const [step, setStep] = useState(1);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setEmailValid(e.target.value.includes("@"));
    };

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        setOtpValid(e.target.value.length === 6);
    };

    const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        setNewPasswordValid(e.target.value.length >= 8);
    };

    const handleConfirmNewPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
        setConfirmNewPasswordValid(e.target.value === newPassword);
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (emailValid) {
            setAlert({ show: true, type: 'success', message: 'OTP sent successfully. Check your email.' });
            setStep(2);
        } else {
            setAlert({ show: true, type: 'error', message: 'Invalid email address' });
        }
    };

    const handleResetPasswordSubmit = (e) => {
        e.preventDefault();
        if (otpValid && newPasswordValid && confirmNewPasswordValid) {
            setAlert({
                show: true,
                type: 'success',
                message: (
                    <>
                        Your password has been reset successfully. Click here to{' '}
                        <Link className="underline" to="/login">
                            log in
                        </Link>.
                    </>
                ),
            });
            console.log("Email:", email);
            console.log("Password:", newPassword);
        } else {
            setAlert({ show: true, type: 'error', message: 'Invalid credentials' });
        }
    };

    const getInputClassName = (isValid) => {
        if (isValid === null)
            return "block w-full p-2.5 mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
        return isValid
            ? "block w-full p-2.5 mt-2 border-2 border-green-500 text-green-500"
            : "block w-full p-2.5 mt-2 border-2 border-red-500 text-red-500";
    };

    return (
        <>
            <h1 className="text-center text-lg mb-3 text-gray-900 dark:text-white underline font-bold">
                {step === 1 ? "Verify Your Email" : "Reset Password"}
            </h1>
            {alert.show && <Alert type={alert.type} message={alert.message} />}
            {step === 1 ? (
                <form className="space-y-4 md:space-y-6" onSubmit={handleEmailSubmit}>
                    <div>
                        <Label className="text-gray-900 dark:text-white">
                            Enter your user account's verified email address, and we will send you an OTP.
                        </Label>
                        <TextInput
                            type="email"
                            name="email"
                            id="email"
                            className={getInputClassName(emailValid)}
                            placeholder="yourname@organization.com"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                    </div>
                    <PrimaryButton type="submit" className="px-5 py-2.5">
                        Verify Email
                    </PrimaryButton>
                </form>
            ) : (
                <form className="space-y-4 md:space-y-6" onSubmit={handleResetPasswordSubmit}>
                    <div>
                        <Label className="text-gray-900 dark:text-white">Enter OTP</Label>
                        <TextInput
                            type="text"
                            name="otp"
                            id="otp"
                            className={getInputClassName(otpValid)}
                            placeholder="123456"
                            value={otp}
                            onChange={handleOtpChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 dark:text-white">New Password</Label>
                        <TextInput
                            type="password"
                            name="password"
                            id="password"
                            className={getInputClassName(newPasswordValid)}
                            placeholder="•••••••••"
                            value={newPassword}
                            onChange={handleNewPasswordChange}
                            required
                        />
                    </div>
                    <div>
                        <Label className="text-gray-900 dark:text-white">Confirm Password</Label>
                        <TextInput
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            className={getInputClassName(confirmNewPasswordValid)}
                            placeholder="•••••••••"
                            value={confirmNewPassword}
                            onChange={handleConfirmNewPasswordChange}
                            required
                        />
                    </div>
                    <PrimaryButton type="submit" className="px-5 py-2.5">
                        Reset Password
                    </PrimaryButton>
                </form>
            )}
        </>
    );
}
