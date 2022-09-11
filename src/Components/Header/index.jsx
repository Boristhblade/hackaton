import { Button } from '../Button';
import './Header.css';
import React, { useEffect } from 'react';

export function Header() {
  const isAuth = localStorage.getItem('userId');
  const exitAcc = () => {
    localStorage.clear();
  }
  return (
    <div className="header">
      <div className="header-logo">
        MARAMORA.
      </div>
      <nav className="header-links">
        <a href="#">Навiны</a>
        <a href="#">Курсы</a>
        <a href="#">Best practices</a>
        <a href="#">Суполкi</a>
      </nav>
      <div className="header-auth">
        {!isAuth ?
        <>
          <a href="#">
            <img src="./img/search.png" alt="search" />
          </a>
          <a href='/registration' className="header-auth-reg">
            Рэгiстрацыя
          </a>
          <Button>
            Хачу яшчэ навiн
          </Button>
        </>: 
        <>
        <a href="#">
            <img src="./img/search.png" alt="search" />
          </a>
          <a href='/registration' className="header-auth-reg" onClick={exitAcc}>
            Выхад
          </a>
          <img src='./img/avatar.png' className='avatar-small' alt='avatar'/>
        </>}
      </div>
    </div>
  )
}