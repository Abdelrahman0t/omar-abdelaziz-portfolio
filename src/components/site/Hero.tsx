import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import heroImg from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_ARrterty.png";
import { useMouseParallax } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const parallax = useMouseParallax(24);
  const { t } = useLanguage();

  const badges = [
    { value: t("25+", "+25"), label: t("Projects", "مشروع مكتمل") },
    { value: t("10+", "+10"), label: t("Years Experience", "سنوات الخبرة") },
    { value: t("5★", "5★"), label: t("Client Rating", "تقييم العملاء") },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-20 lg:pt-44 lg:pb-28">
      {/* soft architectural shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-40 h-[34rem] w-[34rem] rounded-full bg-linen blur-[2px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 right-1/3 h-72 w-72 rounded-full bg-clay/50 blur-3xl"
      />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE }}
            className="eyebrow"
          >
            {t("Alexandria · Cairo · North Coast · Egypt", "الإسكندرية · القاهرة · الساحل الشمالي · مصر")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            className="display-xl mt-8 max-w-[15ch]"
          >
            {t("Architectural finishing that turns your house into ", "تشطيبات معمارية فاخرة تحول منزل أحلامك إلى ")}
            <em className="text-bronze">{t("home", "واقع")}</em>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: EASE }}
            className="body-lg mt-9 max-w-[46ch]"
          >
            {t(
              "Eng. Omar Abdelaziz (I HOME) provides complete turn-key interior design and architectural finishing services for apartments, luxury villas, and commercial spaces across Alexandria and Egypt.",
              "يقدم المهندس عمر عبد العزيز (I HOME) خدمات التشطيبات المعمارية الشاملة والديكور الداخلي والتسليم على المفتاح للفيلا والوحدات السكنية والتجارية في الإسكندرية وجميع المحافظات."
            )}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE }}
            className="mt-11 flex flex-wrap gap-4"
          >
            <a href="https://wa.me/201003005301" target="_blank" rel="noreferrer" className="btn-bronze">
              {t("WhatsApp Consultation", "استشارة عبر الواتساب")}
            </a>
            <a href="#projects" className="btn-outline-ink">
              {t("View Portfolio", "استعراض الأعمال")}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8"
          >
            {badges.map((b) => (
              <div key={b.label}>
                <dt className="font-display text-3xl">{b.value}</dt>
                <dd className="mt-2 text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                  {b.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          className="relative"
          style={{ x: parallax.x, y: parallax.y }}
        >
          <div className="img-frame relative aspect-4/5 lg:-mr-[clamp(0rem,6vw,5rem)]">
            <img
              src={heroImg}
              alt="Eng. Omar Abdelaziz Interior Design Project"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: EASE }}
            className="glass-card absolute -bottom-8 -left-4 w-[17rem] p-7 lg:-left-16"
            style={{ x: parallax.x * -0.6, y: parallax.y * -0.6 }}
          >
            <p className="eyebrow">I HOME</p>
            <p className="mt-4 font-display text-2xl leading-tight">{t("Omar Abdelaziz", "م. عمر عبد العزيز")}</p>
            <div className="mt-5 space-y-1.5 text-xs tracking-[0.12em] text-muted-foreground uppercase">
              <p>{t("Interior Design & Finishing", "التشطيبات المعمارية والديكور")}</p>
              <p>{t("Alexandria, Egypt", "الإسكندرية، مصر")}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="shell mt-24 flex items-center gap-4 text-muted-foreground">
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
        <span className="text-[0.6rem] tracking-[0.34em] uppercase">{t("Scroll to explore", "استكشف الأعمال")}</span>
      </div>
    </section>
  );
}
