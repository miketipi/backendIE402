// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import User from './pages/User';
import DamageReport from './pages/DamageReport';
import EntityRepairStatus from './pages/EntityRepairStatus';
import BodyPolygon from './pages/BodyPolygon';
import MeshObject from './pages/MeshObject';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<>
            <Header />
            <HomePage />
          </>} />
          <Route path="/User" element={<>
            <Header />
            <User />
          </>} />
          <Route path="/DamageReport" element={<>
            <Header />
            <DamageReport />
          </>} />
          <Route path="/EntityRepairStatus" element={<>
            <Header />
            <EntityRepairStatus />
          </>} />
          <Route path="/BodyPolygon" element={<>
            <Header />
            <BodyPolygon />
          </>} />
          <Route path="/MeshObject" element={<>
            <Header />
            <MeshObject />
          </>} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
