import RecentlyViewedPosts from "@/components/RecentlyViewedPosts";
import { getPosts } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};



export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <div className="space-y-8">
      <section className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          Posts
        </h1>
        <ul className="space-y-3">
          {posts.slice(0, 5).map((post: Post) => (
            <li key={post.id}>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-lg font-semibold text-zinc-950 hover:text-zinc-400"
                >
                  {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <Suspense fallback={<p>Loading recently viewed posts...</p>}>
          <RecentlyViewedPosts />
        </Suspense>
      </section>
    </div>
  );
}
