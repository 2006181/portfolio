import { useLayoutEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { additionalProjects, profile, projects, type Project } from '../data/portfolio';
import { useDesktop, useReducedMotionPref } from '../hooks/useMedia';
import { EASE, RevealText } from './fx';
import ProjectCard from './ProjectCard';

/**
 * ORIGINALS — on desktop the section pins and scrolls sideways like a title sequence.
 * On touch / small screens / reduced motion it becomes a native swipe rail.
 * Directly below, "More Projects" displays the expanded catalog and a link to GitHub.
 */
export default function Originals({ onOpen }: { onOpen: (p: Project) => void }) {
  const desktop = useDesktop();
  const reduced = useReducedMotionPref();
  return (
    <div>
      {desktop && !reduced ? <PinnedOriginals onOpen={onOpen} /> : <RailOriginals onOpen={onOpen} />}
      <MoreProjectsSection />
    </div>
  );
}

function Intro() {
  return (
    <div className="flex w-full shrink-0 flex-col justify-center lg:w-[34vw]">
      <p className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-crimson-2">
        <span className="h-px w-8 bg-crimson-2" /> Featured Originals · {projects[0].year}
      </p>
      <RevealText as="h2" text="FEATURED ORIGINALS" className="font-display text-[clamp(3.5rem,9vw,8rem)] leading-[0.85] text-bone" />
      <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-mist">
        Five featured productions from the resume — video intelligence with RAG, autonomous multi-agent research, campus AI assistant, workflow automations and ML prediction APIs. Open any title for the full story.
      </p>
      <p className="mt-6 hidden text-xs tracking-[0.24em] text-smoke lg:block">SCROLL TO BROWSE →</p>
    </div>
  );
}

function Outro() {
  return (
    <a
      href="#more-projects"
      data-cursor="view"
      className="group flex aspect-[3/4] w-[70vw] shrink-0 snap-start flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-white/15 text-center transition hover:border-crimson-2/60 sm:w-[44vw] lg:aspect-auto lg:h-[66vh] lg:w-[24vw]"
    >
      <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 text-2xl text-bone transition group-hover:scale-110 group-hover:border-crimson-2 group-hover:text-crimson-2">↓</span>
      <span className="font-display text-3xl tracking-wide text-bone">More Projects</span>
      <span className="text-xs text-mist">{additionalProjects.length} Open-Source Repositories</span>
    </a>
  );
}

function PinnedOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  const wrap = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);
  const distMV = useMotionValue(0);

  useLayoutEffect(() => {
    const measure = () => {
      if (!track.current) return;
      const d = Math.max(0, track.current.scrollWidth - window.innerWidth);
      setDist(d);
      distMV.set(d);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [distMV]);

  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start start', 'end end'] });
  const raw = useTransform([scrollYProgress, distMV], ([p, d]: number[]) => -p * d);
  const x = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={wrap} style={{ height: `calc(100vh + ${dist}px)` }} className="relative">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50%_60%_at_70%_50%,rgba(229,19,43,0.10),transparent_70%)]" />
        <motion.div ref={track} style={{ x }} className="gutter relative flex items-center gap-8 pr-[12vw]" data-cursor="drag">
          <Intro />
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
          ))}
          <Outro />
        </motion.div>
        <div className="gutter absolute inset-x-0 bottom-8 flex items-center gap-4">
          <span className="text-[10px] font-bold tracking-[0.3em] text-smoke">FEATURED ORIGINALS</span>
          <div className="h-[2px] flex-1 overflow-hidden rounded bg-white/10">
            <motion.div className="h-full origin-left bg-crimson" style={{ scaleX: bar }} />
          </div>
        </div>
      </div>
    </div>
  );
}

function RailOriginals({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <div className="py-6">
      <div className="gutter mb-6">
        <Intro />
      </div>
      <motion.div
        className="rail gutter flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} onOpen={() => onOpen(p)} />
        ))}
        <Outro />
      </motion.div>
    </div>
  );
}

function MoreProjectsSection() {
  return (
    <section id="more-projects" className="py-14 sm:py-20">
      <div className="gutter">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.32em] text-crimson-2">Open-Source Catalogue</p>
            <h3 className="font-display text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.9] text-bone">More Projects</h3>
          </div>
          <p className="max-w-md text-sm text-mist">
            Additional open-source implementations covering Generative AI, RAG architectures, computer vision, deep learning, NLP and exploratory data analysis.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {additionalProjects.map((p, i) => (
            <motion.article
              key={p.id}
              className="group relative flex flex-col justify-between rounded-2xl bg-gradient-to-b from-ink-2 to-[#09090e] p-6 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-crimson-2/50 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08, ease: EASE }}
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="rounded border border-crimson-2/30 bg-crimson-2/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-crimson-2">
                    {p.tag || 'Project'}
                  </span>
                  <span className="text-[11px] font-medium text-smoke">Open Source</span>
                </div>

                <h4 className="mt-4 font-display text-2xl tracking-wide text-bone transition group-hover:text-white">
                  {p.title}
                </h4>

                <p className="mt-2.5 text-sm leading-relaxed text-mist line-clamp-3">
                  {p.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-bone/80">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-2.5 border-t border-white/5 pt-4">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="link"
                    className="flex min-h-10 items-center gap-1.5 rounded-md bg-crimson px-3.5 text-xs font-bold text-white transition hover:bg-crimson-2"
                  >
                    ▶ Live Demo
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="link"
                  className="flex min-h-10 items-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-3.5 text-xs font-semibold text-bone transition hover:border-bone hover:bg-white/10"
                >
                  GitHub ↗
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Prominent View All Projects on GitHub button */}
        <div className="mt-14 flex flex-col items-center justify-center text-center">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="link"
            className="group flex min-h-14 items-center gap-3 rounded-xl bg-bone px-8 py-4 font-sans text-base font-bold text-ink shadow-[0_10px_30px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-[1.03] hover:bg-white hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)]"
          >
            <span className="text-xl">🐙</span>
            <span>View All Projects on GitHub</span>
            <span className="text-xs font-semibold text-ink/70">(30+ Repositories)</span>
            <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </a>
          <p className="mt-3 text-xs text-smoke">
            Explore all repositories, forks, notebooks, and active open-source experiments
          </p>
        </div>
      </div>
    </section>
  );
}
