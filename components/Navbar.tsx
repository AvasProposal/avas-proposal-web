import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        
        <Link href="/" className="flex items-center gap-3">
          <Image
  src="/logo-v2.png"
  alt="Avas Proposal Logo"
  width={36}
  height={36}
  className="rounded-xl"
/>
          <div>
            <div className="text-base font-semibold tracking-tight text-slate-900">
              Avas Proposal
            </div>
            <div className="text-xs uppercase tracking-wider text-slate-500">
              Structured for Approval
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
}