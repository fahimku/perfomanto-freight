import Logo from "./Logo";
import { images } from "@/lib/images";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Carriers", href: "#carriers" },
  { label: "Customers", href: "#customers" },
  { label: "Get a Quote", href: "#quote" },
  { label: "Contact Us", href: "#contact" },
];

const serviceLinks = [
  { label: "Dry Van", href: "#services" },
  { label: "Drayage", href: "#services" },
  { label: "Reefer", href: "#services" },
  { label: "Ocean & Air Logistics", href: "#services" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-dark text-white">
      <div className="container-main py-14 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-1">
            <Logo src={images.logoMain} />
            <p className="mt-5 text-[13px] leading-relaxed text-white/70">
              Your trusted partner for reliable, efficient, and on-time freight solutions across
              North America and beyond.
            </p>
            <div className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.1em] text-white">QUICK LINKS</h3>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.1em] text-white">OUR SERVICES</h3>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[13px] text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.1em] text-white">CONTACT US</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2.5 text-[13px] text-white/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span>1-800-PERFOMANTO</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="M22 6l-10 7L2 6" />
                </svg>
                <span>info@perfomantofreight.com</span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  123 Logistics Way
                  <br />
                  Toronto, ON M5V 1A1
                </span>
              </li>
              <li className="flex items-start gap-2.5 text-[13px] text-white/70">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5 shrink-0">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <span>24/7 Support Available</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.1em] text-white">NEWSLETTER</h3>
            <p className="mt-4 text-[13px] leading-relaxed text-white/70">
              Stay updated with the latest news and logistics insights.
            </p>
            <form className="mt-4 flex flex-col gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full border border-white/20 bg-white/10 px-4 py-2.5 text-[13px] text-white placeholder:text-white/50 outline-none focus:border-primary"
                aria-label="Email address"
              />
              <button type="submit" className="btn-primary w-full sm:w-auto">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-5 text-[12px] text-white/50 sm:flex-row">
          <p>© 2026 Perfomanto Freight Systems Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </a>
            <span>|</span>
            <a href="#" className="transition-colors hover:text-white">
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
