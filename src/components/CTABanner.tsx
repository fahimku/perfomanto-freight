export default function CTABanner() {
  return (
    <section className="bg-primary py-10 lg:py-12">
      <div className="container-main">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </div>

          <div className="flex-1 text-white">
            <p className="text-[15px] font-bold uppercase tracking-wide lg:text-[16px]">
              Ready to Move Your Business Forward?
            </p>
            <p className="mt-1 text-[14px] text-white/90">
              Get a customized logistics solution tailored to your needs.
            </p>
          </div>

          <a
            href="#quote"
            className="inline-flex shrink-0 items-center justify-center bg-white px-6 py-3 text-[11px] font-bold tracking-[0.08em] text-primary transition-colors hover:bg-white/90"
          >
            GET A QUOTE TODAY
          </a>
        </div>
      </div>
    </section>
  );
}
