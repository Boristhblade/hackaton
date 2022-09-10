import './Footer.css';
import React from 'react';
import { Form } from 'react-bootstrap';
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
        <Form.Group className="form-floating" controlId="email">
          <Form.Control 
            placeholder='Увядзіце ваш еmail'
            type='email'
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Form.Label className='form-label'>Увядзіце ваш еmail</Form.Label>
        </Form.Group>
      </Form>
      {/* <form className='footer-form'>
        
        <div className='footer-form-container'>
          <input type='email' id='email' placeholder='Увядзіце ваш еmail'/>
          <input type='submit' value='Падпісацца'/>
        </div>
      </form> */}
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

      </footer>
    </div>
  )
}