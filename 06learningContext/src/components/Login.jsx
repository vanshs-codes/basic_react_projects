import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

function Login () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const updateContext = (e) => {
        e.preventDefault();
        setUser({username, password});
    }

    return (
        <>
            <form onSubmit={updateContext}>
                <input 
                type="text"
                 id="username" 
                 placeholder="username" 
                 value={username}
                 onChange={(e) => setUsername(e.target.value)}
                 />
                <br />
                <input 
                type="password" 
                id="password" 
                placeholder="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default Login;