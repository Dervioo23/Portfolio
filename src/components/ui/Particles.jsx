import { useEffect, useRef } from 'react'

/**
 * Subtle glowing particle field on a canvas.
 * Lightweight: capped particle count, paused on reduced-motion and when off-screen.
 */
export default function Particles({ density = 0.00008, className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = 0
    let h = 0
    let particles = []
    let running = true

    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    function build() {
      const rect = canvas.getBoundingClientRect()
      w = rect.width
      h = rect.height
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.min(70, Math.max(18, Math.floor(w * h * density)))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: Math.random() * 0.5 + 0.15,
      }))
    }

    function frame() {
      if (!running) return
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(103, 232, 249, ${p.a})`
        ctx.shadowBlur = 8
        ctx.shadowColor = 'rgba(34, 211, 238, 0.6)'
        ctx.fill()
      }
      rafRef.current = requestAnimationFrame(frame)
    }

    build()
    if (!reduce) {
      frame()
    } else {
      // draw a single static field
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(103, 232, 249, ${p.a})`
        ctx.fill()
      }
    }

    const onResize = () => {
      cancelAnimationFrame(rafRef.current)
      build()
      if (!reduce) frame()
    }
    window.addEventListener('resize', onResize)

    const onVisibility = () => {
      running = !document.hidden
      if (running && !reduce) {
        cancelAnimationFrame(rafRef.current)
        frame()
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      running = false
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [density])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
