import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Projects } from "@/components/site/Projects";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { CaseStudy } from "@/components/site/CaseStudy";
import { Testimonials } from "@/components/site/Testimonials";
import { Materials } from "@/components/site/Materials";
import { Gallery } from "@/components/site/Gallery";
import { Philosophy } from "@/components/site/Philosophy";
import { Faq } from "@/components/site/Faq";
import { InstagramGrid } from "@/components/site/Instagram";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";

const title = "Eng. Omar Abdelaziz — Interior Design & Architectural Finishing | Alexandria, Egypt";
const description =
  "Omar Abdelaziz Interior Design (I HOME) - Complete turn-key architectural finishing, luxury decor, and interior design in Alexandria, Cairo, and North Coast, Egypt.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Services />
        <Process />
        <CaseStudy />
        <Testimonials />
        <Materials />
        <Gallery />
        <Philosophy />
        <Faq />
        {/* <InstagramGrid /> */}
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
