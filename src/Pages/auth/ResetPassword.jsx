import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router';
import { useGetResetPasswordMutation } from '../../redux/services/authSlice';

function ResetPassword() {

    const [searchParams] = useSearchParams();
    const verificationCode = searchParams.get('code');
    const [newPassword, setNewPassword] = useState();
    const [getResetPassword, { isLoading }] = useGetResetPasswordMutation();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            await getResetPassword({ newPassword: newPassword, verificationCode: verificationCode }).unwrap()
            alert("reset password seccessful");
            navigate('/sign_in');
        } catch (e) {
            console.log(e.message);
        }
    }
    return (
        <div
            className='flex flex-col items-center justify-center min-h-screen 
            bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover'
        >
            <form
                className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75 flex flex-col"
            >
                <h2 className='font-bold'>Reset Password</h2>
                <p>please input new password below.</p>
                <input
                    className='border border-text-75 p-2 rounded-[5px]'
                    onChange={(e) => setNewPassword(e.target.value)}
                    type="password"
                    placeholder='new password'
                    name='password'
                    id='password'
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

export default ResetPassword