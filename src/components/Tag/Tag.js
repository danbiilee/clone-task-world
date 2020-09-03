import React from 'react';
import className from 'classnames';
import './Tag.scss';

const Tag = ({ tag }) => {
  return <div className={className('Tag', tag)}>{tag}</div>;
};

export default Tag;
