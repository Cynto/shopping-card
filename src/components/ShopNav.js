import React from 'react';

import { NavLink } from 'react-router-dom';

function ShopNav(props) {
  
  return (
    <div className="shop-nav-container">
      <nav>
        <ul>
          <li>
            <NavLink to="/shop/">All</NavLink>
          </li>
          <li>
            <NavLink to="/shop/cases">Cases</NavLink>
          </li>
          <li>
            <NavLink to="/shop/processors">Processors</NavLink>
          </li>
          <li>
            <NavLink to="/shop/motherboards">Motherboards</NavLink>
          </li>
          <li>
            <NavLink to="/shop/graphics-cards">Graphics Cards</NavLink>
          </li>
          <li>
            <NavLink to="/shop/memory">Memory</NavLink>
          </li>
          
        </ul>
      </nav>
    </div>
  );
}

export default ShopNav;
