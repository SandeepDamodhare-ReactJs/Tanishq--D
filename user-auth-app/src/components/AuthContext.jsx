import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
    about: '',
  });

  const handleName = (name) => {
    setUser((prev) => ({ ...prev, name }));
  };

  const handleEmail = (email) => {
    setUser((prev) => ({ ...prev, email }));
  };

  const handleMobile = (mobile) => {
    setUser((prev) => ({ ...prev, mobile }));
  };

  const handleAddress = (address) => {
    setUser((prev) => ({ ...prev, address }));
  };

  const handleAbout = (about) => {
    setUser((prev) => ({ ...prev, about }));
  };

  return (
    <AuthContext.Provider value={{ user, handleName, handleEmail, handleMobile, handleAddress, handleAbout }}>
      {children}
    </AuthContext.Provider>
  );
};
