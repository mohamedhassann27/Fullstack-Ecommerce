import supabase from "@/supabase";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function AdminRoute() {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await supabase.auth.getUser();
      setUserData(data);
      console.log(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading...</p>;
  return userData?.user?.user_metadata.role == "admin" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
  // <p>df</p>
}

export default AdminRoute;
