import React from 'react';
import { MdGroupAdd, MdCheck } from 'react-icons/md';
import className from 'classnames';
import './AddMber.scss';
import { useWsState } from '../../reducers/WorkspaceContext';

const AddMber = ({ onToggle, onMber, selectedMberList, handleMberList }) => {
  const workspace = useWsState();
  const { mberList } = workspace[0]; // 임시
  let tempMberList = [];
  if (mberList.length) {
    tempMberList = mberList.map(mber => {
      const m = selectedMberList.find(m => m.mberNo === mber.mberNo);
      if (m) return { ...mber, isSelected: true };
      else return { ...mber, isSelected: false };
    });
  }

  return (
    <div className="AddMber">
      <MdGroupAdd className="btn" onClick={() => onToggle('mber')} />
      <ul className={className('mberlist-wrapper', { onMber: onMber })}>
        {tempMberList.map(mber => (
          <li
            key={mber.mberNo}
            onClick={() => {
              const fm = mberList.find(item => item.mberNo === mber.mberNo);
              handleMberList(fm);
            }}
          >
            <div className="info-wrapper">
              {React.createElement(mber.profile)}
              {mber.mberNm}
            </div>
            {mber.isSelected && <MdCheck />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddMber;
