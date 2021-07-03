import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
  const { leaveHome, openHome } = props;

  useEffect(() => {
   openHome()
  }, [])
  return (
    <div className="homepage">
      <div className="top-homepage"></div>
      <div className="bottom-homepage">
        <div className="button-container">
          <Link onClick={leaveHome} to="/shop">
            <button>View Catalog</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
