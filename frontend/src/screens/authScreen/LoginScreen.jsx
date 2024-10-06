import CommonForm from "../../components/common/CommonForm";
import { loginFormControls } from "../../constant";
import { loginUser } from "../../store/authScreenSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.error) {
        toast.error("Your account is blocked. Please contact support");
      }
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
      }
      if (data?.payload?.success === false) {
        toast.error(data?.payload?.message);
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        <p className="mt-2">
          Don't have an account?
          <Link
            className="font-medium ml-2 text-primary hover:underline underline"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Sign In"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <div className="mb-4 flex items-center justify-between">
        <div>
          <input
            type="checkbox"
            id="remember"
            className="form-check-input h-4 w-4 text-indigo-600"
          />
          <label
            htmlFor="remember"
            className="ml-2 text-gray-700 font-semibold"
          >
            Remember Me
          </label>
        </div>
        <Link to="/forget-password" className="underline">
          Forget Password?
        </Link>
      </div>
    </div>
  );
}

export default AuthLogin;
