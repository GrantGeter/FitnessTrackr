import { React, useState, useEffect } from 'react';
import { registerUser } from '../api';
import { storeToken } from '../auth';

const Register = () => {
    const [newUser, setNewUser] = useState();

    const signUp = (event) => {
        event.preventDefault()
        const [username, password] = event.target;
        if (username.value && password.value) {
            setNewUser({
                username: username.value,
                password: password.value
            })
        }
    }

    useEffect(() => {
        if (newUser) {
            const user = registerUser(newUser)
                .then(response => storeToken(response.data.token))
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
                <input type="password" id="password" />
            </div>
            <div className="buttons">
                <button className="submit" type="submit" >Submit</button>
            </div>
        </form>
    )
}

export default Register;