import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="branding">
        <h1 className="site-name">Thinkverge</h1>
        <p className="tagline">Where Stories Begin and Ideas Grow on the Edge of Change.</p>
      </header>

      <div className="image-gallery">
        <div className="image-card">
          <img src="/img1.jpeg" alt="Inspiration 1" />
          <div className="image-title">Signs, Signals, and Stories: Trusting the Push to Begin</div>
        </div>
        <div className="image-card">
          <img src="/img2.jpeg" alt="Inspiration 2" />
          <div className="image-title">The Library of Thought</div>
        </div>
        <div className="image-card">
          <img src="/img3.jpeg" alt="Inspiration 3" />
          <div className="image-title">Pages of Perspective</div>
        </div>
        <div className="image-card">
          <img src="/img4.jpeg" alt="Inspiration 4" />
          <div className="image-title">Mindful Moments in a Digital World</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
