import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import AboutUs from "@/components/AboutUs";
import CTABanner from "@/components/CTABanner";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <AboutUs />
        <CTABanner />
        <HowItWorks />
        <Testimonials />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
