import Image from "next/image";
import { images } from "@/lib/images";

const services = [
  {
    title: "DRY VAN",
    description:
      "Full truckload and less-than-truckload dry van services for general freight across North America.",
    image: images.services.dryVan,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <rect x="1" y="6" width="15" height="10" rx="1" />
        <path d="M16 10h4l3 3v3h-7V10z" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
      </svg>
    ),
  },
  {
    title: "DRAYAGE",
    description:
      "Port and rail drayage services with experienced drivers and reliable equipment for seamless intermodal.",
    image: images.services.drayage,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M4 20h16M6 20V8l6-4 6 4v12" />
        <path d="M10 12h4" />
      </svg>
    ),
  },
  {
    title: "REEFER",
    description:
      "Temperature-controlled refrigerated transport for perishable goods with real-time monitoring.",
    image: images.services.reefer,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
      </svg>
    ),
  },
  {
    title: "OCEAN & AIR LOGISTICS",
    description:
      "Global ocean and air freight solutions with customs clearance and end-to-end supply chain management.",
    image: images.services.ocean,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
        <path d="M2 16l20-8-8 8 8 4-20-4z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <div className="text-center">
          <span className="section-label">OUR SERVICES</span>
          <h2 className="section-title">Comprehensive Freight Solutions</h2>
          <p className="section-subtitle mt-4">
            From dry van and reefer to drayage and global logistics, we provide end-to-end freight
            services tailored to your business needs.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="group overflow-hidden border border-border bg-white transition-shadow hover:shadow-lg"
            >
              <div className="relative h-[180px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute -bottom-6 left-1/2 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-primary shadow-md">
                  {service.icon}
                </div>
              </div>
              <div className="px-5 pb-6 pt-10 text-center">
                <h3 className="text-[13px] font-bold tracking-[0.08em] text-text-dark">
                  {service.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-text-body">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-1 text-[11px] font-bold tracking-[0.08em] text-primary transition-colors hover:text-primary-dark"
                >
                  LEARN MORE
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
