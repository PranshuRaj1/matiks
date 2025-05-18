import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/app/components/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className=" group rounded-lg border border-border bg-card overflow-hidden transition-all hover:shadow-md w-full">
      <Link href={post.slug} className="block">
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={320}
            height={180}
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span>|</span>
            <span>{post.author}</span>
          </div>

          <h2 className="text-lg font-semibold line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h2>
        </div>
      </Link>
    </article>
  );
}
