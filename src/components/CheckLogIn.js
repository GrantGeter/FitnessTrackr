import {useEffect, useState } from 'react'

function checklogin() {
    const [login, setLogin] = useState(false)

    useEffect(() =>{
        const profileToken = localStorage.getItem("token")
        if (profileToken !== null && profileToken !== ''){
            setLogin(true)
        }
    },[])
    return [login, setLogin]
}

export default checklogin;