export default function Footer() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Approach", href: "#approach" },
    { name: "Our Office", href: "#office" },
    { name: "FAQ", href: "#faq" },
  ];

  const focusAreas = [
    "Anxiety & Panic",
    "Trauma Therapy",
    "Burnout & Perfectionism",
  ];

  return (
    <footer className="bg-[var(--color-primary)] px-6 pb-8 pt-20 text-white sm:pt-24 lg:px-8 lg:pt-28">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid gap-14 border-b border-white/15 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.9fr]">

          {/* Brand */}
          <div>
            <a
              href="#"
              className="font-serif text-4xl text-white sm:text-5xl"
            >
              Maya Reynolds
            </a>

            <p className="mt-4 text-sm text-white/60">
              PsyD · Licensed Clinical Psychologist
            </p>

            <p className="mt-8 max-w-md text-sm leading-7 text-white/70">
              Warm, grounded therapy for adults navigating anxiety, trauma,
              burnout, perfectionism, and the lingering effects of past
              experiences.
            </p>

            <div className="mt-8">
              <p className="text-sm font-medium">
                Santa Monica, California
              </p>

              <p className="mt-1 text-sm text-white/60">
                In-person therapy &amp; secure telehealth
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="w-fit text-sm text-white/75 transition-colors duration-300 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Areas of Focus */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-accent)]">
              Areas of Focus
            </p>

            <div className="mt-6 flex flex-col gap-4">
              {focusAreas.map((area) => (
                <p
                  key={area}
                  className="text-sm text-white/75"
                >
                  {area}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dr. Maya Reynolds. All rights reserved.
          </p>

          <p>
            Santa Monica, CA 90401
          </p>
        </div>
      </div>
    </footer>
  );
}