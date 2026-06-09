import { motion, useScroll, useTransform } from 'framer-motion'
import ImageSequence from './ImageSequence'
import Particles from './ui/Particles'

/**
 * Full-viewport, scroll-driven hero background.
 *
 * Rendered as a fixed layer *behind* the page content (z-0 under main's z-10),
 * so the image sequence fills the entire screen for the whole hero — no dark
 * void appears while scrolling. It fades out as the hero ends so the following
 * sections sit on the normal page background.
 */
export default function HeroBackdrop({ heroRef }) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  })

  // Stay fully opaque through the hero, then fade out into the next section.
  const opacity = useTransform(scrollYProgress, [0, 0.8, 0.97], [1, 1, 0])

  return (
    <motion.div
      style={{ opacity }}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-[100dvh] w-full overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageSequence
          basePath="/sequence"
          prefix="ezgif-frame-"
          frameCount={192}
          startFrame={29}
          endFrame={191}
          staticFrame={29}
          trackRef={heroRef}
          poster="/sequence/ezgif-frame-030.jpg"
        />
      </div>

      {/* Cinematic overlays for legibility & depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/60 to-navy-950/15 md:via-navy-950/45 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-navy-950 via-navy-950/70 to-transparent" />
      <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-navy-950/75 to-transparent" />

      <Particles className="opacity-70" />
    </motion.div>
  )
}
