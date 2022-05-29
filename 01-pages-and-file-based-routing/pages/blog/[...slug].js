import { useRouter } from "next/router";

const BlogPosts = () => {
  const router = useRouter();

  console.log(router.query);
  
  return (
    <div>
      <h1 className="title">The BlogPosts page</h1>
    </div>
  );
};

export default BlogPosts;
