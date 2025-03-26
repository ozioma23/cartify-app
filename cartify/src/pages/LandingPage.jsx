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
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center min-h-screen px-8 md:px-12 lg:px-24 bg-primary text-white">
                <div className="flex flex-col text-center lg:text-left lg:p1-12 w-full lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                        Welcome to
                        <span className="text-blue-400 leading-tight bg-gradient-to-r from-white via-blue-300 to-blue-600 text-transparent bg-clip-text">
                            <span className="lg:inline"> Cartify</span>
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl mt-4">Shop from the comfort of your space</p>

                    <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
    <button onClick={handleLogin} className="bg-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
        Login
    </button>

    <button onClick={handleGuestAccess} className="border border-secondary text-white px-6 py-3 md:px-8 md:py-4 rounded-lg">
        Continue as Guest
    </button>
</div>

                    <p className="pb-10 mt-16 md:mt-24 text-lg md:tet-xl lg:text-2xl">
                        Don't have an account?
                        <span onClick={handleSignUp} className="text-secondary cursor-pointer"> Sign Up</span>
                    </p>
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
                className="absolute top-[-30px] lg:top-[20px] left-0 sm:left-[-15px] w-[300px] h-[250px] sm:w-[400px] sm:h-[350px] md:w-[500px] md:h-[450px] lg:w-[600px] lg:h-[500px]"
            />

            <img
                src="/shapes/irregular2.svg"
                alt="Irregular Shape 2"
                className="absolute bottom-[-50px] md:bottom-[-20px] right-0 w-[300px] h-[250px] sm:w-[350px] sm:h-[300px] md:w-[400px] md:h-[350px] lg:w-[450px] lg:h-[400px]"
            />
        </>
    );
}
export default LandingPage

