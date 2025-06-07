const PostDetails = ({ post }) => {
  return (
    <div className="post-details">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default PostDetails;
