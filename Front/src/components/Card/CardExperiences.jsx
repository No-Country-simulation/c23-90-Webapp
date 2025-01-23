import React, { useEffect, useState } from 'react';
import './Card.css';
import data from '../../data.json';

 const CardExperiences = () => {

  const listCards = data.map(card => 
    <div  className="cardBody" key={card.id}>
      <img src={card.imgUrl} className="cardImg" alt={card.title}></img>
      <h5 className="cardTitle">{card.title}</h5>
    </div>
  );
  
  return (
    <div className="layout">
      {listCards}
    </div>
  )
}
export default CardExperiences;