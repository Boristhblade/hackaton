import './CourseAuthors.css';
import React from 'react';

export function CourseAuthors() {
  const data = [
    ['Святлана Карповiч', 'аўтар і выкладчык курса'],
    ['Кацярына Моцная', 'куратар праэкта'],
    ['Вольга Кавальчук', 'дызайнер'],
    ['Святлана Карповiч', 'аўтар і выкладчык курса'],
    ['Святлана Карповiч', 'аўтар і выкладчык курса'],
  ]
  return (
    <div className='courseauthors'>
      <h3 className='courseauthors-header'>Каманда курса</h3>
      <div className='courseauthors-container'>
        {data.map(([name, role]) => {
          return (
            <div>
              <img className='courseauthors-photo' alt='photo'/>
              <h4>{name}</h4>
              <p>{role}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}