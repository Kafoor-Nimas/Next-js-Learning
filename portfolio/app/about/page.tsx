export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-zinc-900 mb-4">About Me</h1>

      <p className="text-zinc-600 leading-relaxed mb-6">
        I am a Full-Stack Web Developer focused on crafting modern web
        interfaces and reliable backend architectures. I specialize in
        TypeScript, React, Next.js, Express, and MongoDB.
      </p>

      <h2 className="text-xl font-semibold text-zinc-900 mt-8 mb-4">
        Skills & Technologies
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {[
          "TypeScript",
          "React / Next.js",
          "Node.js / Express",
          "MongoDB / Mongoose",
          "Tailwind CSS",
          "REST APIs & AI Integration",
        ].map((skill) => (
          <div
            key={skill}
            className="p-3 border border-zinc-200 rounded-xl bg-zinc-50 text-xs font-medium text-zinc-800"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
