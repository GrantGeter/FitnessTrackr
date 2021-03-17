import { useEffect, useState } from 'react'
import { getToken } from '../auth'

function checklogin() {
    const profileToken = getToken();
    if (profileToken !== null && profileToken !== '') {
        return true;
    }
    return false;
}

export default checklogin;