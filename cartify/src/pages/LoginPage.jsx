import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const { loginUser } = useContext(UserContext);
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    

    return (
        <>
            <div>
                <h1>Login to your Cartify account</h1>
                <form>
                    <div>
                        <input type="email" value={email}></input>
                    </div>
                    <div>
                        <input type="password" value={password}></input>
                    </div>
                    <button type="submit">Login</button>
                </form>

                <button type="submit">Continue as guest</button>
                <p className="pb-10 mt-16 md:mt-24 text-lg md:tet-xl lg:text-2xl">
                    Don't have an account?
                    <span  className="text-secondary cursor-pointer"> Sign Up</span>
                </p>
            </div>

        </>
    )
}
export default LoginPage