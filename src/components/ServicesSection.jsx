import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Reveal from './ui/Reveal'
import Tilt from './ui/Tilt'
import { iconMap, ArrowRight } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

export default function ServicesSection() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const services = t.services

  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow={t.ui.servicesEyebrow}
          title={t.ui.servicesTitle}
          intro={t.ui.servicesIntro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon]
            return (
              <Tilt key={s.title} className="h-full">
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08 }}
                className="group relative flex h-full gap-5 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-md transition-all duration-300 hover:border-cyanic-400/30 hover:bg-white/[0.05]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyanic-400/20 bg-cyanic-500/10 text-cyanic-300 transition-transform duration-300 group-hover:scale-105">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slatey-400">{s.description}</p>
                </div>
              </motion.div>
              </Tilt>
            )
          })}
        </div>

        {/* CTA banner */}
        <Reveal delay={0.1}>
          <div className="relative mt-10 overflow-hidden rounded-3xl border border-cyanic-400/20 bg-gradient-to-br from-cyanic-500/10 via-white/[0.03] to-navy-900/40 p-8 sm:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyanic-500/15 blur-3xl" />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <p className="max-w-xl font-display text-xl font-semibold leading-snug text-white sm:text-2xl">
                {t.ui.ctaLead}{' '}
                <span className="text-cyanic-300">{t.ui.ctaHighlight}</span>
              </p>
              <a
                href={t.profile.fastwork}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group shrink-0"
              >
                {t.ui.startProject}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
