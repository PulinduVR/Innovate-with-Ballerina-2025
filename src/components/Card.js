import React from 'react';
import '../stylesheets/Card.css';

const Card = ({ image, name, position, club, email, contact }) => {
  return (
    <div className="card">
      <img src={image} alt={`${name}`} className="card-image" />
      <div className="card-info">
        <h3 className="card-name">{name}</h3>
        <p className="card-position">{position}</p>
        <p className="card-club">{club}</p>
        <p className="card-email">{email}</p>
        <p className="card-contact">{contact}</p>
      </div>
    </div>
  );
};

export default Card;
