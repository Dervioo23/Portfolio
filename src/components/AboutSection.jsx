import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import CountUp from './ui/CountUp'
import { ArrowUpRight } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'
import profilePhoto from '../../Images/Foto Profil Dervio.jpeg'

export default function AboutSection() {
  const { t } = useLang()
  const about = t.about
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-prose">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-16 xl:grid-cols-[minmax(0,1fr)_420px]">
          <div>
            <SectionHeading eyebrow={t.ui.aboutEyebrow} title={t.ui.aboutTitle} />

            {/* Narrative */}
            <div className="mt-10 max-w-3xl space-y-6">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <p
                    className={
                      i === 0
                        ? 'text-lg leading-relaxed text-slate-200'
                        : 'text-lg leading-relaxed text-slatey-400'
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.18}>
              <div className="mt-7">
                <a
                  href={t.profile.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost group inline-flex w-full justify-center sm:w-auto"
                  aria-label={`${t.ui.viewCv} - ${t.profile.name}`}
                >
                  {t.ui.viewCv}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {about.highlights.map((h, i) => (
                <Reveal key={h.label} delay={0.1 + i * 0.07}>
                  <div className="glass group flex min-h-[104px] flex-col justify-between rounded-xl p-4 transition-all duration-300 hover:border-cyanic-400/30 hover:bg-white/[0.06]">
                    <div className="text-[10px] font-medium uppercase tracking-wider text-cyanic-400/80">
                      {h.label}
                    </div>
                    <div className="mt-3 font-display text-sm font-semibold leading-snug text-white sm:text-base">
                      <CountUp value={h.value} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={0.12}>
            <figure className="mx-auto w-full max-w-[360px] lg:sticky lg:top-28 xl:max-w-[420px]">
              <div className="glass-strong overflow-hidden rounded-2xl p-2 shadow-glow">
                <img
                  src={profilePhoto}
                  alt={`${t.profile.name} profile portrait`}
                  className="aspect-[4/5] w-full rounded-xl object-cover object-[50%_34%]"
                  loading="lazy"
                />
              </div>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
