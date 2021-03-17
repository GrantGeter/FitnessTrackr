import { React, useState, useEffect, useRef } from 'react';
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = ({ setDisplayMessage, setIsShown }) => {
    const [newUser, setNewUser] = useState();

    const signUp = (event) => {
        event.preventDefault()
        const [username, password, confirmPassword] = event.target;
        if (username.value && password.value && confirmPassword.value) {
            if (confirmPassword.value === password.value) {
                setNewUser({
                    username: username.value,
                    password: password.value
                })
            } else {
                setIsShown(true);
                setDisplayMessage({
                    message: 'Passwords do not match',
                    type: 'error'
                });
            }

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
        if (!initialRender.current) {
            if (newUser) {
                registerUser(newUser)
                    .then(response => {
                        if (response) {
                            storeToken(response.data.token)
                            setIsShown(true);
                            setDisplayMessage({
                                message: response.data.message,
                                type: 'success'
                            })
                        }
                    })
            }
        } else {
            initialRender.current = false;
        }

    }, [newUser])

    return (
        <form onSubmit={signUp}>
            <h1 className="logIn">Sign Up</h1>
            <div className="username">
                <label>Create Username: </label>
                <input type="text" id="username" />
            </div>
            <div className="password">
                <label>Create Password: </label>
                <input type="password" />
            </div>
            <div className="password">
                <label>Confirm Password: </label>
                <input type="password" />
            </div>
            <div className="buttons">
                <button className="submit" type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default Register;