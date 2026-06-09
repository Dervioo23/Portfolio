import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { useLang } from '../i18n/LanguageContext'

export default function ProcessSection() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const process = t.process

  return (
    <section id="process" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 mask-fade-b" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow={t.ui.processEyebrow}
          title={t.ui.processTitle}
          intro={t.ui.processIntro}
          align="center"
        />

        {/* Robust responsive grid — always shows all 6 steps, never clips. */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? {} : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyanic-400/30"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyanic-400/30 bg-navy-900 font-display text-sm font-bold text-cyanic-300 shadow-soft transition-all duration-300 group-hover:border-cyanic-400/70 group-hover:shadow-glow">
                {p.step}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slatey-400">{p.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
