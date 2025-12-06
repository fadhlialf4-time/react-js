import React from 'react';

// Komponen Greeting yang menerima prop name
const Greeting = ({ name = 'Budi' }) => {
  
  return (
    <div style={styles.greetingContainer}>
      <h2 style={styles.greetingText}>Halo, {name}!</h2>
      <p style={styles.welcomeText}>Selamat datang di aplikasi kami!</p>
    </div>
  );
};

// Styling untuk komponen Greeting
const styles = {
  greetingContainer: {
    padding: '20px',
    backgroundColor: '#f0f8ff',
    borderRadius: '8px',
    margin: '10px 0',
    textAlign: 'center',
    border: '1px solid #ddd',
  },
  greetingText: {
    color: '#2c3e50',
    marginBottom: '8px',
  },
  welcomeText: {
    color: '#7f8c8d',
    fontSize: '14px',
  },
};

export default Greeting;