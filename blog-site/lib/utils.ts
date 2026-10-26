import { cacheTag } from "next/cache";
import { cacheLife } from "next/cache";

export const getPosts = async () => {
  "use cache";
  cacheLife("days");
  cacheTag("posts")
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache", // or next: { revalidate: 3600 } to revalidate hourly
  });
  return response.json();
};
