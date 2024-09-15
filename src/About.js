import React, { useState } from 'react';

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Fruits</h1>
      <div
        style={isHovered ? { ...styles.box, ...styles.boxHover } : styles.box}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p style={styles.boxText}>
          FRUITS is an Android-based mobile app developed by NIC eGov Mobile Apps to assist registered farmers 
          in accessing updated information regarding their land details, crops grown, weather forecasts specific
           to their village, and benefits from agriculture departments. The app allows farmers to provide feedback
            via text or voice messages and check their NPCI seeding status.
        </p>
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
    background: 'linear-gradient(135deg, #f0f8ff, #cce7f0)',
    fontFamily: "'Poppins', sans-serif",
    padding: '40px',
    textAlign: 'center',
    transition: 'background 0.5s ease',
  },
  title: {
    fontSize: '3.5rem',
    color: '#4b6584',
    marginBottom: '40px',
    fontWeight: 'bold',
    textShadow: '2px 2px 8px rgba(0, 0, 0, 0.1)',
    letterSpacing: '2px',
    animation: 'fadeIn 1s ease-in-out',
  },
  box: {
    width: '85%',
    maxWidth: '600px',
    padding: '35px',
    background: 'linear-gradient(145deg, #fff1e6, #f8f9fa)',
    borderRadius: '30px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease',
    cursor: 'pointer',
    position: 'relative',
    margin: '20px 0',
    textAlign: 'left',
  },
  boxText: {
    fontSize: '1.3rem',
    color: '#333',
    lineHeight: '1.9',
    fontWeight: '400',
    letterSpacing: '0.5px',
  },
  boxHover: {
    transform: 'scale(1.08)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
    background: 'linear-gradient(145deg, #f0e4d7, #e9ecef)',
  },
};

export default About;




