import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../api/members';
import { getLoginUser } from '../../modules/members';
import { getWkspaces, getWkspace } from '../../modules/workspaces';
import './Header.scss';
import ListBox from '../ListBox/ListBox';

const Header = () => {
  const dispatch = useDispatch();
  const { data: loginUser } = useSelector(state => state.members.loginUser);
  const { data: wkspaces } = useSelector(state => state.workspaces.workspaces);
  const { data: wkspace } = useSelector(state => state.workspaces.workspace);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const [onWsList, setOnWsList] = useState(false);
  const toggleList = type => {
    if (type === 'ws') {
      setOnWsList(!onWsList);
    }
  };

  const onClick = (type, id) => {
    console.log(type, id);
    if (type === 'wkspace') {
      dispatch(getWkspace(id));
    }
  };

  useEffect(() => {
    if (loginUser) {
      dispatch(getWkspaces());
      return;
    }
    dispatch(getLoginUser());
  }, [dispatch, loginUser]);

  useEffect(() => {
    if (wkspaces) {
      dispatch(getWkspace(wkspaces[0]._id));
    }
    return;
  }, [dispatch, wkspaces]);

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
          {loginUser && wkspaces && (
            <li className="ws-list" onClick={() => toggleList('ws')}>
              <span className="ws-initial">
                {wkspaces[0].title.charAt(0).toUpperCase()}
              </span>
              <span>{wkspaces[0].title}</span>
              <img
                className="dot-menu"
                src={process.env.PUBLIC_URL + 'resources/img/dot-menu.png'}
                alt="Workspace Menu"
              />
              <ListBox
                wkspaces={wkspaces}
                wkspace={wkspace}
                onToggle={onWsList}
                onClick={onClick}
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
