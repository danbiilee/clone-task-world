import React from 'react';
import classNames from 'classnames';
import './Deadline.scss';

const today = new Date().toISOString().substring(0, 10);

const strToDate = str => {
  // str = yyyy-mm-dd
  const yy = str.substring(0, 4);
  const mm = str.substring(5, 7);
  const dd = str.substring(8);
  return new Date(yy, mm - 1, dd);
};

/*
  1. 시작일만 있는 경우: ~에 시작
  2. 마감일만 있는 경우
    a. 마감일 안 지난 경우: ~에 마감
    b. 마감일 지난 경우: 마감일 ~일 지남
  3. 둘 다 있는 경우
    a. 마감일 안 지난 경우: 시작일 - 마감일
    b. 마감일 지난 경우: 마감일 ~일 지남
  4. 완료된 경우: ~에 완료
*/
const handleDeadline = (stDt, endDt, finDt) => {
  const start = stDt && `${stDt.substring(5, 7)}월${stDt.substring(8)}일`;
  const end = endDt && `${endDt.substring(5, 7)}월${endDt.substring(8)}일`;
  const fin = finDt && `${finDt.substring(5, 7)}월${finDt.substring(8)}일`;
  let result = '';

  if (fin) {
    return `${fin}에 완료`;
  }
  if (end && today > endDt) {
    const diff = (strToDate(today) - strToDate(endDt)) / (1000 * 60 * 60 * 24);
    return `마감일 ${diff}일 지남`;
  }

  if (start && !end) {
    result = `${start}에 시작`;
  } else if (!start && end) {
    result = `${end}에 마감`;
  } else {
    result = `${start} - ${end}`;
  }
  return result;
};

const Deadline = ({ stDt, endDt, finDt }) => {
  const isOver = endDt && today > endDt ? true : false; // 기한 지남 여부
  const isFin = finDt ? true : false; // 완료 여부
  return (
    <div
      className={classNames('Deadline', { isOver: isOver }, { isFin: isFin })}
    >
      {handleDeadline(stDt, endDt, finDt)}
    </div>
  );
};

export default Deadline;
