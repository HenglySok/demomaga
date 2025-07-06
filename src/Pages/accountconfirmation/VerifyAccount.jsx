import { useNavigate, useSearchParams } from "react-router";
import { useGetVerifyMutation } from "../../redux/services/authSlice";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";

function VerifyAccount() {
    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get('code');
    const [getVerifyCode, { isLoading }] = useGetVerifyMutation();
    const [isVerifySuccess, setIsVerifySuccess] = useState(null);
    const [errorTokenExpired, setErrorTokenExpired] = useState(false);
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        if (!verificationCode) {
            toast.error('Verification code is missing.');
            return;
        }

        try {
            await getVerifyCode({ code: verificationCode }).unwrap();
            localStorage.setItem("isVerifySuccess", "true"); // ✅ Store flag
            navigate("/sign_in"); // ✅ Go to login page
        } catch (e) {
            console.log(e);
            if (e.data.message === "Invalid or expired verification code") {
                setErrorTokenExpired(true);
                console.log("error expire handle")
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
            <div className="flex flex-col items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
                <div className="max-w-md mx-auto mt-20 p-6 border rounded shadow flex flex-col items-center justify-center bg-linear-to-t black to-[#00000050] text-text-75">
                    <h3 className="text-2xl text-text-100 font-bold">
                        Account confirmation
                    </h3>
                    <p className="text-center mb-4">To confirm your account, please follow the button below.</p>
                    <button
                        onClick={handleVerify}
                        className={`bg-primary-100 px-3 py-1 rounded-[5px] font-bold ${isLoading || !verificationCode ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        disabled={isLoading || !verificationCode}
                    >
                        {isLoading ? 'Verifying...' : 'Confirm account'}
                    </button>
                </div>
                {
                    errorTokenExpired &&
                    <div className="flex flex-col gap-3 bg-amber-200">
                        <h3>Expired Verify</h3>
                        <p>please verify again</p>
                        <button>
                            Verify Again
                        </button>
                    </div>
                }
            </div>
        </>
    );
}

export default VerifyAccount;
