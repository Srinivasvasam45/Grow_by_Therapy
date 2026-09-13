import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-background)]">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-6 py-14 lg:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
        
        {/* Hero Content */}
        <h1 className="animate-fade-up font-serif ..."></h1>
        <p className="animate-fade-up mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]"></p>
        <div className="max-w-3xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
            Licensed Clinical Psychologist
          </p>

          <h1 className="font-serif text-5xl leading-[0.95] text-[var(--color-primary)] sm:text-6xl lg:text-7xl xl:text-8xl">
            Therapy for anxiety, trauma &amp; burnout in Santa Monica.
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            A warm, grounded space for adults navigating anxiety, stress,
            past experiences, perfectionism, and the pressure to keep
            everything together.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Schedule a Consultation
            </Button>

            <Button href="#about" variant="outline">
              Meet Dr. Maya
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-text-muted)]">
            <span>Santa Monica, CA</span>
            <span>•</span>
            <span>In-person &amp; Telehealth</span>
          </div>
        </div>

        {/* Hero Image Placeholder */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
         <div className="relative aspect-[4/4.8] overflow-hidden rounded-[2rem]">
            <Image
             src="/images/maya-reynolds.png"
             alt="Dr. Maya Reynolds, licensed clinical psychologist"
                fill
             className="object-cover"
             sizes="(max-width: 1024px) 100vw, 45vw"
    
            />
          </div>

          <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-[var(--color-white)] p-5 shadow-lg sm:block">
            <p className="text-sm font-medium text-[var(--color-primary)]">
              A calm space to
            </p>

            <p className="mt-1 font-serif text-xl text-[var(--color-accent)]">
              slow down &amp; reconnect
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}