import React, { useState } from 'react'; 
import Swal from 'sweetalert2';
import './Login.css'; 
import { validateEmail, validatePassword } from './Validations'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Validación email
    if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return;
    }

    // Validación de password
    if (!validatePassword(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must contain at least one uppercase letter, one lowercase letter, one special character, one number, and be at most 10 characters long.',
      });
      return;
    }

    // Si todo es válido, se puede proceder con el login
    Swal.fire({
      icon: 'success',
      title: 'Logged in successfully',
      text: 'You are now logged in.',
    });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </label>
        </div>

        <div className="form-actions">
          <button type="submit">Log In</button>
        </div>

        <div className="forgot-password">
          <a href="/forgot-password">Forgot the password?</a>
        </div>

        <div className="sign-up">
          <p>Not a member? <a href="/signup">Sign up here</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;