import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [hover, setHover] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Homepage :]</h1>
      <h2 style={styles.subtitle}>"Be Healthy !!"</h2>
      <div style={styles.services}>
        <button
          style={hover === 'chat' ? { ...styles.button, ...styles.chatButton, ...styles.buttonHover } : { ...styles.button, ...styles.chatButton }}
          onMouseEnter={() => setHover('chat')}
          onMouseLeave={() => setHover(null)}
          onClick={() => navigate('/chat')}
        >
          Chat
        </button>
        <button
          style={hover === 'translator' ? { ...styles.button, ...styles.translatorButton, ...styles.buttonHover } : { ...styles.button, ...styles.translatorButton }}
          onMouseEnter={() => setHover('translator')}
          onMouseLeave={() => setHover(null)}
          onClick={() => navigate('/translator')}
        >
          Translator
        </button>
        <button
          style={hover === 'faq' ? { ...styles.button, ...styles.faqButton, ...styles.buttonHover } : { ...styles.button, ...styles.faqButton }}
          onMouseEnter={() => setHover('faq')}
          onMouseLeave={() => setHover(null)}
          onClick={() => navigate('/faq')}
        >
          FAQ
        </button>
        <button
          style={hover === 'about' ? { ...styles.button, ...styles.aboutButton, ...styles.buttonHover } : { ...styles.button, ...styles.aboutButton }}
          onMouseEnter={() => setHover('about')}
          onMouseLeave={() => setHover(null)}
          onClick={() => navigate('/about')}
        >
          About
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #f3e5f5, #e1bee7, #ce93d8, #ba68c8)',
    fontFamily: "'Poppins', sans-serif",
    padding: '20px',
  },
  title: {
    fontSize: '3rem',
    color: '#6a1b9a',
    marginBottom: '15px',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '5px',
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
  },
  subtitle: {
    fontSize: '1.8rem',
    color: '#8e24aa',
    marginBottom: '30px',
    fontWeight: '500',
  },
  services: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '800px',
  },
  button: {
    height: '100px',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    color: '#fff',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  buttonHover: {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
  },
  chatButton: {
    background: 'linear-gradient(135deg, #ff6f61, #ff8a65)',
  },
  translatorButton: {
    background: 'linear-gradient(135deg, #4dd0e1, #4fc3f7)',
  },
  faqButton: {
    background: 'linear-gradient(135deg, #66bb6a, #81c784)',
  },
  aboutButton: {
    background: 'linear-gradient(135deg, #ffa726, #ffb74d)',
    color: '#333',
  },
};

export default Home;



