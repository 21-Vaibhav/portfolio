import BlogCard from "../components/ui/BlogCard";

interface Blog {
  title: string;
  description: string;
  link: string;
}

const BlogPage = () => {
  const blogs: Blog[] = [
    {
      title: "How I Built a Local C++ Platform",
      description:
        "Behind-the-scenes of building a full-fledged coding platform with local g++ compilation.",
      link: "/blogs/local-cpp-platform",
    },
    {
      title: "Demystifying Supabase Auth",
      description:
        "Learn how Supabase handles auth and how I integrated it into a full-stack project.",
      link: "/blogs/supabase-auth",
    },
    {
      title: "Scaling with Docker & Vercel",
      description:
        "How I use Docker for local dev and deploy seamlessly with Vercel.",
      link: "/blogs/docker-vercel-setup",
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "var(--space-12)",
      }}
    >
      <section style={{ textAlign: "center" }}>
        <h1 style={{ fontSize: "1.5rem", fontWeight: 600 }}>Blog</h1>
        <p
          style={{
            color: "var(--color-text-secondary)",
            marginTop: "var(--space-1)",
          }}
        >
          I write about the stuff I build, break, and learn.
        </p>
      </section>

      <section>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "var(--space-4)",
          }}
        >
          {blogs.map((blog, index) => (
            <BlogCard
              key={index}
              title={blog.title}
              description={blog.description}
              link={blog.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
