import React, { useEffect } from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const Logout = props => {
    useEffect(() => {
        axiosWithAuth()
            .post('/logout')
            .then(() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userName');
                props.history.push('/')
            })
            .catch(err => console.error(err))
    })
    return (<div></div>)
}

export default Logout;