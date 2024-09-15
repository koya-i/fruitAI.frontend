import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (userId === 'riyakumari2641@gmail.com' && password === '93047') {
      navigate('/home'); 
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Login</h2>
        <input 
          type="text" 
          placeholder="Phone number, username, or email" 
          value={userId} 
          onChange={(e) => setUserId(e.target.value)} 
          style={styles.input} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={styles.input} 
        />
        <button onClick={handleLogin} style={styles.loginButton}>Log In</button>

        <p style={styles.orText}>OR</p>

        <div style={styles.socialContainer}>
          <button style={{ ...styles.socialButton, ...styles.socialButtonFacebook }}>Facebook</button>
          <button style={{ ...styles.socialButton, ...styles.socialButtonGoogle }}>Google</button>
        </div>

        <p style={styles.signupText}>
          Don't have an account? <a href="/signup" style={styles.signupLink}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #FF6F61, #D3A9A7)', // Soft gradient
    fontFamily: "'Roboto', sans-serif",
    padding: '20px',
  },
  loginBox: {
    width: '100%',
    maxWidth: '350px',
    padding: '30px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)', // Soft shadow
    textAlign: 'center',
  },
  title: {
    fontSize: '2rem',
    color: '#333', // Darker text for better contrast
    marginBottom: '20px',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    boxSizing: 'border-box',
    backgroundColor: '#f7f7f7', // Very light background
  },
  loginButton: {
    width: '100%',
    padding: '15px',
    backgroundColor: '#007bff', // Bootstrap blue
    border: 'none',
    borderRadius: '25px',
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  loginButtonHover: {
    backgroundColor: '#0056b3', // Darker blue for hover
    transform: 'scale(1.05)',
  },
  orText: {
    margin: '20px 0',
    fontSize: '1rem',
    color: '#666',
  },
  socialContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginTop: '20px',
  },
  socialButton: {
    padding: '12px',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
    fontWeight: '600',
    color: '#fff',
    border: 'none',
  },
  socialButtonFacebook: {
    backgroundColor: '#4267B2', // Facebook color
  },
  socialButtonGoogle: {
    backgroundColor: '#DB4437', // Google color
  },
  signupText: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#333',
  },
  signupLink: {
    color: '#007bff', // Consistent blue color
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Login;





