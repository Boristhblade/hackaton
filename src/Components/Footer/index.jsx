import './Footer.css';
import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useFormik } from 'formik';

export function Footer() {
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  })
  return (
    <div className='footer'>
      <Form className='footer-form'>
        <h3 className='footer-header'>Падпішыцеся на нашы навіны</h3>
        <div className='footer-form-container'>
          <Form.Group className="form-floating" controlId="email">
            <Form.Control
              className='footer-form-input'
              placeholder='Увядзіце ваш еmail'
              type='email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <Form.Label className='form-label'>Увядзіце ваш еmail</Form.Label>
          </Form.Group>
          <Button className='footer-form-submit' variant="outline-primary" type="submit">
            Падпісацца
          </Button>
        </div>
      </Form>
      <div className='footer-contacts'>
        <h3 className='footer-header'>Кантакты</h3>
        <p>hello@kropka.pro</p>
        <p>+ 375 29 555 55 55</p>
        <div>
          <a>Telegram</a>
          <a>Instagram</a>
          <a>Printerest</a>
        </div>
      </div>
      <footer className='footer-links'>
        <nav className="footer-links-list">
          <a href="#">Навiны</a>
          <a href="#">Курсы</a>
          <a href="#">Best practices</a>
          <a href="#">Суполкi</a>
          <a href="#">Лiчны кабiнет</a>
          <a href="#">Рэгiстрацыя</a>
        </nav>
        <p>Made by Kropka</p>
      </footer>
    </div>
  )
}