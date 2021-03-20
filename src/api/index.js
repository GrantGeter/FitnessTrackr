import axios from 'axios';

const baseUrl = 'https://fitnesstrac-kr.herokuapp.com/api';

export const registerUser = async (user) => {
    try {
        const data = await axios.post(`${baseUrl}/users/register`, user);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const loginUser = async (user) => {
    try {
        const data = await axios.post(`${baseUrl}/users/login`, user);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.get(`${baseUrl}/users/me`, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchPublicRoutinesByUser = async (username) => {
    try {
        const data = await axios.get(`${baseUrl}/users/${username}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const fetchAllActivities = async () => {
    try {
        const data = await axios.get(`${baseUrl}/activities`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createActivity = async (activity, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.post(`${baseUrl}/activities`, activity, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateActivity = async (id, activity, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.patch(`${baseUrl}/activities/${id}`, activity, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getPublicRoutinesByActivity = async (id) => {
    try {
        const data = await axios.get(`${baseUrl}/activities/${id}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const getAllPublicRoutines = async () => {
    try {
        const data = await axios.get(`${baseUrl}/routines`);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const createRoutine = async (routine, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.post(`${baseUrl}/routines`, routine, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateRoutine = async (id, routine, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.patch(`${baseUrl}/routines/${id}`, routine, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteRoutine = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.delete(`${baseUrl}/routines/${id}`, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const addActivityToRoutine = async (id, { activityId, count, duration }) => {
    try {
        const data = await axios.post(`${baseUrl}/routines/${id}/activities`, { activityId, count, duration })
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const updateRouitneActivity = async (id, { count, duration }, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.patch(`${baseUrl}/routine_activities/${id}`, { count, duration }, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const deleteRoutineActivity = async (id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    try {
        const data = await axios.delete(`${baseUrl}/routine_activities/${id}`, config);
        return data;
    } catch (error) {
        console.error(error);
    }
}