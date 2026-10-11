import Link from 'next/link';
import { BedDouble, Bath, Maximize, MapPin } from 'lucide-react';
import { Property, formatPrice } from '@/data/properties';

export default function PropertyCard({ p }: { p: Property }) {
  return (
    <Link href={`/properties/${p.id}`} className="group block overflow-hidden bg-white shadow-sm transition hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
        <span className="absolute left-4 top-4 bg-[#b08d57] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
          {p.type === 'Buy' ? 'For sale' : 'For rent'}
        </span>
      </div>
      <div className="p-6">
        <p className="font-display text-2xl">{formatPrice(p)}</p>
        <h3 className="mt-1 text-sm font-medium">{p.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-neutral-500">
          <MapPin className="h-3.5 w-3.5" /> {p.location}, {p.city}
        </p>
        <div className="mt-4 flex gap-5 border-t border-neutral-100 pt-4 text-xs text-neutral-600">
          <span className="flex items-center gap-1.5"><BedDouble className="h-4 w-4" /> {p.beds} beds</span>
          <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {p.baths} baths</span>
          <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {p.area} m²</span>
        </div>
      </div>
    </Link>
  );
}