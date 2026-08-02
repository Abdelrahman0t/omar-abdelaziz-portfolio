import {
  Armchair,
  Building2,
  Boxes,
  Hammer,
  Lamp,
  LayoutGrid,
  Ruler,
  Sofa,
  Sparkles,
  Trees,
} from "lucide-react";
import p1 from "@/assets/Screenshot 2026-08-01 212405.png";
import p2 from "@/assets/Screenshot 2026-08-01 213752.png";
import p3 from "@/assets/Screenshot 2026-08-01 211433.png";
import p4 from "@/assets/Screenshot 2026-08-01 211252.png";
import g1 from "@/assets/Screenshot 2026-08-01 211332.png";
import g2 from "@/assets/Screenshot 2026-08-01 212307.png";
import g3 from "@/assets/Screenshot 2026-08-01 213809.png";
import g4 from "@/assets/Screenshot 2026-08-01 181806.png";
import after from "@/assets/Screenshot 2026-08-01 212111.png";
import studio from "@/assets/Screenshot 2026-08-01 183301.png";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Sofa,
      title: t("Residential Interior Design", "التصميم الداخلي السكني"),
      desc: t("Whole-home design for primary residences, from architecture liaison to final styling.", "تصميم شامل للشقق والوحدات السكنية بدءاً من التوزيع المعماري وحتى التنسيق النهائي."),
      img: after,
    },
    {
      icon: Building2,
      title: t("Commercial Spaces", "المشروعات والمقرات التجارية"),
      desc: t("Hospitality, workplace and retail interiors with a quiet, enduring register.", "تصميم وتنفيذ الشركات والمطاعم والمحلات التجارية بهوية مميزة وعصرية."),
      img: p3,
    },
    {
      icon: Trees,
      title: t("Luxury Villas & Chalets", "تشطيب الفيلات والتشاليهات الفاخرة"),
      desc: t("Seaside and countryside villas designed around climate, view and stone.", "تصاميم مخصصة للفيلات والتشاليهات في الإسكندرية والساحل الشمالي."),
      img: p2,
    },
    {
      icon: LayoutGrid,
      title: t("Turnkey Architectural Finishing", "التشطيبات المعمارية تسليم مفتاح"),
      desc: t("Full-scope renovation and finishing from red-brick masonry to final handover.", "تنفيذ جميع أعمال التشطيبات على الطوب الأحمر وتسليم المفتاح بالكامل."),
      img: g1,
    },
    {
      icon: Ruler,
      title: t("Space Planning & Layout", "إعادة التوزيع المعماري والفراغي"),
      desc: t("Reworking plans for better circulation, proportion and daylight.", "استغلال المساحات بأعلى كفاءة وتوزيع الفرش والإضاءة بشكل مدروس."),
      img: g4,
    },
    {
      icon: Armchair,
      title: "Furniture & Decor Selection",
      title: t("Furniture & Decor Selection", "اختيار الأثاث والديكورات"),
      desc: t("Sourcing custom furniture, vintage pieces and bespoke upholstery.", "تنسيق واختيار قطع الأثاث والديكورات الداخلية المتناسقة مع طابع المشروع."),
      img: p4,
    },
    {
      icon: Lamp,
      title: t("Lighting Design & Cove Lighting", "توزيع الإضاءة وبيوت النور"),
      desc: t("Layered schemes: architectural, decorative and cove ambient lighting.", "تصميم وتوزيع شبكة الإضاءة المخفية والأسقف المعلقة بدقة متناهية."),
      img: g2,
    },
    {
      icon: Sparkles,
      title: t("3D Visualisation & Renders", "التصميم ثلاثي الأبعاد 3D Renders"),
      desc: t("Photoreal renders and walkthroughs so nothing is left to imagination.", "إظهار معماري ثلاثي الأبعاد عالي الجودة لمعاينة المشروع قبل التنفيذ."),
      img: p1,
    },
    {
      icon: Hammer,
      title: t("On-Site Supervision & Management", "الإشراف الهندسي والموقعي"),
      desc: t("Contractor coordination, execution schedules and on-site quality control.", "متابعة الموعد الزمني للتنفيذ ومراقبة جودة أعمال التشطيب بالكامل."),
      img: studio,
    },
    {
      icon: Boxes,
      title: t("Custom Wood Joinery", "تجليد الحوائط والأعمال الخشبية"),
      desc: t("Millwork drawn in-house and built by master craftspeople.", "تصميم وتصنيع التجليدات الخشبية والمكتبات والدريسنج روم بأعلى جودة."),
      img: g3,
    },
  ];

  return (
    <section id="services" className="section-pad">
      <div className="shell">
        <Reveal className="max-w-3xl">
          <Eyebrow>{t("Services", "خدماتنا")}</Eyebrow>
          <h2 className="display-lg mt-7">
            {t("Ten disciplines, one ", "تخصصات هندسية متكاملة برؤية ")}
            <em className="text-bronze">{t("continuous hand", "احترافية موحدة")}</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.1}>
              <article className="group relative flex h-full flex-col gap-7 rounded-3xl bg-card p-8 shadow-soft transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-lift sm:flex-row sm:items-center">
                <div className="img-frame aspect-square w-full shrink-0 sm:w-40">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="min-w-0">
                  <s.icon className="h-5 w-5 text-bronze" strokeWidth={1.25} />
                  <h3 className="mt-4 font-display text-2xl leading-tight">{s.title}</h3>
                  <p className="body-lg mt-3 !text-[0.95rem] !leading-relaxed">{s.desc}</p>
                  <span className="mt-5 block h-px w-10 origin-left scale-x-100 bg-bronze transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-[3.4]" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
