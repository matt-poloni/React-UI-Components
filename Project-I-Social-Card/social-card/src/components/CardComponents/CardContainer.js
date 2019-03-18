import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
  return (
    <div className="wrap-card">
      <CardBanner />
      <CardContainer />
    </div>
  );
}

export default CardContainer;