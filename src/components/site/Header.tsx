import { useEffect, useState } from "react";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { label: t("Projects", "المشروعات"), href: "#projects" },
    { label: t("Services", "الخدمات"), href: "#services" },
    { label: t("Process", "مراحل العمل"), href: "#process" },
    { label: t("About", "عن المهندس"), href: "#about" },
    { label: t("Case Study", "قصة تنفيذ"), href: "#journal" },
  ];

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid || open
          ? "border-b border-border/80 bg-background/95 backdrop-blur-2xl py-3.5 shadow-md"
          : "border-b border-transparent py-6"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4">
        <a href="#top" className="min-w-0 shrink-0">
          <span className="block font-display text-xl sm:text-2xl leading-none tracking-tight whitespace-nowrap">
            {t("Omar Abdelaziz", "م. عمر عبد العزيز")}
          </span>
          <span className="mt-1 block text-[0.52rem] tracking-[0.28em] text-muted-foreground uppercase whitespace-nowrap">
            {t("Interior Design & Finishing", "التشطيبات المعمارية والديكور")}
          </span>
        </a>

        <nav className="hidden items-center justify-center gap-4 lg:flex xl:gap-7">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link whitespace-nowrap text-xs tracking-[0.16em]">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-end gap-2.5 sm:gap-3">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="inline-flex shrink-0 items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[0.68rem] tracking-wider text-foreground transition-all duration-300 hover:border-bronze hover:bg-linen"
          >
            <Globe className="h-3 w-3 text-bronze" />
            <span className="font-semibold uppercase">{lang === "en" ? "العربية" : "EN"}</span>
          </button>

          <a href="#contact" className="btn-bronze hidden shrink-0 !px-5 !py-2.5 !text-[0.62rem] sm:inline-flex">
            {t("Book Consultation", "احجز استشارة")}
          </a>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border lg:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="shell animate-fade-in my-3 flex flex-col gap-4 rounded-2xl bg-card p-6 shadow-2xl border border-border/80 lg:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link text-base py-1" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn-bronze mt-2 w-full text-center" onClick={() => setOpen(false)}>
            {t("Book Consultation", "احجز استشارة")}
          </a>
        </div>
      )}
    </header>
  );
}
