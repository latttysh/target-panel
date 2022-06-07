import React from 'react';
import './SubHeader.scss';

const SubHeader = ({ title }) => {
  return (
    <div className="subheader">
      <h2>{title}</h2>
    </div>
  );
};

export default SubHeader;
