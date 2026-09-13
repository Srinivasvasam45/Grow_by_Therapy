import SectionHeading from "./SectionHeading";

const approaches = [
  {
    number: "01",
    title: "Warm & Collaborative",
    description:
      "Therapy works best when you feel respected, understood, and actively involved. Sessions are structured enough to feel supportive while leaving room for reflection and depth.",
  },
  {
    number: "02",
    title: "Evidence-Based",
    description:
      "I integrate approaches including cognitive behavioral therapy, EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    number: "03",
    title: "Focused on Safety",
    description:
      "Trauma work is carefully paced with an emphasis on safety, stabilization, and helping you feel more regulated in everyday life.",
  },
];

export default function Approach() {
  return (
    <section
      id="approach"
      className="bg-[var(--color-background)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          
          {/* Heading */}
          <div>
            <SectionHeading
              eyebrow="How I Work"
              title="Therapy that makes space for the whole person."
              description="A grounded approach that combines practical tools with depth-oriented work."
            />
          </div>

          {/* Approach Items */}
          <div className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {approaches.map((item) => (
              <article
                key={item.number}
                className="grid gap-5 py-8 sm:grid-cols-[70px_1fr] sm:py-10"
              >
                <span className="text-sm font-medium text-[var(--color-accent)]">
                  {item.number}
                </span>

                <div>
                  <h3 className="font-serif text-3xl text-[var(--color-primary)] sm:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}