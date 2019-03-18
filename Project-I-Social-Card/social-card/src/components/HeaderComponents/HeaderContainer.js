import React from 'react';
import './Header.css';
import 'ImageThumbnail' from './ImageThumbnail.js';
import 'HeaderTitle' from './HeaderTitle.js';
import 'HeaderContent' from './HeaderContent.js';

const HeaderContainer = () => {
  return (
    <div className="wrap-header">
      <ImageThumbnail />
      <HeaderTitle />
      <HeaderContent />
    </div>
  );
}

export default HeaderContainer;