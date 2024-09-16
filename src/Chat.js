import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fruitResponses = [
    "Hlo",
    "Fine",
    "Thanks",
    "How are you",
    "Good",
    "Apples are great for a quick energy boost!",
    "Bananas contain potassium and are a good post-workout snack.",
    "Did you know? Oranges are rich in vitamin C.",
    "Strawberries are packed with antioxidants.",
    "Nice",
    "Mangoes are called the 'King of Fruits' in many parts of the world."
  ];

  const handleSend = () => {
    if (input.trim()) {
      const userMessage = { text: input, fromUser: true };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');

      setTimeout(() => {
        const botResponse = fruitResponses[Math.floor(Math.random() * fruitResponses.length)];
        setMessages((prevMessages) => [...prevMessages, userMessage, { text: botResponse, fromUser: false }]);
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatWindow}>
        <div style={styles.messages}>
          {messages.map((msg, index) => (
            <div key={index} style={msg.fromUser ? styles.userMessage : styles.botMessage}>
              {msg.text}
            </div>
          ))}
        </div>
        <div style={styles.inputArea}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            style={styles.input}
            placeholder="Ask me about fruits..."
          />
          <button onClick={handleSend} style={styles.sendButton}>Send</button>
        </div>
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
    backgroundColor: '#f5f7fa',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  chatWindow: {
    width: '100%',
    maxWidth: '600px',
    height: '80vh',
    backgroundColor: '#ffffff',
    borderRadius: '20px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  },
  messages: {
    flex: 1,
    padding: '20px',
    overflowY: 'scroll',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#8bc34a',
    color: '#fff',
    borderRadius: '20px 20px 0 20px',
    padding: '12px 18px',
    maxWidth: '75%',
    wordBreak: 'break-word',
    fontWeight: '500',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#eeeeee',
    color: '#000',
    borderRadius: '20px 20px 20px 0',
    padding: '12px 18px',
    maxWidth: '75%',
    wordBreak: 'break-word',
    fontWeight: '500',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  inputArea: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid #ddd',
    padding: '15px',
    backgroundColor: '#f9f9f9',
  },
  input: {
    flex: 1,
    border: '1px solid #ddd',
    borderRadius: '30px',
    padding: '12px 15px',
    fontSize: '1rem',
    outline: 'none',
  },
  sendButton: {
    marginLeft: '10px',
    padding: '12px 20px',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '30px',
    color: '#fff',
    fontSize: '1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
  sendButtonHover: {
    backgroundColor: '#0056b3',
  },
};

export default Chat;

