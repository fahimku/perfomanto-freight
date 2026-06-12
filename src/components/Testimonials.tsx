"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "@/lib/images";

const testimonials = [
  {
    quote:
      "Perfomanto has been our go-to logistics partner for over three years. Their reliability and communication are unmatched in the industry.",
    name: "John D.",
    role: "Logistics Manager",
    avatar: images.avatars[0],
  },
  {
    quote:
      "From cross-border shipments to last-mile delivery, they handle everything seamlessly. Our on-time delivery rate has improved significantly.",
    name: "Sarah M.",
    role: "Supply Chain Director",
    avatar: images.avatars[1],
  },
  {
    quote:
      "Professional, responsive, and always willing to go the extra mile. Perfomanto truly understands what customer-focused service means.",
    name: "Michael R.",
    role: "Operations VP",
    avatar: images.avatars[2],
  },
  {
    quote:
      "Their drayage team knows the ports inside and out. We've cut dwell time and saved significantly on intermodal costs.",
    name: "Lisa K.",
    role: "Import Coordinator",
    avatar: images.avatars[0],
  },
  {
    quote:
      "Real-time tracking and proactive updates give us complete visibility. Perfomanto sets the standard for freight partners.",
    name: "David T.",
    role: "Warehouse Manager",
    avatar: images.avatars[1],
  },
  {
    quote:
      "We've tried several carriers, but none match their consistency on reefer loads. Temperature-sensitive shipments arrive in perfect condition.",
    name: "Angela P.",
    role: "Food Distribution Lead",
    avatar: images.avatars[2],
  },
];

type Testimonial = (typeof testimonials)[number];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="border border-border bg-white p-7 shadow-sm">
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        fill="none"
        className="text-primary"
        aria-hidden="true"
      >
        <path
          d="M0 24V14.4C0 6.4 4.8 0 12 0v4.8C8 4.8 4.8 8 4.8 12H12V24H0zm16 0V14.4c0-8 4.8-14.4 12-14.4V4.8C24 4.8 20.8 8 20.8 12H28V24H16z"
          fill="currentColor"
          opacity="0.85"
        />
      </svg>
      <p className="mt-4 text-[14px] italic leading-relaxed text-text-body">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            unoptimized
            className="object-cover"
            sizes="40px"
          />
        </div>
        <div>
          <div className="text-[13px] font-bold text-text-dark">{testimonial.name}</div>
          <div className="text-[12px] text-text-muted">{testimonial.role}</div>
        </div>
      </div>
    </article>
  );
}

function visibleTestimonials(start: number, count: number) {
  return Array.from({ length: count }, (_, offset) => testimonials[(start + offset) % testimonials.length]);
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  const mobileSlide = testimonials[current];
  const desktopSlides = visibleTestimonials(current, 3);

  return (
    <section className="bg-bg-light py-20 lg:py-24">
      <div className="container-main">
        <div className="text-center">
          <span className="section-label">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div
          className="mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            key={current}
            className="testimonial-fade-in md:hidden"
            aria-live="polite"
          >
            <TestimonialCard testimonial={mobileSlide} />
          </div>

          <div
            key={`desktop-${current}`}
            className="testimonial-fade-in hidden gap-6 md:grid md:grid-cols-3"
            aria-live="polite"
          >
            {desktopSlides.map((testimonial, index) => (
              <TestimonialCard key={`${current}-${testimonial.name}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center gap-2" aria-label="Testimonial pagination">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === current ? "true" : undefined}
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? "w-7 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
