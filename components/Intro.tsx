import Button from "./Button";

export default function Intro() {
  return (
    <section className="bg-[var(--color-secondary)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          
          {/* Small label */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              A Space to Slow Down
            </p>
          </div>

          {/* Main content */}
          <div className="max-w-4xl">
            <h2 className="font-serif text-4xl leading-[1.05] text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              You don&apos;t have to keep pushing through.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              <p>
                You may be successful, capable, and self-aware—and still feel
                exhausted, anxious, overwhelmed, or stuck in patterns that are
                difficult to change on your own.
              </p>

              <p>
                Therapy can offer a place to slow down, understand what you&apos;re
                experiencing, and develop more sustainable ways of living,
                working, and relating to yourself.
              </p>
            </div>

            <div className="mt-8">
              <Button href="#about" variant="outline">
                Learn About My Approach
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}