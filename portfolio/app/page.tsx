import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12 sm:space-y-16">
      {/* Hero Header */}
      <section className="flex flex-col-reverse items-center justify-between gap-8 sm:flex-row sm:items-center sm:gap-12 lg:gap-16 text-center sm:text-left">
        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl leading-tight">
            Hi, I&apos;m <span className="text-blue-600">Nimas</span> 👋
          </h1>
          <p className="max-w-md text-base text-zinc-600 sm:text-lg lg:max-w-xl leading-relaxed">
            Full-Stack Developer specializing in MERN Stack & Next.js. Building
            scalable web applications with clean architecture.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 w-full pt-2">
            <Link
              href="/projects"
              className="w-full sm:w-auto text-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 shadow-sm"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto text-center rounded-lg border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Profile Avatar Image */}
        <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border-4 border-blue-600 sm:h-44 sm:w-44 lg:h-48 lg:w-48 shadow-md">
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
      <section className="space-y-4 pt-8 border-t border-zinc-200">
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
              className="rounded-md bg-zinc-100 border border-zinc-200 px-3.5 py-1.5 hover:bg-zinc-200/80 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Projects Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
          Featured Work
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          <ProjectCard
            title="Internship Management Portal"
            description="MERN-stack application featuring RBAC authentication, Stripe Checkout, and Nodemailer email triggers."
            techStack={["React", "Node.js", "Express", "MongoDB", "Stripe"]}
            githubUrl="https://github.com/Kafoor-Nimas/Apptron-Week-3"
            liveUrl="https://github.com/Kafoor-Nimas/Apptron-Week-3"
            featured
          />
          <ProjectCard
            title="Next.js Personal Portfolio"
            description="Modern, accessible portfolio site built with Next.js App Router and Tailwind CSS v4."
            techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
            githubUrl="https://github.com/Kafoor-Nimas"
          />
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceTimeline />
    </div>
  );
}