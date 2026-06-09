import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from './Icons'

/**
 * Floating "back to top" button — appears after scrolling down a screen or two.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toTop = () =>
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          type="button"
          onClick={toTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyanic-400/30 bg-navy-900/70 text-cyanic-200 backdrop-blur-md transition-colors duration-300 hover:border-cyanic-400/60 hover:bg-cyanic-400 hover:text-navy-950 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-cyanic-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950"
        >
          <ArrowRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
