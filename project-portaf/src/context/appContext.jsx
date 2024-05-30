import React, { createContext, useState } from 'react';

export const principalContext = createContext();

export const pContext = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (userData) => {
      setUser(userData);
    };
  
    const logout = () => {
      setUser(null);
    };
  
    return (
      <principalContext.Provider>
        {children}
      </principalContext.Provider>
    );
  };