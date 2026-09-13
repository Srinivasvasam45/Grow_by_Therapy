import Image from "next/image";
import SectionHeading from "./SectionHeading";

export default function Office() {
  return (
    <section
      id="office"
      className="bg-[var(--color-secondary)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Our Office"
            title="A calm space for healing."
          />

          <p className="max-w-xl text-base leading-8 text-[var(--color-text-muted)] sm:text-lg">
            My Santa Monica office is a quiet, private space designed to feel
            calm and grounding. Natural light, comfortable surroundings, and
            an uncluttered environment create space to slow down and settle
            in.
          </p>
        </div>

        {/* Main Image */}
        <div className="mt-16">
          <div className="relative aspect-[16/8] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/office1.jpeg"
              alt="Calm and private therapy office in Santa Monica"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>

        {/* Bottom Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr]">

          {/* Second Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image
              src="/images/office2.jpeg"
              alt="Comfortable therapy space at Dr. Maya Reynolds' office"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Office Details */}
          <div className="flex flex-col justify-between rounded-[2rem] bg-[var(--color-primary)] p-8 text-white sm:p-10 lg:p-12">

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Visit the Office
              </p>

              <h3 className="mt-5 font-serif text-3xl leading-tight sm:text-4xl">
                A private place to slow down and reconnect.
              </h3>

              <p className="mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base">
                Clients often share that the space itself helps them feel
                more at ease when they arrive. The office is designed to offer
                comfort, privacy, and a grounded environment for therapy.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-sm font-medium">
                123th Street 45 W
              </p>

              <p className="mt-1 text-sm text-white/65">
                Santa Monica, CA 90401
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs">
                  In-person therapy
                </span>

                <span className="rounded-full border border-white/20 px-4 py-2 text-xs">
                  Secure telehealth
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}