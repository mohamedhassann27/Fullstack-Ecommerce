import { Navigate, Outlet} from 'react-router'

function AuthRedirectRoute() {
    
    const token= localStorage.getItem('token')

    return (
        !token? <Outlet/> : <Navigate to='/' replace/>        
    )
}

export default AuthRedirectRoute
