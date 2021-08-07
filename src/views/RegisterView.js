import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from './views.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

export default function RegisterView() {
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
    dispatch(authOperations.register(formData));
    reset();
  };

  return (
    <div className={s.wrap}>
      <h1 className={s.title}>Please, sign up!</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange('name')}
          />
        </label>

        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={FormData.email}
            onChange={handleChange('email')}
          />
        </label>

        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={FormData.password}
            onChange={handleChange('password')}
          />
        </label>

        <button className={s.btn} type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  // onRegister: (data) => dispatch(authOperations.register(data))
  onRegister: authOperations.register,
};

// export default connect(null, mapDispatchToProps)(RegisterView);
