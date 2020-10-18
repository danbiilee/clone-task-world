import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.scss';
import { logout } from '../../api/members';
import { getLoginUser } from '../../modules/members';

const Header = () => {
  const { data: loginUser } = useSelector(state => state.members.loginUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  useEffect(() => {
    if (loginUser) return;
    dispatch(getLoginUser());
  }, [dispatch, loginUser]);

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
