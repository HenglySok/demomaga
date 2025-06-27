import { FcGoogle } from "react-icons/fc";
import { useGetLoginMutation } from "../redux/services/authSlice";
import { ErrorMessage, useFormik } from "formik";

export default function SignIn() {
  const [getLogin, { isLoading }] = useGetLoginMutation();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting, setErrors }) => {
      try {
        // Replace with actual API call
        const response = await getLogin(values).unwrap();
        alert("Login successful");
        console.log(response);
      } catch (error) {
        setErrors({ general: error?.data?.message || "Login failed" });
      }
      setSubmitting(false);
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
      <form
        onSubmit={formik.handleSubmit}
        className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75"
      >
        <h2 className="text-2xl font-semibold">Sign in</h2>

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
          className={`w-full bg-primary-100 text-white py-2 rounded-md hover:bg-primary-75 transition-colors ${
            isLoading || formik.isSubmitting ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>

        <div className="flex items-center justify-between">
          <span className="w-full text-sm text-center">OR</span>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 bg-[#FFFFFF30] p-2 rounded-md hover:bg-[#FFFFFF50]"
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
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        <div className="flex items-center gap-2 justify-start text-[12px]">
          <span>New to Read Loop?</span>
          <button type="button" className="hover:underline text-blue-400">
            Sign Up now
          </button>
        </div>
      </form>
    </div>
  );
}
