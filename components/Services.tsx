import Button from "./Button";
import SectionHeading from "./SectionHeading";

const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    description:
      "Therapy for persistent worry, overthinking, panic, physical tension, difficulty sleeping, and the feeling that you are always bracing for something to go wrong.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    description:
      "Carefully paced trauma work for adults processing single-incident trauma or longer-standing patterns connected to childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    description:
      "Support for professionals, entrepreneurs, and creatives experiencing exhaustion, high internal pressure, disconnection from themselves, or difficulty slowing down.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--color-primary)] px-6 py-24 text-white sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Areas of Focus"
          title="Support for where you are—and where you want to go."
          description="My work focuses on helping adults understand patterns, build resilience, and create more sustainable ways of living."
        />

        <div className="mt-16 divide-y divide-white/15 border-y border-white/15">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-6 py-10 md:grid-cols-[100px_0.8fr_1fr] md:items-start lg:py-12"
            >
              <span className="text-sm text-[var(--color-accent)]">
                {service.number}
              </span>

              <h3 className="font-serif text-3xl text-white sm:text-4xl">
                {service.title}
              </h3>

              <p className="max-w-xl text-sm leading-7 text-white/70 sm:text-base">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12">
          <Button
            href="#contact"
            className="bg-white !text-[var(--color-primary)] hover:bg-[var(--color-secondary)]"
          >
            Explore Therapy Options
          </Button>
        </div>
      </div>
    </section>
  );
}