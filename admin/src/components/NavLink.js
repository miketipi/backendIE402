// src/components/NavLink.js
import React from 'react';
import { NavLink as ReactRouterNavLink, useLocation } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  const location = useLocation();

  return (
    <ReactRouterNavLink
      to={to}
      activeClassName="border-b-2 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
      className={`flex items-center px-4 -mb-1 border-b-2 dark:border-transparent ${
        location.pathname === to ? 'text-violet-400 border-violet-400' : ''
      }`}
    >
      {children}
    </ReactRouterNavLink>
  );
};

export default NavLink;
