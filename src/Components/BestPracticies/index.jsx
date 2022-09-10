import { Chips } from '../Chips';
import './BestPracticies.css';
import React from 'react';

export function BestPracticies() {
  const temp = ['Bобласць', 'Bобласць', 'Bобласць', 'Bобласць', 'Bобласць'];
  return (
    <div className='bestpracticies'>
      <h2 className='bestpracticies-header'>Best practices.</h2>
      <div className='bestpracticies-container'>
        {temp.map((text, index) => (
          <Chips key={index}>
            {text}
          </Chips>
        ))}
      </div>
    </div>
  )
}