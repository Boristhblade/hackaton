import React from "react";
import './Logo.css';
import { Button } from "../Button";

export function Logo() {
  return (
    <div className="logo">
      <img src="./img/logo.png" className="logo-img" alt="logo" />
      <p className="logo-text">ЗА МАРАЙ</p>
      <a href="#">
        <Button>
          Iйсцi
        </Button>
      </a>
    </div>
  )
}