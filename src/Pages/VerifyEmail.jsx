import { useState } from "react";
import {
  useGetResendVerificationMutation,
  useGetVerifyMutation,
} from "../redux/services/authSlice";
import { useNavigate } from "react-router-dom";

export default function VerifyEmail() {
  const [code, setCode] = useState("");
  const verifyEmail = localStorage.getItem("verifyEmail");
  const [getVerify, { isLoading }] = useGetVerifyMutation();
  const [resendVerify, { isLoading: isResending }] = useGetResendVerificationMutation();
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await getVerify({ code }).unwrap();
      console.log(res);
      alert("Email verified!");
      localStorage.removeItem("verifyEmail");
      navigate("/sign_in");
    } catch (error) {
      alert(error?.data?.message || "Verification failed");
    }
  };

  const handleResendVerify = async () => {
    try {
      const response = await resendVerify({ email: verifyEmail }).unwrap();
      console.log(response);
      alert("Verification code resent. Check your email.");
    } catch (error) {
      alert(error?.data?.message || "Failed to resend verification code");
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
      <form
        onSubmit={handleVerify}
        className="max-w-md mx-auto mt-20 p-6 border rounded shadow
         bg-linear-to-t black to-[#00000050] text-text-75"
      >
        <h2 className="text-2xl mb-4 ">Verify Your Email</h2>
        <p className="text-sm mb-4 ">
          We've sent a verification code <span>XXXX </span> to: <strong>{verifyEmail}</strong>
        </p>

        <input
          type="text"
          placeholder="Enter verification code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full p-2 bg-primary-100 text-white rounded mb-2"
        >
          {isLoading ? "Verifying..." : "Verify Email"}
        </button>

        <button
          type="button"
          onClick={handleResendVerify}
          disabled={isResending}
          className="w-full p-2 bg-gray-300 text-black rounded"
        >
          {isResending ? "Resending..." : "Resend Verification Code"}
        </button>
      </form>
    </div>
  );
}