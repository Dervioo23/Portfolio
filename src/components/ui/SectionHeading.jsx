import Reveal from './Reveal'

/**
 * Consistent section header: eyebrow label + title + optional intro.
 */
export default function SectionHeading({ eyebrow, title, intro, align = 'left', id }) {
  const center = align === 'center'
  return (
    <div className={center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow" id={id}>
            <span className="h-px w-6 bg-cyanic-400/60" aria-hidden="true" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-[2.6rem]">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-4 text-base leading-relaxed text-slatey-400 ${center ? 'mx-auto' : ''}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}
