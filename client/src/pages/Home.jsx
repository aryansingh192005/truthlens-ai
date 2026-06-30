import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import TechStack from "../components/TechStack";
import HowItWorks from "../components/HowItWorks";
import UploadSection from "../components/UploadSection";
import CTA from "../components/CTA";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />

        <Statistics />

        <Features />

        <TechStack />

        <HowItWorks />

        <CTA />

        <UploadSection />

        <Testimonials />

        <FAQ />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}