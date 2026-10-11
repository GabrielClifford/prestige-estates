import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookingForm from '@/components/BookingForm';

export default function BookPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-36 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[#b08d57]">Book a viewing</p>
          <h1 className="font-display mt-3 text-4xl leading-tight md:text-5xl">
            See your next home in person.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-neutral-600">
            Tell us which property you like and when you are free. An agent will confirm your
            viewing and answer any questions beforehand.
          </p>
          <div className="mt-10 space-y-2 text-sm text-neutral-600">
            <p>Prefer to talk? Call or WhatsApp:</p>
            <a href="tel:+2348054309585" className="font-display text-2xl text-neutral-900 hover:text-[#b08d57]">
              +234 805 430 9585
            </a>
          </div>
        </div>

        <div className="border border-neutral-200 bg-white p-8">
          <BookingForm />
        </div>
      </main>

      <Footer />
    </>
  );
}