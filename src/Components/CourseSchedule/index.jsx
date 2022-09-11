import './CourseSchedule.css';
import React from 'react';

export function CourseSchedule() {
  const data = [
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
    [ 'Мастацтва як татальны эксперымент.', 'Дата: 10.09.2022', '12.00 online сустрэча-знаёмства з выкладчыкам у Zoom.'],
  ]
  return (
    <div className='schedule'>
      <h3 className='schedule-header'>
        Расклад
      </h3>
      <div className='schedule-container'>
        {data.map(([head, date, desc], index) => (
          <div className='schedule-card' key={index}>
            <p className='schedule-index'>{`Вебінар ${index + 1}`}</p>
            <h4 className='schedule-head'>{head}</h4>
            <p>{date}</p>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}