import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useGetResetPasswordMutation } from '../../redux/services/authSlice';

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const verificationCode = searchParams.get('code');
  const [password, setPassword] = useState('');
  const [getResetPassword, { isLoading }] = useGetResetPasswordMutation();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!password || password.length < 6) {
      return alert("Password must be at least 6 characters.");
    }

    try {
      const res = await getResetPassword({
        password,
        verificationCode
      }).unwrap();

      alert(res.message || "Reset password successful.");
      navigate('/sign_in');
    } catch (e) {
      console.error("Reset failed:" + e);
      alert(e?.data?.message || "Failed to reset password");
    }
  }


  return (
    <div className='flex flex-col items-center justify-center min-h-screen 
            bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover'>
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75 flex flex-col"
      >
        <h2 className='text-2xl font-semibold cursor-default'>Reset Password</h2>
        <p>Please input a new password below.</p>
        <input
          className='border border-text-75 p-2 rounded-[5px]'
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='New password'
          name='password'
          id='password'
          value={password}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-100 text-white py-2 rounded-md
                    hover:bg-primary-75 transition-colors cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ResetPassword;
