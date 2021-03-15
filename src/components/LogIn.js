import { React, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { loginUser } from '../api';

const LogIn = () => {
    const [user, setUser] = useState();

    const signIn = (event) => {
        event.preventDevault()
        const [username, password] = event.target;
        if (username.value && password.value) {
            setUser({
                username: username.value,
                password: password.value
            })
        }
    }

    useEffect(() => {
        if (user) {
            const user = loginUser(user)
                .then(response => storeToken(response.data.token))
        }

    }, [user])

    return (
        <form onSubmit={signIn}>
            <h1 className="logIn">Log In</h1>
            <div className="username">
                <label>Username: </label>
                <input type="text" id="username" />
            </div>
            <div className="password">
                <label>Password: </label>
                <input type="password" id="password" />
            </div>
            <div className="buttons">
                <button className="submit" type="submit" >Submit</button>
                <Link className="linkButton" to="/register">Register</Link>
            </div>
        </form>
    )
}

export default LogIn;