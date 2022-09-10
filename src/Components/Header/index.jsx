import { Button } from '../Button';
import './Header.css';

export function Header() {
  return (
    <div className="header">
      <div className="header-logo">
        Kropka
      </div>
      <nav className="header-links">
        <a href="#">Навiны</a>
        <a href="#">Курсы</a>
        <a href="#">Best practices</a>
        <a href="#">Суполкi</a>
      </nav>
      <div className="header-auth">
        <a href="#">
          <img src="./img/search.png" alt="search" />
        </a>
        <a href='#' className="header-auth-reg">
          Рэгiстрацыя
        </a>
        <Button />
      </div>
    </div>
  )
}