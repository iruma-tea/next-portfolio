import fs from "fs";
import path from "path";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));
  console.log(files);
}

const Blog = () => {
  getAllBlogs();
  return <h1>ブログページ</h1>;
};

export default Blog;
