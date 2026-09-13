"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Who do you work with?",
    answer:
      "I work with adults who are navigating anxiety, panic, trauma, burnout, perfectionism, chronic stress, and the pressures that can come with a fast-paced life. Many of my clients are thoughtful, high-achieving professionals, entrepreneurs, or creatives.",
  },
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. I offer in-person therapy from my private office in Santa Monica, California. The space is designed to feel quiet, comfortable, private, and grounding.",
  },
  {
    question: "Do you offer telehealth sessions?",
    answer:
      "Yes. I offer secure telehealth sessions for clients located in California.",
  },
  {
    question: "What therapy approaches do you use?",
    answer:
      "I integrate evidence-based approaches including cognitive behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques.",
  },
  {
    question: "Do you work with trauma?",
    answer:
      "Yes. Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as longer-standing patterns related to childhood, relationships, or chronic stress. This work is carefully paced with an emphasis on safety, stabilization, and regulation.",
  },
  {
    question: "What can I expect from therapy?",
    answer:
      "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive while leaving room for reflection and depth. My goal is not only symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-[var(--color-background)] px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr]">
          
          {/* Heading */}
          <div>
            <SectionHeading
              eyebrow="Questions"
              title="A few things you may be wondering."
              description="If you are considering therapy, here are some common questions about my practice and approach."
            />
          </div>

          {/* FAQ List */}
          <div className="border-t border-[var(--color-border)]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[var(--color-border)]"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-serif text-xl text-[var(--color-primary)] sm:text-2xl">
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-lg text-[var(--color-primary)] transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] pb-6"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pr-12 text-sm leading-7 text-[var(--color-text-muted)] sm:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}