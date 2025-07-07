import { useState } from 'react'
import { useGetFogotPasswordMutation } from '../../redux/services/authSlice';
import { toast } from 'react-toastify';

export default function ForgotPassworld() {
    const [getForgotPassword, { isLoading }] = useGetFogotPasswordMutation();
    const [inputEmail, setInputEmail] = useState();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await getForgotPassword({ email: inputEmail }).unwrap();
            toast.success("Email exits you resetpassword");

        } catch (e) {
            console.log("erorr is " + e);
        }
    }

    return (
        <div
            className='flex items-center justify-center min-h-screen 
        bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover'
        >
            <form
                className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75 flex flex-col"
            >
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
                        "Submit" : "Submit..."
                    }
                </button>
            </form>
        </div>
    )
}
