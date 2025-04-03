import { Eye, EyeOff } from "lucide-react";
import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { loginUser, continueAsGuest } = useContext(UserContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("cartifyUser"));
  
    if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
      setError("Invalid email or password.");
      return;
    }
  
    const userData = { email, password };
    loginUser(userData);
    navigate("/buy");
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
        <div className="flex flex-col text-center lg:text-left lg:p1-12 w-full lg:w-1/2">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mt-4 lg:mt-20 lg:mb-4 text-left">
            Login to your <br />
            <span className="text-blue-400 leading-loose bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
              <span> Cartify account</span>
            </span>
          </h1>
          <div>
            <div className="">
              <img
                src="/shapes/irregular1.svg"
                alt="Irregular Shape 1"
                className="absolute top-[-30px] lg:top-[20px] left-0 sm:left-[-15px] w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px] pointer-events-none"
              />

              <img
                src="/shapes/irregular2.svg"
                alt="Irregular Shape 2"
                className="absolute bottom-[-200px] md:bottom-[-20px] right-0 w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px] pointer-events-none"
              />
            </div>
            <div className="flex flex-col space-y-4 mb-8">
              {error && <p className="text-red-500 text-sm">{error}</p>}

              <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                <div className="relative w-full">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="border border-blue-500 px-4 py-2 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-black"
                  />
                </div>
                <div className="relative w-full">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="border border-blue-500 px-4 py-2 mb-8 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400 w-full text-black pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="mb-8 absolute inset-y-0 right-5 flex items-center text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="mt-10 flex flex-col space-y-4">
                  <button
                    className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg hover:blue-600"
                    type="submit"
                  >
                    Login
                  </button>

                  <button
                    onClick={handleGuestAccess}
                    className="border border-secondary text-white px-8 py-4 rounded-lg hover:border-blue-300"
                  >
                    Continue as Guest
                  </button>
                </div>
              </form>
            </div>

            <p className="mt-0 text-center pb-10 mt-16 lg:mt-4 text-md md:text-lg lg:text-xl ">
              Don't have an account?
              <span onClick={handleSignUp} className="text-secondary cursor-pointer hover:text-blue-300 ">
                {" "}
                Sign Up
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:pb-20 flex justify-center lg:justify-end w-full lg:w-1/2 lg:pr-16 xl:pr-28">
          <img
            src="/Images/Retail markdown.png"
            alt="shopping bag"
            className="h-64 md:h-80 lg:h-96 w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;