import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

/**
 * Hero foreground (text/CTA/badges). Transparent — the visual lives in
 * <HeroBackdrop /> behind the page. `heroRef` is set on the tall track so both
 * this content and the backdrop share the same scroll progress.
 */
export default function HeroSection({ heroRef }) {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const [firstName, ...restName] = t.profile.name.split(' ')
  const lastName = restName.join(' ')

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.55], [1, 1, 0])
  const contentY = useTransform(scrollYProgress, [0, 0.55], [0, -40])
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
  }
  const item = reduce
    ? { hidden: {}, show: {} }
    : {
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }

  return (
    // Tall track: scroll distance here drives the backdrop's image sequence.
    <section id="home" ref={heroRef} className="relative h-[200vh]">
      {/* Content pinned over the first screen, then scrolls up and fades */}
      <motion.div
        style={reduce ? undefined : { opacity: contentOpacity, y: contentY }}
        className="sticky top-0 flex h-[100dvh] items-start overflow-y-auto lg:items-center lg:overflow-hidden"
      >
        <div className="container-wide w-full pb-8 pt-24 sm:pb-10 md:pt-24 lg:pb-14">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid items-start gap-7 lg:grid-cols-[minmax(0,520px)_minmax(120px,0.55fr)_minmax(0,440px)] lg:items-center lg:gap-10"
          >
            <div className="relative z-10 max-w-[500px]">
              <motion.div variants={item}>
                <span className="pill border-cyanic-400/20 bg-cyanic-500/10 text-cyanic-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyanic-400 opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-cyanic-400" />
                  </span>
                  {t.ui.available}
                </span>
              </motion.div>

              <motion.p
                variants={item}
                className="mt-6 text-sm font-medium text-slatey-300 sm:mt-10 sm:text-base"
              >
                {t.ui.greeting}
              </motion.p>

              <motion.h1
                variants={item}
                className="mt-3 font-display text-[clamp(2.75rem,11vw,5.05rem)] font-semibold leading-[0.96] tracking-normal text-white lg:text-[clamp(3rem,4.6vw,5.05rem)]"
              >
                <span className="block">{firstName}</span>
                {lastName && (
                  <span className="block text-gradient">{lastName}</span>
                )}
              </motion.h1>

              <motion.p
                variants={item}
                className="mt-4 max-w-md font-display text-lg font-semibold leading-tight text-white sm:mt-6 sm:text-2xl"
              >
                {t.ui.heroStatement}
              </motion.p>

              <motion.div variants={item} className="mt-5 flex flex-wrap gap-2.5 sm:mt-6">
                {t.ui.badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-white/10 bg-white/[0.035] px-3.5 py-1.5 text-xs font-medium tracking-wide text-slatey-300 backdrop-blur-md"
                  >
                    {b}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Subtle connector bridging the identity (left) and role/CTA (right)
                blocks across the central character on wide screens. */}
            <motion.div
              variants={item}
              aria-hidden="true"
              className="relative hidden items-center justify-center lg:flex"
            >
              <span className="h-28 w-px bg-gradient-to-b from-transparent via-cyanic-400/20 to-transparent" />
            </motion.div>

            <motion.div
              variants={item}
              className="relative z-10 max-w-sm lg:col-start-3 lg:ml-auto"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyanic-300">
                {t.ui.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slatey-300 sm:text-base">
                {t.ui.subheadline}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary group w-full sm:w-auto">
                  {t.ui.viewProjects}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                <a href="#contact" className="btn-ghost group w-full sm:w-auto">
                  {t.ui.letsWork}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        style={reduce ? undefined : { opacity: cueOpacity }}
        className="pointer-events-none fixed bottom-6 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-slatey-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">{t.ui.scroll}</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="h-2 w-1 animate-float rounded-full bg-cyanic-400" />
        </span>
      </motion.div>
    </section>
  )
}
