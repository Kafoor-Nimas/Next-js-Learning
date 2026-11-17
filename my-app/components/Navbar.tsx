import Link from "next/link";

type navbarProps = {
  name: string;
  
};

export default function Navbar({ name}: navbarProps) {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b">
      <h1 className="text-xl font-bold">{name}</h1>

      <div className="flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
}
