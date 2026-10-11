export type Property = {
  id: string;
  title: string;
  location: string;
  city: string;
  price: number;
  type: 'Buy' | 'Rent';
  beds: number;
  baths: number;
  area: number; // square metres
  image: string;
  featured?: boolean;
};

export const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const formatPrice = (p: Property) =>
  `₦${p.price.toLocaleString('en-NG')}${p.type === 'Rent' ? ' / year' : ''}`;

// Sample listings for practice. Swap the photos for your own any time.
export const properties: Property[] = [
  { id: 'oceanview-penthouse', title: 'Oceanview Penthouse', location: 'Ikoyi', city: 'Lagos', price: 850000000, type: 'Buy', beds: 4, baths: 5, area: 420, image: img('photo-1600596542815-ffad4c1539a9'), featured: true },
  { id: 'maitama-modern-villa', title: 'Modern Villa with Pool', location: 'Maitama', city: 'Abuja', price: 620000000, type: 'Buy', beds: 5, baths: 6, area: 680, image: img('photo-1613490493576-7fde63acd811'), featured: true },
  { id: 'lekki-smart-duplex', title: 'Smart Duplex', location: 'Lekki Phase 1', city: 'Lagos', price: 380000000, type: 'Buy', beds: 4, baths: 4, area: 350, image: img('photo-1600585154340-be6161a56a0c'), featured: true },
  { id: 'gra-family-residence', title: 'Family Residence', location: 'GRA Phase 2', city: 'Port Harcourt', price: 210000000, type: 'Buy', beds: 4, baths: 4, area: 400, image: img('photo-1564013799919-ab600027ffc6') },
  { id: 'vi-luxury-apartment', title: 'Luxury 3-Bedroom Apartment', location: 'Victoria Island', city: 'Lagos', price: 18000000, type: 'Rent', beds: 3, baths: 3, area: 210, image: img('photo-1512917774080-9991f1c4c750') },
  { id: 'asokoro-terrace-house', title: 'Executive Terrace House', location: 'Asokoro', city: 'Abuja', price: 12000000, type: 'Rent', beds: 3, baths: 3, area: 260, image: img('photo-1600607687939-ce8a6c25118c') },
];