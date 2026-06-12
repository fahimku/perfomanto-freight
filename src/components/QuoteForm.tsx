"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "Dry Van",
  "Drayage",
  "Reefer",
  "Ocean & Air Logistics",
  "Other",
];

const inputClass =
  "w-full border border-border bg-white px-4 py-2.5 text-[13px] text-text-dark placeholder:text-text-muted outline-none transition-colors focus:border-primary";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="quote" className="scroll-mt-[72px] bg-bg-light py-20 lg:py-24">
      <div className="container-main">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-label">GET A QUOTE</span>
            <h2 className="section-title">Request Your Freight Quote</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-body">
              Tell us about your shipment and our team will respond with a competitive rate
              tailored to your needs. Fast, transparent, and hassle-free.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Competitive rates within 24 hours",
                "Dedicated logistics specialists",
                "Domestic and international coverage",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14px] text-text-body">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="mt-0.5 shrink-0 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M9 12l2 2 4-4" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <h3 className="mt-5 text-[18px] font-bold text-text-dark">Quote Request Received</h3>
                <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-text-body">
                  Thank you for reaching out. A member of our team will contact you shortly with
                  your customized quote.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-name" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Full Name *
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-company" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Company
                    </label>
                    <input
                      id="quote-company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-email" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Email *
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@company.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Phone *
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-service" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                    Service Type *
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-origin" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Pickup Location *
                    </label>
                    <input
                      id="quote-origin"
                      name="origin"
                      type="text"
                      required
                      placeholder="City, State / Province"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-destination" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                      Delivery Location *
                    </label>
                    <input
                      id="quote-destination"
                      name="destination"
                      type="text"
                      required
                      placeholder="City, State / Province"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-details" className="mb-1.5 block text-[12px] font-semibold text-text-dark">
                    Shipment Details
                  </label>
                  <textarea
                    id="quote-details"
                    name="details"
                    rows={3}
                    placeholder="Weight, dimensions, pickup date, or other details..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  SUBMIT QUOTE REQUEST
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
