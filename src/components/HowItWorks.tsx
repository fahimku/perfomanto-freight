const steps = [
  {
    number: 1,
    title: "REQUEST A QUOTE",
    description: "Tell us about your shipment and we'll provide a competitive rate.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
  },
  {
    number: 2,
    title: "GET A PLAN",
    description: "We create a customized logistics plan for your specific needs.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 12h6M9 16h6" />
      </svg>
    ),
  },
  {
    number: 3,
    title: "WE PICK UP",
    description: "Our team coordinates pickup at your location on schedule.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="6" width="15" height="10" rx="1" />
        <path d="M16 10h4l3 3v3h-7V10z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    number: 4,
    title: "IN TRANSIT",
    description: "Track your shipment in real-time with our advanced monitoring.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
  },
  {
    number: 5,
    title: "DELIVERED",
    description: "Your freight arrives safely and on time, every time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <div className="text-center">
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="section-title">Simple. Transparent. Efficient.</h2>
        </div>

        <div className="relative mt-16">
          <div
            className="absolute left-[10%] right-[10%] top-[28px] hidden h-px bg-border lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step) => (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/30 bg-white text-primary">
                  {step.icon}
                </div>
                <div className="mt-3 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[12px] font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-3 text-[11px] font-bold tracking-[0.08em] text-text-dark">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[180px] text-[12px] leading-relaxed text-text-body">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
