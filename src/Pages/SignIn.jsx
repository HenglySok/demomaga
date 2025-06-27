import { FcGoogle } from "react-icons/fc";
import { useGetLoginMutation } from "../redux/services/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignIn() {
  const [login, { isLoading }] = useGetLoginMutation();

  const initialValues = {
    email: "",
    password: "",
    remember: false,
  };

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      const response = await login(values).unwrap();
      console.log("Login successful", response);
      // Handle successful login (redirect, store token, etc.)
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({
        general:
          error.data?.message ||
          error.error ||
          "Login failed. Please try again.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[url(src/assets/img/bg-image/backgroup.png)] bg-center bg-cover">
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors }) => (
          <Form className="p-8 rounded shadow-md w-full max-w-sm space-y-4 bg-[#00000050] text-text-75">
            <h2 className="text-2xl font-semibold">Sign in</h2>

            {/* General error message */}
            {errors.general && (
              <div className="text-red-500 text-sm">{errors.general}</div>
            )}

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                onChange={Formik.}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <div>
              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-xs mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading || isSubmitting}
              className={`w-full bg-primary-100 text-white py-2 rounded-md hover:bg-primary-75 transition-colors ${
                isLoading || isSubmitting ? "opacity-70 cursor-not-allowed" : ""
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
              <Field type="checkbox" id="remember" name="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>

            <div className="flex items-center gap-2 justify-start text-[12px]">
              <span>New to Read Loop?</span>
              <button type="button" className="hover:underline text-blue-400">
                Sign Up now
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
