import { createContext, useContext, useEffect, useState } from "react";
import { login, logout } from "../services/session-service";
import { createUser, getUser } from "../services/user-service";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if(!user) return;
    getUser().then(data => {
      setTimeout(() => {
        setUser(data);
        setIsLoading(false);
      }, 500);
    }).catch((e) => {
      setIsLoading(false);
      console.error(e.message);
    })
  }, [user]);

  function handleLogin(credentials) {
    return login(credentials).then((user) => {
      setUser(user);
    });
  }

  function handleSignUp(newUser) {
    return createUser(newUser).then((user) => {
      setUser(user);
    })
  }

  function handleLogout() {
    return logout().finally(() => {
      setUser(null);
    })
  }

  return (
    <UserContext.Provider
      value={{
        user,
        isLoading,
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
