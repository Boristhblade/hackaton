import { useFormik } from "formik";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { object, string } from "yup";
import { useNavigate } from 'react-router';
import './RegForm.css';

export function RegForm() {
  const [active, setActive] = useState('reg');
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      check: false,
    },
    validationSchema: object().shape({
      email: string()
        .required()
        .email('Пазначце правільны email'),
      password: string()
        .required('Гэта абавязковае поле'),
    }),
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      console.log(values);
      navigate('/profilefill');
    }
  })
  const optionClick = (e) => {
    setActive(e.target.id);
  }
  return (
    <div className="regform">
      <div className="regform-container">
        <div className="regform-choose">
          <p className={`regform-option ${active === 'reg' ? 'option-active' : ''}`} id="reg" onClick={optionClick}>Регистрация</p>
          <p className={`regform-option ${active === 'login' ? 'option-active' : ''}`} id='login' onClick={optionClick}>Вход</p>
        </div>
        <Form noValidate onSubmit={formik.handleSubmit}>
          <h2 className="regform-header">{active === 'reg' ? 'Стварыть акаунт' : 'Войти'}</h2>
          <Form.Group className='regform-input' controlId="email">
            <Form.Label className="form-label">
              Увядзіце адрас электроннай пошты
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Увядзіце ваш email"
              value={formik.values.email}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className='regform-input' controlId="password">
            <Form.Label className="form-label">
              Пароль
            </Form.Label>
            <Form.Control
              type="password"
              placeholder="Увядзіце пароль"
              value={formik.values.password}
              onChange={formik.handleChange}
              isInvalid={!!formik.errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.password}
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="dark" className="regform-submit" type="submit">
            Зарэгістравацца
          </Button>
          <Form.Group className="" controlId="check">
            <Form.Check
              type="checkbox"
              label="Пацвярджаю, што азнаёмлены, цалкам згодзен і прымаю ўмовы"
              value={formik.values.check}
              onChange={formik.handleChange}
              className='regform-checkbox'
            />
          </Form.Group>
        </Form>
        <p className="regform-bottomtext">або увайсці праз</p>
      </div>
    </div>
  )
}