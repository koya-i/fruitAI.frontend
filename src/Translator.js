import React, { useState } from 'react';

const translations =  {
        'apple': 'सेब',
        'banana': 'केला',
        'orange': 'संतरा',
        'grape': 'अंगूर',
        'mango': 'आम',
        'pineapple': 'अनानास',
        'watermelon': 'तरबूज',
        'papaya': 'पपीता',
        'kiwi': 'कीवी',
        'peach': 'आड़ू',
        'pear': 'नाशपाती',
        'plum': 'आलूबुखारा',
        'pomegranate': 'अनार',
        'strawberry': 'स्ट्रॉबेरी',
        'blueberry': 'ब्लूबेरी',
        'blackberry': 'ब्लैकबेरी',
        'raspberry': 'रसभरी',
        'cherry': 'चेरी',
        'dragon fruit': 'ड्रैगन फल',
        'lychee': 'लीची',
        'guava': 'अमरूद',
        'fig': 'अंजीर',
        'date': 'खजूर',
        'jackfruit': 'कटहल',
        'coconut': 'नारियल',
        'apricot': 'खुबानी',
        'avocado': 'एवोकाडो',
        'lemon': 'नींबू',
        'lime': 'नींबू',
        'tangerine': 'मौसंबी',
        'grapefruit': 'चकोतरा',
        'passion fruit': 'कृष्णा फल',
        'melon': 'खरबूजा',
        'cantaloupe': 'खरबूज',
        'honeydew melon': 'हनीड्यू मेलोन',
        'olive': 'जैतून',
        'persimmon': 'तेंदू फल',
        'starfruit': 'कमरख',
        'sapodilla': 'चीकू',
        'gooseberry': 'आंवला',
        'custard apple': 'सीताफल',
        'tamarind': 'इमली',
        'mangosteen': 'मैंगोस्टीन'
};

const Translator = () => {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = () => {
    // Simple translation logic
    const translated = translations[inputText.toLowerCase()] || 'Translation not available';
    setTranslatedText(translated);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Translator</h2>
      <div style={styles.inputContainer}>
        <input 
          type="text" 
          value={inputText} 
          onChange={(e) => setInputText(e.target.value)} 
          placeholder="Enter text here..." 
          style={styles.input}
        />
        <button onClick={handleTranslate} style={styles.button}>Translate</button>
      </div>
      <div style={styles.outputContainer}>
        <p style={styles.output}>{translatedText}</p>
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
      backgroundColor: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)',
      fontFamily: "'Poppins', sans-serif",
      padding: '20px',
    },
    title: {
      fontSize: '2.5rem',
      color: '#4A4A4A',
      marginBottom: '20px',
      fontWeight: '700',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
    },
    inputContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      maxWidth: '500px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      padding: '30px',
      transition: 'transform 0.3s ease', // Hover effect transition
    },
    input: {
      width: '100%',
      padding: '15px',
      borderRadius: '10px',
      border: '1px solid #ddd',
      fontSize: '1rem',
      marginBottom: '20px', // Increased spacing for a clean look
      boxSizing: 'border-box',
      backgroundColor: '#f0f4f8',
    //   boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.05)', // Subtle inner shadow
    },
    button: {
      padding: '15px',
      backgroundColor: '#FF6F61', // Bright coral color for buttons
      border: 'none',
      borderRadius: '10px',
      color: '#fff',
      fontSize: '1.1rem',
      cursor: 'pointer',
      fontWeight: '600',
    //   transition: 'background-color 0.3s ease, transform 0.2s ease',
    },
    buttonHover: {
      backgroundColor: '#FF3B3F', // Darker on hover
      transform: 'scale(1.05)', // Slight zoom-in on hover
    },
    outputContainer: {
      marginTop: '30px',
      padding: '20px',
      backgroundColor: '#ffffff',
      borderRadius: '10px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      width: '100%',
      maxWidth: '500px',
      textAlign: 'center',
    },
    output: {
      fontSize: '1.4rem',
      color: '#333',
      fontWeight: '600',
      letterSpacing: '0.5px',
      lineHeight: '1.6',
    },
  };
  

export default Translator;

