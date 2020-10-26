import React from 'react';
import { useDispatch } from 'react-redux';
import { getWkspace } from '../../modules/workspaces';
import className from 'classnames';
import './ListBox.scss';

const ListBox = ({ wkspaces, wkspace, onToggle, onClick, onModal }) => {
  const dispatch = useDispatch();
  const id = wkspace && wkspace._id;
  return (
    <div className={className('ListBox', { onToggle: onToggle })}>
      <ul className="outer">
        {wkspaces.map(item => (
          <li key={item._id} onClick={() => dispatch(getWkspace(item._id))}>
            <div className="inner">
              <div className="initial">
                {item.title.charAt(0).toUpperCase()}
              </div>
              <span>{item.title}</span>
              {item.privateAt === 'Y' ? (
                <img
                  className="privateAt"
                  src={process.env.PUBLIC_URL + 'resources/img/lock.png'}
                  alt="Priavate Workspace"
                />
              ) : (
                <img
                  className="privateAt"
                  src={process.env.PUBLIC_URL + 'resources/img/globe.png'}
                  alt="Public Workspace"
                />
              )}
            </div>
            {item._id === id && (
              <img
                className="check"
                src={process.env.PUBLIC_URL + 'resources/img/check-mark.png'}
                alt="Check Mark"
              />
            )}
          </li>
        ))}
        <li onClick={onModal}>Create Workspace</li>
      </ul>
    </div>
  );
};

export default ListBox;
