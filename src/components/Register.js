import { React, useState, useEffect, useRef, } from 'react';
import { useHistory } from 'react-router-dom'
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = ({ setDisplayMessage, setIsShown, setIsLoggedIn }) => {
    const [newUser, setNewUser] = useState();
    const history = useHistory();

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
                setDisplayMessage({
                    message: 'Passwords do not match',
                    type: 'error'
                });
                setIsShown(true);
            }

        } else {
            setDisplayMessage({
                message: 'Please provide a username and password',
                type: 'error'
            });
            setIsShown(true);
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
                            setDisplayMessage({
                                message: response.data.message,
                                type: 'success'
                            })
                            setIsShown(true);
                            setIsLoggedIn(true);
                            history.push('/home');
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