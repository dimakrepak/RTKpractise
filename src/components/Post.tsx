import { postAPI } from "../services/PostService";
import PostItem from "./PostItem";

export function Post() {
  const { data: posts, error, isLoading } = postAPI.useFetchAllPostsQuery(10);
  return (
    <>
      {isLoading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {posts && posts.map((post) => <PostItem key={post.id} post={post} />)}
    </>
  );
}
