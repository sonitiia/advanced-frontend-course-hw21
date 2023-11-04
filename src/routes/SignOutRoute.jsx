import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
import { SIGN_IN_ROUTE } from "../app/Routes";

const SignOutRoute = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();

  useEffect(() => {
    const handleSignOutUser = () => {
      try {
        signOut();
        // wait until the auth context is updated
        new Promise((resolve) => setTimeout(resolve, 0));
        navigate(SIGN_IN_ROUTE);
      } catch (e) {
        console.error("Error signing out:", e);
      }
    };
    handleSignOutUser();
  }, [signOut, navigate]);
  return <div>Wait for signing out..</div>;
};

export default SignOutRoute;
