










// App.jsx
import React from 'react';

import {Register} from "./components/Register"
import {Login} from './components/Login';
import Home from './components/Home';
import Team from './components/Team';
import Feature from './components/Feature';
import Blog from './components/Blog';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';

const App = () => {
  return (
  <>
        <Header />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} /> */}
          <Route path="/team" element={<PrivateRoute><Team/></PrivateRoute>} />
          <Route path="/feature" element={<PrivateRoute><Feature /></PrivateRoute>} />
          <Route path="/blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
          <Route path="/about" element={<PrivateRoute><About /></PrivateRoute>} />
          <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
        </Routes>
        <Footer />
    
      </>
  );
};

export default App;
