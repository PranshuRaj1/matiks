import Image from "next/image";
import Link from "next/link";

import type { BlogPost } from "@/app/components/blog-data";

interface HeroSectionProps {
  post: BlogPost;
}

export default function HeroSection({ post }: HeroSectionProps) {
  return (
    <>
      <title>Matiks Blogs</title>
      <section className="grid grid-cols-[75%_25%] gap-4 lg:grid-cols-5  items-center px-30">
        <div className="lg:col-span-3 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-muted-foreground">
            <span>{post.date}</span>
            <span className="hidden sm:inline">|</span>
            <Link
              href={post.authorLink}
              target="_blank"
              className="hover:text-foreground transition-colors mt-1 sm:mt-0"
            >
              {post.author}
            </Link>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground">
            {post.excerpt}
          </p>

          <div className="flex justify-center sm:justify-start">
            <Link href={post.slug}>
              <button
                type="button"
                className="
          w-full sm:w-auto
          px-4 py-2 sm:px-6 sm:py-3
          text-sm sm:text-base
          bg-[#a9f99e] text-neutral-900
          rounded-md font-bold
          transition-colors duration-300
          hover:bg-opacity-90
        "
              >
                Read More
              </button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 rounded-lg overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={460}
            height={268}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </>
  );
}
