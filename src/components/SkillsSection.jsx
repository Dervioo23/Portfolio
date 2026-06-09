import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import { useLang } from '../i18n/LanguageContext'

export default function SkillsSection() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const skillGroups = t.skillGroups

  return (
    <section id="skills" className="relative scroll-mt-20 py-24 sm:py-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyanic-500/5 blur-[140px]" />

      <div className="container-prose relative">
        <SectionHeading
          eyebrow={t.ui.skillsEyebrow}
          title={t.ui.skillsTitle}
          intro={t.ui.skillsIntro}
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-8">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="glass rounded-2xl p-6 sm:p-7">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-cyanic-400 shadow-glow" />
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2.5">
                  {group.items.map((item, ii) => (
                    <motion.span
                      key={item}
                      initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                      whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: ii * 0.025 }}
                      whileHover={reduce ? {} : { y: -3 }}
                      className="cursor-default rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-200 transition-colors duration-300 hover:border-cyanic-400/40 hover:bg-cyanic-500/10 hover:text-cyanic-200"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
