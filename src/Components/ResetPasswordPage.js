// src/components/ResetPasswordPage.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateUserPassword } from '../localStorage';

function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserPassword(email, password);
    alert('Password has been reset successfully.');
    navigate('/');
  };

  return (
    <div className="container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <label>New Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
