import HeroSection from "@/app/components/BlogHero";
import BlogGrid from "@/app/components/BlogGrid";
import { blogPosts } from "@/app/components/blog-data";

export default function Blog() {
  // Featured post is the first one
  const featuredPost = blogPosts[0];
  // Rest of the posts
  const regularPosts = blogPosts.slice(1);

  return (
    <>
      <main className="container px-10 py-8 space-y-10">
        <HeroSection post={featuredPost} />
      </main>
      <div className="w-full h-auto">
        <BlogGrid posts={regularPosts} />
      </div>
    </>
  );
}
