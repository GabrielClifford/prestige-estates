import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-400">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3">
        <div>
          <p className="font-display text-xl uppercase tracking-[0.25em] text-white">
            Prestige <span className="text-[#b08d57]">Estates</span>
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Premium homes for sale and rent across Lagos, Abuja and Port Harcourt.
          </p>
        </div>
        <div className="text-sm">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white">Explore</p>
          <div className="flex flex-col gap-2">
            <Link href="/" className="hover:text-[#b08d57]">Home</Link>
            <Link href="/properties" className="hover:text-[#b08d57]">Properties</Link>
            <Link href="/#about" className="hover:text-[#b08d57]">About</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white">Contact</p>
          <p>12 Admiralty Way, Lekki Phase 1, Lagos</p>
          <p className="mt-2">
  <a href="tel:+2348054309585" className="hover:text-[#b08d57]">+234 805 430 9585</a>
</p>
          <p className="mt-2">hello@prestigeestates.example</p>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs">
        © 2026 Prestige Estates. All rights reserved.
      </div>
    </footer>
  );
}