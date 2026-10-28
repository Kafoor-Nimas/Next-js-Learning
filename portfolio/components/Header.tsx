import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md transition-all">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-zinc-950 tracking-tight">
          Nimas<span className="text-blue-600">.dev</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
          <Link href="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}