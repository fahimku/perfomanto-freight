import Image from "next/image";
import { images } from "@/lib/images";

const stats = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
      </svg>
    ),
    value: "10,000+",
    label: "Loads Delivered Successfully",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    value: "500+",
    label: "Happy Clients",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    value: "CANADA • USA",
    label: "Cross-Border & Nationwide Coverage",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" />
      </svg>
    ),
    value: "24/7",
    label: "Support & Real-Time Shipment Updates",
  },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <Image
        src={images.stats}
        alt="Freight warehouse and logistics operations"
        fill
        unoptimized
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/96 via-[#002b5b]/88 to-[#0056d2]/72" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center px-6 text-center text-white ${
                index > 0 ? "lg:border-l lg:border-white/20" : ""
              }`}
            >
              <div className="mb-4 opacity-90">{stat.icon}</div>
              <div className="text-[clamp(24px,3vw,32px)] font-extrabold leading-tight">
                {stat.value}
              </div>
              <p className="mt-2 max-w-[200px] text-[13px] leading-relaxed text-white/85">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
