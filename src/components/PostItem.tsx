import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
}
export default function PostItem({ post }: PostItemProps) {
  return (
    <>
      <div
        style={{ border: "1px solid black", height: "50px", margin: "20px " }}
      >
        {(post.id, post.title)}
        <button>Delete Post</button>
      </div>
    </>
  );
}
