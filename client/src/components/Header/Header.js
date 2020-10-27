import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/members';
import { getWkspace } from '../../modules/workspaces';
import ListBox from '../ListBox/ListBox';
import './Header.scss';

const Header = ({ loginUser, wkspaces, wkspace }) => {
  const dispatch = useDispatch();

  const [onWsList, setOnWsList] = useState(false); //워크스페이스 리스트
  const onToggle = type => {
    if (type === 'ws') {
      setOnWsList(!onWsList);
    }
  };

  const selectWkspace = (type, id) => {
    if (type === 'wkspace') {
      dispatch(getWkspace(id));
    }
  };

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  return (
    <header className="Header">
      <nav>
        <ul className="gnb-home">
          <li className="logo">
            <Link to="/">
              <span className="logo-circle">
                <img
                  src={process.env.PUBLIC_URL + 'resources/img/logo.png'}
                  alt="logo"
                />
              </span>
              <h1>TASK WORLD</h1>
            </Link>
          </li>
          {wkspace && (
            <li className="ws-list" onClick={() => onToggle('ws')}>
              <span className="ws-initial">
                {wkspace.title.charAt(0).toUpperCase()}
              </span>
              <span>{wkspace.title}</span>
              <img
                className="dot-menu"
                src={process.env.PUBLIC_URL + 'resources/img/dot-menu.png'}
                alt="Workspace Menu"
              />
              <ListBox
                wkspaces={wkspaces}
                wkspace={wkspace}
                onToggle={onWsList}
                onClick={selectWkspace}
              />
            </li>
          )}
        </ul>
        <ul className="gnb-user">
          {!loginUser ? (
            <>
              <li>
                <Link to="/login">Log in</Link>
              </li>
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
            </>
          ) : (
            <>
              <li onClick={handleLogout}>Logout</li>
              <li>
                <span className="user-wrapper">
                  <img
                    src={process.env.PUBLIC_URL + loginUser.imgUrl}
                    alt="user profile"
                    className="user"
                  />
                </span>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
