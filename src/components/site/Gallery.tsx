import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import g1 from "@/assets/Screenshot 2026-08-01 212405.png";
import g2 from "@/assets/Screenshot 2026-08-01 212307.png";
import g3 from "@/assets/Screenshot 2026-08-01 213809.png";
import g4 from "@/assets/Screenshot 2026-08-01 181806.png";
import p1 from "@/assets/Screenshot 2026-08-01 211810.png";
import p2 from "@/assets/Screenshot 2026-08-01 213752.png";
import p4 from "@/assets/Screenshot 2026-08-01 211252.png";
import after from "@/assets/Screenshot 2026-08-01 212111.png";
import hero from "@/assets/Screenshot 2026-08-01 211649.png";
import studio from "@/assets/Screenshot 2026-08-01 183301.png";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Gallery() {
  const [count, setCount] = useState(6);
  const { t } = useLanguage();

  const shots = [
    { img: g1, title: t("Modern Backlit Wall Art", "تابلوه مودرن مضاء بإضاءة مخفية") },
    { img: g2, title: t("Luxury Powder Room & Gold Brass", "حمام ضيوف فاخر بإكسسوارات ذهبية") },
    { img: p1, title: t("Contemporary Lounge & Modular Sofa", "غرفة معيشة مودرن بركنة مريحة") },
    { img: g4, title: t("Grand Foyer & Marble Staircase", "مدخل فاخر بسلم رخام وثريا كريستال") },
    { img: g3, title: t("Rose-Gold Illuminated Built-in", "وحدة تجليد خشبية بإضاءة LED ذهبية") },
    { img: p4, title: t("Opulent Dining Salon & Chandelier", "صالون سفرة راقي مع نجفة مودرن") },
    { img: after, title: t("Minimalist Corridor & Linear LED", "ممر بتجليد خشب وإضاءة خطية LED") },
    { img: p2, title: t("Master Suite & Tinted Glass Wardrobe", "غرفة نوم رئيسية بدريسنج زجاج برونزي") },
    { img: hero, title: t("Formal Dining & Black Marble Table", "سفرة رخام أسود بتصميم حصري") },
    { img: studio, title: t("Palace Foyer & Marble Floor Inlay", "مدخل رئيسي برسم رخام أرضيات مميز") },
  ];

  const visible = shots.slice(0, count);

  return (
    <section className="section-pad bg-linen">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t("Gallery", "معرض الصور")}</Eyebrow>
          <h2 className="display-lg mt-7">{t("Fragments from recent rooms.", "لمحات من أحدث أعمال الديكور والتنفيذ.")}</h2>
        </Reveal>

        <div className="mt-20 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {visible.map((s) => (
            <Reveal key={s.title}>
              <figure className="img-frame group relative break-inside-avoid">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 flex flex-col justify-end gap-2 bg-ink/55 p-7 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <figcaption className="font-display text-xl sm:text-2xl text-background">
                    {s.title}
                  </figcaption>
                  <a href="https://wa.me/201003005301" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[0.62rem] tracking-[0.24em] text-bronze-soft uppercase">
                    {t("Inquire on WhatsApp", "استفسر عبر الواتساب")} <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>

        {count < shots.length && (
          <div className="mt-16 flex justify-center">
            <button onClick={() => setCount(shots.length)} className="btn-outline-ink">
              {t("Load More", "عرض المزيد من الصور")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
