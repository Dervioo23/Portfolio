import { Mail, LinkedIn, Github, WhatsApp } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const { profile, nav, ui } = t

  const socials = [
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
    { icon: LinkedIn, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: WhatsApp, href: profile.whatsapp, label: 'WhatsApp' },
  ].filter((s) => s.href && s.href !== '#')

  return (
    <footer className="relative border-t border-white/10 bg-navy-950/60">
      <div className="container-wide py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="flex items-center gap-2.5" aria-label="Go to top">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-cyanic-400/30 bg-cyanic-500/10 font-display text-sm font-bold text-cyanic-300">
                D
              </span>
              <span className="font-display text-sm font-semibold tracking-wide text-white">
                Dervio Rahmatdianto
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-slatey-400">{ui.footerTagline}</p>
          </div>

          {/* Nav + socials */}
          <div className="flex flex-col items-start gap-6 md:items-end">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="text-sm text-slatey-400 transition-colors hover:text-white"
                >
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              {socials.map((s) => {
                const Icon = s.icon
                const external = s.href.startsWith('http')
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-slatey-300 transition-all duration-300 hover:border-cyanic-400/40 hover:text-cyanic-300"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="hairline my-8" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-xs text-slatey-400 sm:flex-row sm:text-left">
          <p>{ui.footerCopyright}</p>
          <p className="text-slatey-400/70">{ui.footerSubnote}</p>
        </div>
      </div>
    </footer>
  )
}
