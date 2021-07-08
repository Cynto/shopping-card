import React from 'react';

import { NavLink} from 'react-router-dom';

function ShopNav(props) {
  const {setCategory} = props
  return (
    <div className="shop-nav-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/shop/cases">Cases</NavLink>
          </li>
          <li>
          <NavLink to="/shop/processors">Processors</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default ShopNav;
