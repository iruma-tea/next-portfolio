import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SingleBlog = () => {
  return <h1>記事ページ</h1>;
};

export default SingleBlog;

export async function generateStaticParams() {
  async function getAllBlogs() {
    const files = fs.readdirSync(path.join("data"));
    const blogs = files.map((filename) => {
      const slug = filename.replace(".md", "");
      const fileData = fs.readFileSync(path.join("data", filename), "utf-8");
      const { data } = matter(fileData);
      return {
        frontmatter: data,
        slug: slug,
      };
    });
    return {
      blogs: blogs,
    };
  }
  const { blogs } = await getAllBlogs();
  const paths = blogs.map((blog) => `/${blog.slug}`);
  return paths;
}
