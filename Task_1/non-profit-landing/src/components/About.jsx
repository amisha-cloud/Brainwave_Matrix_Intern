import React from 'react';

const About = () => {
  const styles = {
    section: {
      padding: '60px 20px',
      textAlign: 'center',
      background: '#edf6f9',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: '600',
      color: '#2c5282', // Dark blue
      marginBottom: '20px',
    },
    paragraph: {
      fontSize: '1.125rem',
      color: '#4a5568', // Dark gray
      maxWidth: '900px',
      margin: '0 auto',
      lineHeight: '1.8',
    },
    button: {
      marginTop: '20px',
      backgroundColor: '#38a169', // Green
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      textDecoration: 'none',
      fontSize: '16px',
      display: 'inline-block',
    },
    buttonHover: {
      backgroundColor: '#2f855a', // Darker green
    },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        We are a non-profit organization focused on improving lives by providing access to education, healthcare, and clean water. Our mission is to empower communities and help them build sustainable futures. Join us in creating a better world!
      </p>
      <a
        href="#donate"
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = styles.buttonHover.backgroundColor}
        onMouseLeave={(e) => e.target.style.backgroundColor = styles.button.backgroundColor}
      >
        Join Our Mission
      </a>
    </section>
  );
};

export default About;
