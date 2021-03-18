import {React, useState, useEffect} from 'react';
import { createRoutine, updateRouitne, deleteRoutine, addActivityToRoutine, updateRouitneActivity} from '../api';

const MyRoutine = ({isLoggedIn}) => {
    const [name, setName] = useState('')
    const [goal, setGoal] = useState('')
    const [routine, setRoutine] = useState([])
    const [activity, setActivity] = useState([])

    useEffect(() => {
        updateRouitne(name, goal)
        addActivityToRoutine(activity)
    }, [])
    return (<div>
            {isLoggedIn ? <div>
                <div>Create New Routine:</div>
                <div>
                    <label>Name: </label>
                    <input type="text" id="text" onChange={(event) => setName(event.target.value) }/>  
                    <label>Goal: </label>
                    <input type="text" id="text" onChange={(event) => setGoal(event.target.value) }/>  
                </div>  
                    <input type="button" onClick={() => createRoutine()} value="Submit"/>
                <div className="routineList">
                {routine && routine.map((routine, index) => {
                return <div key={ index.id }>
                    <hr/>
                    <h1>{routine.name}</h1>
                    <p>{routine.goal}</p>
                    <p>{routine.duration}</p>
                    <p>{routine.count}</p>
                    { routine.isAuthor ? (<div><div><button onClick={() =>updateRouitne(post)}>Update Routine</button></div><div><button onClick={() => deleteRoutine(routine._id)}>Delete</button></div><div><button onClick={() => updateRouitneActivity(routine._id)}>Update Activity</button></div></div>):null}
                    </div>})}
                    </div>
                </div>:null}
            </div>
    )
}

{/* <fieldset>
<label htmlFor="MyRoutine">Activity <span>({ routine.length })</span></label>
<select 
  name="activites"
  id={activity._id}
  value={activity} 
  onChange={(event) => setActivity(event.target.value)}>
  <option value="any">Any</option>
  {activities.map((activity, index) => {
  return <option key={index} value={activity.name}>{activity.name}</option> })}
</select>
</fieldset> */}

export default MyRoutine;