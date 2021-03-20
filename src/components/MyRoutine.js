import { React, useState, useEffect, useRef } from 'react';
import { fetchPublicRoutinesByUser, fetchUser, createRoutine, updateRoutine, deleteRoutine, addActivityToRoutine, updateRouitneActivity, fetchAllActivities, deleteRoutineActivity, updateActivity } from '../api';
import { getToken } from '../auth';

const MyRoutine = ({ isLoggedIn, setIsShown, setDisplayMessage }) => {
    const [allActivities, setAllActivities] = useState([]);
    const [userRoutines, setUserRoutines] = useState([]);
    const [routineToCreate, setRoutineToCreate] = useState();
    const [routineToDelete, setRoutineToDelete] = useState();
    const [routineToUpdate, setRoutineToUpdate] = useState();
    const [updatedRoutine, setUpdatedRoutine] = useState();
    const [routineIdToAddActivity, setRoutineIdToAddActivity] = useState();
    const [activityToAdd, setActivityToAdd] = useState();
    const [activityToDelete, setActivityToDelete] = useState();
    const [activityToUpdate, setActivityToUpdate] = useState();
    const [updatedActivity, setUpdatedActivity] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();
        const [name, goal, isPublic] = event.target;
        if (name.value && goal.value) {
            if (!routineToUpdate) {
                setRoutineToCreate({
                    name: name.value,
                    goal: goal.value,
                    isPublic: isPublic.value === 'on' ? true : false
                })
            } else {
                setUpdatedRoutine({
                    name: name.value,
                    goal: goal.value,
                    isPublic: isPublic.value === 'on' ? true : false
                })
            }
        } else {
            setDisplayMessage({
                message: 'Please provide a name, and a goal',
                type: 'error'
            });
            setIsShown(true);
        }
        name.value = '';
        goal.value = '';
        isPublic.value = false;
    }

    const handleActivitySubmit = (event) => {
        event.preventDefault()
        const [activityId, count, duration] = event.target;
        if (activityId.value && count.value && duration.value) {
            if (!activityToUpdate) {
                setActivityToAdd({
                    activityId: activityId.value,
                    count: count.value,
                    duration: duration.value
                })
            } else {
                const [count, duration] = event.target;
                setUpdatedActivity({
                    count: count.value,
                    duration: duration.value
                })
            }
        } else {
            setDisplayMessage({
                message: 'Please provide an activity, count, and duration.',
                type: 'error'
            });
            setIsShown(true);
        }
        activityId.value = '';
        count.value = '';
        duration.value = '';
    }

    const handleDelete = (routine) => {
        setRoutineToDelete(routine);
        setRoutineToCreate(null);
        setUpdatedRoutine(null);
        setRoutineToUpdate(null);
        setRoutineIdToAddActivity(null);
        setActivityToAdd(null);
        setActivityToDelete(null);
        setUpdatedActivity(null);
        setActivityToUpdate(null);
    }

    const handleActivityDelete = (activity) => {
        setActivityToDelete(activity);
        setRoutineToCreate(null);
        setRoutineToDelete(null);
        setUpdatedRoutine(null);
        setRoutineToUpdate(null);
        setRoutineIdToAddActivity(null);
        setActivityToAdd(null);
        setUpdatedActivity(null);
        setActivityToUpdate(null);
    }

    const handleActivityUpdate = (activity) => {
        setActivityToUpdate(activity);
        setRoutineToCreate(null);
        setRoutineToDelete(null);
        setUpdatedRoutine(null);
        setRoutineToUpdate(null);
        setRoutineIdToAddActivity(null);
        setActivityToAdd(null);
        setActivityToDelete(null);
        setUpdatedActivity(null);
    }

    const handleUpdate = (routine) => {
        setRoutineToUpdate(routine);
        setRoutineToCreate(null);
        setRoutineToDelete(null);
        setUpdatedRoutine(null);
        setRoutineIdToAddActivity(null);
        setActivityToAdd(null);
        setActivityToDelete(null);
        setUpdatedActivity(null);
        setActivityToUpdate(null);
    }

    const handleAddActivity = (id) => {
        setRoutineIdToAddActivity(id);
        setRoutineToCreate(null);
        setRoutineToDelete(null);
        setUpdatedRoutine(null);
        setRoutineToUpdate(null);
        setActivityToAdd(null);
        setActivityToDelete(null);
        setUpdatedActivity(null);
        setActivityToUpdate(null);
    }

    useEffect(() => {
        fetchUser(getToken())
            .then(response => {
                fetchPublicRoutinesByUser(response.data.username)
                    .then(response => setUserRoutines(response.data));
            });

        fetchAllActivities()
            .then(response => setAllActivities(response.data))
    }, [routineToCreate, routineToDelete, updatedRoutine, activityToAdd, activityToDelete, updatedActivity]);


    let initialRender = useRef(true);
    useEffect(() => {
        if (!initialRender.current) {
            if (routineToCreate) {
                createRoutine(routineToCreate, getToken())
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Routine created',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Routine already exists',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setRoutineToCreate(null);
            }

            if (routineToDelete) {
                deleteRoutine(routineToDelete.id, getToken())
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Routine deleted',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Something went wrong',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setRoutineToDelete(null);
            }

            if (updatedRoutine) {
                updateRoutine(routineToUpdate.id, updatedRoutine, getToken())
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Routine updated',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Something went wrong',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setUpdatedRoutine(null);
                setRoutineToUpdate(null);
            }

            if (activityToAdd) {
                addActivityToRoutine(routineIdToAddActivity, activityToAdd)
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Activity added',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Activity already added to routine',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setRoutineIdToAddActivity(null);
                setActivityToAdd(null);
            }

            if (activityToDelete) {
                deleteRoutineActivity(activityToDelete.routineActivityId, getToken())
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Activity deleted',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Something went wrong',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setActivityToDelete(null);
            }

            if (updatedActivity) {
                updateRouitneActivity(activityToUpdate.routineActivityId, updatedActivity, getToken())
                    .then(response => {
                        if (response) {
                            setDisplayMessage({
                                message: 'Activity updated',
                                type: 'success'
                            });
                            setIsShown(true);
                        } else {
                            setDisplayMessage({
                                message: 'Something went wrong',
                                type: 'error'
                            });
                            setIsShown(true);
                        }
                    })
                setUpdatedActivity(null);
                setActivityToUpdate(null);
            }
        } else {
            initialRender.current = false;
        }
    }, [routineToCreate, routineToDelete, updatedRoutine, activityToAdd, activityToDelete, updatedActivity])

    return (
        <div>
            {
                isLoggedIn ?
                    <div>
                        {
                            !routineIdToAddActivity && !activityToUpdate ?
                                !routineToUpdate ?
                                    <form onSubmit={handleSubmit}>
                                        <h2>Create New Routine:</h2>
                                        <label>Name: </label>
                                        <input type="text" />
                                        <label>Goal: </label>
                                        <input type="text" />
                                        <label>Public:</label>
                                        <input type='checkbox' defaultChecked={false} />
                                        <input type="submit" value="Submit" />
                                    </form>
                                    : <form onSubmit={handleSubmit}>
                                        <h2>Update Routine:</h2>
                                        <label>Name: </label>
                                        <input type="text" defaultValue={routineToUpdate.name} />
                                        <label>Goal: </label>
                                        <input type="text" defaultValue={routineToUpdate.goal} />
                                        <label>Public:</label>
                                        <input type='checkbox' defaultChecked={routineToUpdate.isPublic} />
                                        <input type="submit" value="Submit" />
                                        <button onClick={() => setRoutineToUpdate(null)}>Cancel</button>
                                    </form>
                                : !activityToUpdate ?
                                    <form onSubmit={() => handleActivitySubmit(event,)}>
                                        <h2>Add activity to routine</h2>
                                        <select>
                                            {
                                                allActivities.map((activity, index) => {
                                                    return <option value={activity.id} key={index} >{activity.name}</option>
                                                })
                                            }
                                        </select>
                                        <label>Count: </label>
                                        <input type="text" />
                                        <label>Duration: </label>
                                        <input type="text" />
                                        <input type="submit" value="Submit" />
                                        <button onClick={() => setRoutineIdToAddActivity(null)}>Cancel</button>
                                    </form>
                                    :
                                    <form onSubmit={() => handleActivitySubmit(event,)}>
                                        <h2>Update routine activity</h2>
                                        <label>Count: </label>
                                        <input type="text" defaultValue={activityToUpdate.count} />
                                        <label>Duration: </label>
                                        <input type="text" defaultValue={activityToUpdate.duration} />
                                        <input type="submit" value="Submit" />
                                        <button onClick={() => setRoutineIdToAddActivity(null)}>Cancel</button>
                                    </form>
                        }
                        {
                            userRoutines.length > 0 ?
                                <div className="routineList">
                                    {
                                        userRoutines.map((routine, index) => {
                                            return (
                                                <div key={index}>
                                                    <hr />
                                                    <h1>{routine.name}</h1>
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
                                                                                <button onClick={() => handleActivityUpdate(activity)}>Update activity</button>
                                                                                <button onClick={() => handleActivityDelete(activity)}>Delete activity</button>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                            : null
                                                    }

                                                    <div>
                                                        <div>
                                                            <button onClick={() => handleUpdate(routine)}>Update Routine</button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => handleDelete(routine)}>Delete</button>
                                                        </div>
                                                        <div>
                                                            <button onClick={() => handleAddActivity(routine.id)}>Add Activity</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                : null
                        }
                    </div>
                    : null
            }
        </div>
    )
}



export default MyRoutine;