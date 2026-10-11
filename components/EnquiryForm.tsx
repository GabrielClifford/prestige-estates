'use client';

import { useState } from 'react';

export default function EnquiryForm({ property }: { property: string }) {
  const [sent, setSent] = useState(false);
  const field =
    'w-full border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#b08d57]';

  if (sent) {
    return (
      <div className="border border-[#b08d57] bg-white p-6 text-sm leading-relaxed">
        <p className="font-display text-xl">Thank you!</p>
        <p className="mt-2 text-neutral-600">
          Your enquiry about {property} has been received. An agent will be in touch shortly.
        </p>
        <p className="mt-3 text-xs text-neutral-400">Demo form: nothing is actually sent.</p>
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
      <input name="phone" placeholder="Phone number" className={field} />
      <textarea
        name="message"
        rows={4}
        defaultValue={`Hello, I'm interested in ${property}.`}
        className={field}
      />
      <button
        type="submit"
        className="w-full bg-[#b08d57] px-6 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#9a7a49]"
      >
        Send enquiry
      </button>
    </form>
  );
}