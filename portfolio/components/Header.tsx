import Link from "next/link";

export default function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-zinc-200 px-6 sm:px-16">
      <Link href={"/"} className="text-xl font-bold tracking-tight">
        DevPortfolio<span className="text-blue-600">.</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm font-medium text-zinc-600">
        <Link href={"/"} className="hover:text-zinc-950">
          Home
        </Link>
        <Link href={"/projects"} className="hover:text-zinc-950">
          Projects
        </Link>
        <Link href={"/contact"} className="hover:text-zinc-950">
          Contact
        </Link>
      </nav>
    </header>
  );
}
