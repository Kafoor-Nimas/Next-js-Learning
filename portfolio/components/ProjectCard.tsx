interface ProjectProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectProps) {
  return (
    <div
      className={`flex flex-col justify-between rounded-xl border p-6 transition hover:shadow-md ${featured ? "border-blue-200 bg-blue-50/30" : "border-zinc-200 bg-white"}`}
    >
      <div className="space-y-3">
        {featured && (
          <span className="inline-block rounded-full bg-blue-100 px-2.5 py-0.5 text-[10px] font-semibold text-blue-700">
            Featured Project
          </span>
        )}
        <h3 className="text-xl font-bold text-zinc-900">{title}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
      </div>

      <div className="mt-6 space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 pt-2 text-sm font-medium">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-zinc-700 hover:text-zinc-950 underline underline-offset-4"
            >
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
            >
              Live Demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
