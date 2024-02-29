import Post from "@/app/types/post";
import Link from "next/link";

const PostCard = (props: { post: Post }) => {
  return (
    <div className="border border-gray-400 flex flex-col h-60 w-2/5">
      <div className="border-b border-gray-300 font-semibold p-2 text-center">
        {props.post.title}
      </div>
      <div className="p-2 text-start h-2/3 overflow-hidden text-ellipsis">
        {props.post.content}
      </div>
      <div className="hover:text-blue-700 p-3 text-end">
        <Link href={"/blog/post/" + props.post._id}>{"Read about"}</Link>
      </div>
    </div>
  );
};

export default PostCard;
