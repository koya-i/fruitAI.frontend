import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [newFaq, setNewFaq] = useState({ question: '', answer: '' });
  const [editFaqId, setEditFaqId] = useState(null);
  const [editFaqData, setEditFaqData] = useState({ question: '', answer: '' });

  // Fetch FAQs on component mount
  useEffect(() => {
    axios.get('http://localhost:3000/faqs')
      .then(response => setFaqs(response.data))
      .catch(error => console.error(error));
  }, []);

  // Create new FAQ
  const handleCreateFaq = () => {
    if (newFaq.question && newFaq.answer) {
      axios.post('http://localhost:3000/faqs', newFaq)
        .then(response => setFaqs([...faqs, response.data]))
        .catch(error => console.error(error));
      setNewFaq({ question: '', answer: '' });
    }
  };

  // Delete FAQ by ID
  const handleDeleteFaq = (id) => {
    axios.delete(`http://localhost:3000/faqs/${id}`)
      .then(() => setFaqs(faqs.filter(faq => faq._id !== id)))
      .catch(error => console.error(error));
  };

  // Set FAQ for editing
  const handleEditFaq = (faq) => {
    setEditFaqId(faq._id);
    setEditFaqData({ question: faq.question, answer: faq.answer });
  };

  // Update FAQ
  const handleUpdateFaq = () => {
    axios.put(`http://localhost:3000/faqs/${editFaqId}`, editFaqData)
      .then(response => {
        setFaqs(faqs.map(faq => faq._id === editFaqId ? response.data : faq));
        setEditFaqId(null); // Reset edit mode
      })
      .catch(error => console.error(error));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>FAQ List</h2>
      {faqs.map(faq => (
        <div key={faq._id} style={styles.faqItem}>
          {editFaqId === faq._id ? (
            <div style={styles.editFaq}>
              <input
                type="text"
                value={editFaqData.question}
                onChange={(e) => setEditFaqData({ ...editFaqData, question: e.target.value })}
                style={styles.input}
              />
              <input
                type="text"
                value={editFaqData.answer}
                onChange={(e) => setEditFaqData({ ...editFaqData, answer: e.target.value })}
                style={styles.input}
              />
              <button style={{ ...styles.button, ...styles.updateButton }} onClick={handleUpdateFaq}>
                ✓
              </button>
            </div>
          ) : (
            <div style={styles.faqDetails}>
              <h4 style={styles.question}>{faq.question}</h4>
              <p style={styles.answer}>{faq.answer}</p>
              <div style={styles.actions}>
                <button style={styles.iconButton} onClick={() => handleEditFaq(faq)}>
                  ✎
                </button>
                <button style={styles.iconButton} onClick={() => handleDeleteFaq(faq._id)}>
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      <h2 style={styles.title}>Create a New FAQ</h2>
      <div style={styles.createFaq}>
        <input
          type="text"
          placeholder="Question"
          value={newFaq.question}
          onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Answer"
          value={newFaq.answer}
          onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
          style={styles.input}
        />
        <button style={{ ...styles.button, ...styles.addButton }} onClick={handleCreateFaq}>
          ＋
        </button>
      </div>
    </div>
  );
};

// Inline CSS styles with circular buttons and a simple look
const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f1f1f1',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.8rem',
    color: '#333',
    marginBottom: '15px',
    textAlign: 'center',
  },
  faqItem: {
    backgroundColor: '#ffffff',
    padding: '15px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  },
  faqDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  question: {
    fontSize: '1.2rem',
    color: '#007BFF',
    marginBottom: '5px',
  },
  answer: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '10px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
  },
  iconButton: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: 'none',
    backgroundColor: '#007BFF',
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    textAlign: 'center',
    lineHeight: '30px',
  },
  button: {
    padding: '8px 12px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  updateButton: {
    backgroundColor: '#28a745',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#007BFF',
    color: '#fff',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginBottom: '10px',
    width: '100%',
  },
  createFaq: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
  },
  editFaq: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
};

export default FaqPage;




