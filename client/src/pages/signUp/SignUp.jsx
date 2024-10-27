import {Link, NavLink, useNavigate} from "react-router-dom";
import {FcGoogle} from "react-icons/fc";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import {ImSpinner} from "react-icons/im";
import toast from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();
  const {createUser, setLoading, updateUserProfile, loading, signInWithGoogle} =
    useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const image = form.image.files[0];
    const formData = new FormData();
    formData.append("image", image);

    try {
      // 1. Upload image and get image url
      setLoading(true);
      const {data} = await axios.post(
        `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_API_KEY
        }`,
        formData
      );

      //2. User Registration
      const result = await createUser(email, password);
      console.log(result);

      // 3. Save username and photo in firebase
      await updateUserProfile(name, data.data.display_url);
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  // Google SignIn
  const handleGoogleSignIn = async () => {
    try {
      await await signInWithGoogle();
      navigate("/");
      toast.success("Login Successful");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };

  return (
    <section className="bg-red-50">
      <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <h1 className="text-3xl font-montserrat font-semibold text-center">
            Create an account
          </h1>
          <p className="font-poppins text-lg text-center text-gray-600 mt-4">
            Create your account and fill fill in the form below to get started
          </p>

          <div className="flex items-center justify-center mt-6 ">
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-red-500"
                  : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b"
              }
              to="/signIn"
            >
              sign in
            </NavLink>

            <NavLink
              className={({isActive}) =>
                isActive
                  ? "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-red-500"
                  : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b"
              }
              to="/signUp"
            >
              sign up
            </NavLink>
          </div>

          <div className="relative flex items-center mt-8">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </span>

            <input
              type="text"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-red-400  focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Name"
              name="name"
              required
            />
          </div>

          <label className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
            </svg>

            <h2 className="mx-3 text-gray-400">Profile Photo</h2>

            <input
              id="dropzone-file"
              type="file"
              name="image"
              className="hidden"
            />
          </label>

          <div className="relative flex items-center mt-6">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </span>

            <input
              type="email"
              className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:border-red-400 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              required
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg focus:border-red-400  focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <div className="relative flex items-center mt-4">
            <span className="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 mx-3 text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </span>

            <input
              type="password"
              className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:border-red-400  focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              name="confirmPassword"
            />
          </div>

          <div className="mt-6">
            <button
              disabled={loading}
              className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-500 rounded-lg hover:bg-red-400 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-50"
            >
              {loading ? (
                <ImSpinner className="animate-spin m-auto" />
              ) : (
                "SignUp"
              )}
            </button>
          </div>
        </form>
        <div className="flex items-center pt-4 space-x-1 ">
          <div className="flex-1 h-px sm:w-16 w-full dark:bg-gray-700"></div>
          <p className="px-3 text-sm dark:text-gray-400">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <button
          disabled={loading}
          onClick={handleGoogleSignIn}
          className="flex w-full disabled:cursor-not-allowed justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer"
        >
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className="px-6 text-sm text-center text-gray-400">
          Already have an account?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-rose-500 text-gray-600"
          >
            Login
          </Link>
          .
        </p>
      </div>
    </section>
  );
};

export default SignUp;
