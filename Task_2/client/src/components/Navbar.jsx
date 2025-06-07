import { Link } from 'react-router-dom';
import './Nav.css';
import { useState } from 'react';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="logo">Thinkverge</Link>

      <ul className="nav-links">
        <li><Link to="/" className="nav-link">Home</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <button className="nav-link dropdown-btn">Account ▾</button>
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/login" className="dropdown-item">Login</Link></li>
              <li><Link to="/signup" className="dropdown-item">Signup</Link></li>
            </ul>
          )}
        </li>

        <li><Link to="/create" className="nav-link">Create Post</Link></li>
        <li><Link to="/edit/1" className="nav-link">Edit Post</Link></li>
        <li><Link to="/" className="nav-link" onClick={() => alert("Select a post to delete.")}>Delete Post</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
