import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Label from "../../components/form/Label";
import TextInput from "../../components/form/TextInput";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Alert from "../../components/feeback/Alert";

export default function OtpPage() {
    const [otp, setOtp] = useState("");
    const [otpValid, setOtpValid] = useState(null);
    const [alert, setAlert] = useState({ show: false, type: '', message: '' });
    const navigate = useNavigate();

    const handleOtpChange = (e) => {
        setOtp(e.target.value);
        setOtpValid(e.target.value.length === 6);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (otpValid) {
            setAlert({ show: true, type: 'success', message: 'Email verified' });
            console.log("Otp:", otp);
            
            setTimeout(() => {
                navigate("/login");
            }, 3000);
        } else {
            setAlert({ show: true, type: 'error', message: 'Invalid email' });
            console.log("Email is invalid");
        }
    };

    const getInputClassName = (isValid) => {
        if (isValid === null) return "block w-full p-2.5 mt-2 bg-gray-50 border border-gray-300 text-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white";
            return isValid ? "block w-full p-2.5 mt-2 border-2 border-green-500 text-green-500" : "block w-full p-2.5 mt-2 border-2 border-red-500 text-red-500";
    };

    return (
        <>
            <h1 className="text-center text-lg mb-3 text-gray-900 dark:text-white underline font-bold">
                Enter OTP
            </h1>
            {alert.show && <Alert type={alert.type} message={alert.message} />}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                    <Label className="text-gray-900 dark:text-white">
                        Enter OTP sent to your email
                    </Label>
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
                <PrimaryButton
                    type="submit"
                    className="px-5 py-2.5"
                >
                    Verify
                </PrimaryButton>
            </form>
        </>
    );
}