import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Private({ auth }) {
    console.log(Boolean(auth));
    return (
        <>
            {auth ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}

export default Private