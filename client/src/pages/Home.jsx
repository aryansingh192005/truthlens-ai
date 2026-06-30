import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import TechStack from "../components/TechStack";
import PerformanceMetrics from "../components/PerformanceMetrics";
import SupportedFormats from "../components/SupportedFormats";
import ComparisonTable from "../components/ComparisonTable";
import ProjectTimeline from "../components/ProjectTimeline";
import VersionHistory from "../components/VersionHistory";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";
import UploadSection from "../components/UploadSection";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import Limitations from "../components/Limitations";
import DeveloperSection from "../components/DeveloperSection";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CookieBanner from "../components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main>
        <Hero />

        <Statistics />

        <Features />

        <TechStack />

        <PerformanceMetrics />

        <SupportedFormats />

        <ComparisonTable />

        <ProjectTimeline />

        <VersionHistory />

        <HowItWorks />

        <CTA />

        <UploadSection />

        <Testimonials />

        <FAQ />

        <Limitations />

        <DeveloperSection />

        <Contact />
      </main>

      <Footer />

      <ScrollToTop />

      <CookieBanner />
    </div>
  );
}