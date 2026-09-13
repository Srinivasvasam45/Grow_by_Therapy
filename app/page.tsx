import About from "@/components/About";
import Approach from "@/components/Approach";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Office from "@/components/Office";
import Services from "@/components/Services";
import WhoIHelp from "@/components/WhoIHelp";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Intro />

      <WhoIHelp />

      <Services />

      <Approach />

      <About />

      <Office />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}