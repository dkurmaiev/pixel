// src/pages/LoginPage.js

import React, { useState } from 'react';
import './LoginPage.css'; // Подключаем файл стилей

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Логика входа
    console.log('Logging in with:', formData);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
