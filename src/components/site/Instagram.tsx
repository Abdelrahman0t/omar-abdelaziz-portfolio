import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Heart, Instagram as InstagramIcon } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p4 from "@/assets/project-4.jpg";
import after from "@/assets/after.jpg";
import { Eyebrow, Reveal } from "./primitives";

const grid = [g1, p1, g2, p2, after, g3, p4, g4];

export function InstagramGrid() {
  const [liked, setLiked] = useState<number | null>(null);

  return (
    <section className="section-pad">
      <div className="shell">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Reveal>
            <Eyebrow>@ateliernord</Eyebrow>
            <h2 className="display-lg mt-7 max-w-[16ch]">From the studio feed.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="btn-bronze"
            >
              <InstagramIcon className="h-4 w-4" strokeWidth={1.5} /> Follow
            </a>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {grid.map((img, i) => (
            <Reveal key={i} delay={(i % 4) * 0.07}>
              <button
                onClick={() => setLiked(i)}
                className="img-frame group relative block aspect-square w-full"
                aria-label="Like post"
              >
                <img
                  src={img}
                  alt="Atelier Nord instagram post"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute inset-0 grid place-items-center bg-ink/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <InstagramIcon className="h-6 w-6 text-background" strokeWidth={1.25} />
                </span>
                <AnimatePresence>
                  {liked === i && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 1, scale: 1.15 }}
                      exit={{ opacity: 0, scale: 1.6 }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      onAnimationComplete={() => setLiked(null)}
                      className="absolute inset-0 grid place-items-center"
                    >
                      <Heart className="h-14 w-14 fill-bronze text-bronze" strokeWidth={0} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
