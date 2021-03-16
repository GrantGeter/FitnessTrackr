import {React} from "react";
import { useHistory } from 'react-router-dom'

const Logout = ({setIsLoggedIn}) => {
    let history = useHistory();
    const logOut = () => {
        localStorage.removeItem("token")
        setIsLoggedIn(false)
        history.push("/LogIn")
    }
    return <div className="logout">
                <button onClick={logOut}>Log Out</button>
            </div>
}

export default Logout;