import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import studio from "@/assets/studio.jpg";
import { Eyebrow, Reveal } from "./primitives";
import { useLanguage } from "../../context/LanguageContext";

function Field({
  name,
  label,
  type,
  textarea,
}: {
  name: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const [value, setValue] = useState("");
  const filled = value.length > 0;
  const base =
    "peer w-full border-b border-border bg-transparent pt-7 pb-3 text-sm outline-none transition-colors duration-500 focus:border-bronze";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={3}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={base}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={base}
        />
      )}
      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-0 text-[0.68rem] tracking-[0.22em] uppercase transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] peer-focus:top-0 peer-focus:text-[0.6rem] peer-focus:text-bronze ${
          filled ? "top-0 text-[0.6rem] text-bronze" : "top-7 text-muted-foreground"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const { t } = useLanguage();

  const fields = [
    { name: "name", label: t("Name", "الاسم بالكامل"), type: "text" },
    { name: "email", label: t("Email", "البريد الإلكتروني"), type: "email" },
    { name: "phone", label: t("Phone Number", "رقم الهاتف / الواتساب"), type: "tel" },
    { name: "project", label: t("Project Type", "نوع المشروع (شقة / فيلا / تجاري)"), type: "text" },
    { name: "budget", label: t("City / Location", "المدينة / الموقع (الإسكندرية / القاهرة ...)"), type: "text" },
    { name: "timeline", label: t("Execution Timeline", "الموعد المستهدف للتنفيذ"), type: "text" },
  ];

  const details = [
    { icon: Phone, label: "01003005301", href: "https://wa.me/201003005301" },
    { icon: Mail, label: "FB: Omar interior design", href: "https://www.facebook.com/OMAR1986am/" },
    { icon: MapPin, label: t("El-Bitash, Alexandria (Next to Banque Misr)", "الإسكندرية - البيطاش، بجوار بنك مصر") },
    { icon: Clock, label: t("Sat–Thu, 10:00–20:00 EST", "السبت – الخميس: ١٠ صباحاً – ٨ مساءً") },
  ];

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success(t("Inquiry received", "تم استلام الطلب بنجاح"), {
      description: t("We will contact you via phone or WhatsApp shortly.", "سيتم التواصل معكم قريباً عبر الهاتف أو الواتساب."),
    });
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="section-pad relative isolate overflow-hidden bg-linen">
      <img
        src={studio}
        alt="Eng. Omar Abdelaziz Interior Design Studio"
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-15"
      />
      <div className="shell grid gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24">
        <Reveal>
          <Eyebrow>{t("Contact Studio", "تواصل معنا")}</Eyebrow>
          <h2 className="display-lg mt-7 max-w-[15ch]">
            {t("Let's create something ", "دعنا نحول رؤيتك إلى ")}
            <em className="text-bronze">{t("beautiful", "واقع فاخر")}</em>.
          </h2>
          <p className="body-lg mt-8 max-w-[44ch]">
            {t(
              "Tell us about your space, location in Egypt, and your project ambition. Eng. Omar Abdelaziz and the team are ready to consult on your dream home.",
              "أخبرنا بتفاصيل مشروعك وموقعه في مصر لتلقي استشارة هندسية متكاملة من م. عمر عبد العزيز وفريق العمل."
            )}
          </p>

          <ul className="mt-12 space-y-6">
            {details.map((d) => (
              <li key={d.label}>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noreferrer" className="flex min-w-0 items-center gap-5 transition-colors hover:text-bronze">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/40 text-bronze">
                      <d.icon className="h-4 w-4" strokeWidth={1.25} />
                    </span>
                    <span className="min-w-0 text-sm tracking-[0.06em] underline">{d.label}</span>
                  </a>
                ) : (
                  <div className="flex min-w-0 items-center gap-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bronze/40 text-bronze">
                      <d.icon className="h-4 w-4" strokeWidth={1.25} />
                    </span>
                    <span className="min-w-0 text-sm tracking-[0.06em]">{d.label}</span>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="glass-card grid gap-8 p-8 sm:p-12 sm:[&>*:nth-child(-n+6)]:col-span-1 sm:grid-cols-2"
          >
            {fields.map((f) => (
              <Field key={f.name} {...f} />
            ))}
            <div className="sm:col-span-2">
              <Field name="message" label={t("Project Details & Message", "تفاصيل المشروع وملاحظاتك")} textarea />
            </div>
            <button type="submit" className="btn-bronze mt-2 w-full sm:col-span-2">
              {t("Submit Inquiry", "إرسال طلب الاستشارة")}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
