import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Navbar from './shared/Navbar';
import SignUp from './components/SignUp';
import Login from './components/Login';

const App = () => {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<></>} />
      </Routes>
    </>
  );
}

export default App;
