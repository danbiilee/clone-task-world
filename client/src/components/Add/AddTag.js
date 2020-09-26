import React from 'react';
import { MdLocalOffer, MdCheck } from 'react-icons/md';
import className from 'classnames';
import './AddTag.scss';
import Tag from '../Tag/Tag';

const AddTag = ({ onToggle, onTag, tag, handleTag }) => {
  const tagList = [
    {
      tagNo: 1,
      tagNm: 'priority',
    },
    {
      tagNo: 2,
      tagNm: 'important',
    },
    {
      tagNo: 3,
      tagNm: 'notice',
    },
  ]; // 임시
  let tempTagList = tagList.map(t => {
    if (t.tagNm === tag) return { ...t, isSelected: true };
    else return { ...t, isSelected: false };
  });

  return (
    <div className="AddTag">
      <MdLocalOffer className="btn" onClick={() => onToggle('tag')} />
      <ul className={className('taglist-wrapper', { onTag: onTag })}>
        {tempTagList.map(tag => (
          <li
            key={tag.tagNo}
            onClick={() => {
              handleTag(tag.tagNm);
            }}
          >
            <Tag tag={tag.tagNm} />
            {tag.isSelected && <MdCheck />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddTag;
