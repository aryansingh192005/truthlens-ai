import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import UploadSection from "../components/UploadSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <main>

        <Hero />

        <UploadSection />

      </main>

      <Footer />

    </div>
  );
}