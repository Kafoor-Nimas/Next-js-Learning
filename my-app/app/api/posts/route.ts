import { NextResponse } from "next/server";

export async function GET() {
  const posts = [
    { id: 1, title: "Hello World" },
    { id: 2, title: "My Second Post" },
  ];
  return NextResponse.json(posts);
}
