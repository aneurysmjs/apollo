// @flow strict
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';

import './Navbar.scss';

// eslint-disable-next-line react/prop-types
const Navbar = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  // eslint-disable-next-line no-unused-vars
  const handleClick = (endpoint: string): void => {
    setOpen(false);
    // eslint-disable-next-line react/prop-types
    history.push(endpoint);
  };

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light" id="mainNav">
      <div className="container">
        <Link className="navbar-brand" to="/">Apollo</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setOpen(!isOpen);
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={classNames(
            'collapse navbar-collapse justify-content-end', 
            {
              show: isOpen
            })}
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="navbar-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
