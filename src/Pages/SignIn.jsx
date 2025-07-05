import { FcGoogle } from "react-icons/fc";
import { useGetLoginMutation } from "../redux/services/authSlice";
import { ErrorMessage, useFormik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignIn() {
  const [getLogin, { isLoading }] = useGetLoginMutation();
  const [userOfData, setUserOfData] = useState();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // Replace it with actual API call
        const response = await getLogin(values).unwrap();
        console.log(response);
        alert("Login successful");

        if (response) {
          localStorage.setItem("accesstoken", response?.data.tokens.accessToken);
          localStorage.setItem("refreshToken", response?.data.tokens.refreshToken);
          localStorage.setItem("user", JSON.stringify(response?.data.user));
          setUserOfData(response?.data.user);
        }
        console.log(response);
      } catch (error) {
        setErrors({ general: error?.data?.message || "Login failed" });

        if (error?.data?.errorCode === "AUTH_EMAIL_NOT_VERIFIED") {
          localStorage.setItem("verifyEmail", values.email);
          navigate("/verify_email");
        } else {
          setErrors({ general: error?.data?.message || "Login failed" });
        }

      }
      setSubmitting(false);
    },
  });

  // if (userOfData) {
  //   return (
  //     <>
  //       <div className="flex items-center justify-center h-full w-full text-text-100 text-[24px] font-bold cursor-default">
  //         You are login.
  //       </div>

  //       <button
  //         onClick={()=>{
  //           localStorage.removeItem("token");
  //           setUserOfData(null);
  //         }}
  //       className="p-3 bg-primary-100 text-white rounded-md hover:bg-primary-75 transition-colors cursor-pointer"
  //       >
  //         logout
  //       </button>
  //     </>
  //   )
  // }
  if (userOfData) {
    navigate("/");
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
      <form
        onSubmit={formik.handleSubmit}
        className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75"
      >
        <h2 className="text-2xl font-semibold cursor-default">Sign in</h2>

        {formik.errors.general && (
          <div className="text-red-500 text-sm">{formik.errors.general}</div>
        )}

        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
          )}
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || formik.isSubmitting}
          className={`w-full bg-primary-100 text-white py-2 rounded-md hover:bg-primary-75 transition-colors
           cursor-pointer${isLoading || formik.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        <div className="flex items-center justify-between">
          <span className="w-full text-sm text-center cursor-default">OR</span>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-[#FFFFFF30] p-2 rounded-md hover:bg-[#FFFFFF50]
          cursor-pointer
          "
        >
          Sign In With Google
          <FcGoogle />
        </button>

        <div className="w-full flex justify-center">
          <button
            type="button"
            className="text-sm text-center w-fit hover:cursor-pointer hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <div className="flex items-center gap-2 justify-start">
          <input className="cursor-pointer" type="checkbox" id="remember" name="remember" />
          <label className="cursor-default" htmlFor="remember">Remember me</label>
        </div>

        <div className="flex items-center gap-2 justify-start text-[12px]">
          <span className="cursor-default">New to Read Loop?</span>
          <button
            onClick={() => navigate('/sign_up')}
            type="button" className="hover:underline text-blue-400 cursor-pointer">
            Sign Up now
          </button>
        </div>
      </form>
    </div>
  );
}
