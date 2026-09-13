import Button from "./Button";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--color-secondary)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
          Take the Next Step
        </p>

        <h2 className="mt-5 font-serif text-5xl leading-tight text-[var(--color-primary)] sm:text-6xl lg:text-7xl">
          Ready to make space for yourself?
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
          Therapy can be a place to slow down, understand what you&apos;re
          experiencing, and develop more sustainable ways of living and
          working.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="#contact">
            Schedule a Consultation
          </Button>

          <Button href="#office" variant="outline">
            Visit the Office
          </Button>
        </div>

        <p className="mt-8 text-sm text-[var(--color-text-muted)]">
          Santa Monica, California · In-person &amp; secure telehealth
        </p>
      </div>
    </section>
  );
}