import { useRef } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Subtle 3D tilt that follows the cursor across a card. The eased CSS transition makes the card lean
 * toward the pointer rather than snap. No-op on touch / reduced-motion.
 *
 * Wrap a card with it; keep the card's own hover/reveal animations intact
 * (they live on a child element, so their transforms never conflict).
 */
export default function Tilt({ children, className = '', max = 5 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()

  const handleMove = (e) => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateX = (0.5 - py) * max * 2
    const rotateY = (px - 0.5) * max * 2
    el.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
  }

  const reset = () => {
    const el = ref.current
    if (el) el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={className}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.3s ease-out' }}
    >
      {children}
    </div>
  )
}
