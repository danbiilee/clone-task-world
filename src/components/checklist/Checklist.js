import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdFace } from 'react-icons/md';
import './Checklist.scss';

const Checklist = ({ chkList }) => {
  chkList.map(item => console.log(item.id));
  return (
    <div className="Checklist">
      {chkList.map(item => (
        <div className="chklist-wrapper" key={item.id}>
          <div className="chkbox">
            {item.isDone ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </div>
          <div className="chktxt">
            {React.createElement(item.assignedMber.profile)}
            <span>{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Checklist;
