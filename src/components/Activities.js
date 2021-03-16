import {React, useState, useEffect} from 'react'

const Activites = () => {
    const [activities, setActivities] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const getActivites = (event) => {
        event.preventDefault()
        fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                users: {
                id,
                description,
                name,
                }
            })
        }).then(response => response.json())
        .then(result => {setActivities(result.data.activities);
        })
        .catch(console.error);
    }
useEffect (() => { 
        getActivites(),
        getUpdatedActivity(),
        AddActivity()
    }
,[])

    const getUpdatedActivity = () => {
        setName(activities.name)
        setDescription(activities.description)
        fetch('http://fitnesstrac-kr.herokuapp.com/api/activities/9', {
            method: "PATCH",
            body: JSON.stringify({
                id,
                name,
                description
            })
        }).then(response => response.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
    }

    const AddActivity = () => {
        const [name, setName] = useState('')
        const [description, setDescription] = useState('')
        const userToken = localStorage.getItem("token")
    
        const getNewActivity = () => {
            fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: "POST",
                headers: {
                    'Content-Type':'application/json',
                    'Authorization':'Bearer ' + userToken
                },
                body: JSON.stringify({
                    name,
                    description
                })
            }).then(response => response.json())
            .then(result => {
                console.log(result);
            })
            .catch(console.error);
        }
        return (
            <form>
               <div>
                    <div>Create New Activity:</div>
                        <label>Name: </label>
                        <input type="text" id="text" onChange={(event) => setName(event.target.value) }/>  
                    </div>
                    <div>
                        <label>Description: </label>
                        <input type="text" id="text" onChange={(event) => setDescription(event.target.value) }/>  
                    </div>  
                    <div>
                        <input type="button" onClick={() => getNewActivity()} value="Submit"/>
                </div>
            </form>
        )
    
    }
}

export default Activites;