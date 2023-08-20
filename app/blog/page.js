import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

async function getAllBlogs() {
  const files = fs.readdirSync(path.join("data"));
  // console.log(files);

  const blogs = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const fileData = fs.readFileSync(path.join("data", filename), "utf-8");
    // console.log(fileData);
    const { data } = matter(fileData);
    return {
      frontmatter: data,
      slug: slug,
    };
  });

  const orderedBlogs = blogs.sort((a, b) => {
    return b.frontmatter.id - a.frontmatter.id;
  });

  return {
    blogs: orderedBlogs,
  };
}

const Blog = async () => {
  // getAllBlogs();
  const { blogs } = await getAllBlogs();
  console.log(blogs);
  return (
    <div>
      <h1>ブログページ</h1>
      {blogs.map((blog, index) => (
        <div key={index}>
          <h2>{blog.frontmatter.title}</h2>
          <p>{blog.frontmatter.date}</p>
          <Link href={`/blog/${blog.slug}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default Blog;
