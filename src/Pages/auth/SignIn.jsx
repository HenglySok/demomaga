import { FcGoogle } from "react-icons/fc";
import { useGetLoginMutation } from "../../redux/services/authSlice";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import * as Yup from "yup";
import { FaCheckCircle } from "react-icons/fa";


export default function SignIn() {
  const [getLogin, { isLoading }] = useGetLoginMutation();
  const [userOfData, setUserOfData] = useState(null);
  const navigate = useNavigate();
  const [isVerifySuccess, setIsVerifySuccess] = useState(false);

  useEffect(() => {
    const VerifySuccess = localStorage.getItem("isVerifySuccess");
    if (VerifySuccess === "true") {
      setIsVerifySuccess(true)
      toast.success("Account verified successfully!");
      localStorage.removeItem("isVerifySuccess");

    }
  }, []);



  // Check verification success on component mount
  // useEffect(() => {
  //   const isVerifySuccess = localStorage.getItem("isVerifySuccess");
  //   if (isVerifySuccess === "true") {
  //     toast.success('Account verified successfully!');

  //   }
  // }, []);

  // Form validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        const response = await getLogin(values).unwrap();

        if (response?.data) {
          localStorage.setItem("accesstoken", response.data.tokens.accessToken);
          localStorage.setItem("refreshToken", response.data.tokens.refreshToken);
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setUserOfData(response.data.user);
          toast.success("Login successful");
        }
      } catch (error) {
        console.error("Login error:", error);

        if (error?.data?.errorCode === "AUTH_EMAIL_NOT_VERIFIED") {
          localStorage.setItem("verifyEmail", values.email);
          navigate("/message_comfirm");
        } else {
          const errorMessage = error?.data?.message || "Login failed. Please try again.";
          setErrors({ general: errorMessage });
          toast.error(errorMessage);
        }
      } finally {
        setSubmitting(false);
      }
    },
  });

  // Redirect if user is already logged in
  useEffect(() => {
    if (userOfData) {
      navigate("/");
    }
  }, [userOfData, navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
      <Toaster position="top-center" />
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
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formik.touched.email && formik.errors.email
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
              }`}
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
            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${formik.touched.password && formik.errors.password
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500"
              }`}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || formik.isSubmitting}
          className={`w-full bg-primary-100 text-white py-2 rounded-md hover:bg-primary-75 transition-colors ${isLoading || formik.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        <div className="flex items-center justify-between">
          <span className="w-full text-sm text-center cursor-default">OR</span>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-[#FFFFFF30] p-2 rounded-md hover:bg-[#FFFFFF50] cursor-pointer"
        >
          Sign In With Google
          <FcGoogle />
        </button>

        <div className="w-full flex justify-center">
          <button
            type="button"
            onClick={() => navigate('/forgot-password')}
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
      {isVerifySuccess &&
        <h3 className="flex absolute bg-white
   justify-center items-center gap-2
  rounded-[5px] bottom-25 right-70 px-4 py-1">
          <FaCheckCircle color="#228B22" />
          Email is Verified
        </h3>
      }

    </div>
  );
}