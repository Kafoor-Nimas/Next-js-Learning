import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page",
  description: "This is the about page of our Next.js application.",
};
const page = () => {
  return <div>AboutPage</div>;
};

export default page;
