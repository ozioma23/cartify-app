import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { continueAsGuest } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => navigate("/LoginPage");
  const handleSignUp = () => navigate("/signup");

  const handleGuestAccess = () => {
    if (continueAsGuest) {
      continueAsGuest();
      navigate("/buy");
    } else {
      console.error("UserContext is not available!");
    }
  };

  return (
    <div className="min-h-screen w-full overflow-hidden bg-primary text-white flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20">
      {/* Text Section */}
      <div className="flex flex-col w-full lg:w-1/2 text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-white via-blue-300 to-blue-600 text-transparent bg-clip-text">
            Cartify
          </span>
        </h1>

        <p className="text-lg sm:text-xl lg:text-2xl mt-4">
          Shop from the comfort of your space
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button
            onClick={handleLogin}
            className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-blue-300 transition"
          >
            Login
          </button>

          <button
            onClick={handleGuestAccess}
            className="border border-secondary text-white px-6 py-3 rounded-lg hover:border-blue-300 transition"
          >
            Continue as Guest
          </button>
        </div>

        <p className="mt-12 sm:mt-16 text-md sm:text-lg lg:text-xl">
          Don't have an account?{" "}
          <span
            onClick={handleSignUp}
            className="text-secondary hover:text-blue-300 cursor-pointer"
          >
            Sign Up
          </span>
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <img
          src="/Images/Retail markdown.png"
          alt="Shopping"
          className="w-64 sm:w-80 md:w-96 lg:w-[28rem] object-contain"
        />
      </div>
    </div>
  );
};

export default LandingPage;
