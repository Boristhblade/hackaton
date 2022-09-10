import './NewsCard.css';
import React from 'react';

export function NewsCard() {
  return (
    <div className='newscard'>
      <img src='./img/Rectangle 71.png' className='newscard-image' alt='newscard' />
      <div className='newscard-description'>
        Дызайн
      </div>
      <h3 className='newscard-header'>
        Назва навiны
      </h3>
      <div className='newscard-content'>
      С 5 по 9 декабря прошла Design Miami/  одна из крупнейших американских ярмарок, посвященных коллекционному дизайну, и последнее в этом году событие такого формата, на котором владельцы галерей, художники и дизайнеры смогли подвести своеобразные итоги года.
      </div>
    </div>
  )
}