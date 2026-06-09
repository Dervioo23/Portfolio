import { useEffect, useRef, useState } from 'react'

/**
 * Draggable lanyard ID badge.
 *
 * The card hangs from a fixed anchor by a soft strap. You can grab it, pull it
 * (the strap stretches), and throw it — it then swings like a pendulum and
 * settles back upright, with a little spring "jiggle" of the card on its clip.
 *
 * Physics is a small hand-rolled simulation (single pendulum + length spring +
 * a damped follower for the card angle) driven by requestAnimationFrame — no
 * extra dependencies. The loop stops the moment everything settles (0 CPU idle).
 * Disabled (renders a static, upright badge) under prefers-reduced-motion.
 */
const BARCODE = [3, 1.5, 1.5, 3, 1.5, 1.5, 1.5, 3, 1.5, 1.5, 3, 1.5, 1.5, 1.5, 3, 1.5, 1.5, 3]

export default function LanyardCard({ photo, name, role, className = '' }) {
  const containerRef = useRef(null)
  const cardRef = useRef(null)
  const pathRef = useRef(null)
  const [dims, setDims] = useState({ w: 0, h: 0, cardW: 208, cardH: 286 })
  const [ready, setReady] = useState(false)

  // Measure the container; derive card size from its width.
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const measure = () => {
      const w = el.clientWidth
      const h = el.clientHeight
      const cardW = Math.round(Math.min(232, Math.max(176, w * 0.62)))
      const cardH = Math.round(cardW * 1.36)
      setDims((d) => (d.w === w && d.h === h && d.cardW === cardW ? d : { w, h, cardW, cardH }))
    }
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Physics + interaction (re-init when size changes).
  useEffect(() => {
    const container = containerRef.current
    const card = cardRef.current
    const path = pathRef.current
    const { w: W, h: H, cardW, cardH } = dims
    if (!container || !card || !path || !W || !H) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const AX = W / 2
    const AY = 14
    // Short strap that barely stretches: you swing the card freely left/right,
    // but the lanyard never elongates much (rest length ± a small give).
    const L0 = Math.max(104, Math.min(H - cardH - 46, Math.round(H * 0.28)))
    const MINLEN = Math.max(56, L0 - 60)
    const MAXLEN = L0 + 40
    const MAXT = 2.05
    const GRAV = 2200
    const ANG_DAMP = 1.25
    const LEN_K = 120
    const LEN_DAMP = 14
    const CARD_K = 135
    const CARD_DAMP = 13

    let theta = 0
    let omega = 0
    let len = L0
    let lenVel = 0
    let cardAngle = 0
    let cardVel = 0
    let dragging = false
    let grabT = 0
    let grabL = 0
    let lastMove = 0
    let raf = 0
    let running = false
    let last = 0

    const render = () => {
      const Cx = AX + len * Math.sin(theta)
      const Cy = AY + len * Math.cos(theta)
      const deg = (cardAngle * 180) / Math.PI
      card.style.transform = `translate(${(Cx - cardW / 2).toFixed(2)}px, ${Cy.toFixed(2)}px) rotate(${deg.toFixed(2)}deg)`
      const slack = Math.max(0, L0 - len)
      const sag = Math.min(72, slack * 0.7) + 6
      const mx = (AX + Cx) / 2
      const my = (AY + Cy) / 2 + sag
      path.setAttribute('d', `M ${AX} ${AY} Q ${mx.toFixed(1)} ${my.toFixed(1)} ${Cx.toFixed(1)} ${Cy.toFixed(1)}`)
    }

    const settled = () =>
      !dragging &&
      Math.abs(omega) < 0.002 &&
      Math.abs(theta) < 0.002 &&
      Math.abs(lenVel) < 0.02 &&
      Math.abs(len - L0) < 0.4 &&
      Math.abs(cardVel) < 0.002 &&
      Math.abs(cardAngle) < 0.002

    const frame = (now) => {
      const dt = Math.min(0.032, last ? (now - last) / 1000 : 0.016)
      last = now
      if (!dragging) {
        const alpha = -(GRAV / len) * Math.sin(theta) - ANG_DAMP * omega
        omega += alpha * dt
        theta += omega * dt
        if (theta > MAXT) {
          theta = MAXT
          omega *= -0.35
        } else if (theta < -MAXT) {
          theta = -MAXT
          omega *= -0.35
        }
        const la = -LEN_K * (len - L0) - LEN_DAMP * lenVel
        lenVel += la * dt
        len += lenVel * dt
        if (len < MINLEN) {
          len = MINLEN
          lenVel *= -0.3
        }
      }
      const ca = CARD_K * (theta - cardAngle) - CARD_DAMP * cardVel
      cardVel += ca * dt
      cardAngle += cardVel * dt
      render()
      if (settled()) {
        theta = omega = lenVel = cardAngle = cardVel = 0
        len = L0
        render()
        running = false
        return
      }
      raf = requestAnimationFrame(frame)
    }

    const ensure = () => {
      if (!running && !reduce) {
        running = true
        last = 0
        raf = requestAnimationFrame(frame)
      }
    }

    const pointer = (e) => {
      const r = container.getBoundingClientRect()
      const dx = e.clientX - r.left - AX
      const dy = e.clientY - r.top - AY
      return { pt: Math.atan2(dx, dy), pl: Math.hypot(dx, dy) }
    }

    const onDown = (e) => {
      if (reduce) return
      dragging = true
      card.setPointerCapture?.(e.pointerId)
      card.style.cursor = 'grabbing'
      const { pt, pl } = pointer(e)
      grabT = theta - pt
      grabL = len - pl
      lastMove = performance.now()
      e.preventDefault()
      ensure()
    }
    const onMove = (e) => {
      if (!dragging) return
      const now = performance.now()
      const dtm = Math.max(0.001, Math.min(0.05, (now - lastMove) / 1000))
      lastMove = now
      const { pt, pl } = pointer(e)
      let nt = pt + grabT
      nt = Math.max(-MAXT, Math.min(MAXT, nt))
      const nl = Math.max(MINLEN, Math.min(MAXLEN, pl + grabL))
      omega = 0.75 * omega + 0.25 * ((nt - theta) / dtm)
      lenVel = (nl - len) / dtm
      theta = nt
      len = nl
      ensure()
    }
    const onUp = (e) => {
      if (!dragging) return
      dragging = false
      card.releasePointerCapture?.(e.pointerId)
      card.style.cursor = 'grab'
      ensure()
    }

    card.addEventListener('pointerdown', onDown)
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)

    if (reduce) {
      render()
    } else {
      // gentle intro swing so the interaction is noticeable
      theta = 0.42
      omega = -0.85
      render()
      ensure()
    }
    setReady(true)

    return () => {
      cancelAnimationFrame(raf)
      card.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
    }
  }, [dims])

  return (
    <div
      ref={containerRef}
      className={`relative mx-auto h-[520px] w-full max-w-[340px] select-none sm:h-[560px] xl:max-w-[400px] ${className}`}
      style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.5s ease' }}
    >
      {/* Strap + anchor */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full" style={{ overflow: 'visible' }} aria-hidden="true">
        <defs>
          <linearGradient
            id="lanyard-strap"
            gradientUnits="userSpaceOnUse"
            x1={dims.w / 2}
            y1="0"
            x2={dims.w / 2}
            y2={Math.max(1, dims.h)}
          >
            <stop offset="0%" stopColor="#67e8f9" />
            <stop offset="55%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
        </defs>
        <path ref={pathRef} d="" fill="none" stroke="url(#lanyard-strap)" strokeWidth="9" strokeLinecap="round" />
        {dims.w > 0 && (
          <>
            <rect x={dims.w / 2 - 16} y={6} width={32} height={7} rx={3.5} className="fill-cyanic-400/70" />
            <circle cx={dims.w / 2} cy={14} r={4} className="fill-navy-950 stroke-cyanic-300/80" strokeWidth="2" />
          </>
        )}
      </svg>

      {/* The ID badge (draggable) */}
      <div
        ref={cardRef}
        role="img"
        aria-label={`${name} — ${role}. Draggable ID card.`}
        className="absolute left-0 top-0"
        style={{
          width: dims.cardW,
          transformOrigin: `${dims.cardW / 2}px 0px`,
          touchAction: 'none',
          willChange: 'transform',
          cursor: 'grab',
        }}
      >
        {/* Metal clip threading the strap */}
        <div className="relative mx-auto mb-[-6px] h-[18px] w-12">
          <div className="absolute left-1/2 top-0 h-3.5 w-6 -translate-x-1/2 rounded-[5px] border border-white/25 bg-gradient-to-b from-slate-200/40 to-slate-500/25 backdrop-blur" />
          <div className="absolute left-1/2 top-2.5 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-cyanic-300/40 bg-navy-950" />
        </div>

        {/* Badge body */}
        <div className="relative overflow-hidden rounded-2xl border border-cyanic-300/25 bg-[rgba(8,12,22,0.94)] p-3 shadow-[0_24px_60px_-22px_rgba(34,211,238,0.45)] backdrop-blur-xl">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyanic-500/15 blur-2xl" />

          {/* Header */}
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-md border border-cyanic-400/40 bg-cyanic-500/10 font-display text-[10px] font-bold text-cyanic-300">
                D
              </span>
              <span className="font-display text-[11px] font-semibold tracking-wide text-white">DERVIO</span>
            </div>
            <span className="flex items-center gap-1 text-[8px] font-medium uppercase tracking-[0.2em] text-cyanic-300/80">
              <span className="h-1.5 w-1.5 rounded-full bg-cyanic-400" />
              Access
            </span>
          </div>

          {/* Photo */}
          <div className="relative mt-3 overflow-hidden rounded-xl border border-white/10">
            <img
              src={photo}
              alt={`${name} ID photo`}
              draggable="false"
              loading="lazy"
              className="aspect-[4/4.4] w-full object-cover object-[50%_28%]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
          </div>

          {/* Identity */}
          <div className="relative mt-3">
            <p className="font-display text-sm font-semibold leading-tight text-white">{name}</p>
            <p className="mt-1 text-[10px] font-medium leading-snug text-cyanic-300">{role}</p>
          </div>

          {/* Footer: faux barcode + id */}
          <div className="relative mt-3 flex items-center justify-between gap-2 border-t border-white/10 pt-2">
            <div className="flex h-5 items-end gap-[2px]" aria-hidden="true">
              {BARCODE.map((wd, i) => (
                <span
                  key={i}
                  className="bg-slatey-300/70"
                  style={{ width: `${wd}px`, height: `${8 + ((i * 37) % 11)}px` }}
                />
              ))}
            </div>
            <span className="font-mono text-[8px] tracking-wider text-slatey-400">ID·AI-ENG</span>
          </div>
        </div>
      </div>
    </div>
  )
}
