import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      padding: '30px 20px', // Increased padding for more spacing
      textAlign: 'center',
      background: '#2a9df4', // Lighter blue shade for better contrast
      color: '#fff',
    },
    paragraph: {
      fontSize: '1rem',
      margin: 0,
    },
  };

  return (
    <footer style={styles.footer}>
      <p style={styles.paragraph}>© 2025 SaveTheWorld | All rights reserved</p>
    </footer>
  );
};

export default Footer;
