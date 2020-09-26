import React from 'react';
import './Header.scss';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';

const Header = () => {
  return (
    <header className="Header">
      <nav className="gnb">
        <ul>
          <li>
            <h1>PROJECT</h1>
          </li>
          <li>BETA</li>
        </ul>
      </nav>
      <div className="user-nav-bar">
        <MdSentimentVeryDissatisfied className="user" />
      </div>
    </header>
  );
};

export default Header;
