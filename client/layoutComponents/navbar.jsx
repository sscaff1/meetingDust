import React from 'react';

export const Navbar = ({links}) => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-nav" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">meetingDust</a>
      </div>
      <div className="collapse navbar-collapse" id="main-nav">
        <ul className="nav navbar-nav pull-right">
          {links.map(link => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);
