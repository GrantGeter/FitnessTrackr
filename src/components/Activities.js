import { React, useState, useEffect } from 'react'
import { fetchAllActivities, createActivity } from '../api'
import { getToken } from '../auth';

const activities = ({ isLoggedIn, setIsShown, setDisplayMessage }) => {
    const [allActivities, setAllActivities] = useState([]);
    const [newActivity, setNewActivity] = useState();

    const handleSubmit = (event) => {
        event.preventDefault()
        const [name, desc] = event.target
        if (name.value && desc.value) {
            setNewActivity({
                name: name.value,
                description: desc.value
            });
        } else {
            setDisplayMessage({
                message: 'Please provide a name and description',
                type: 'error'
            })
            setIsShown(true);
        }
    }

    useEffect(() => {
        fetchAllActivities()
            .then(response => {
                setAllActivities(response.data);
            })
    }, [newActivity])

    useEffect(() => {
        if (newActivity) {
            createActivity(newActivity, getToken())
                .then(response => {
                    if (response) {
                        setDisplayMessage({
                            message: 'Activity created!',
                            type: 'success'
                        })
                        setIsShown(true);
                    } else {
                        setDisplayMessage({
                            message: 'Activity already exists',
                            type: 'error'
                        })
                        setIsShown(true);
                    }
                })
        }
    }, [newActivity])
    return (
        <>
            { isLoggedIn ?
                <form onSubmit={handleSubmit}>
                    <h3>Create New Activity:</h3>
                    <div className='form-input'>
                        <label>Name: </label>
                        <input type="text" id="text" />
                    </div>
                    <br />
                    <div className='form-input'>
                        <label>Description: </label>
                        <input type="text" id="text" />
                    </div>
                    <br />
                    <div>
                        <button type="submit"> Submit </button>
                    </div>
                </form> : null
            }
            {
                allActivities.map((activity, index) => {
                    return (
                        <div className='activity' key={index}>
                            <h3>{activity.name}</h3>
                            <p>{activity.description}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default activities;