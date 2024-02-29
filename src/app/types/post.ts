type Post = {
  _id: string;
  title: string;
  content: string;
  category?: string;
  tags: string[];
  created_at: Date;
  updated_at: Date;
};

export default Post;
