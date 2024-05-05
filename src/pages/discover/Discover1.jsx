import React from 'react';
import AlumniCard from './AlumniCard';
import alumniData from './alumnidata';
import "./Discover.scss";

const Discover = () => {
  return (
    <div className="discover-container">
      <h2 className="discover-heading">Discover Alumni</h2>
      <div className="alumni-row">
        {alumniData.map((alumnus) => (
          <AlumniCard key={alumnus.id} alumnus={alumnus} />
        ))}
      </div>
    </div>
  );
};

export default Discover;