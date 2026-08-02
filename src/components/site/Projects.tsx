import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import p1 from "@/assets/Screenshot 2026-08-01 211332.png";
import p2 from "@/assets/Screenshot 2026-08-01 213752.png";
import p3 from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_AR333ewerdc.png";
import p4 from "@/assets/Screenshot 2026-08-01 181935.png";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Projects() {
  const { t } = useLanguage();

  const projects = [
    {
      title: t("Curved Bouclé Lounge Suite", "غرفة معيشة بركنة مودرن منحنية"),
      location: t("Alexandria, Egypt", "الإسكندرية، مصر"),
      style: t("Contemporary Curved Lounge", "مودرن معيشة فاخر"),
      year: "2025",
      img: p1,
      span: "lg:col-span-7",
      ratio: "aspect-4/3",
    },
    {
      title: t("Bronze Glass Wardrobe Suite", "جناح غرفة نوم بدريسنج جلاس برونز"),
      location: t("North Coast, Egypt", "الساحل الشمالي، مصر"),
      style: t("Quiet Luxury Bedroom", "غرفة نوم مودرن راقية"),
      year: "2024",
      img: p2,
      span: "lg:col-span-5",
      ratio: "aspect-3/4",
    },
    {
      title: t("Illuminated Vanity & Dressing Niche", "ركن تسريحة مودرن بمريّة مضاءة"),
      location: t("Cairo, Egypt", "القاهرة، مصر"),
      style: t("Bespoke Vanity & Dressing", "ديكور تسريحة فاخر"),
      year: "2025",
      img: p4,
      span: "lg:col-span-5",
      ratio: "aspect-3/4",
    },
    {
      title: t("Custom Wood Bar & Wall Joinery", "وحدة مطبخ وتجليد خشب مخصص"),
      location: t("Alexandria, Egypt", "الإسكندرية، مصر"),
      style: t("Custom Architectural Joinery", "تجليد خشب ومطبخ مخصص"),
      year: "2024",
      img: p3,
      span: "lg:col-span-7",
      ratio: "aspect-4/3",
    },
  ];

  return (
    <section id="projects" className="section-pad">
      <div className="shell">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:items-end lg:gap-20">
          <Reveal>
            <Eyebrow>{t("Selected Work", "مشروعات مختارة")}</Eyebrow>
            <h2 className="display-lg mt-7 max-w-[18ch]">
              {t("Interiors composed like ", "تصاميم داخلية متناغمة تعكس ")}
              <em className="text-bronze">{t("still life", "الفخامة والأناقة")}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="body-lg max-w-[42ch] lg:pb-3">
              {t(
                "A curated showcase of four bespoke commissions. From statement marble dining suites to custom bronze glass wardrobes, each room balances architectural light with rich, tactile craftsmanship.",
                "معرض لأحدث الأعمال والمشاريع المنفذة. من السفرة الرخامية الفاخرة إلى الدريسنج جلاس البرونزي، يجمع كل مشروع بين الإضاءة المعمارية والدقة في التنفيذ."
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-12 lg:gap-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{ duration: 1, delay: (i % 2) * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`group ${p.span}`}
            >
              <div className={`img-frame relative ${p.ratio}`}>
                <img
                  src={p.img}
                  alt={`${p.title}, ${p.location}`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute inset-x-6 bottom-6 flex translate-y-4 flex-wrap gap-3 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href="https://wa.me/201003005301"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-bronze px-5 py-2.5 text-[0.62rem] tracking-[0.2em] text-ink uppercase"
                  >
                    {t("Consult on Project", "استفسر عن المشروع")} <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-baseline justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-display text-2xl sm:text-3xl">{p.title}</h3>
                  <p className="mt-2 text-xs tracking-[0.18em] text-muted-foreground uppercase">
                    {p.location}
                  </p>
                </div>
                <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                  {p.style} · {p.year}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
