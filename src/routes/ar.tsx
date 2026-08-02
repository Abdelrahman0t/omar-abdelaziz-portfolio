import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
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
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { StickyCta } from "@/components/site/StickyCta";
import { useLanguage } from "@/context/LanguageContext";

const title = "م. عمر عبد العزيز — التشطيبات المعمارية والديكور | الإسكندرية، مصر";
const description =
  "مكتب م. عمر عبد العزيز (I HOME) للتصميم الداخلي والتشطيبات المعمارية والتسليم على المفتاح في الإسكندرية والقاهرة والساحل الشمالي.";

export const Route = createFileRoute("/ar")({
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
  component: ArPage,
});

function ArPage() {
  const { setLang } = useLanguage();

  useEffect(() => {
    setLang("ar");
  }, [setLang]);

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
        <Contact />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
