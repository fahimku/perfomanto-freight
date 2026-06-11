import Image from "next/image";
import { images } from "@/lib/images";

export default function AboutUs() {
  return (
    <section id="about" className="bg-white py-20 lg:py-24">
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="section-label">ABOUT US</span>
            <h2 className="section-title">Your Trusted Logistics Partner</h2>
            <p className="mt-5 text-[15px] leading-relaxed text-text-body">
              At Perfomanto Freight Systems Inc., we are committed to delivering exceptional
              logistics solutions that drive your business forward. With years of industry
              experience, our team combines expertise, technology, and dedication to ensure your
              freight arrives safely and on schedule.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-text-body">
              Whether you need domestic trucking, cross-border shipping, or global freight
              management, we provide personalized service and transparent communication every step
              of the way. Your success is our mission.
            </p>
            <a href="#contact" className="btn-primary mt-8">
              LEARN MORE ABOUT US
            </a>
          </div>

          <div className="relative">
            <div
              className="absolute -left-4 top-0 bottom-0 z-10 w-[60px] bg-primary lg:-left-6 lg:w-[80px]"
              style={{ clipPath: "polygon(0 0, 100% 8%, 100% 92%, 0 100%)" }}
              aria-hidden="true"
            />
            <div className="relative ml-8 h-[340px] overflow-hidden lg:ml-12 lg:h-[400px]">
              <Image
                src={images.about}
                alt="Perfomanto freight truck on the highway"
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
