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
        <div className="flex items-center justify-center h-screen bg-primary text-white text-left ">
            <div>
                <h1 className="text-6xl font-bold mt-16">Welcome to
                    <span className="text-blue-400 leading-tight bg-gradient-to-r from-white via-blue-300 to-blue-600 text-transparent bg-clip-text"><br />Cartify</span></h1>
                <p className="text-2xl leading-loose">Shop from the comfort of your space</p>

                <div className="mt-6">
                    <button onClick={handleLogin} className="bg-secondary text-white px-8 py-4 rounded-lg mr-4">Login</button>

                    <button onClick={handleGuestAccess} className="border border-secondary text-white px-8 py-4 rounded-lg"> Continue as Guest</button>
                </div>
                <p className="mt-32 text-2xl">Don't have an account?<span onClick={handleSignUp} className="text-secondary" > Sign Up</span></p>

            </div>
            <div className="flex mt-4">
                <img src="/Images/Retail markdown.png" alt="shopping bag" className="h-96 w-146 px-16" />
            </div>
        </div>
    )
}
export default LandingPage

