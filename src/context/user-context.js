import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, logout } from "../services/session-service";
import { createUser, getUser } from "../services/user-service";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getUser().then(data => {
      setTimeout(() => {
        setUser(data);
        setIsLoading(false);
      }, 500);
    }).catch((_e) => {
      setIsLoading(false);
    })
  }, [user]);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
      navigate("/");
    }).catch((e) => {
      setError(e.message);
    }); 
  }

  function handleSignUp(newUser) {
    return createUser(newUser).then((user) => {
      setUser(user);
      navigate("/");
    }).catch((e) => {
      setError(e.message);
    })
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
      navigate("/login");
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        error,
        isLoading,
        setError,
        login: handleLogin,
        signup: handleSignUp,
        logout: handleLogout
      }}
    >
      { children }
    </UserContext.Provider>
  );
}

function useUser() {
  return useContext(UserContext);
}

export { UserProvider, useUser };
