import React from 'react';
import styled from 'styled-components';
import { MdCheckBoxOutlineBlank, MdFace } from 'react-icons/md';
import './Checklist.scss';

const Checklist = () => {
  return (
    <div className="Checklist">
      <div className="chkbox">
        <MdCheckBoxOutlineBlank />
      </div>
      <div className="chktxt">
        <MdFace />
        검진 연도탭.. 왜 안돼..
      </div>
    </div>
  );
};

export default Checklist;
