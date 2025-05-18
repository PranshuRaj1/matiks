import type { BlogPost } from "@/app/components/blog-data";
import BlogCard from "@/app/components/BlogCard";

interface BlogGridProps {
  posts: BlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </section>
  );
}
