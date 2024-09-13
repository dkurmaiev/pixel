// src/pages/RegisterPage.js

import React, { useState } from 'react';
import './RegisterPage.css'; // Подключаем файл стилей

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика регистрации
    console.log('Registering with:', formData);
  };

  return (
    <div className="register-page">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          value={formData.name}
          onChange={e => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={e => setFormData({ ...formData, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={formData.password}
          onChange={e => setFormData({ ...formData, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
