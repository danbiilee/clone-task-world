import React from 'react';
import './SubHeader.scss';
import {
  MdKeyboardArrowLeft,
  MdPeopleOutline,
  MdSettings,
} from 'react-icons/md';
import { TiStarOutline } from 'react-icons/ti';

const SubHeader = () => {
  return (
    <header className="SubHeader">
      <ul>
        <li className="btn-back">
          <MdKeyboardArrowLeft />
        </li>
        <li className="btn-star">
          <TiStarOutline />
        </li>
        <li className="title">모니터링</li>
      </ul>
      <ul className="subHeader-outline">
        <li className="btn-members">
          <MdPeopleOutline /> 6
        </li>
        <li className="btn-setting">
          <MdSettings />
        </li>
      </ul>
    </header>
  );
};

export default SubHeader;
