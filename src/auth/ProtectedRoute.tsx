import LoadingSpinner from "@/components/shared/LoadingSpinner";
import supabase from "@/supabase"
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router"

function ProtectedRoute() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Supabase provides a method to get the current user and listen for auth changes
    useEffect(() => {
    // أول مرة
        const getUser = async () => {
            const { data }: {data:any} = await supabase.auth.getUser();
            setUser(data?.user || null);
            setLoading(false);
            };
            getUser();
            // Listen لأي تغيير (Google login / logout)
            const { data: listener } = supabase.auth.onAuthStateChange(
            (_event, session:any) => {
                setUser(session?.user || null);
                setLoading(false);
            }
            );
            return () => {
            listener?.subscription.unsubscribe();
            };
    }, []);

    console.log(user);
    
    const userToken= localStorage.getItem('token')

    if (loading) return <LoadingSpinner/>;

    return(
        userToken || user ? <Outlet/>: <Navigate to={'/login'} replace/>
    )
}

export default ProtectedRoute
