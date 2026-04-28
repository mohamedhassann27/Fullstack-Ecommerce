import { Navigate, Outlet } from "react-router"

function ProtectedRoute() {
    const userToken= localStorage.getItem('token')

    return(
        userToken? <Outlet/>: <Navigate to={'/login'} replace/>
    )
}

export default ProtectedRoute
