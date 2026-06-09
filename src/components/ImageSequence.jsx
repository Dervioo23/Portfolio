import { useEffect, useRef, useState } from 'react'

const clamp = (v, min, max) => Math.min(Math.max(v, min), max)

/**
 * Scroll-driven canvas image-sequence player.
 *
 * The displayed frame is tied to how far the user has scrolled through
 * `trackRef` (a tall section with a sticky stage). Scrolling "scrubs" the
 * sequence forward/backward — the cinematic Apple-style hero effect.
 *
 * Behaviour:
 *  - object-cover draw (fills the hero, centered crop)
 *  - scrubs between startFrame..endFrame so the character is always present
 *  - eased (lerped) scrubbing so it feels buttery, not jumpy
 *  - shows a poster until the first frames decode (no empty flash)
 *  - prefers-reduced-motion → single static frame, no scroll binding
 *  - rAF only runs while catching up to the target frame (idle = no CPU)
 *  - falls back to the poster image if frames fail to load
 */
export default function ImageSequence({
  basePath = '/sequence',
  prefix = 'ezgif-frame-',
  ext = 'jpg',
  pad = 3,
  frameCount = 192,
  startFrame = 0,
  endFrame = frameCount - 1,
  trackRef,
  poster,
  staticFrame,
  className = '',
}) {
  const canvasRef = useRef(null)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d', { alpha: false })
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const total = frameCount
    const frames = new Array(total)
    let loaded = 0
    let raf = 0
    let running = false
    let destroyed = false

    let currentFrame = startFrame // eased, displayed
    let targetFrame = startFrame // driven by scroll
    let lastDrawn = -1

    const url = (i) => `${basePath}/${prefix}${String(i + 1).padStart(pad, '0')}.${ext}`

    function resize() {
      const r = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(r.width * dpr))
      canvas.height = Math.max(1, Math.floor(r.height * dpr))
      // Setting canvas size resets context state, so re-apply high-quality
      // interpolation (noticeably smoother when upscaling the frames).
      ctx.imageSmoothingEnabled = true
      ctx.imageSmoothingQuality = 'high'
      lastDrawn = -1 // force a redraw at the new resolution
    }

    function drawCover(img) {
      if (!img || !img.naturalWidth) return
      const cw = canvas.width
      const ch = canvas.height
      const ir = img.naturalWidth / img.naturalHeight
      const cr = cw / ch
      let dw, dh, dx, dy
      if (cr > ir) {
        dw = cw
        dh = cw / ir
        dx = 0
        dy = (ch - dh) / 2
      } else {
        dh = ch
        dw = ch * ir
        dy = 0
        dx = (cw - dw) / 2
      }
      ctx.drawImage(img, dx, dy, dw, dh)
    }

    // nearest already-decoded frame, so scrubbing stays smooth while loading
    function nearestLoaded(idx) {
      const ok = (i) => i >= 0 && i < total && frames[i] && frames[i].complete && frames[i].naturalWidth
      if (ok(idx)) return idx
      for (let d = 1; d < total; d++) {
        if (ok(idx - d)) return idx - d
        if (ok(idx + d)) return idx + d
      }
      return -1
    }

    function computeTarget() {
      const track = trackRef && trackRef.current
      let progress = 0
      if (track) {
        const rect = track.getBoundingClientRect()
        const dist = rect.height - window.innerHeight
        progress = dist > 0 ? clamp(-rect.top / dist, 0, 1) : 0
      }
      targetFrame = startFrame + progress * (endFrame - startFrame)
    }

    function paint(idx) {
      const li = nearestLoaded(idx)
      if (li >= 0) {
        drawCover(frames[li])
        lastDrawn = idx
      }
    }

    function render() {
      if (destroyed) {
        running = false
        return
      }
      currentFrame += (targetFrame - currentFrame) * 0.15
      const idx = clamp(Math.round(currentFrame), 0, total - 1)
      if (idx !== lastDrawn) paint(idx)
      if (Math.abs(targetFrame - currentFrame) > 0.05) {
        raf = requestAnimationFrame(render)
      } else {
        currentFrame = targetFrame
        running = false
      }
    }

    function ensureRunning() {
      if (!running && !destroyed) {
        running = true
        raf = requestAnimationFrame(render)
      }
    }

    function drawStatic() {
      const idx = clamp(
        staticFrame != null ? staticFrame : Math.round((startFrame + endFrame) / 2),
        0,
        total - 1,
      )
      paint(idx)
    }

    // ---- Load frames progressively ----
    for (let i = 0; i < total; i++) {
      const img = new Image()
      img.decoding = 'async'
      img.onload = () => {
        loaded++
        if (!ready && loaded >= Math.min(6, total)) setReady(true)
        lastDrawn = -1
        if (reduce) drawStatic()
        else ensureRunning()
      }
      img.onerror = () => {
        loaded++
        if (loaded >= total && loaded === 0) setFailed(true)
      }
      img.src = url(i)
      frames[i] = img
    }

    resize()

    if (reduce) {
      drawStatic()
    } else {
      computeTarget()
      currentFrame = targetFrame
      ensureRunning()
    }

    const onScroll = () => {
      if (reduce) return
      computeTarget()
      ensureRunning()
    }
    const onResize = () => {
      resize()
      if (reduce) {
        drawStatic()
      } else {
        computeTarget()
        ensureRunning()
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    const failTimer = setTimeout(() => {
      if (loaded === 0) setFailed(true)
    }, 6000)

    return () => {
      destroyed = true
      running = false
      cancelAnimationFrame(raf)
      clearTimeout(failTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePath, prefix, ext, pad, frameCount, startFrame, endFrame, trackRef])

  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      {poster && (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            ready && !failed ? 'opacity-0' : 'opacity-100'
          }`}
        />
      )}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
          ready && !failed ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  )
}
