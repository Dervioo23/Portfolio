import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { ArrowRight, ArrowUpRight, Play, Code, Close } from './ui/Icons'
import { useLang } from '../i18n/LanguageContext'

const accents = {
  cyan: 'from-cyan-400/20 to-cyan-500/5 text-cyan-300 border-cyan-400/20',
  emerald: 'from-emerald-400/20 to-emerald-500/5 text-emerald-300 border-emerald-400/20',
  violet: 'from-violet-400/20 to-violet-500/5 text-violet-300 border-violet-400/20',
  sky: 'from-sky-400/20 to-sky-500/5 text-sky-300 border-sky-400/20',
  amber: 'from-amber-400/20 to-amber-500/5 text-amber-300 border-amber-400/20',
}

function getProjectActions(project, labels) {
  return [
    { href: project.links?.caseStudy, label: labels.caseStudy, Icon: ArrowUpRight },
    { href: project.links?.demo, label: labels.demo, Icon: Play },
    { href: project.links?.source, label: labels.source, Icon: Code },
  ].filter((a) => a.href && a.href !== '#')
}

function ProjectFilters({ filters, activeFilter, onChange }) {
  return (
    <div className="mt-8 flex flex-wrap gap-2.5" aria-label="Project filters">
      {filters.map((filter) => {
        const active = filter.value === activeFilter
        return (
          <button
            key={filter.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(filter.value)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 ${
              active
                ? 'border-cyanic-400/50 bg-cyanic-400 text-navy-950 shadow-glow'
                : 'border-white/10 bg-white/[0.035] text-slatey-300 hover:border-cyanic-400/30 hover:bg-white/[0.07] hover:text-white'
            }`}
          >
            {filter.label}
          </button>
        )
      })}
    </div>
  )
}

function CarouselProgress({ value }) {
  return (
    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/[0.06]" aria-hidden="true">
      <div
        className="h-full rounded-full bg-gradient-to-r from-cyanic-400 to-cyanic-600 transition-[width] duration-200"
        style={{ width: `${Math.max(8, value * 100)}%` }}
      />
    </div>
  )
}

function ProjectModal({ project, index, total, labels, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null)

  // Focus management + focus trap (accessibility).
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    dialog.focus()
    const onKey = (event) => {
      if (event.key !== 'Tab') return
      const items = dialog.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (!items.length) return
      const first = items[0]
      const last = items[items.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    dialog.addEventListener('keydown', onKey)
    return () => dialog.removeEventListener('keydown', onKey)
  }, [])

  // Reset scroll to top when navigating between projects.
  useEffect(() => {
    dialogRef.current?.scrollTo({ top: 0 })
  }, [project.name])

  const actions = getProjectActions(project, labels)
  const detailItems = [
    { label: labels.problem, value: project.problem },
    { label: labels.solution, value: project.solution },
    { label: labels.impact, value: project.impact },
    { label: labels.role, value: project.role },
  ].filter((item) => item.value)

  const navBtn =
    'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors hover:border-cyanic-400/40 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400'

  return (
    <motion.div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-navy-950/80 px-4 py-4 backdrop-blur-xl sm:items-center sm:py-8"
      role="presentation"
      onMouseDown={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        tabIndex={-1}
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
        onMouseDown={(event) => event.stopPropagation()}
        className="glass-strong max-h-[88dvh] w-full max-w-4xl overflow-y-auto rounded-2xl p-5 shadow-glow-lg focus:outline-none sm:p-7"
      >
        <div className="flex items-start justify-between gap-5">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanic-300">
              {project.category}
            </span>
            <h3 id="project-modal-title" className="mt-3 font-display text-2xl font-semibold text-white sm:text-3xl">
              {project.name}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" aria-label={labels.prev} onClick={onPrev} className={navBtn}>
              <ArrowRight className="h-4 w-4 rotate-180" />
            </button>
            <span className="min-w-[2.75rem] text-center font-mono text-xs font-semibold text-slatey-400">
              {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
            </span>
            <button type="button" aria-label={labels.next} onClick={onNext} className={navBtn}>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label={labels.close}
              onClick={onClose}
              className="ml-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 transition-colors hover:border-cyanic-400/40 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400"
            >
              <Close className="h-5 w-5" />
            </button>
          </div>
        </div>

        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: 8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.2 }}
        >
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slatey-300">
            {project.description || labels.onRequest}
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {detailItems.length > 0 ? (
              detailItems.map((item) => (
                <div key={item.label} className="rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyanic-300">
                    {item.label}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slatey-300">{item.value}</p>
                </div>
              ))
            ) : (
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm text-slatey-300">
                {labels.onRequest}
              </div>
            )}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-slatey-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/10 pt-5">
            {actions.length > 0 ? (
              actions.map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="btn-ghost group">
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))
            ) : (
              <span className="text-sm font-medium text-slatey-400/80">{labels.onRequest}</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, index, labels, onSelect, shouldIgnoreClick }) {
  const reduce = useReducedMotion()
  const accent = accents[project.accent] || accents.cyan
  const dotColor = accent.split(' ').find((c) => c.startsWith('text-')) || 'text-cyanic-300'
  const actions = project.directUrl ? [] : getProjectActions(project, labels)
  const cardClassName =
    "group relative flex min-h-[340px] w-[82vw] max-w-[500px] shrink-0 snap-start cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 sm:min-h-[360px] sm:w-[500px] lg:w-[520px] xl:w-[540px]"

  const openProject = (event) => onSelect(index, event.currentTarget)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect(index, event.currentTarget)
    }
  }

  const content = (
    <>
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gradient-to-br ${accent} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
      />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <div className={`mb-3 inline-flex items-center gap-2 rounded-full border bg-gradient-to-r px-3 py-1 text-[10px] font-medium sm:text-[11px] ${accent}`}>
            <span className={`h-1.5 w-1.5 rounded-full bg-current ${dotColor}`} />
            {project.category}
          </div>
          <h3 className="font-display text-lg font-semibold text-white sm:text-xl">
            {project.name}
          </h3>
        </div>
        <span
          className={`font-mono text-sm font-semibold opacity-40 transition-opacity duration-300 group-hover:opacity-100 ${dotColor}`}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className="relative mt-3 overflow-hidden text-sm leading-relaxed text-slatey-400 [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:3]">
        {project.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-slatey-300 sm:text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/5 pt-5">
        {project.directUrl ? (
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-colors group-hover:text-cyanic-300">
            <ArrowUpRight className="h-4 w-4" />
            {labels.caseStudy}
          </span>
        ) : actions.length > 0 ? (
          actions.map(({ href, label, Icon }, ai) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(event) => event.stopPropagation()}
              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-cyanic-300 ${
                ai === 0 ? 'text-white' : 'text-slatey-400'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))
        ) : (
          <span className="text-sm font-medium text-slatey-400/70">{labels.onRequest}</span>
        )}
      </div>
    </>
  )

  if (project.directUrl) {
    return (
      <motion.a
        href={project.directUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-direct-card="true"
        data-accent={project.accent}
        onClick={(event) => {
          if (shouldIgnoreClick?.()) {
            event.preventDefault()
            return
          }
          event.preventDefault()
          window.open(project.directUrl, '_blank', 'noopener,noreferrer')
        }}
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={reduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
        whileHover={reduce ? {} : { y: -8, scale: 1.015 }}
        className={cardClassName}
      >
        {content}
      </motion.a>
    )
  }

  return (
    <motion.article
      role="button"
      tabIndex={0}
      data-accent={project.accent}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? {} : { y: -8, scale: 1.015 }}
      className={cardClassName}
    >
      {content}
    </motion.article>
  )
}

export default function ProjectsSection() {
  const { t } = useLang()
  const railRef = useRef(null)
  const dragRef = useRef({ active: false, moved: false, startX: 0, scrollLeft: 0 })
  const triggerRef = useRef(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const labels = {
    caseStudy: t.ui.viewCaseStudy,
    demo: t.ui.viewDemo,
    source: t.ui.sourceCode,
    onRequest: t.ui.projectsOnRequest,
    close: t.ui.closeProjectModal,
    prev: t.ui.prevProject,
    next: t.ui.nextProject,
    problem: t.ui.projectProblem,
    solution: t.ui.projectSolution,
    impact: t.ui.projectImpact,
    role: t.ui.projectRole,
  }
  const filters = t.ui.projectFilters || [
    { label: 'All', value: 'All' },
    { label: 'AI', value: 'AI' },
    { label: 'Dashboard', value: 'Dashboard' },
    { label: 'Automation', value: 'Automation' },
    { label: 'Workflow', value: 'Workflow' },
    { label: 'Computer Vision', value: 'Computer Vision' },
  ]
  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return t.projects
    return t.projects.filter((project) => project.tags?.includes(activeFilter))
  }, [activeFilter, t.projects])

  const len = filteredProjects.length
  const selectedProject = selectedIndex != null ? filteredProjects[selectedIndex] : null

  const closeModal = () => {
    setSelectedIndex(null)
    const el = triggerRef.current
    requestAnimationFrame(() => el?.focus?.())
  }
  const showRelative = (dir) =>
    setSelectedIndex((i) => (i == null || len === 0 ? i : (i + dir + len) % len))

  const updateScrollProgress = () => {
    const rail = railRef.current
    if (!rail) return
    const maxScroll = rail.scrollWidth - rail.clientWidth
    setScrollProgress(maxScroll > 0 ? rail.scrollLeft / maxScroll : 1)
  }

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    rail.scrollTo({ left: 0, behavior: 'smooth' })
    requestAnimationFrame(updateScrollProgress)
    setSelectedIndex(null)
  }, [activeFilter])

  useEffect(() => {
    const rail = railRef.current
    if (!rail) return

    updateScrollProgress()
    rail.addEventListener('scroll', updateScrollProgress, { passive: true })
    window.addEventListener('resize', updateScrollProgress)
    return () => {
      rail.removeEventListener('scroll', updateScrollProgress)
      window.removeEventListener('resize', updateScrollProgress)
    }
  }, [filteredProjects.length])

  useEffect(() => {
    if (selectedIndex == null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeModal()
      else if (event.key === 'ArrowRight') showRelative(1)
      else if (event.key === 'ArrowLeft') showRelative(-1)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, len])

  const scrollProjects = (direction) => {
    const rail = railRef.current
    if (!rail) return

    rail.scrollBy({
      left: direction * Math.min(rail.clientWidth * 0.85, 620),
      behavior: 'smooth',
    })
    requestAnimationFrame(updateScrollProgress)
  }

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return
    const target = event.target instanceof Element ? event.target : null
    if (target?.closest('[data-direct-card="true"]')) return

    const rail = railRef.current
    if (!rail) return

    dragRef.current = {
      active: true,
      moved: false,
      startX: event.clientX,
      scrollLeft: rail.scrollLeft,
    }
    rail.setPointerCapture?.(event.pointerId)
    rail.dataset.dragging = 'true'
  }

  const handlePointerMove = (event) => {
    const rail = railRef.current
    const drag = dragRef.current
    if (!rail || !drag.active) return

    const delta = event.clientX - drag.startX
    if (Math.abs(delta) > 6) drag.moved = true
    rail.scrollLeft = drag.scrollLeft - delta
  }

  const handlePointerEnd = (event) => {
    const rail = railRef.current
    if (!rail) return

    dragRef.current.active = false
    rail.releasePointerCapture?.(event.pointerId)
    delete rail.dataset.dragging
    window.setTimeout(() => {
      dragRef.current.moved = false
    }, 0)
  }

  const selectProject = (index, el) => {
    if (dragRef.current.moved) return
    const project = filteredProjects[index]
    if (project?.directUrl) {
      window.open(project.directUrl, '_blank', 'noopener,noreferrer')
      return
    }
    triggerRef.current = el || null
    setSelectedIndex(index)
  }

  return (
    <section id="projects" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-wide">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={t.ui.projectsEyebrow}
            title={t.ui.projectsTitle}
            intro={t.ui.projectsIntro}
          />

          <div className="flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous projects"
              onClick={() => scrollProjects(-1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-100 backdrop-blur-md transition-all duration-300 hover:border-cyanic-400/40 hover:bg-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400"
            >
              <ArrowRight className="h-5 w-5 rotate-180" />
            </button>
            <button
              type="button"
              aria-label="Next projects"
              onClick={() => scrollProjects(1)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-cyanic-400/30 bg-cyanic-400/10 text-cyanic-200 backdrop-blur-md transition-all duration-300 hover:bg-cyanic-400 hover:text-navy-950 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ProjectFilters filters={filters} activeFilter={activeFilter} onChange={setActiveFilter} />

        <div className="relative mt-10 sm:mt-12">
          <div
            ref={railRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            className="projects-rail -mx-5 flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-5 pb-6 active:cursor-grabbing sm:-mx-8 sm:px-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.name}
                project={project}
                index={index}
                labels={labels}
                onSelect={selectProject}
                shouldIgnoreClick={() => dragRef.current.moved}
              />
            ))}
          </div>
          <CarouselProgress value={scrollProgress} />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            key="project-modal"
            project={selectedProject}
            index={selectedIndex}
            total={len}
            labels={labels}
            onClose={closeModal}
            onPrev={() => showRelative(-1)}
            onNext={() => showRelative(1)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
