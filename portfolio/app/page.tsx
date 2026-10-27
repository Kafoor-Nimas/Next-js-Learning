import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <section className="flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Hi, I&apos;m <span className="text-blue-600">Nimas</span> 👋
          </h1>
          <p className="max-w-md text-lg text-zinc-600">
            Full-Stack Developer specializing in MERN Stack & Next.js. Building
            scalable web applications with clean architecture.
          </p>
          <div className="flex gap-4">
            <Link
              href={"/projects"}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-blue-600 sm:h-40 sm:w-40">
          <Image
            src={"/avatar.jpeg"}
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Tech Stack List */}
      <section className="space-y-3 pt-6">
        <h2 className="text-xl font-semibold">Teck Stack</h2>
        <div className="flex flex-wrap gap-2 text-xs font-medium text-zinc-700">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "TypeScript",
          ].map((skill) => (
            <span key={skill} className="rounded-md bg-zinc-200 px-3 py-1">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
