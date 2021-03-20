import { React, useState, useEffect } from 'react'
import { getAllPublicRoutines } from '../api';
const Routine = () => {
    const [routines, setRoutines] = useState([])
    useEffect(() => {
        getAllPublicRoutines()
            .then(response => {
                setRoutines(response.data);

            })
    }, [])
    return (<div>
        <div className="routineList">
            {routines.map((routine, index) => {
                return (
                    <div key={index}>
                        <hr />
                        <h2>{routine.name}</h2>
                        <p>{routine.goal}</p>
                        {
                            routine.activities.length > 0 ?
                                <div className="activityList">
                                    <h3>Activities</h3>
                                    {
                                        routine.activities.map((activity, index) => {
                                            return (
                                                <div key={index}>
                                                    <h3>{activity.name}</h3>
                                                    <p>{activity.description}</p>
                                                    <p>Duration: {activity.duration}</p>
                                                    <p>Count: {activity.count}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                : null
                        }
                        <p>Created by: {routine.creatorName}</p>
                    </div>
                )
            })}
        </div>
    </div>)
}

export default Routine;