import { React, useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";
import { loginUser } from '../api';
import { storeToken } from '../auth';

const LogIn = ({ setDisplayMessage, setIsShown }) => {
    const [user, setUser] = useState();

    const signIn = (event) => {
        event.preventDefault()
        const [username, password] = event.target;
        if (username.value && password.value) {
            setUser({
                username: username.value,
                password: password.value
            })
        } else {
            setIsShown(true);
            setDisplayMessage({
                message: 'Please provide a username and password',
                type: 'error'
            });
        }
    }

    let initialRender = useRef(true);
    useEffect(() => {
        console.log('here');
        if (!initialRender.current) {
            if (user) {
                loginUser(user)
                    .then(response => {
                        if (response) {
                            storeToken(response.data.token)
                            setIsShown(true);
                            setDisplayMessage({
                                message: response.data.message,
                                type: 'success'
                            })
                        } else {
                            setIsShown(true);
                            setDisplayMessage({
                                message: 'Incorect username or password.',
                                type: 'error'
                            })
                        }
                    })
            }
        } else {
            initialRender.current = false;
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