'use client';

import { useState } from 'react';
import { properties } from '@/data/properties';

export default function BookingForm() {
  const [sent, setSent] = useState(false);
  const field =
    'w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b08d57]';

  if (sent) {
    return (
      <div className="border border-[#b08d57] bg-white p-8">
        <p className="font-display text-2xl">Viewing requested</p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          Thank you. An agent will contact you shortly to confirm your viewing.
        </p>
        <p className="mt-4 text-xs text-neutral-400">Demo form: nothing is actually sent.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="space-y-3"
    >
      <input required name="name" placeholder="Your name" className={field} />
      <input required type="email" name="email" placeholder="Email address" className={field} />
      <input required name="phone" placeholder="Phone number" className={field} />
      <select name="property" defaultValue="" className={field}>
        <option value="">Which property? (optional)</option>
        {properties.map((p) => (
          <option key={p.id} value={p.id}>{p.title}, {p.location}</option>
        ))}
      </select>
      <div className="grid gap-3 sm:grid-cols-2">
        <input required type="date" name="date" className={field} />
        <select name="time" defaultValue="" required className={field}>
          <option value="" disabled>Preferred time</option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>
      <textarea name="message" rows={4} placeholder="Anything we should know?" className={field} />
      <button
        type="submit"
        className="w-full bg-[#b08d57] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9a7a49]"
      >
        Request viewing
      </button>
    </form>
  );
}