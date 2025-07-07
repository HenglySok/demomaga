import { useNavigate, useSearchParams } from "react-router";
import { useGetVerifyMutation, useGetResendVerificationMutation } from "../../../redux/services/authSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { FaTimesCircle } from "react-icons/fa";

function VerifyAccount() {
    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get('code');
    const [getVerifyCode, { isLoading }] = useGetVerifyMutation();
    const [getResendVerify, { isLoading: resendLonging }] = useGetResendVerificationMutation();
    const [isVerifySuccess, setIsVerifySuccess] = useState(null);
    const [errorTokenExpired, setErrorTokenExpired] = useState(false);
    const navigate = useNavigate();
    const verifyEmail = localStorage.getItem("email");

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!verificationCode) {
            toast.error('Verification code is missing.');
            return;
        }

        try {
            await getVerifyCode({ code: verificationCode }).unwrap();
            localStorage.setItem("isVerifySuccess", "true");
            navigate("/sign_in");
        } catch (e) {
            console.log(e);
            if (e.data.message === "Invalid or expired verification code") {
                setErrorTokenExpired(true);
                console.log("error expire handle")
            }
            toast.error("Verification failed. Please try again.");
        }
    };

    const handleResendVerify = async (e) => {
        e.preventDefault();

        try {
            await getResendVerify({ email: verifyEmail }).unwrap();
            localStorage.setItem("isVerifySuccess", "true");
            window.open("https://mail.google.com/mail/u/0/#all", "_blank");
        } catch (e) {
            console.log(e);
            if (e.data.message === "user not found") {
                alert("User not found!");
                navigate('.././sign_up');
            }
            toast.error("Verification failed. Please try again.");
        }
    };


    useEffect(() => {
        if (!verificationCode) {
            toast.error('No verification code provided.');
        }
    }, [verificationCode]);

    useEffect(() => {
        if (isVerifySuccess === true) {
            const timer = setTimeout(() => {
                navigate('/sign_in');
            }, 2000); // Delay to allow toast to display
            return () => clearTimeout(timer);
        }
    }, [isVerifySuccess, navigate]);

    return (
        <>
            <Toaster position="top-center" />
            {
                !errorTokenExpired ?
                    <div className="flex gap-3 flex-col items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
                        <div className="max-w-md mx-auto p-6 border rounded shadow flex flex-col items-center justify-center bg-linear-to-t black to-[#00000050] text-text-75">
                            <h3 className="text-2xl text-text-100 font-bold">
                                Account confirmation
                            </h3>
                            <p className="text-center mb-4">To confirm your account, please follow the button below.</p>
                            <div
                                className="flex gap-3"
                            >
                                <button
                                    onClick={handleVerify}
                                    className={`bg-primary-100 px-3 py-1 rounded-[5px] font-bold 
                            ${isLoading || !verificationCode ? 'opacity-50 cursor-not-allowed' : ''
                                        }
                            hover:bg-primary-75 cursor-pointer`}
                                    disabled={isLoading || !verificationCode}
                                >
                                    {isLoading ? 'Verifying...' : 'Confirm account'}
                                </button>
                            </div>
                        </div>
                    </div> :
                    <div className="flex gap-3 flex-col items-center justify-center min-h-screen
                     bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover
                      duration-700 ease-in-out
                     ">
                        <div className="max-w-md mx-auto p-6 border rounded shadow flex flex-col items-center justify-center bg-linear-to-t black to-[#00000050] text-text-75">
                            <h3 className="text-2xl text-primary-100 font-bold flex gap-3 items-center bg-[#33333350]">
                                <FaTimesCircle color="text-primary-100" />
                                Failed Account confirmation
                            </h3>
                            <p className="text-center mb-4">To confirm your account, please follow the button below.</p>
                            <div
                                className="flex gap-3"
                            >
                                <button
                                    onClick={handleResendVerify}
                                    className="bg-[#00000050] text-text-100 border border-secondary-100
                     px-3 py-1 rounded-[5px]
                     hover:bg-black cursor-pointer"
                                >
                                    {
                                        resendLonging ? "Verify Again..." : "Verify Again"
                                    }
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
}

export default VerifyAccount;
