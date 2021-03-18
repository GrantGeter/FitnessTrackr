import {React, useState, useEffect} from 'react'
import { getPublicRoutinesByActivity, getAllPublicRoutines } from '../api';
const ActivityRoutine = () => {
    const [activity, setActivity] = useState([])
    const [routine, setRoutine] = useState([])
    
useEffect(() => {
        getAllPublicRoutines(routine),
        getPublicRoutinesByActivity(activity)
    }, [])
        return ( <div>    
                    <div className="routineList">
                        {routine && routine.map((routine, index) => {
                        return <div key={ index.id }>
                            <hr/>
                            <p>{routine.name}</p>
                            <p>{routine.goal}</p>
                            <p>{routine.creatorName}</p>
                            </div>})}
                    </div>
                    <div className="activityList">
                        {activity && activity.map((activity, index) => {
                        return <div key={ index.id }>
                        <hr/>
                        <p>{activity.name}</p>
                        <p>{activity.description}</p>
                        <p>{activity.duration}</p>
                        <p>{activity.count}</p>
                        </div>})}
                    </div>
                </div>)
}

export default ActivityRoutine;