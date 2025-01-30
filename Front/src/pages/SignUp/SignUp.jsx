import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './SignUp.css';
import {
  validateEmail,
  validatePassword,
  validateName,
  validateNationality,
  validateGender,
  validateBirthdate,
  validateTermsAccepted,
  validateConfirmPassword
} from './Validations';

const SignUp = () => {
  // Estado inicial del formulario con campos para los datos del usuario
  const [formData, setFormData] = useState({
    firstName: '', 
    lastName: '',  
    email: '',     
    password: '',  
    confirmPassword: '', 
    nationality: '', 
    gender: '',     
    birthdate: '',  
    termsAccepted: false, 
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const validateForm = () => {
    // Validar campos individualmente usando las funciones de Validations.jsx
    if (!validateName(formData.firstName) || !validateName(formData.lastName)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Name',
        text: 'Name and last name can only contain letters, spaces, or hyphens.',
      });
      return false;
    }

    if (!validateEmail(formData.email)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address.',
      });
      return false;
    }

    if (!validatePassword(formData.password)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Password',
        text: 'Password must be 6-10 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
      });
      return false;
    }

    if (!validateConfirmPassword(formData.password, formData.confirmPassword)) {
      Swal.fire({
        icon: 'error',
        title: 'Passwords Do Not Match',
        text: 'Please ensure both passwords are the same.',
      });
      return false;
    }

    if (!validateNationality(formData.nationality)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Nationality',
        text: 'Nationality can only contain letters, spaces, or hyphens.',
      });
      return false;
    }

    if (!validateGender(formData.gender)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Gender',
        text: 'Please select a valid gender.',
      });
      return false;
    }

    if (!validateBirthdate(formData.birthdate)) {
      Swal.fire({
        icon: 'error',
        title: 'Invalid Birthdate',
        text: 'You must be at least 18 years old to register.',
      });
      return false;
    }

    if (!validateTermsAccepted(formData.termsAccepted)) {
      Swal.fire({
        icon: 'warning',
        title: 'Terms Not Accepted',
        text: 'You must accept the terms and conditions to proceed.',
      });
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Welcome to Amani!',
      });
      // Logica para enviar el formulario o realizar otras acciones
    }
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <p>Welcome to <strong>AMANI</strong></p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-container">
          <input
              type={showPassword ? 'text' : 'password'}
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="toggle-password"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Repeat Password</label>
          <input
            type={showConfirmPassword ? 'text' : 'password'}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Repeat Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="toggle-password"
            >
              {showConfirmPassword ? 'Hide' : 'Show'}
            </button>
          </div>
         
        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            id="nationality"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="birthdate">Date of Birth</label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={formData.birthdate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group terms">
          <input
            type="checkbox"
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <a href="/terms">Terms and Conditions</a>
          </label>
        </div>

        <div className="form-actions">
          <button type="submit">Continue</button>
          <button type="button" onClick={() => Swal.fire('Registration canceled')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
