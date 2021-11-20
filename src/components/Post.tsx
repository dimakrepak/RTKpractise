import { IPost } from "../models/IPost";
import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export function Post() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  const [createPost, {}] = postAPI.useCreatePostMutation();
  const [deletePost, {}] = postAPI.useDeletePostMutation();
  const [updatePost, {}] = postAPI.useUpdatePostMutation();

  const handleCreatePost = async () => {
    const title = prompt();
    await createPost({ title, body: title } as IPost);
  };

  const handleRemove = (post: IPost) => {
    deletePost(post);
  };
  const handleUpdate = (post: IPost) => {
    updatePost(post);
  };
  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {posts &&
        posts.map((post) => (
          <PostItem
            remove={handleRemove}
            update={handleUpdate}
            key={post.id}
            post={post}
          />
        ))}
      <button onClick={handleCreatePost}>Add new post</button>
    </>
  );
}
