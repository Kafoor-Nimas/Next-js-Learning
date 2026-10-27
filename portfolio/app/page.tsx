import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Hero Header */}
      <section className="flex flex-col-reverse items-center justify-between gap-8 text-center sm:flex-row sm:items-center sm:text-left">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl">
            Hi, I&apos;m <span className="text-blue-600">Nimas</span> 👋
          </h1>
          <p className="max-w-md text-base text-zinc-600 sm:text-lg">
            Full-Stack Developer specializing in MERN Stack & Next.js. Building
            scalable web applications with clean architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full">
            <Link
              href="/projects"
              className="w-full sm:w-auto text-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-lg border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-full border-2 border-blue-600 sm:h-40 sm:w-40">
          <Image
            src="/avatar.jpeg"
            alt="Profile Avatar"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Tech Stack List */}
      <section className="space-y-3 pt-6 border-t border-zinc-200">
        <h2 className="text-lg font-semibold text-zinc-900 sm:text-xl">
          Tech Stack
        </h2>
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs font-medium text-zinc-700">
          {[
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "Tailwind CSS",
            "TypeScript",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-md bg-zinc-200/80 px-3 py-1 hover:bg-zinc-300/80 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}