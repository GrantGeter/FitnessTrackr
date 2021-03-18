import {React, useState, useEffect} from 'react'
import { createActivity, fetchAllActivities } from '../api'
import { useHistory } from 'react-router-dom'

const Activites = ({isLoggedIn}) => {
    const history = useHistory();
    const [activities, setActivities] = useState([])
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

useEffect (() => { 
    fetchAllActivities(activities)
    }
,[])

    if (!name.value && !description.value){
        return (
            <form>
                {isLoggedIn ? <div>
                <div>Create New Activity:</div>
                            <label>Name: </label>
                            <input type="text" id="text" onChange={(event) => setName(event.target.value) }/>  
                            <label>Description: </label>
                            <input type="text" id="text" onChange={(event) => setDescription(event.target.value) }/>  
                            <input type="button" onClick={() => createActivity()} value="Submit"/>
                </div>:null}
            </form>
        )
    } else {
        setDisplayMessage({
            message: 'This activity already exists',
            type: 'error'
        });
        setIsShown(true);
    }
}

export default Activites;