import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BedDouble, Bath, Maximize, MapPin, ArrowLeft, MessageCircle, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import EnquiryForm from '@/components/EnquiryForm';
import { properties, formatPrice } from '@/data/properties';

const features = [
  '24/7 security', 'Backup power', 'Fitted kitchen',
  'Secure parking', 'Gated estate', 'Fibre internet ready',
];
export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}
export default async function PropertyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const p = properties.find((x) => x.id === id);
  if (!p) notFound();

  const similar = properties
    .filter((x) => x.id !== p.id && (x.city === p.city || x.type === p.type))
    .slice(0, 3);

  const whatsapp = `https://wa.me/2348054309585?text=${encodeURIComponent(
    `Hello, I'm interested in ${p.title} in ${p.location}.`
  )}`;

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32">
        <Link
          href="/properties"
          className="mb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-[#b08d57]"
        >
          <ArrowLeft className="h-4 w-4" /> Back to properties
        </Link>

        <div className="relative aspect-[16/9] overflow-hidden bg-neutral-200">
          <img src={p.image} alt={p.title} className="h-full w-full object-cover" />
          <span className="absolute left-5 top-5 bg-[#b08d57] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-widest text-white">
            {p.type === 'Buy' ? 'For sale' : 'For rent'}
          </span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h1 className="font-display text-4xl md:text-5xl">{p.title}</h1>
            <p className="mt-3 flex items-center gap-2 text-neutral-500">
              <MapPin className="h-4 w-4" /> {p.location}, {p.city}
            </p>
            <p className="font-display mt-6 text-3xl text-[#b08d57]">{formatPrice(p)}</p>

            <div className="mt-8 grid grid-cols-3 border-y border-neutral-200 py-6 text-center">
              <div>
                <BedDouble className="mx-auto h-6 w-6 text-[#b08d57]" />
                <p className="mt-2 text-sm">{p.beds} bedrooms</p>
              </div>
              <div>
                <Bath className="mx-auto h-6 w-6 text-[#b08d57]" />
                <p className="mt-2 text-sm">{p.baths} bathrooms</p>
              </div>
              <div>
                <Maximize className="mx-auto h-6 w-6 text-[#b08d57]" />
                <p className="mt-2 text-sm">{p.area} m²</p>
              </div>
            </div>

            <h2 className="font-display mt-10 text-2xl">About this property</h2>
            <p className="mt-4 leading-relaxed text-neutral-600">
              {p.title} is a {p.beds}-bedroom home {p.type === 'Buy' ? 'for sale' : 'to rent'} in {p.location},{' '}
              {p.city}. With {p.area} square metres of living space and {p.baths} bathrooms, it combines
              modern finishes with comfortable family living in one of the area&apos;s most sought-after locations.
            </p>

            <h2 className="font-display mt-10 text-2xl">Features</h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-neutral-700">
                  <Check className="h-4 w-4 text-[#b08d57]" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-neutral-200 bg-white p-6 lg:sticky lg:top-28">
            <h2 className="font-display text-2xl">Enquire about this property</h2>
            <div className="mt-5">
              <EnquiryForm property={p.title} />
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="mt-3 flex items-center justify-center gap-2 border border-neutral-900 px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-neutral-900 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </aside>
        </div>

        {similar.length > 0 && (
          <section className="mt-24">
            <h2 className="font-display text-3xl">You may also like</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {similar.map((x) => <PropertyCard key={x.id} p={x} />)}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}