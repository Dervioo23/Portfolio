import { motion, useReducedMotion } from 'framer-motion'
import Reveal from './ui/Reveal'
import { Mail, LinkedIn, Github, WhatsApp, ArrowUpRight } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

export default function ContactSection() {
  const reduce = useReducedMotion()
  const { t } = useLang()
  const { profile, ui } = t

  const channels = [
    { label: ui.emailMe, icon: Mail, href: `mailto:${profile.email}`, hint: profile.email },
    { label: 'LinkedIn', icon: LinkedIn, href: profile.linkedin, hint: ui.contactHints.linkedin },
    { label: 'GitHub', icon: Github, href: profile.github, hint: ui.contactHints.github },
    { label: 'WhatsApp', icon: WhatsApp, href: profile.whatsapp, hint: ui.contactHints.whatsapp },
  ].filter((c) => c.href && c.href !== '#')

  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-cyanic-500/10 blur-[140px]" />

      <div className="container-wide relative">
        <div className="relative overflow-hidden rounded-3xl border border-cyanic-400/20 bg-gradient-to-br from-cyanic-500/10 via-white/[0.03] to-navy-900/50 px-6 py-16 text-center backdrop-blur-xl sm:px-16 sm:py-20">
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-25" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyanic-500/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <Reveal>
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-cyanic-400/60" aria-hidden="true" />
                {ui.contactEyebrow}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                {ui.contactTitleLead}
                <span className="text-gradient">{ui.contactTitleHighlight}</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slatey-300">
                {ui.contactDescription}
              </p>
            </Reveal>

            <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map((c, i) => {
                const Icon = c.icon
                const external = c.href.startsWith('http')
                return (
                  <motion.a
                    key={c.label}
                    href={c.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    whileInView={reduce ? {} : { opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-left transition-all duration-300 hover:border-cyanic-400/40 hover:bg-cyanic-500/10"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyanic-300 transition-colors group-hover:border-cyanic-400/40">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-1 font-medium text-white">
                        {c.label}
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                      <span className="block truncate text-xs text-slatey-400">{c.hint}</span>
                    </span>
                  </motion.a>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
