import { useNavigate, useSearchParams } from "react-router"
import { useGetVerifyMutation } from "../../redux/services/authSlice";

function VerifyAccount() {
    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get('code');
    const [getVerifyCode, { isLoading }] = useGetVerifyMutation();
    const navigate = useNavigate();

    const handleVerify = async (e) => {
        e.preventDefault();
        try {
            await getVerifyCode({ code: verificationCode }).unwrap();
            navigate('/sign_in');
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
            <div
                className="max-w-md mx-auto mt-20 p-6 border rounded shadow
                flex flex-col items-center justify-center
         bg-linear-to-t black to-[#00000050] text-text-75"
            >
                <h3 className="text-2xl text-text-100 font-bold">
                    Account confirmation
                </h3>
                <p>To confirm your account, please follow the button below.</p>
                <button
                    onClick={handleVerify}
                    className="bg-primary-100 px-3 py-1 rounded-[5px] font-bold"
                    disabled={isLoading}
                >
                    {isLoading ? 'Verifying...' : 'Confirm account'}
                </button>
            </div>
        </div>
    )
}

export default VerifyAccount