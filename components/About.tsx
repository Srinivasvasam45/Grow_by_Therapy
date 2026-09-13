import Image from "next/image";
import Button from "./Button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-background)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/4.7]  overflow-hidden rounded-[2rem] sm:aspect-[4/5] bg-[var(--color-secondary)]">
              <Image
                src="/images/maya-reynolds.png"
                alt="Dr. Maya Reynolds, licensed clinical psychologist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority={false}
              />
            </div>

            {/* Small floating detail */}
            <div className="absolute -bottom-6 -right-4 hidden max-w-[220px] rounded-2xl bg-white p-5 shadow-lg sm:block">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-accent)]">
                Santa Monica
              </p>

              <p className="mt-2 font-serif text-xl text-[var(--color-primary)]">
                A grounded space for meaningful work.
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Meet Dr. Maya Reynolds
            </p>

            <h2 className="font-serif text-4xl leading-tight text-[var(--color-primary)] sm:text-5xl lg:text-6xl">
              Therapy grounded in understanding, collaboration, and care.
            </h2>

            <div className="mt-8 space-y-5 text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
              <p>
                I&apos;m a licensed clinical psychologist based in Santa
                Monica, California. I work with adults who feel overwhelmed
                by anxiety, stress, or the lingering effects of past
                experiences.
              </p>

              <p>
                Many of the people I work with are high-achieving,
                thoughtful, and self-aware—but internally feel exhausted,
                stuck in overthinking, or emotionally on edge.
              </p>

              <p>
                My approach is warm, collaborative, and grounded. I integrate
                evidence-based methods with space for reflection and depth,
                helping clients understand both the emotional and
                physiological sides of what they&apos;re experiencing.
              </p>
            </div>

            <div className="mt-9">
              <Button href="#contact">
                Work With Maya
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}