import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import c1 from "@/assets/client-1.jpg";
import c2 from "@/assets/client-2.jpg";
import c3 from "@/assets/client-3.jpg";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Testimonials() {
  const [i, setI] = useState(0);
  const { t } = useLanguage();

  const items = [
    {
      name: t("Mohamed El-Sayed", "أ. محمد السيد"),
      type: t("Villa Turnkey Finishing · Alexandria", "تشطيب فيلا تسليم مفتاح · الإسكندرية"),
      img: c1,
      quote: t(
        "“Eng. Omar Abdelaziz and his team managed our villa from raw red brick to final decoration handover. Exceptional finishing quality and commitment.”",
        "“المهندس عمر عبد العزيز وفريقه استلموا الفيلا عظم وطوب أحمر وسلموها على المفتاح بأعلى دقة في التشطيب والتنفيذ. التزام وجودة تفوق التوقعات.”"
      ),
    },
    {
      name: t("Ahmed Hassan", "أ. أحمد حسن"),
      type: t("Luxury Apartment · North Coast", "شاليه فاخر · الساحل الشمالي"),
      img: c2,
      quote: t(
        "“The custom wood joinery and lighting design turned our chalet into a luxury sanctuary. Highly professional site supervision.”",
        "“تجليد الخشب المخصص والإضاءة المخفية حوّل الشاليه لشهادة فخامة حقيقية. إشراف هندسي ممتاز ومتابعة دقيقة جداً بالموقع.”"
      ),
    },
    {
      name: t("Tarek Mansour", "أ. طارق منصور"),
      type: t("Duplex Interior Design · Cairo", "ديكور دوبلكس فاخر · القاهرة"),
      img: c3,
      quote: t(
        "“Every detail, from ceramic tiling to wall paneling, was handled with craftsmanship and accuracy. Truly the best interior finishing in Egypt.”",
        "“كل تفصيلة من السيراميك والبورسلين حتى التجليدات الخشبية اتنفذت بإتقان وحرفية عالية. من أفضل مكاتب الديكور والتشطيبات في مصر.”"
      ),
    },
  ];

  const item = items[i]!;

  return (
    <section className="section-pad relative overflow-hidden bg-linen">
      <span
        aria-hidden
        className="pointer-events-none absolute top-16 left-[6%] font-display text-[16rem] leading-none text-bronze/12 select-none"
      >
        “
      </span>

      <div className="shell relative">
        <Reveal>
          <Eyebrow>{t("Clients Testimonials", "آراء العملاء")}</Eyebrow>
        </Reveal>

        <div className="mt-14 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl bg-card p-9 shadow-soft sm:p-14"
            >
              <div className="flex gap-1 text-bronze">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-2xl leading-tight sm:text-[2.4rem]">
                {item.quote}
              </blockquote>
              <figcaption className="mt-10 flex min-w-0 items-center gap-5">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="font-display text-2xl">{item.name}</p>
                  <p className="mt-1 text-[0.62rem] tracking-[0.22em] text-muted-foreground uppercase">
                    {item.type}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-10 flex items-center gap-5">
            <button
              aria-label="Previous testimonial"
              onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border transition-colors duration-500 hover:border-bronze"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              aria-label="Next testimonial"
              onClick={() => setI((v) => (v + 1) % items.length)}
              className="grid h-12 w-12 place-items-center rounded-full border border-border transition-colors duration-500 hover:border-bronze"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase">
              {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
