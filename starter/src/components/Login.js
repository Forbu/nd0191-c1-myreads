import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const data_login = {
    username: "Reviewer",
    password: "123456"
}

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("Reviewer");
    const [password, setPassword] = useState("123456");

    const [invalidCredentials, setInvalidCredentials] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === data_login.username && password === data_login.password) {
            navigate('/shelf');
        } else {
            setInvalidCredentials(true);
        }
    }

    return <div className="login-page">
        {/* Container to center the title  and add space on the right and left*/}
        <div className="login-title-container">
            <div className="login-title">
                <h1>MyReads</h1>
            </div>
        
        {/* Login form - now wrapped in a container for spacing */}
        <div className="login-form-container">
            <form className="login-form">
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={handleLogin}>Login</button>
            </form>
        </div>

        {/* center this hint */}
        <div className="login-hint-container">
            <div className="login-hint">Possible username, password: {Object.values(data_login).join(", ")}</div>
        </div>

        {/* Link to go back to the shelf if user is logged in */}
        { invalidCredentials && (
            <div className="login-error-container">
                Invalid credentials
            </div>
        )}
        </div>
    </div>;
};

export default Login;