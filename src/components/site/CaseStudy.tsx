import before from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_ARzxzx.png";
import after from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_ARuyuyuy.png";
import g1 from "@/assets/nmmn.png";
import g2 from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_ARrr.png";
import g3 from "@/assets/www.facebook.com_reel_894656647030391_locale=ar_AR (131).png";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function CaseStudy() {
  const { t } = useLanguage();

  const notes = [
    {
      k: t("Client Goals", "هدف العميل"),
      v: t(
        "Transforming a structural shell into a modern residence combining luxury and comfort.",
        "تحويل الهيكل الإنشائي إلى منزل عصري يجمع بين الفخامة والراحة، مع تصميم داخلي يعكس شخصية العميل ويلبي احتياجاته اليومية."
      ),
    },
    {
      k: t("Challenges", "التحديات"),
      v: t(
        "Coordinating structural, electrical, and mechanical works alongside cove lighting and custom joinery.",
        "تنسيق جميع الأعمال الإنشائية والكهربائية والميكانيكية مع تنفيذ الإضاءة المخفية والأسقف والنجارة بما يضمن أعلى مستوى من الدقة وجودة التشطيب."
      ),
    },
    {
      k: t("Design Strategy", "استراتيجية التنفيذ"),
      v: t(
        "Comprehensive execution covering architectural finishing, wood paneling, architectural lighting, and bespoke furniture.",
        "تنفيذ متكامل يشمل أعمال التشطيب المعماري، والكسوات الخشبية، والإضاءة المعمارية، وتصميم الأثاث المخصص، مع الاهتمام بأدق التفاصيل لضمان تجربة سكنية متكاملة."
      ),
    },
    {
      k: t("Material Palette", "المواد المستخدمة"),
      v: t(
        "Carefully selected natural wood, premium porcelain, and refined metallic accessories.",
        "استخدام خامات مختارة بعناية تشمل الأخشاب الطبيعية، والبورسلين الفاخر، والإكسسوارات المعدنية الراقية، مع تشطيبات عالية الجودة تمنح المكان طابعًا عصريًا دافئًا."
      ),
    },
    {
      k: t("Furniture & Decor", "القطع والديكورات"),
      v: t(
        "Bespoke furniture, integrated storage units, wood paneling, decorative lighting, and curated accessories.",
        "أثاث مُصمم خصيصًا للمشروع، ووحدات تخزين مدمجة، وكسوات خشبية، وإضاءة ديكورية، وإكسسوارات مختارة بعناية لإكمال الهوية البصرية للمكان."
      ),
    },
    {
      k: t("Project Supervision", "إشراف التنفيذ"),
      v: t(
        "Turnkey project management and execution under the direct supervision of Eng. Omar Abdelaziz.",
        "إدارة وتنفيذ المشروع بنظام تسليم مفتاح تحت إشراف المهندس عمر عبد العزيز، مع متابعة جميع مراحل التنفيذ حتى التسليم النهائي."
      ),
    },
  ];

  return (
    <section id="journal" className="section-pad">
      <div className="shell">
        <Reveal className="max-w-4xl">
          <Eyebrow>{t("Case Study — Turnkey Residence", "قصة تنفيذ — تسليم على المفتاح")}</Eyebrow>
          <h2 className="display-lg mt-7">
            {t("From structural shell to ", "من الهيكل الإنشائي إلى ")}
            <em className="text-bronze">{t("a luxury bespoke residence", "تحفة سكنية متكاملة")}</em>.
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-6">
          {[
            { label: t("Before — Raw Shell Condition", "الحالة قبل التشطيب"), img: before },
            { label: t("After — Final Completed Result", "النتيجة النهائية"), img: after },
          ].map((s) => (
            <Reveal key={s.label} delay={s.label.includes("After") || s.label.includes("النهائية") ? 0.15 : 0}>
              <figure>
                <div className="img-frame aspect-4/3">
                  <img
                    src={s.img}
                    alt={`${s.label} renovation by Eng. Omar Abdelaziz`}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 text-[0.62rem] tracking-[0.3em] text-muted-foreground uppercase">
                  {s.label}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:gap-24">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {notes.map((n, i) => (
              <Reveal key={n.k} delay={(i % 2) * 0.08}>
                <div className="h-full bg-background p-7">
                  <p className="text-[0.6rem] tracking-[0.28em] text-bronze uppercase">{n.k}</p>
                  <p className="body-lg mt-4 !text-[0.98rem]">{n.v}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <blockquote className="border-l border-bronze pl-8">
              <p className="font-display text-2xl sm:text-3xl lg:text-4xl leading-tight">
                {t(
                  "“The space was transformed from a simple structural shell into a sanctuary of warmth and luxury. Execution quality and attention to detail were exceptional.”",
                  "“تحوّل المكان من هيكل إنشائي بسيط إلى مساحة تنبض بالفخامة والدفء. جودة التنفيذ والاهتمام بأدق التفاصيل كانت استثنائية.”"
                )}
              </p>
              <footer className="mt-6 text-[0.62rem] tracking-[0.26em] text-muted-foreground uppercase">
                {t("Private Residence, Alexandria", "فيلا خاصة، الإسكندرية")}
              </footer>
            </blockquote>
            <p className="body-lg mt-10">
              {t(
                "Eng. Omar Abdelaziz supervised the complete execution — from structural shell to final handover, managing custom joinery, architectural lighting, and bespoke decor to meet the highest luxury standards.",
                "أشرف المهندس عمر عبد العزيز على تنفيذ المشروع بالكامل، بدءًا من مرحلة العظم وحتى التسليم النهائي، مع تصميم وتنفيذ جميع أعمال التشطيب والنجارة والإضاءة والديكورات بعناية فائقة، ليخرج المشروع بمستوى يليق بأعلى معايير الجودة والفخامة."
              )}
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[g1, g2, g3].map((img, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="img-frame aspect-3/4">
                <img
                  src={img}
                  alt="Finished Interior Result Gallery by Eng. Omar Abdelaziz"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
