import { IPost } from "../models/IPost";

interface PostItemProps {
  post: IPost;
  remove: (post: IPost) => void;
  update: (post: IPost) => void;
}
export default function PostItem({ post, remove, update }: PostItemProps) {
  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    remove(post);
  };
  const handleUpdate = () => {
    const title = prompt() || "";
    update({ ...post, title });
  };
  return (
    <>
      <div
        onClick={handleUpdate}
        style={{ border: "1px solid black", height: "50px", margin: "20px " }}
      >
        {(post.id, post.title)}
        <button onClick={handleRemove}>Delete Post</button>
      </div>
    </>
  );
}
