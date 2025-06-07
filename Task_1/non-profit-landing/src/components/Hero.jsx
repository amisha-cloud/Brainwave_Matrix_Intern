import React from 'react';

const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        backgroundColor: '#e8f5e9', // Soft light green background
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Text Content */}
      <div
        style={{
          zIndex: 2,
          maxWidth: '800px',
          marginBottom: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '48px',
            lineHeight: '1.2',
            marginBottom: '20px',
            color: '#2e7d32', // Darker green for text
            fontWeight: 'bold',
          }}
        >
          Together, We Can Make a Difference!
        </h1>
        <p
          style={{
            fontSize: '22px',
            marginBottom: '30px',
            color: '#555',
          }}
        >
          Empowering rural communities through sustainable farming, education, and healthcare initiatives.
        </p>
        <a
          href="#donate"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '15px 30px',
            textDecoration: 'none',
            fontSize: '18px',
            borderRadius: '8px',
            transition: 'background-color 0.3s',
          }}
        >
          Donate Now
        </a>
      </div>

      {/* Images Section */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          width: '100%',
          maxWidth: '1200px',
          zIndex: 1,
        }}
      >
        {/* Image Card 1 */}
        <div style={{ width: '300px', textAlign: 'center' }}>
          <img
            src="Farming.jpg"
            alt="Villagers working in fields"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#2e7d32' }}>Sustainable Farming</p>
        </div>

        {/* Image Card 2 */}
        <div style={{ width: '300px', textAlign: 'center' }}>
          <img
            src="Edu.jpg"
            alt="Kids learning under trees"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#2e7d32' }}>Education for All</p>
        </div>

        {/* Image Card 3 */}
        <div style={{ width: '300px', textAlign: 'center' }}>
          <img
            src="Health.jpg"
            alt="Healthcare workers assisting people"
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            }}
          />
          <p style={{ marginTop: '10px', fontWeight: 'bold', color: '#2e7d32' }}>Healthcare for Villages</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
