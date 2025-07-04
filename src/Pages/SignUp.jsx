import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetRegisterMutation } from "../redux/services/authSlice";

export default function SignUp() {
  const [getRegister, { isLoading }] = useGetRegisterMutation();
  const navigate = useNavigate();
  const [createStateSign, setCreateStateSign] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  if (createStateSign.password !== createStateSign.confirmPassword) {
    alert("Passwords don't match!");
    return;
  }

  try {
    const res = await getRegister(createStateSign).unwrap();
    console.log("register success:", res);
    if (res.data.isEmailVerified === false) {
      localStorage.setItem("verifyEmail" , createStateSign.email);
      navigate('/verify_email')
    }

    // Optionally store the email for verification
    ;
  } catch (err) {
    console.error("Registration error:", err);

    if (err?.data?.errorCode === "AUTH_EMAIL_ALREADY_EXISTS") {
      alert("This email is already registered. Try signing in instead.");
      localStorage.setItem("verifyEmail", createStateSign.email);

    alert("Account created! Please verify your email.");
    navigate("/verify_email")
    } else {
      alert(err?.data?.message || "Registration failed. Try again later.");
    }
  }
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
        <h2 className="text-2xl font-semibold cursor-default">Sign Up</h2>

        <div className="flex gap-2 w-full">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={createStateSign.firstName}
            onChange={(e) => {
              setCreateStateSign({
                ...createStateSign,
                firstName: e.target.value,
              });
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={createStateSign.lastName}
            onChange={(e) => {
              setCreateStateSign({
                ...createStateSign,
                lastName: e.target.value,
              });
            }}
            className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={createStateSign.email}
          onChange={(e) => {
            setCreateStateSign({ ...createStateSign, email: e.target.value });
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="password"
          placeholder="Password"
          name="password"
          value={createStateSign.password}
          onChange={(e) => {
            setCreateStateSign({
              ...createStateSign,
              password: e.target.value,
            });
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          minLength="6"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={createStateSign.confirmPassword}
          onChange={(e) => {
            setCreateStateSign({
              ...createStateSign,
              confirmPassword: e.target.value,
            });
          }}
          className="w-full px-4 py-2 border border-gray-300 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          minLength="6"
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary-100 text-white py-2 rounded-md
                    hover:bg-primary-75 transition-colors cursor-pointer
                    disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Signing Up..." : "Sign Up"}
        </button>

        <div className="flex items-center gap-2 justify-start cursor-default">
          <input className="cursor-pointer" type="checkbox" />
          Remember me
        </div>
        <div className="flex items-center gap-2 justify-start text-[12px]">
          <span className="cursor-default">Do you already have an account?</span>
          <span className="text-blue-500 hover:underline cursor-pointer"
            onClick={() => navigate("/sign_in")}>
            Sign In now.
          </span>
        </div>
      </form>
    </div>
  );
}