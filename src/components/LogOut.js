import { React } from "react";
import { useHistory } from 'react-router-dom'
import { clearToken } from '../auth'

const Logout = ({ setIsLoggedIn }) => {
    let history = useHistory();
    const logOut = () => {
        clearToken()
        setIsLoggedIn(false)
        history.push("/LogIn")
    }
    return <div className="logout">
        <button onClick={logOut}>Log Out</button>
    </div>
}

export default Logout;