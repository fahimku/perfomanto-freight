import HeroSlider from "./HeroSlider";

const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="9" />
      </svg>
    ),
    title: "RELIABLE",
    description: "We deliver what we promise, on time, every time.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "CUSTOMER FOCUSED",
    description: "Your success is our priority. We go the extra mile.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    title: "ON-TIME DELIVERY",
    description: "Precision, planning, and performance you can count on.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "NATIONWIDE & BEYOND",
    description: "Connecting businesses across North America and worldwide.",
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="relative min-h-[520px] lg:min-h-[600px]">
        <HeroSlider />

        <div className="container-main relative z-10 flex min-h-[520px] items-center py-16 lg:min-h-[600px]">
          <div className="max-w-xl">
            <h1 className="text-[clamp(32px,5vw,48px)] font-extrabold uppercase leading-[1.1] tracking-tight text-white">
              Moving Freight.
              <br />
              Driving{" "}
              <span className="text-accent">Success.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/90">
              Reliable. Efficient. On-Time. Your trusted logistics partner for domestic and
              international freight solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#services" className="btn-primary">
                OUR SERVICES
              </a>
              <a href="#quote" className="btn-outline-white">
                GET A QUOTE
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container-main">
          <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 lg:py-10">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4 text-white">
                <div className="shrink-0 opacity-90">{feature.icon}</div>
                <div>
                  <h3 className="text-[12px] font-bold tracking-[0.1em]">{feature.title}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-white/85">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
