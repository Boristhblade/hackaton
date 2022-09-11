import React from "react";
import './Button.css';

export function Button({ children, type, form }) {
  return (
    <button className="button" type={type} form={form} >
      {children}
    </button>
  )
}