import CreatePostForm from "../components/Post/CreatePostForm";
const CreatePost = () => {
  const handlePost = (data) => {
    console.log("Post created:", data);
  };
  return (
    <div>
      <h2>Create New Post</h2>
      <CreatePostForm onSubmit={handlePost} />
    </div>
  );
};
export default CreatePost;