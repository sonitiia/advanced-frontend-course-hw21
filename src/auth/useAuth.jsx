import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/AuthService";

const AuthContext = createContext({
  isAuthenticated: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("isAuthenticated") === "true" || false,
  );

  const auth = {
    signUp(userData) {
      try {
        const user = authService.signUp(userData);
        setIsAuthenticated(true);
        return user;
      } catch (error) {
        console.error("Error signing up:", error);
      }
    },

    signIn(userData) {
      try {
        const user = authService.signIn(userData);
        setIsAuthenticated(true);
        return user;
      } catch (error) {
        console.error("Error signing in:", error);
      }
    },

    signOut() {
      try {
        authService.signOut();
        setIsAuthenticated(false);
      } catch (error) {
        console.error("Error signing out:", error);
      }
    },

    isAuthenticated,
  };

  useEffect(() => {
    const updateAuthorizationStatus = () => {
      let authenticated = false;
      const storedUserData = authService.getUserData();

      if (storedUserData) {
        authenticated = storedUserData.expiredAt > new Date().getTime();
      }

      setIsAuthenticated(authenticated);
      localStorage.setItem("isAuthenticated", authenticated);
    };

    updateAuthorizationStatus();
    const intervalId = setInterval(updateAuthorizationStatus, 10000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default function useAuth() {
  return useContext(AuthContext);
}
