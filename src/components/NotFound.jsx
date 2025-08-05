import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <Link to="/" className="back-home-btn">Go Back Home</Link>
    </div>
  );
};

export default NotFound;
