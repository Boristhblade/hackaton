import './Courses.css';
import { Chips } from '../Chips';
import React from 'react';

export function Courses() {
  const chipsTexts = ['Графiчны дызайн', 'Motion дызайн', 'UX/UI дызайн', 'Фатаграфiя', 'I яшчэ'];
  const courses = ['Школа “Калякi-Малякi”', 'Курс дызайну ад Акадэмii Мастацтвау', 'Школа “Такiя Сякiя”', 'Design Art School', 'I яшчэ'];
  return (
    <div className='courses'>
      <h2 className='courses-header'>Курсы</h2>
      <div className='courses-chips'>
        {chipsTexts.map((text, index) => (
          <Chips key={index}>
            {text}
          </Chips>
        ))}
      </div>
      <ul className='courses-list'>
          {courses.map((text, index) => (
            <li className='courses-list-item' key={index}>
              <h3>{text}</h3>
            </li>
          ))}
      </ul>
    </div>
  )
}