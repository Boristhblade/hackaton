import './ProfileFill.css';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useFormik } from 'formik';
import { Button } from '../Button';

export function ProfileFill() {
  const [active, setActive] = useState('user');
  const formik = useFormik({
    initialValues: {
      name: '',
      profession: '',
      phone: '',
      email: '',
      about: '',
      telegram: '',
      facebook: '',
      linkedin: '',
      twitter: '',
    },
    onSubmit: (values) => {
      console.log(values);
    
    }
  })
  const clickHandler = (e) => {
    setActive(e.target.id);
  }
  return (
    <div className='profilefill'>
      <h2 className='profile-header'>Рэгістрацыя</h2>
      <div className='profile-options'>
        <a onClick={clickHandler} className={`${active === 'author' ? 'option-active' : ''}`} id='author'>Аутар</a>
        <a onClick={clickHandler} className={`${active === 'user' ? 'option-active' : ''}`} id='user'>Карыстальнік</a>
      </div>
      <Form className='profile-form' id="form1" onSubmit={formik.handleSubmit}>
        <div className='profile-form-column'>
          <Form.Group controlId='name' className='profile-form-item'>
            <Form.Label>
              Iмя
            </Form.Label>
            <Form.Control
              placeholder='Увядзіце ваша імя'
              value={formik.values.name}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='profession' className='profile-form-item'>
            <Form.Label>
              Сфера дзейнасцi
            </Form.Label>
            <Form.Control
              placeholder='Сфера дзейнасцi'
              value={formik.values.profession}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='phone' className='profile-form-item'>
            <Form.Label>
              Тэлефон
            </Form.Label>
            <Form.Control
              placeholder='+ 375 29 123 45 67'
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='email' className='profile-form-item'>
            <Form.Label>
              E-mail
            </Form.Label>
            <Form.Control
              placeholder='Увядзіце ваш email'
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='about' className='profile-form-item'>
            <Form.Label>
              Пра сябе
            </Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={formik.values.about}
              onChange={formik.handleChange}
              placeholder={active === 'author' ? ' Раскажыце аб сабе і аб кампаніі' : 'Раскажыце аб сабе'}
            />
          </Form.Group>
        </div>
        <div className='profile-form-column'>
          <Form.Group controlId='telegram' className='profile-form-item'>
            <Form.Label>
              Telegram
            </Form.Label>
            <Form.Control
              placeholder='Увядзіце ваш нік'
              value={formik.values.telegram}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='facebook' className='profile-form-item'>
            <Form.Label>
              Facebook
            </Form.Label>
            <Form.Control
              placeholder='Дадайце спасылку'
              value={formik.values.facebook}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='linkedin' className='profile-form-item'>
            <Form.Label>
              Linkedin
            </Form.Label>
            <Form.Control
              placeholder='Дадайце спасылку'
              value={formik.values.linkedin}
              onChange={formik.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='twitter' className='profile-form-item'>
            <Form.Label>
              Twitter
            </Form.Label>
            <Form.Control
              placeholder='Дадайце спасылку'
              value={formik.values.twitter}
              onChange={formik.handleChange}
            />
          </Form.Group>
        </div>
        <div className='profile-form-column'>
          <div className='profile-upload-pic'>
            <Form.Control 
              type='file'
              accept='image/*'
            />
            {/* хз как картинку добавлять, потом */}
          </div>
        </div>
      </Form>
      <div className='profile-fill-buttons'>
        <Button>
          Вярнуцца назад
        </Button>
        <Button type='submit' form='form1'>
          Захаваць
        </Button>
      </div>
    </div>
  )
}