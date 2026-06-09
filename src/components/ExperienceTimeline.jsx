import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { useLang } from '../i18n/LanguageContext'

export default function ExperienceTimeline() {
  const { t } = useLang()
  const experience = t.experience
  return (
    <section id="experience" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-prose">
        <SectionHeading eyebrow={t.ui.experienceEyebrow} title={t.ui.experienceTitle} />

        <div className="relative mt-14 pl-8 sm:pl-10">
          {/* vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-cyanic-400/50 via-white/10 to-transparent sm:left-[11px]" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <Reveal key={exp.role} delay={i * 0.08}>
                <div className="relative">
                  {/* node */}
                  <span className="absolute -left-8 top-1.5 flex h-4 w-4 items-center justify-center sm:-left-10">
                    <span className="absolute h-4 w-4 animate-pulse-glow rounded-full bg-cyanic-400/30" />
                    <span className="relative h-2.5 w-2.5 rounded-full border-2 border-cyanic-400 bg-navy-950" />
                  </span>

                  <div className="glass rounded-2xl p-6 transition-colors duration-300 hover:border-cyanic-400/25">
                    <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="mt-1 text-sm font-medium text-cyanic-300">{exp.org}</p>
                    <p className="mt-3 text-sm leading-relaxed text-slatey-400">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
