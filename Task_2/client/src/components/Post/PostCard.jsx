import { useNavigate } from "react-router-dom";

const PostCard = ({ post, onDelete }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${post.id}`, { state: { post } });
  };

  return (
    <div style={{
      backgroundColor: "#2a2a2a",
      color: "#fff",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "8px"
    }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <div>
        <button onClick={handleEdit} style={{ marginRight: "10px", color: "#000" }}>Edit</button>
        <button onClick={() => onDelete(post.id)} style={{ color: "#000" }}>Delete</button>
      </div>
    </div>
  );
};

export default PostCard;
