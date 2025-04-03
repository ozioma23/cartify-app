import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const { continueAsGuest } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Navigating to Login");
    navigate("/LoginPage");
  };

  const handleSignUp = () => {
    console.log("Navigating to Sign Up");
    navigate("/signup");
  };

  const handleGuestAccess = () => {
    if (continueAsGuest) {
      console.log("Continuing as Guest");
      continueAsGuest();
      navigate("/buy");
    } else {
      console.error("UserContext is not available!");
    }
  };

  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-8 md:px-12 lg:px-24 bg-primary text-white">
        <div className="flex flex-col text-left lg:text-left lg:p1-12 w-full lg:w-1/2">
          <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold fade-in-text">
            Welcome to
            <span className="text-blue-400 leading-tight bg-gradient-to-r from-white via-blue-300 to-blue-600 text-transparent bg-clip-text">
              <span className="lg:inline"> Cartify</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mt-4 text-left fade-in-text ">
            <span className="inline lg:hidden">
              Shop from the comfort of <br /> your space
            </span>
            <span className="hidden lg:inline">
              Shop from the comfort of your space
            </span>
          </p>

          <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <button
              onClick={handleLogin}
              className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:bg-blue-300"
            >
              Login
            </button>

            <button
              onClick={handleGuestAccess}
              className="border border-secondary hover:border-blue-300 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg"
            >
              Continue as Guest
            </button>
          </div>

          <p className="pb-10 mt-16 md:mt-24 text-md md:text-xl lg:text-2xl ">
            Don't have an account?
            <span onClick={handleSignUp} className="text-secondary cursor-pointer hover:text-blue-300">
              {" "}
              Sign Up
            </span>
          </p>
        </div>

        <div className="mt-8 lg:mt-0 lg:pb-20 flex justify-center lg:justify-end w-full lg:w-1/2 lg:pr-16 xl:pr-28">
          <img
            src="/Images/Retail markdown.png"
            alt="shopping bag"
            className="h-64 md:h-80 lg:h-96 w-auto shopping"
          />
        </div>
      </div>
      <img
        src="/shapes/irregular1.svg"
        alt="Irregular Shape 1"
        className="absolute top-[-30px] lg:top-[20px] left-0 sm:left-[-15px] w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px] pointer-events-none"
      />

      <img
        src="/shapes/irregular2.svg"
        alt="Irregular Shape 2"
        className="absolute bottom-[-50px] md:bottom-[-20px] right-0 w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] pointer-events-none"
      />
    </>
  );
};

export default LandingPage;