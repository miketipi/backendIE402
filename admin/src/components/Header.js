// src/components/Header.js
import React from 'react';
import NavLink from './NavLink.js';

const Header = () => {
  return (
    <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <NavLink to="/" className="flex items-center p-2">
          <span className="text-2xl font-bold">KHÁM PHÁ LĂNG BÁC - ADMIN</span>
        </NavLink>

        <ul className="items-stretch hidden space-x-3 md:flex">
          <NavLink to="/User">User</NavLink>
          <NavLink to="/DamageReport">Damage Report</NavLink>
          <NavLink to="/EntityRepairStatus">Entity Repair Status</NavLink>
          <NavLink to="/BodyPolygon">Body Polygon</NavLink>
          <NavLink to="/MeshObject">Mesh Object</NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
