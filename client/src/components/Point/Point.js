import React from 'react';
import './Point.scss';

const renderSpan = point => {
  const spanList = [];
  if (point) {
    for (let i = 0; i < 5; i++) {
      if (i < point) spanList.push(<span key={i} className="isFull"></span>);
      else spanList.push(<span key={i}></span>);
    }
    return spanList;
  } else return null;
};

const Point = ({ point }) => {
  const spanList = renderSpan(point);
  return <div className="Point">{spanList && spanList.map(item => item)}</div>;
};

export default Point;
