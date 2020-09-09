import React from 'react';
import { MdGroupAdd, MdCheck } from 'react-icons/md';
import className from 'classnames';
import './AddMber.scss';
import { useWsState } from '../../reducers/WorkspaceContext';

const AddMber = ({ onToggle, onMber }) => {
  const workspace = useWsState();
  const { mberList } = workspace[0]; // 임시

  return (
    <div className="AddMber">
      <MdGroupAdd className="btn" onClick={() => onToggle('mber')} />
      <ul className={className('mberlist-wrapper', { onMber: onMber })}>
        {mberList.map(mber => (
          <li key={mber.mberNo}>
            <div className="info-wrapper">
              {React.createElement(mber.profile)}
              {mber.mberNm}
            </div>
            <MdCheck className="check" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddMber;
