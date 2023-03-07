import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div>
      <h2>This page NOT FOUND</h2>
      <Link to="/">GO HOME</Link>
    </div>
  );
};

export default NotFoundPage;
