import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function SignIn() {
  const [stateSignIn, setStateSignIn] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(stateSignIn);
    // Add authentication logic here
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen
        bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover"
    >
      <form
        onSubmit={handleSubmit}
        className="p-8 rounded shadow-md w-full max-w-sm space-y-4
                bg-[#00000050] text-text-75"
      >
        <h2 className="text-2xl font-semibold ">Sign in</h2>

        <div>
          <input
            type="text"
            placeholder="Email or phone number"
            value={stateSignIn.username}
            onChange={(e) => {
              setStateSignIn({ ...stateSignIn, username: e.target.value });
            }}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={stateSignIn.password}
            onChange={(e) =>
              setStateSignIn({ ...stateSignIn, password: e.target.value })
            }
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary-100 text-white py-2 rounded-md
                    hover:bg-primary-75 transition-colors"
        >
          Sign In
        </button>

        <div className="flex items-center justify-between">
          <span className="w-full text-sm text-center">OR</span>
        </div>

        <button
          className="w-full flex items-center justify-center
                gap-2 bg-[#FFFFFF30] p-2 rounded-md hover:bg-[#FFFFFF50]"
        >
          Sign In With Google
          <FcGoogle />
        </button>

        <div className="w-full flex justify-center">
          <span className="text-sm text-center w-fit hover:cursor-pointer">
            Forgot password?
          </span>
        </div>

        <div className="flex items-center gap-2 justify-start">
          <input type="checkbox" />
          Remember me
        </div>

        <div className="flex items-center gap-2 justify-start text-[12px]">
          <span>New to Read Loop?</span>
          <span>Sign Up now.</span>
        </div>
      </form>
    </div>
  );
}
