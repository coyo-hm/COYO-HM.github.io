import { useRouter } from "next/router";

const BlogTagPage = () => {
  const { query } = useRouter();

  console.log("TagPage");
  console.log(query);
  return <>TAG PAGE</>;
};

export default BlogTagPage;
