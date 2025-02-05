import React from 'react';
import { Link } from 'react-router-dom'; 
import './Card.css';
import data from '../../data.json';

const CardExperiences = () => {

  const listCards = data.map(card => 
    <div className="cardBody" key={card.id}>
      
      <Link to={`/volunteer/${card.title}`}>
        <img src={card.imgUrl} className="cardImg" alt={card.title}></img>
        <h5 className="cardTitle">{card.title}</h5>
      </Link>
    </div>
  );
  
  return (
    <div className="layout">
      {listCards}
    </div>
  )
}

export default CardExperiences;