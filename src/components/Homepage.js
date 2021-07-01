import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div className="homepage">
      <div className="top-homepage"></div>
      <div className="bottom-homepage">
        <div className="button-container">
          <Link to="/shop">
            <button>View Catalog</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
