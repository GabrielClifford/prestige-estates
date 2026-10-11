'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Properties', href: '/properties' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-neutral-950/70 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-display text-xl uppercase tracking-[0.25em]">
          Prestige <span className="text-[#b08d57]">Estates</span>
        </Link>

        <nav className="hidden gap-10 text-xs uppercase tracking-[0.2em] md:flex">
          {links.map((l) => (
            <Link key={l.label} href={l.href} className="transition hover:text-[#b08d57]">{l.label}</Link>
          ))}
        </nav>

        <Link
          href="/book"
          className="hidden border border-[#b08d57] px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-[#b08d57] transition hover:bg-[#b08d57] hover:text-white md:block"
        >
          Book a viewing
        </Link>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col border-t border-white/10 px-6 pb-4 md:hidden">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 text-xs uppercase tracking-[0.2em]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            onClick={() => setOpen(false)}
            className="mt-4 bg-[#b08d57] py-4 text-center text-xs uppercase tracking-[0.2em] text-white"
          >
            Book a viewing
          </Link>
        </nav>
      )}
    </header>
  );
}