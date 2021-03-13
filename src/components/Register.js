import {React, useState} from 'react';

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const signUp = (event) => {
        event.preventDefault()
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
            method: "POST",
            body: JSON.stringify({
              username,
              password
            })
        }).then(response => response.json())
        .then(result => {
          setToken(result.data.token)
        })
        .catch(console.error);
    }
return (
    <form onSubmit={signUp}>
        <h1 className="logIn">Sign Up</h1>
        <div className="username">
            <label>Create Username: </label>
            <input type="text" id="username" onChange={(event) => setUsername(event.target.value) }/>
        </div>
        <div className="password">
            <label>Create Password: </label>
            <input type="text" id="password" onChange={(event) => setPassword(event.target.value) }/>
        </div>
        <div className="buttons">
            <button className="submit" type="submit" >Submit</button>
        </div>
    </form>
    )
}

export default Register;