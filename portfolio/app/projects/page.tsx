import { ExternalLink, Sparkles, FolderGit2, Code2 } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "instacart-ai-ecommerce",
    title: "Instacart Grocery E-Commerce & AI Assistant",
    description:
      "A full-stack MERN e-commerce platform integrated with Google Gemini AI for automated recipe ingredient generation, dietary query assistance, and order support.",
    tags: [
      "React",
      "Express",
      "TypeScript",
      "Node.js",
      "Gemini AI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/your-username/instacart-clone",
    liveUrl: "http://localhost:5000",
    featured: true,
  },
  {
    id: "nextjs-developer-portfolio",
    title: "Personal Developer Portfolio",
    description:
      "A fast, modern portfolio application built with Next.js App Router, Tailwind CSS v4, and dynamic metadata optimization.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    githubUrl: "https://github.com/your-username/nextjs-portfolio",
    liveUrl: "https://your-portfolio.vercel.app",
    featured: true,
  },
  {
    id: "task-management-dashboard",
    title: "Kanban Task Management App",
    description:
      "Interactive task tracking system with drag-and-drop state updates, JWT role-based access control, and dark mode customization.",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/your-username/task-manager",
    featured: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full mb-3">
          <FolderGit2 size={14} /> My Portfolio
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Featured Projects
        </h1>
        <p className="mt-2 text-base text-zinc-600 max-w-2xl">
          A showcase of full-stack web applications, AI integrations, and user
          interfaces I&apos;ve built.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group relative border border-zinc-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">
                  {project.featured ? "Featured Project" : "Web App"}
                </span>
                {project.featured && (
                  <Sparkles size={16} className="text-amber-500" />
                )}
              </div>

              <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-emerald-600 transition-colors mb-2">
                {project.title}
              </h2>

              <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
            </div>

            <div>
              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 bg-zinc-100 text-zinc-700 text-xs font-medium rounded-md border border-zinc-200/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center justify-between border-t border-zinc-100 pt-4">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
                >
                  <Code2 size={15} /> Source Code
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                ) : (
                  <span className="text-xs text-zinc-400 italic">
                    Internal App
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
