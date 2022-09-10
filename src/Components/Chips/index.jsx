import './Chips.css';
import React from 'react';

export function Chips({ children }) {
  return (
    <button className='chips'>
      {children}
    </button>
  )
}