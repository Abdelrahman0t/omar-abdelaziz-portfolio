import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLanguage();

  const faqs = [
    {
      q: t("What areas in Egypt do you serve?", "ما هي المناطق والمحافظات التي تغطيها في مصر؟"),
      a: t(
        "We are based in Alexandria and regularly execute turn-key interior design and architectural finishing projects in Alexandria, Cairo, the North Coast, and across all governorates in Egypt.",
        "مقرنا الرئيسي بالإسكندرية، وننفذ مشاريع التصميم الداخلي والتشطيب المعماري تسليم مفتاح في الإسكندرية والقاهرة والساحل الشمالي وكافة المحافظات."
      ),
    },
    {
      q: t("What is your turnkey finishing process?", "ما هي مراحل عمل التشطيب تسليم على المفتاح؟"),
      a: t(
        "Our process has five stages: initial consultation & site measurement, 2D/3D design concept, budget estimation, red-brick site execution & supervision, and final luxury decor handover.",
        "نبدأ بالمعاينة والمخططات، ثم إعداد التصميم 3D والميزانية، تليها أعمال الإشراف والتنفيذ على الطوب الأحمر وحتى الديكور والتسليم على المفتاح."
      ),
    },
    {
      q: t("How long does a finishing project take?", "كم تستغرق مدة تشطيب وتجهيز الموقع؟"),
      a: t(
        "A full villa or apartment turnkey finishing project typically takes 3 to 6 months depending on the area and customized joinery work.",
        "عادة ما تستغرق مدة تشطيب الفيلا أو الشقة من ٣ إلى ٦ أشهر بحسب المساحة وحجم الأعمال الخشبية والديكورات المطلوبة."
      ),
    },
    {
      q: t("How can I contact Eng. Omar Abdelaziz?", "كيف يمكنني التواصل مع المهندس عمر عبد العزيز؟"),
      a: t(
        "You can reach us directly via WhatsApp at 01003005301, or visit our Facebook page 'Omar interior design'.",
        "يمكنكم التواصل مباشرة عبر الواتساب أو الاتصال على 01003005301  أو عبر صفحة الفيس بوك (Omar interior design)."
      ),
    },
  ];

  return (
    <section className="section-pad">
      <div className="shell grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{t("Questions & Answers", "الأسئلة الشائعة")}</Eyebrow>
          <h2 className="display-lg mt-7 max-w-[14ch]">
            {t("Before we ", "إجابات هندسية قبل ")}
            <em className="text-bronze">{t("begin", "البدء في التنفيذ")}</em>.
          </h2>
        </Reveal>

        <div className="border-t border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-8 py-8 text-left rtl:text-right"
                  >
                    <span className="font-display text-xl sm:text-2xl lg:text-3xl">{f.q}</span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-bronze transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      strokeWidth={1.25}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="body-lg max-w-[62ch] pb-9">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
