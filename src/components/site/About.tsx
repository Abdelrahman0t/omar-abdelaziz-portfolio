import portrait from "@/assets/494205196_8827722453998067_5272290033377230663_n.jpg";
import { Counter, Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const timeline = [
    { k: t("Location", "المقر الرئيسي"), v: t("Alexandria, Egypt", "الإسكندرية، مصر") },
    { k: t("Specialty", "التخصص"), v: t("Architectural Finishing", "التشطيبات المعمارية والديكور") },
    { k: t("Experience", "سنوات الخبرة"), v: t("10+ Years", "+١٠ سنوات خبرة") },
    { k: t("Projects Executed", "المشاريع المنفذة"), v: t("25+ in Egypt", "+٢٥ مشروع في مصر") },
  ];

  const stats = [
    { value: 25, suffix: "+", label: t("Finished Projects", "مشروع مكتمل") },
    { value: 99, suffix: "%", label: t("Client Satisfaction", "نسبة رضا العملاء") },
    { value: 10, suffix: "+", label: t("Years of Experience", "سنوات الخبرة بمصر") },
  ];

  return (
    <section id="about" className="section-pad relative overflow-hidden bg-linen">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[8%] h-72 w-72 rounded-full border border-bronze/25"
      />
      <div className="shell relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal className="relative">
          <div
            aria-hidden
            className="absolute -top-6 -left-6 h-40 w-40 rounded-3xl bg-clay/70 lg:-left-10"
          />
          <div className="img-frame relative aspect-4/5">
            <img
              src={portrait}
              alt="Eng. Omar Abdelaziz — Interior Designer from Alexandria"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-8 font-display text-2xl text-bronze">{t("Eng. Omar Abdelaziz", "مهندس ديكور / عمر عبد العزيز")}</p>
          <p className="mt-1 text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
            {t("Founder & Chief Interior Designer (I HOME)", "مؤسس ومدير مكتب (I HOME) للتصميم والديكور")}
          </p>
        </Reveal>

        <div>
          <Reveal>
            <Eyebrow>{t("About Eng. Omar Abdelaziz", "عن المهندس عمر عبد العزيز")}</Eyebrow>
            <h2 className="display-lg mt-7 max-w-[16ch]">
              {t("Crafting luxury with ", "تصميم وتنفيذ يعكس أعلى معايير ")}
              <em className="text-bronze">{t("precision", "الجودة والإتقان")}</em>.
            </h2>
            <p className="body-lg mt-8 max-w-[52ch]">
              {t(
                "Based in Alexandria, Eng. Omar Abdelaziz leads I HOME — delivering turn-key architectural finishing and luxury interior decoration across Alexandria, Cairo, the North Coast, and Egypt. From raw red-brick site supervision to final handover, every project is built on craftsmanship, premium materials, and tailored space planning.",
                "يقود المهندس عمر عبد العزيز مكتب I HOME للتصميم الداخلي والتشطيبات المعمارية في الإسكندرية، متصدراً تقديم حلول الديكور والتسليم على المفتاح للفيلا والوحدات السكنية في الإسكندرية والقاهرة والساحل الشمالي وكافة المحافظات. من مرحلة العظم والأنشائي وحتى التسليم والديكور النهائي."
              )}
            </p>
          </Reveal>

          <Reveal delay={0.12} className="mt-12 grid gap-px bg-border sm:grid-cols-2">
            {timeline.map((item) => (
              <div key={item.k} className="bg-linen py-6 pr-6 sm:px-6 sm:first:pl-0">
                <p className="text-[0.6rem] tracking-[0.28em] text-muted-foreground uppercase">
                  {item.k}
                </p>
                <p className="mt-3 font-display text-xl">{item.v}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.2} className="mt-14 grid gap-10 sm:grid-cols-3">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-6xl text-bronze">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <div className="rule-line mt-4 w-14" />
                <p className="mt-4 text-[0.62rem] tracking-[0.24em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
