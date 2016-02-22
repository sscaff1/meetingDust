import React from 'react';
import {Navbar} from './navbar.jsx';

export const Header = () => (
  <div className="header-container">
    <Navbar links={["Create New Meeting"]} />
  </div>
);
