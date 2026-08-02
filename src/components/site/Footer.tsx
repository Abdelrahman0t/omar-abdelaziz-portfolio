import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useLanguage } from "../../context/LanguageContext";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.764.459 3.486 1.332 5.006l-1.415 5.17 5.291-1.387c1.47.802 3.13 1.224 4.78 1.224h.004c5.506 0 9.989-4.478 9.99-9.985.001-2.668-1.034-5.176-2.919-7.062a9.92 9.92 0 0 0-7.073-2.949zm.004 1.666c4.588 0 8.324 3.734 8.325 8.322 0 2.224-.866 4.316-2.438 5.888-1.57 1.571-3.66 2.437-5.883 2.437h-.003c-1.43 0-2.836-.372-4.076-1.077l-.292-.17-3.033.795.808-2.957-.186-.296c-.777-1.238-1.189-2.67-1.189-4.139.001-4.588 3.737-8.323 8.287-8.323zm-3.6 4.305c-.201 0-.525.075-.8.375-.276.3-.1.05-.1.05s-1.05 1.05-1.05 2.55.975 3.025 1.125 3.225c.15.2 2.05 3.125 4.975 4.375 2.425 1.05 2.925.85 3.45.8 0 0 1.775-.725 2.025-1.425.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35s-1.75-.863-2.025-.963c-.275-.1-.475-.15-.675.15s-.775.963-.95 1.163c-.175.2-.35.225-.65.075s-1.275-.47-2.43-1.498c-.9-.802-1.507-1.79-1.684-2.09-.175-.3-.019-.463.131-.613.136-.135.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525s-.675-1.625-.925-2.225c-.244-.585-.494-.505-.675-.515z"/>
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
    </svg>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const nav = [
    { label: t("Projects", "المشروعات"), href: "#projects" },
    { label: t("Services", "الخدمات"), href: "#services" },
    { label: t("Process", "مراحل العمل"), href: "#process" },
    { label: t("About", "عن المهندس"), href: "#about" },
    { label: t("Case Study", "قصة تنفيذ"), href: "#journal" },
  ];

  const services = [
    t("Residential Design", "تصميم الفيلات والشقق السكنية"),
    t("Commercial Spaces", "تشطيب المحلات والمقرات التجارية"),
    t("Turnkey Finishing", "التشطيبات المعمارية تسليم مفتاح"),
    t("Lighting Design", "توزيع الإضاءة وبيوت النور"),
    t("Custom Joinery", "تجليد الحوائط والدريسنج روم"),
  ];

  return (
    <footer className="bg-ink pt-24 pb-12 text-background">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1.2fr]">
          <div>
            <p className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight">
              {t("Omar Abdelaziz", "م. عمر عبد العزيز")}
            </p>
            <p className="mt-3 text-[0.6rem] tracking-[0.3em] text-background/60 uppercase">
              {t("Interior Design & Finishing · I HOME", "التشطيبات المعمارية والديكور · I HOME")}
            </p>
            <p className="mt-2 text-xs text-background/50">
              {t("Alexandria, Egypt", "الإسكندرية، مصر")} · Phone / WhatsApp:{" "}
              <a href="https://wa.me/201003005301" target="_blank" rel="noreferrer" className="text-bronze-soft underline">
                01003005301
              </a>
            </p>
          </div>

          <nav>
            <p className="text-[0.6rem] tracking-[0.3em] text-bronze uppercase">{t("Navigation", "أقسام الموقع")}</p>
            <ul className="mt-6 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-background/70 transition-colors duration-500 hover:text-bronze-soft"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[0.6rem] tracking-[0.3em] text-bronze uppercase">{t("Services", "خدماتنا")}</p>
            <ul className="mt-6 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-background/70">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.6rem] tracking-[0.3em] text-bronze uppercase">{t("Contact Studio", "تواصل معنا")}</p>
            <div className="mt-6 space-y-3 text-sm text-background/70">
              <p>{t("El-Bitash, Alexandria (Next to Banque Misr)", "الإسكندرية - البيطاش، بجوار بنك مصر")}</p>
              <p>01003005301</p>
              <p>
                {" "}
                <a
                  href="https://www.facebook.com/OMAR1986am/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-bronze-soft underline"
                >
                  Facebook Page (Omar interior design)
                </a>
              </p>
            </div>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/OMAR1986am/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background/80 transition-all duration-500 hover:border-bronze hover:bg-bronze hover:text-ink"
              >
                <FacebookIcon className="h-5 w-5 fill-current" />
              </a>
              <a
                href="https://wa.me/201003005301"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-background/20 text-background/80 transition-all duration-500 hover:border-bronze hover:bg-bronze hover:text-ink"
              >
                <WhatsAppIcon className="h-5 w-5 fill-current" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-background/15" />
        <div className="mt-8 flex flex-wrap justify-between gap-4 text-[0.62rem] tracking-[0.24em] text-background/45 uppercase">
          <p>© {new Date().getFullYear()} Omar Abdelaziz Interior Design (I HOME)</p>
          <p>{t("Alexandria · Cairo · North Coast · Egypt", "الإسكندرية · القاهرة · الساحل الشمالي · مصر")}</p>
        </div>
      </div>
    </footer>
  );
}
