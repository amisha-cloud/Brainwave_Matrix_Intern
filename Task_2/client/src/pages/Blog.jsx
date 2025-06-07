// src/pages/Blog.js
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css"; // Reuse the styling

const Blog = () => {
  const navigate = useNavigate();

  const [posts, setPosts] = useState([
    { id: 1, title: "First Blog Post", content: "This is the first blog post." },
    { id: 2, title: "Second Blog Post", content: "This is the second blog post." },
  ]);

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this post?");
    if (confirmed) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <div className="home-container">
      <h2 className="home-title">All Blog Posts</h2>

      {posts.length === 0 ? (
        <p className="no-posts">No posts available.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id} className="post-card">
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="button-group">
              <button
                onClick={() => navigate(`/edit/${post.id}`)}
                className="edit-btn"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="delete-btn"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;
