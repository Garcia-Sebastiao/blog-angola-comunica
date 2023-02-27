import React, { createContext, useEffect, useState } from "react";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(formData) {
    const response = await loginRequest(formData);

    const payload = { token: response.msg.access_token };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};