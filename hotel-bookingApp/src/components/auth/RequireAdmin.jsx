import React from "react"
import { Navigate, useLocation } from "react-router-dom"

const RequireAdmin = ({ children }) => {
    const userRole = localStorage.getItem("userRole")
    const location = useLocation()
    
    // Check if the userRole is 'ROLE_ADMIN'
    if (userRole !== "ROLE_ADMIN") {
        return <Navigate to="/not-authorized" state={{ path: location.pathname }} />
    }
    return children
}

export default RequireAdmin
