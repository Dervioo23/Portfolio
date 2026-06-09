import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/**
 * Counts a numeric value up from 0 the first time it scrolls into view.
 * Non-numeric values (e.g. "Data Science Graduate") render as-is.
 * "5+ Systems" → animates 0→5 while keeping the "+ Systems" suffix.
 * Honors prefers-reduced-motion (shows the final value immediately).
 */
export default function CountUp({ value, duration = 1.3, className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  const match = /^(\d[\d,.]*)(.*)$/.exec(String(value).trim())
  const target = match ? parseFloat(match[1].replace(/,/g, '')) : null
  const suffix = match ? match[2] : ''
  const isInt = target != null && Number.isInteger(target)

  const [display, setDisplay] = useState(() =>
    target != null && !reduce ? `0${suffix}` : value,
  )

  useEffect(() => {
    if (target == null || reduce) {
      setDisplay(value)
      return
    }
    if (!inView) return

    let raf
    let startTs
    const step = (ts) => {
      if (!startTs) startTs = ts
      const p = Math.min((ts - startTs) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      const current = target * eased
      setDisplay(`${isInt ? Math.round(current) : current.toFixed(2)}${suffix}`)
      if (p < 1) raf = requestAnimationFrame(step)
      else setDisplay(`${isInt ? target : target.toFixed(2)}${suffix}`)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, suffix, isInt, value, duration, reduce])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
