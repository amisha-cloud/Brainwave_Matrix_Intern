import { useState } from "react";

const CommentSection = ({ comments = [], onAddComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddComment(text);
      setText("");
    }
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <ul>
        {comments.map((cmt, idx) => (
          <li key={idx}>{cmt}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write a comment..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
};

export default CommentSection;
