import { motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import Tilt from './ui/Tilt'
import { iconMap } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

export default function ExpertiseSection() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const expertise = t.expertise

  return (
    <section id="expertise" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40 mask-fade-b" />
      <div className="container-wide relative">
        <SectionHeading
          eyebrow={t.ui.expertiseEyebrow}
          title={t.ui.expertiseTitle}
          intro={t.ui.expertiseIntro}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <Tilt key={card.title} className="h-full">
              <motion.article
                initial={reduce ? false : { opacity: 0, y: 26 }}
                whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduce ? {} : { y: -6 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md transition-colors duration-300 hover:border-cyanic-400/30"
              >
                {/* hover glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyanic-500/0 blur-3xl transition-all duration-500 group-hover:bg-cyanic-500/15" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-cyanic-400/20 bg-cyanic-500/10 text-cyanic-300 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>

                <h3 className="relative mt-5 font-display text-lg font-semibold text-white">
                  {card.title}
                </h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-slatey-400">
                  {card.description}
                </p>

                {/* bottom hairline accent */}
                <div className="relative mt-5 h-px w-full bg-gradient-to-r from-cyanic-400/0 via-cyanic-400/30 to-cyanic-400/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.article>
              </Tilt>
            )
          })}
        </div>
      </div>
    </section>
  )
}
