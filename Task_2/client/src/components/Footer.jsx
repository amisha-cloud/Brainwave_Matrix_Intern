const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1e293b',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    marginTop: '2rem',
    fontSize: '0.9rem',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Thinkverge. All rights reserved.</p>
      <p>Made with 💡 for mindful creators.</p>
    </footer>
  );
};

export default Footer;
