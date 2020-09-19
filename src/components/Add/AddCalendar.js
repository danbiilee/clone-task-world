import React from 'react';
import { ImCalendar } from 'react-icons/im';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './AddCalendar.scss';

const AddCalendar = ({
  onToggle,
  onDate,
  stDt,
  endDt,
  setStartDate,
  setEndDate,
}) => {
  return (
    <div className="AddCalendar">
      <ImCalendar className="btn" onClick={() => onToggle('date')} />
      {onDate && (
        <div className="datepicker-wrapper">
          <DatePicker
            selected={stDt}
            onChange={date => setStartDate(date)}
            isClearable
            placeholderText="시작일"
            dateFormat="yyyy-MM-dd"
          />
          <DatePicker
            selected={endDt}
            onChange={date => setEndDate(date)}
            isClearable
            placeholderText="마감일"
            dateFormat="yyyy/MM/dd"
          />
        </div>
      )}
    </div>
  );
};

export default AddCalendar;
