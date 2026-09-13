import SectionHeading from "./SectionHeading";

const people = [
  {
    number: "01",
    title: "Adults Navigating Anxiety",
    description:
      "Support for adults living with persistent worry, overthinking, panic, tension, difficulty sleeping, or the feeling of always being on edge.",
  },
  {
    number: "02",
    title: "High-Achieving Professionals",
    description:
      "A space for thoughtful, capable people who are carrying high levels of internal pressure while trying to keep everything together.",
  },
  {
    number: "03",
    title: "Entrepreneurs & Creatives",
    description:
      "Support for people who feel disconnected from themselves after years of pushing through stress, responsibility, and demanding work.",
  },
  {
    number: "04",
    title: "Adults Healing From Trauma",
    description:
      "Carefully paced trauma work focused on safety, stabilization, regulation, and understanding how past experiences continue to affect your life.",
  },
];

export default function WhoIHelp() {
  return (
    <section
      id="who-i-help"
      className="bg-[var(--color-background)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who I Work With"
          title="For people who are ready to understand themselves more deeply."
          description="Therapy for adults navigating anxiety, trauma, burnout, perfectionism, and the pressures of a fast-paced life."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-border)] sm:grid-cols-2">
          {people.map((person) => (
            <article
              key={person.number}
              className="bg-[var(--color-background)] p-8 sm:p-10 lg:p-12"
            >
              <p className="text-sm font-medium text-[var(--color-accent)]">
                {person.number}
              </p>

              <h3 className="mt-8 font-serif text-3xl leading-tight text-[var(--color-primary)]">
                {person.title}
              </h3>

              <p className="mt-5 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                {person.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}