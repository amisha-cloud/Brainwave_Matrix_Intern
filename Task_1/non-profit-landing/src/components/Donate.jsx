import React from 'react';

const Donate = () => {
  const styles = {
    donate: {
      padding: '60px 20px',
      textAlign: 'center',
      background: '#edf6f9', 
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#0077b6',
      marginBottom: '20px',
    },
    button: {
      marginTop: '20px',
      padding: '12px 30px',
      fontSize: '18px',
      backgroundColor: '#0077b6',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#023e8a', 
    },
  };

  return (
    <section id="donate" style={styles.donate}>
      <h2 style={styles.heading}>Support Our Mission</h2>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
        aria-label="Donate Now"
      >
        Donate Now
      </button>
    </section>
  );
};

export default Donate;
