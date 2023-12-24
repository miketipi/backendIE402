// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/User" element={<User />} />
          <Route path="/DamageReport" element={<DamageReport />} />
          <Route path="/EntityRepairStatus" element={<EntityRepairStatus />} />
          <Route path="/BodyPolygon" element={<BodyPolygon />} />
          <Route path="/MeshObject" element={<MeshObject />} />
        </Routes>

        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
