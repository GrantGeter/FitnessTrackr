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
        getActivites()}
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
}

export default Activites;