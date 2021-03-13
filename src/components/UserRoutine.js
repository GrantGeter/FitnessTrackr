import {React, useState, useEffect} from 'react';

const UserRoutine = () => {
    const [routine, setRoutine] = useState([])
    const userToken = localStorage.getItem("token")

    const getRoutines = (event) => {
        event.preventDefault()
        fetch('http://fitnesstrac-kr.herokuapp.com/api/users/albert/routines', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userToken
            },
            body: JSON.stringify({
                users: {
                id,
                creatorId,
                creatorName,
                isPublic: true,
                name,
                goal,
                routine
                }
            })
        }).then(response => response.json())
        .then(response => {
            setRoutine(response.routine);
        })
        .catch(console.error);
    }
    useEffect(() => {
        getRoutines()
    }, [])
    return ( <div>    
                <div className="userList">
                {users && users.map((user, index) => {
                return <div key={ index.id }>
                    <hr/>
                    {/* <h1>{user.id}</h1>
                    <p>{user.creatorId}</p> */}
                    <p>{user.creatorName}</p>
                    <p>{user.isPublic}</p>
                    <p>{user.name}</p>
                    <p>{user.goal}</p>
                    <p>{user.routine}</p>
                    {/* <p>{user.routine.id}</p> */}
                    <p>{user.routine.name}</p>
                    <p>{user.routine.description}</p>
                    <p>{user.routine.duration}</p>
                    <p>{user.routine.count}</p>
                    </div>})}
                </div>
    </div>)
}

export default UserRoutine;