import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const EditPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  const [title, setTitle] = useState(post?.title || "");
  const [content, setContent] = useState(post?.content || "");

  const handleUpdate = () => {
    alert("Post updated (simulated)");
    navigate("/");
  };

  return (
    <div style={{ padding: "2rem", color: "#fff" }}>
      <h2>Edit Post</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        rows={6}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleUpdate} style={{ padding: "10px 20px" }}>
        Update
      </button>
    </div>
  );
};

export default EditPost;
