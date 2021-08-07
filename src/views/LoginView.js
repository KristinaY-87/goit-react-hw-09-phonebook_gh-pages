import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './views.module.css';

const initialState = {
  name: '',
  email: '',
};
export default function LoginView() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);
  const handleChange = fieldName => evt => {
    setFormData(prev => ({ ...prev, [fieldName]: evt.target.value }));
  };

  const reset = () => {
    setFormData(initialState);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn(formData));
    reset();
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Please, login!</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange('email')}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange('password')}
          />
        </label>

        <button className={s.btn} type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}
