import React from 'react';
import { MdCheckBoxOutlineBlank, MdFace } from 'react-icons/md';
import './Checklist.scss';

const Checklist = () => {
  return (
    <div className="Checklist">
      <div className="chklist-wrapper">
        <div className="chkbox">
          <MdCheckBoxOutlineBlank />
        </div>
        <div className="chktxt">
          <MdFace />
          <span>검진 연도탭.. 왜 안돼..</span>
        </div>
      </div>
      <div className="chklist-wrapper">
        <div className="chkbox">
          <MdCheckBoxOutlineBlank />
        </div>
        <div className="chktxt">
          <MdFace />
          <span>대상자 명단 올려야 하고요</span>
        </div>
      </div>
      <div className="chklist-wrapper">
        <div className="chkbox">
          <MdCheckBoxOutlineBlank />
        </div>
        <div className="chktxt">
          <MdFace />
          <span>국립중앙 검진 데이터도 올려야 하네요</span>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
