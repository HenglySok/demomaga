import { useState } from 'react'
import { useGetFogotPasswordMutation } from '../../redux/services/authSlice';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';


export default function ForgotPassworld() {

    const [getForgotPassword, { isLoading }] = useGetFogotPasswordMutation();
    const [inputEmail, setInputEmail] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await getForgotPassword({ email: inputEmail }).unwrap();
            toast.success("Email exits you resetpassword");
            window.open("https://mail.google.com/mail/u/0/#all", "_blank");
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <div
            className='flex items-center justify-center min-h-screen 
        bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover'
        >
            <Toaster />
            <form
                className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75 flex flex-col"
            >
                <h2 className='text-2xl font-semibold cursor-default'>Forgot Password</h2>
                <p>please click button submit to reset password</p>
                <input
                    className='border border-text-75 p-2 rounded-[5px]'
                    onChange={(e) => setInputEmail(e.target.value)}
                    type="email"
                    placeholder='enter you email to reset password'
                    name='email'
                    id='email'
                />

                <button
                    onClick={handleSubmit}
                    className="w-full bg-primary-100 text-white py-2 rounded-md
                    hover:bg-primary-75 transition-colors cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ?
                        "Submit..." : "Submit"
                    }
                </button>
            </form>
        </div>
    )
}
