import React from 'react';
import { FaThumbsUp, FaUsers } from 'react-icons/fa';
import './AlumniCard.css';

const AlumniCard = ({ alumnus }) => {
  const { name, title, company, image, following, followers, likes } = alumnus;

  return (
    <div className="alumni-card">
      <div className="alumni-image-container">
        <img src={image} alt={name} className="alumni-image" />
        <div className="alumni-hover-effect">
          <button className="follow-button">
            {following ? 'Following' : 'Follow'}
            <span className="follow-count">{following || 0}</span>
          </button>
          <button className="like-button">
            <FaThumbsUp />
            <span className="like-count">{likes || 0}</span>
          </button>
          <button className="followers-button">
            <FaUsers />
            <span className="followers-count">{followers || 0}</span>
          </button>
        </div>
      </div>
      <div className="alumni-info">
        <h3 className="alumni-name">{name}</h3>
        <p className="alumni-title">{title}</p>
        <p className="alumni-company">{company}</p>
      </div>
    </div>
  );
};

export default AlumniCard;