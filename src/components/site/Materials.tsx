import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Materials() {
  const { t } = useLanguage();

  const materials = [
    {
      name: t("Natural Wood", "الأخشاب الطبيعية"),
      desc: t("Natural oak and walnut veneers for wall paneling and custom joinery.", "خامات خشب الزان والأرو وقشرة الجوز لتجليد الحوائط والوحدات الخشبية."),
      style: { background: "linear-gradient(140deg, #c9a274, #8d6540)" },
    },
    {
      name: t("Porcelain & Travertine", "البورسلين والترافرتين"),
      desc: t("First-choice porcelain and natural travertine for luxury flooring and bathrooms.", "بورسلين ورخام ترافرتين ناعم للأرضيات المودرن وتكسيات الحمامات."),
      style: { background: "linear-gradient(140deg, #ded3c2, #b9a68d)" },
    },
    {
      name: t("Natural Marble", "الرخام الأسود والأبيض"),
      desc: t("Black Nero Marquina and Calacatta marble for dining tables and counters.", "رخام أسود وأبيض فاخر لعربات السفرة والكونترات وشاشات العرض."),
      style: { background: "linear-gradient(140deg, #f4f1ec, #cfc9c0)" },
    },
    {
      name: t("Velvet & Linen Fabrics", "المخمل والأقمشة الفاخرة"),
      desc: t("Bouclé velvet and fine linen for luxury upholstery and drapes.", "أقمشة مخملية وقماش بوكليه راقي للركنات والستائر وديكورات الغرف."),
      style: { background: "linear-gradient(140deg, #eae2d5, #c4b8a4)" },
    },
    {
      name: t("Gold & Bronze Metal", "الاستانلس الذهبي والبرونز"),
      desc: t("Brushed gold stainless steel trims and bronze mirror glass.", "حليات استانلس ذهبي وزجاج برونزي للدريسنج والمكتبات والأسقف."),
      style: { background: "linear-gradient(140deg, #b78659, #6d4c2f)" },
    },
  ];

  return (
    <section className="section-pad">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-10">
          <Reveal>
            <Eyebrow>{t("Material Palette", "خامات وديكورات التنفيذ")}</Eyebrow>
            <h2 className="display-lg mt-7 max-w-[18ch]">
              {t("Five elements, endlessly ", "خامات عالية الجودة تناسق بين ")}
              <em className="text-bronze">{t("recombined", "الفخامة والأناقة")}</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="body-lg max-w-[32ch]">
              {t(
                "Hover a sample to read how we use it in our architectural finishing projects.",
                "مرر على الخامة لمطالعة كيفية استخدامها في تشطيباتنا المعمارية."
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 lg:grid-cols-5">
          {materials.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.08}>
              <div className="group text-center">
                <div
                  className="mx-auto aspect-square w-full max-w-[13rem] rounded-full shadow-soft transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.07] group-hover:shadow-lift"
                  style={m.style}
                />
                <h3 className="mt-7 font-display text-xl sm:text-2xl">{m.name}</h3>
                <p className="body-lg mx-auto mt-3 max-h-0 max-w-[24ch] overflow-hidden !text-[0.9rem] !leading-relaxed opacity-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:max-h-32 group-hover:opacity-100">
                  {m.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
