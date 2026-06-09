// Lightweight inline SVG icon set (stroke-based, consistent 1.6 width).
// No emoji used anywhere in the UI — these scale cleanly and theme via currentColor.

const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Brain(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5a3 3 0 0 0-3 3v.5A2.5 2.5 0 0 0 6.5 11 2.5 2.5 0 0 0 7 16a3 3 0 0 0 5 1" />
      <path d="M12 5a3 3 0 0 1 3 3v.5A2.5 2.5 0 0 1 17.5 11 2.5 2.5 0 0 1 17 16a3 3 0 0 1-5 1" />
      <path d="M12 5v13" />
    </svg>
  )
}

export function Dashboard(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="7" height="9" rx="1.5" />
      <rect x="14" y="3" width="7" height="5" rx="1.5" />
      <rect x="14" y="12" width="7" height="9" rx="1.5" />
      <rect x="3" y="16" width="7" height="5" rx="1.5" />
    </svg>
  )
}

export function Workflow(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="6" height="5" rx="1.5" />
      <rect x="15" y="4" width="6" height="5" rx="1.5" />
      <rect x="9" y="15" width="6" height="5" rx="1.5" />
      <path d="M6 9v2a2 2 0 0 0 2 2h4M18 9v2a2 2 0 0 1-2 2h-4M12 13v2" />
    </svg>
  )
}

export function Eye(props) {
  return (
    <svg {...base} {...props}>
      <path d="M2.5 12S5.5 5.5 12 5.5 21.5 12 21.5 12 18.5 18.5 12 18.5 2.5 12 2.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

export function Trend(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17l5-5 3 3 6-7" />
      <path d="M14 8h5v5" />
      <path d="M3 21h18" />
    </svg>
  )
}

export function Spider(props) {
  // data extraction / scraping
  return (
    <svg {...base} {...props}>
      <path d="M4 6h7l2 2h7" />
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M9 14h6M9 17h4" />
    </svg>
  )
}

export function Spark(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
      <path d="M12 8.5 13.4 11l2.6.4-1.9 1.8.5 2.6-2.6-1.3-2.6 1.3.5-2.6L7.9 11.4 10.6 11 12 8.5Z" />
    </svg>
  )
}

export function Mail(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  )
}

export function LinkedIn(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
    </svg>
  )
}

export function Github(props) {
  return (
    <svg {...base} {...props}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
    </svg>
  )
}

export function WhatsApp(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 21l1.6-4.5A8 8 0 1 1 7.5 19.5L3 21Z" />
      <path d="M8.5 9c0 4 2.5 6.5 6.5 6.5.6 0 1.2-.4 1.2-1l-.2-1.2-2 -.6-1 1c-1-.5-1.9-1.4-2.4-2.4l1-1-.6-2L9.6 8c-.6 0-1.1.5-1.1 1Z" />
    </svg>
  )
}

export function ArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowUpRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  )
}

export function Code(props) {
  return (
    <svg {...base} {...props}>
      <path d="m8 8-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
    </svg>
  )
}

export function Play(props) {
  return (
    <svg {...base} {...props}>
      <path d="M7 5v14l11-7-11-7Z" />
    </svg>
  )
}

export function Menu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function Close(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

// Map string keys (from content.js) to components
export const iconMap = {
  brain: Brain,
  dashboard: Dashboard,
  workflow: Workflow,
  eye: Eye,
  trend: Trend,
  spider: Spider,
  spark: Spark,
}
