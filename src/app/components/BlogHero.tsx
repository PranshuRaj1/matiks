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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {/* IMAGE: full‐width on mobile, left‐half on md+ */}
        <div className="w-full">
          <Image
            src={post.image}
            alt={post.title}
            width={600}
            height={360}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* TEXT: below image on mobile, right‐half on md+ */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-sm text-[#bababa]">
            <span>{post.date}</span>
            <span className="hidden sm:inline">|</span>
            <Link
              href={post.authorLink}
              target="_blank"
              className="hover:text-[#a9f99e] transition-colors mt-1 sm:mt-0"
            >
              {post.author}
            </Link>
          </div>

          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">
            {post.title}
          </h1>

          <p className="text-base sm:text-lg text-[#bababa]">{post.excerpt}</p>

          <div className="flex justify-center md:justify-start">
            <Link href={post.slug}>
              <button
                type="button"
                className="
                bg-transparent border cursor-pointer border-[#58eacc] border-b-4 text-white px-6 py-3 rounded-2xl   transition-colors duration-300
              "
              >
                Read More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
