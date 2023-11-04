import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "./useAuth";

export default function RequireAuth({ authRoute }) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to={authRoute} state={{ from: location }} replace />
  );
}
