const experiences = [
  {
    role: "Full-Stack Development Intern",
    company: "Apptron",
    period: "2026 — Present",
    description:
      "Developing a MERN-stack internship management portal integrated with Stripe Checkout and Nodemailer. Building performant Next.js App Router portfolio applications.",
  },
  {
    role: "Web Development Training",
    company: "Self-Directed",
    period: "2025 — 2026",
    description:
      "Mastered React.js state management, Express RESTful API design, MongoDB indexing, and TypeScript fundamentals.",
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="space-y-6 py-8">
      <h2 className="text-2xl font-bold tracking-tight">Experience & Training</h2>

      <div className="relative border-l border-zinc-200 pl-6 space-y-8">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative">
            {/* Dot Indicator */}
            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-blue-600 ring-4 ring-zinc-50" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h3 className="text-base font-semibold text-zinc-900">{exp.role}</h3>
              <span className="text-xs font-medium text-zinc-500">{exp.period}</span>
            </div>
            
            <p className="text-sm font-medium text-blue-600 mb-2">{exp.company}</p>
            <p className="text-sm text-zinc-600">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}