import Link from 'next/link';
import { ArrowRight, ShieldCheck, Handshake, Gem } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties, img } from '@/data/properties';

const featured = properties.filter((p) => p.featured).slice(0, 3);

const stats = [
  { n: '12+', label: 'Years of experience' },
  { n: '350+', label: 'Homes sold' },
  { n: '98%', label: 'Client satisfaction' },
  { n: '40+', label: 'Prime locations' },
]; // sample numbers for the demo

const reasons = [
  { icon: Gem, title: 'Curated listings', text: 'Every property is inspected and verified before it goes on the site.' },
  { icon: ShieldCheck, title: 'Safe transactions', text: 'Clear documentation and guidance from the first viewing to the final handover.' },
  { icon: Handshake, title: 'Personal service', text: 'A dedicated agent who learns what you want and finds it for you.' },
];

const select = 'w-full bg-white/95 px-4 py-3.5 text-sm text-neutral-900 outline-none';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[92vh] items-center bg-neutral-900 pt-24">
        <img src={img('photo-1600596542815-ffad4c1539a9', 2000)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-neutral-950/50" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 text-white">
          <p className="mb-5 text-xs uppercase tracking-[0.35em] text-[#b08d57]">Luxury real estate</p>
          <h1 className="font-display max-w-3xl text-5xl leading-[1.05] md:text-7xl">
            Find a home that feels like yours.
          </h1>
          <p className="mt-6 max-w-xl text-base font-light text-neutral-200">
            Premium apartments, villas and penthouses in Lagos, Abuja and Port Harcourt.
          </p>

          <form action="/properties" className="mt-12 grid max-w-4xl gap-3 bg-white/10 p-4 backdrop-blur-md sm:grid-cols-4">
            <select name="location" className={select} defaultValue="">
              <option value="">All locations</option>
              <option>Lagos</option>
              <option>Abuja</option>
              <option>Port Harcourt</option>
            </select>
            <select name="type" className={select} defaultValue="">
              <option value="">Buy or rent</option>
              <option value="Buy">Buy</option>
              <option value="Rent">Rent</option>
            </select>
            <select name="beds" className={select} defaultValue="">
              <option value="">Any bedrooms</option>
              <option value="3">3+ bedrooms</option>
              <option value="4">4+ bedrooms</option>
              <option value="5">5+ bedrooms</option>
            </select>
            <button type="submit" className="bg-[#b08d57] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9a7a49]">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">Featured</p>
            <h2 className="font-display mt-3 text-4xl">Handpicked properties</h2>
          </div>
          <Link href="/properties" className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-[#b08d57] sm:flex">
            View all <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-neutral-950 py-16 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 text-center md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl text-[#b08d57]">{s.n}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.2em] text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">Why Prestige</p>
          <h2 className="font-display mt-3 text-4xl">A better way to find a home</h2>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {reasons.map(({ icon: Icon, title, text }) => (
            <div key={title} className="border border-neutral-200 bg-white p-8">
              <Icon className="h-8 w-8 text-[#b08d57]" />
              <h3 className="font-display mt-6 text-xl">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#b08d57] py-16 text-center text-white">
        <h2 className="font-display text-3xl md:text-4xl">Ready to see your next home?</h2>
        <Link href="/book" className="mt-8 inline-block border border-white px-8 py-4 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-neutral-900">
          Book a viewing
        </Link>
      </section>

      <Footer />
    </>
  );
}