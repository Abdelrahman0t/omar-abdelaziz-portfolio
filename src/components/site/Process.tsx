import { motion } from "motion/react";
import { Box, Compass, Hammer, PhoneCall, Sparkles } from "lucide-react";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      n: "01",
      icon: PhoneCall,
      title: t("Discovery & Inspection", "الاستشارة والمعاينة"),
      desc: t("Discussion on space requirements, site inspection, and budget scope.", "جلسة لمعاينة الموقع ودراسة المتطلبات الفراغية وتحديد الميزانية والأولويات."),
    },
    {
      n: "02",
      icon: Compass,
      title: t("Concept & Layout", "التوزيع المعماري والمخططات"),
      desc: t("Architectural plans, moodboards, and material selection.", "إعداد المخططات التوضيحية وتوزيع المساحات واختيار نمط الديكور والمواد."),
    },
    {
      n: "03",
      icon: Box,
      title: t("3D Design Renders", "التصميم ثلاثي الأبعاد 3D"),
      desc: t("Photoreal 3D visualization of every room before site work begins.", "إظهار ثلاثي الأبعاد دقيق ومحاكي للواقع لمعاينة الإضاءة والألوان والخامات."),
    },
    {
      n: "04",
      icon: Hammer,
      title: t("On-Site Execution", "التنفيذ والإشراف الموقعي"),
      desc: t("Site management, electrical, plumbing, masonry, and custom joinery.", "إدارة أعمال التشطيب بالموقع على الطوب الأحمر حتى تكسيات الخشب والسيراميك."),
    },
    {
      n: "05",
      icon: Sparkles,
      title: t("Turnkey Handover", "التسليم والديكور النهائي"),
      desc: t("Final styling, lighting calibration, and turnkey client handover.", "تركيب الديكورات النهائية والإضاءة والتسليم الكامل على المفتاح."),
    },
  ];

  return (
    <section id="process" className="section-pad bg-linen">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow>{t("Process", "خطوات العمل")}</Eyebrow>
            <h2 className="display-lg mt-7 max-w-[16ch]">
              {t("Five deliberate ", "خمس مراحل دقيقة ")}
              <em className="text-bronze">{t("movements", "للتنفيذ المثالي")}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-[34ch]">
              {t("From raw red-brick site inspection to turnkey luxury handover.", "من مرحلة المعاينة على الطوب الأحمر وحتى تسليم المفتاح بالكامل.")}
            </p>
          </Reveal>
        </div>

        <div className="relative mt-24">
          <div className="absolute top-8 left-0 hidden h-px w-full bg-border lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-8 left-0 hidden h-px w-full origin-left bg-bronze lg:block"
          />

          <ol className="grid gap-14 lg:grid-cols-5 lg:gap-8">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.12}>
                <li className="group relative">
                  <span className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-background text-bronze shadow-soft transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5">
                    <s.icon className="h-5 w-5" strokeWidth={1.25} />
                  </span>
                  <p className="mt-8 font-display text-5xl text-bronze/35">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{s.title}</h3>
                  <p className="body-lg mt-3 !text-[0.95rem] !leading-relaxed">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
