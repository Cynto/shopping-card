import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  const [navColor, setNavColor] = useState({ color: 'white' });
  const [underlineClass, setUnderlineClass] = useState('white-underline');
  const [borderClass, setBorderClass] = useState('no-border');

  const setNavColorFunction = (color) => {
    setNavColor({ color: color });
  };

  return (
    <div className="nav-container">
      <nav className={`navbar ${borderClass}`}>
        <ul className="nav-links">
          <li>
            <NavLink
              onClick={() => {
                setNavColorFunction('white');
                setUnderlineClass('white-underline');
                setBorderClass('no-border')
              }}
              style={navColor}
              className={`title nav-link text underline-color ${underlineClass}`}
              to="/"
            >
              InTech
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={() => {
                setNavColorFunction('#1f1f1f');
                setUnderlineClass('black-underline');
                setBorderClass('bottom-border')
              }}
              style={navColor}
              className={`shop nav-link text underline-color ${underlineClass}`}
              to="/shop"
            >
              Shop
            </NavLink>
          </li>
          <li>
            <i style={navColor} className="fas fa-search nav-link search"></i>
          </li>

          <li>
            <NavLink style={navColor} to="/basket">
              <i className="fas fa-shopping-basket nav-link basket" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
