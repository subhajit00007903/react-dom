// src/pages/PageOne.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component

const PageOne = () => {
  return (
    <div>
      <h1>Page One</h1>
      {/* Your content for Page One */}
      <Link to="/page-two"> {/* Link to Page Two */}
        <button>Go to Page Two</button>
      </Link>
    </div>
  );
};

export default PageOne;
