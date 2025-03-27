import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { loginUser, continueAsGuest } = useContext(UserContext);
    const navigate = useNavigate();

    // State for email, password, and error messages
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        const userData = { email };
        loginUser(userData);
        localStorage.setItem("cartifyUser", JSON.stringify(userData));
        navigate("/HomePage");
    };

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
            navigate("/HomePage");
        } else {
            console.error("UserContext is not available!");
        }
    };

    return (
        <>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-8 md:px-12 lg:px-24 bg-primary text-white">
                <div className="flex flex-col text-center lg:text-left lg:p1-12 w-full lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Login to your
                        <span className="text-blue-400 leading-tight bg-gradient-to-r from-white via-blue-400 to-blue-600 text-transparent bg-clip-text">
                            <span className="lg:inline"> Cartify account</span>
                        </span>
                    </h1>
                    <div>
                        <div className="border borser-secondary mt-6 flex-col space-y-4">
                            <form onSubmit={handleSubmit}>
                                <div >
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </form>
                        </div>

                        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
                            <button onClick={handleLogin} className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
                                Login
                            </button>

                            <button onClick={handleGuestAccess} className="border border-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
                                Continue as Guest
                            </button>
                        </div>

                        <p className="pb-10 mt-16 md:mt-24 text-lg md:text-xl lg:text-2xl">
                            Don't have an account?
                            <span onClick={handleSignUp} className="text-secondary cursor-pointer"> Sign Up</span>
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

export default LoginPage;