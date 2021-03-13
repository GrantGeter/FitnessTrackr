import {React, useState, useEffect} from 'react'

const ActivityRoutine = () => {
    const [activity, setActivity] = useState([])

    const getActivityRoutine = (event) => {
        event.preventDefault()
        fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/3/routines', {
            headers: {
                'Content-Type': 'application/json',
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
            setActivity(response.activity);
        })
        .catch(console.error);
    }
    useEffect(() => {
        getActivityRoutine()
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

export default ActivityRoutine;