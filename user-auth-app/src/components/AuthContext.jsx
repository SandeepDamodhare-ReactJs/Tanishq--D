
import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [name, setName] = useState("")


  const [mobile, setMobile] = useState("")
  const [address, setAddress] = useState("")
  const [about, setAbout] = useState("")


  const handleName = (name) => {
    console.log("contextsidename", name);
    setName(name)
  }
  const handleMobile = (mobile) => {
    console.log("contextsidemobile", mobile);
    setMobile(mobile)
  }
  const handleAddress = (address) => {
    console.log("contextsideaddress", address);
    setAddress(address)
  }
  const handleAbout = (about) => {
    console.log("contextsideabout", about);
    setAbout(about)
  }
 
  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated');
  };

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout,handleName,handleMobile,handleAddress,handleAbout,name,mobile,address,about  }}>
      {children}
    </AuthContext.Provider>
  );
};

