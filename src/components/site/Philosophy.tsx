import philosophy from "@/assets/philosophy.jpg";
import { Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

export function Philosophy() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={philosophy}
        alt="Eng. Omar Abdelaziz Interior Design Philosophy"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-ink/55" />

      <div className="shell section-pad relative">
        <Reveal className="max-w-4xl">
          <p className="eyebrow">{t("Philosophy", "رؤيتنا في التصميم")}</p>
          <blockquote className="mt-9 font-display text-[clamp(2rem,5vw,4.25rem)] leading-[1.08] tracking-[-0.03em] text-background">
            {t("Great interiors aren't decorated.", "التصاميم العظيمة لا تُصنع بالصدفة،")}
            <br />
            <em className="text-bronze-soft">{t("They are carefully experienced.", "بل تبتكر بدقة لتعاش في كل لحظة.")}</em>
          </blockquote>
          <p className="mt-10 max-w-[52ch] text-[1.05rem] leading-[1.9] font-light text-background/75">
            {t(
              "We design for the sequence of a day — the first light on a wall, the weight of a door, the temperature of a lamp at nine in the evening. Beauty, in our experience, is the residue of that attention.",
              "نحن نصمم المكان ليعيش معك في كل تفصيلة — توزيع الإضاءة اليومية، لمس الخامات الطبيعية، وراحة الفراغ المعماري. الجمال الفقيقي هو حصيلة الاهتمام بأدق التفاصيل."
            )}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
