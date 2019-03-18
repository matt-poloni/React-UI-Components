import React from 'react';
import './Card.css';
import CardBanner from './CardBanner.js';
import CardContent from './CardContent.js';

const CardContainer = () => {
  return (
    <div className="wrap-card">
      <a href="https://www.reactjs.org">
        <CardBanner />
        <CardContent />
      </a>
    </div>
  );
}

export default CardContainer;