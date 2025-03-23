import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
    const { continueAsGuest } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogin = () => navigate("/login");
    const handleSignUp = () => navigate("/signup");
    const handleGuestAccess = () => {
        continueAsGuest();
        navigate("/home");
    };
        return (
            <>
            <div className="flex items-center justify-between h-screen px-16 bg-primary text-white">
                <div className="flex flex-col text-left pl-12">
                    <h1 className="text-6xl font-bold">
                        Welcome to
                        <span className="text-blue-400 leading-tight bg-gradient-to-r from-white via-blue-300 to-blue-600 text-transparent bg-clip-text">
                            <br /> Cartify
                        </span>
                    </h1>
                    <p className="text-2xl mt-4">Shop from the comfort of your space</p>
    
                    <div className="mt-6 flex space-x-4">
                        <button onClick={handleLogin} className="bg-secondary text-white px-8 py-4 rounded-lg">
                            Login
                        </button>
    
                        <button onClick={handleGuestAccess} className="border border-secondary text-white px-8 py-4 rounded-lg">
                            Continue as Guest
                        </button>
                    </div>
    
                    <p className="mt-28 text-2xl">
                        Don't have an account?
                        <span onClick={handleSignUp} className="text-secondary cursor-pointer"> Sign Up</span>
                    </p>
                </div>

                <div className="pr-24">
                    <img src="/Images/Retail markdown.png" alt="shopping bag" className="h-96 w-auto" />
                </div>
            </div>
            <img
            src="/shapes/irregular1.svg"
            alt="Irregular Shape 1"
            className="absolute top-[30px] left-[-15px] w-[600px] h-[500px]"
          />
          <img
            src="/shapes/irregular2.svg"
            alt="Irregular Shape 2"
            className="absolute bottom-[-30px] right-[10px] w-[400px] h-[300px]"
          />
          </>
        );
    }
export default LandingPage

