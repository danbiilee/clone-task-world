import React from 'react';
import './Deadline.scss';

const strToDate = str => {
  // str = yyyy-mm-dd
  const yy = str.substring(0, 4);
  const mm = str.substring(5, 7);
  const dd = str.substring(8);
  return new Date(yy, mm - 1, dd);
};

const handleDeadline = (stDt, endDt) => {
  const today = new Date().toISOString().substring(0, 10);
  const start = stDt && `${stDt.substring(5, 7)}월${stDt.substring(8)}일`;
  const end = endDt && `${endDt.substring(5, 7)}월${endDt.substring(8)}일`;
  let result = '';
  /*
    1. 시작일만 있는 경우: ~에 시작
    2. 마감일만 있는 경우
      a. 마감일 안 지난 경우: ~에 마감
      b. 마감일 지난 경우: 마감일 ~일 지남
    3. 둘 다 있는 경우
      a. 마감일 안 지난 경우: 시작일 - 마감일
      b. 마감일 지난 경우: 마감일 ~일 지남
  */
  if (end && today > endDt) {
    console.log(strToDate(today) - strToDate(endDt));
    //return `마감일 ${}일 지남`;
  }
  if (start && !end) {
    result = `${start}에 시작`;
  } else if (!start && end) {
    result = `${end}에 마감`;
  } else {
    result = `둘 다!`;
  }

  return result;
};

const Deadline = ({ stDt, endDt }) => {
  return <div className="Deadline">{handleDeadline(stDt, endDt)}</div>;
};

export default Deadline;
