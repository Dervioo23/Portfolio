import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Close, ArrowUpRight } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

function LangSwitch({ lang, setLang, className = '' }) {
  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] p-0.5 backdrop-blur-md ${className}`}
    >
      {['id', 'en'].map((code) => {
        const active = lang === code
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide transition-colors duration-300 ${
              active ? 'bg-cyanic-500 text-navy-950' : 'text-slatey-300 hover:text-white'
            }`}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const { t, lang, setLang } = useLang()

  // lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Scroll-spy: glass background after leaving the top, active section highlight.
  useEffect(() => {
    const ids = t.nav.map((n) => n.href.slice(1))
    const onScroll = () => {
      setScrolled(window.scrollY > 16)
      const line = 90 // just below the fixed navbar
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= line) current = id
      }
      setActiveId(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [t.nav])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-white/10 bg-navy-950/70 backdrop-blur-xl'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="container-wide flex h-[68px] items-center justify-between">
        {/* Logo / wordmark */}
        <a href="#home" className="group flex items-center gap-2.5" aria-label="Go to top">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg border border-cyanic-400/30 bg-cyanic-500/10 font-display text-sm font-bold text-cyanic-300">
            D
            <span className="absolute inset-0 rounded-lg shadow-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-wide text-white sm:block">
            Dervio<span className="text-cyanic-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {t.nav.map((n) => {
            const active = activeId === n.href.slice(1)
            return (
              <a
                key={n.href}
                href={n.href}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-white' : 'text-slatey-300 hover:text-white'
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-full bg-white/[0.08] ring-1 ring-inset ring-white/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </a>
            )
          })}
        </div>

        {/* Desktop: language switch + CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <LangSwitch lang={lang} setLang={setLang} />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-cyanic-400/30 bg-cyanic-500/10 px-4 py-2 text-sm font-semibold text-cyanic-200 transition-all duration-300 hover:bg-cyanic-500/20 hover:shadow-glow"
          >
            {t.ui.letsTalk}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile: language switch + toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LangSwitch lang={lang} setLang={setLang} />
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <Close className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="border-t border-white/10 bg-navy-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-wide flex flex-col gap-1 py-4">
              {t.nav.map((n) => {
                const active = activeId === n.href.slice(1)
                return (
                  <a
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                      active
                        ? 'bg-white/[0.06] text-white'
                        : 'text-slatey-300 hover:bg-white/[0.04] hover:text-white'
                    }`}
                  >
                    {n.label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-cyanic-500 px-4 py-3 text-sm font-semibold text-navy-950"
              >
                {t.ui.letsTalk}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
