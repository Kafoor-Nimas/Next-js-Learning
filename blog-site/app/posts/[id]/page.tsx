export default async function PostPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    cache: "force-cache", // or next: { revalidate: 3600 } to revalidate hourly
  });
  const post = await response.json();
  return (
    <article className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-center text-4xl font-semibold text-zinc-950 sm:text-5xl">
          {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
        </h1>
        <p className="text-lg leading-8 text-zinc-700">{post.body}</p>
      </div>
    </article>
  );
}
