import { useFormik } from "formik";
import React from "react";
import { Form, Button } from "react-bootstrap";
import { object, string } from "yup";
import './RegForm.css';

export function RegForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
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
  })
  return (
    <div className="regform">
      <div className="regform-container">
        <Form>
          <h2 className="regform-header">Стварыть акаунт</h2>
          <Form.Group className='regform-input'>
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
          <Form.Group className='regform-input'>
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
          <Button variant="dark" className="regform-submit">
            Зарэгістравацца
          </Button>
        </Form>
      </div>
    </div>
  )
}