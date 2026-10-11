import { Suspense } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { properties } from '@/data/properties';

type Search = { location?: string; type?: string; beds?: string; sort?: string };

const select =
  'w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#b08d57]';

async function Results({ searchParams }: { searchParams: Promise<Search> }) {
  const { location = '', type = '', beds = '', sort = '' } = await searchParams;

  let results = properties.filter((p) => {
    if (location && p.city !== location) return false;
    if (type && p.type !== type) return false;
    if (beds && p.beds < Number(beds)) return false;
    return true;
  });

  if (sort === 'low') results = [...results].sort((a, b) => a.price - b.price);
  if (sort === 'high') results = [...results].sort((a, b) => b.price - a.price);

  return (
    <>
      <form
        key={`${location}-${type}-${beds}-${sort}`}
        action="/properties"
        className="mt-10 grid gap-3 border border-neutral-200 bg-white p-4 sm:grid-cols-2 lg:grid-cols-5"
      >
        <select name="location" defaultValue={location} className={select}>
          <option value="">All locations</option>
          <option>Lagos</option>
          <option>Abuja</option>
          <option>Port Harcourt</option>
        </select>
        <select name="type" defaultValue={type} className={select}>
          <option value="">Buy or rent</option>
          <option value="Buy">Buy</option>
          <option value="Rent">Rent</option>
        </select>
        <select name="beds" defaultValue={beds} className={select}>
          <option value="">Any bedrooms</option>
          <option value="3">3+ bedrooms</option>
          <option value="4">4+ bedrooms</option>
          <option value="5">5+ bedrooms</option>
        </select>
        <select name="sort" defaultValue={sort} className={select}>
          <option value="">Sort: Featured</option>
          <option value="low">Price: low to high</option>
          <option value="high">Price: high to low</option>
        </select>
        <button
          type="submit"
          className="bg-neutral-900 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#b08d57]"
        >
          Apply
        </button>
      </form>

      <div className="mb-8 mt-8 flex items-center justify-between text-sm text-neutral-500">
        <p>{results.length} {results.length === 1 ? 'property' : 'properties'} found</p>
        {(location || type || beds || sort) && (
          <Link href="/properties" className="text-xs uppercase tracking-[0.2em] hover:text-[#b08d57]">
            Clear filters
          </Link>
        )}
      </div>

      {results.length === 0 ? (
        <div className="border border-dashed border-neutral-300 py-20 text-center">
          <p className="font-display text-2xl">No properties match your search</p>
          <Link href="/properties" className="mt-4 inline-block text-xs uppercase tracking-[0.2em] text-[#b08d57]">
            View all properties
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => <PropertyCard key={p.id} p={p} />)}
        </div>
      )}
    </>
  );
}

export default function PropertiesPage({
  searchParams,
}: {
  searchParams: Promise<Search>;
}) {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 pb-24 pt-36">
        <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">Our portfolio</p>
        <h1 className="font-display mt-3 text-4xl md:text-5xl">Properties</h1>

        <Suspense
          fallback={<div className="mt-10 py-24 text-center text-xs uppercase tracking-[0.2em] text-neutral-400">Loading properties...</div>}
        >
          <Results searchParams={searchParams} />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}