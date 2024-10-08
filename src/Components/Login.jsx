import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, googleSingIn } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const pass = form.pass.value;
    signInUser(email, pass)
      .then((result) => {
        toast.success("User Logged in successfully");
        form.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const googleSign = () => {
    googleSingIn()
      .then((result) => {
        toast.success("Sign In successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="my-20">
      <div className="w-full max-w-lg p-6 m-auto mx-auto bg-white rounded-lg shadow-md ">
        <div className="flex justify-center pt-4 mx-auto">
          <h1 className="font-potta text-xl lg:text-4xl">
            Shopping<span className="text-yellow-300">Portal</span>
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="mt-6">
          <div>
            <label className="block ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="block w-full px-4 py-2 mt-2 border-black border-2 rounded-lg focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mt-4">
            <label className="block ">Password</label>
            <input
              type="password"
              name="pass"
              placeholder="Enter your password"
              className="block w-full px-4 py-2 mt-2 border-black border-2 rounded-lg focus:border-yellow-400 dark:focus:border-yellow-400 focus:ring-yellow-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-yellow-400 rounded-lg focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
            >
              Sign In
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

          <a className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">
            or login with Social Media
          </a>

          <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
        </div>

        <div className="flex items-center mt-6 -mx-2">
          <button
            onClick={googleSign}
            type="button"
            className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-yellow-500 rounded-lg focus:bg-blue-400 focus:outline-none"
          >
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>

            <span className="hidden mx-2 sm:inline">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-xs font-light text-center text-gray-400">
          Don't have an account?
          <Link to={"/register"} className="font-medium  hover:underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
