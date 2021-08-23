import React from 'react';
import firebase from '../Firebase';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import '../css/Nav.css';

function Nav(props: any) {
  const { navColor, borderClass, underlineClass, leaveHome } = props;
  const auth = firebase.auth();
  const [user] = useAuthState(auth);
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };
  return (
    <div className="nav-container">
      <nav className={`navbar ${borderClass}`}>
        <ul className="nav-links">
          <li className="nav-link-li">
            <NavLink
              style={navColor}
              className={`title nav-link text underline-color ${underlineClass}`}
              to="/"
            >
              InTech
            </NavLink>
          </li>
          <li className="nav-link-li">
            <NavLink
              style={navColor}
              className={`shop-nav nav-link text underline-color ${underlineClass}`}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li className="nav-link-li search-link">
            <i style={navColor} className="fas fa-search nav-link search"></i>
          </li>
          <li className="nav-link-li">
            {user ? (
              <a
                style={navColor}
                className={`shop-nav nav-link text underline-color ${underlineClass}`}
                onClick={() => auth.signOut()}
              >
                Sign Out
              </a>
            ) : (
              <a
                style={navColor}
                className={`shop-nav nav-link text underline-color ${underlineClass}`}
                onClick={signInWithGoogle}
              >Sign In</a>
            )}
          </li>
          <li className="nav-link-li">
            <NavLink onClick={leaveHome} style={navColor} to="/basket">
              <i className="fas fa-shopping-basket nav-link basket-icon" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
