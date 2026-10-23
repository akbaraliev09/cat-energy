
const base = { width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', stroke: '#fff', strokeWidth: 1.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }

export function LeafIcon() {
  return (
    <svg {...base}>
      <path d="M6 22C6 11 12 6 22 6c0 10-5 16-14 16" />
      <path d="M6 22c3-6 7-10 11-12" />
    </svg>
  )
}

export function BowlIcon() {
  return (
    <svg {...base}>
      <path d="M5 13h18v2a7 7 0 0 1-7 7h-4a7 7 0 0 1-7-7z" />
      <circle cx="10" cy="8" r="1.4" />
      <circle cx="14" cy="6" r="1.4" />
      <circle cx="18" cy="8" r="1.4" />
    </svg>
  )
}

export function ForkIcon() {
  return (
    <svg {...base}>
      <path d="M8 5v6M12 5v6M8 11a2 2 0 0 0 4 0M10 13v10" />
      <path d="M19 23V5c-2 2-3.500 5-3.500 8H19" />
    </svg>
  )
}

export function ClockIcon() {
  return (
    <svg {...base}>
      <circle cx="14" cy="15" r="7" />
      <path d="M14 11v4l3 2M6 7l3-3M22 7l-3-3" />
    </svg>
  )
}

// Стрелка «→» в ссылках каталога
export function Arrow() {
  return (
    <svg width="22" height="12" viewBox="0 0 22 12" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M0 6h20M15 1l5 5-5 5" />
    </svg>
  )
}

// Соцсети в футере (иконки простые, ссылки замените на свои)
export function VkIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M3 8h3c.5 4 3 7 5 7V8h3v4c2 0 3.500-2 4.500-4h3c-1 3-2.500 5-4 6 1.500 1 3 3 4 5h-3.500c-1-2-2.500-3-4-3.500V19h-1C6 19 3 14 3 8z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="4" y="4" width="18" height="18" rx="5" />
      <circle cx="13" cy="13" r="4.200" />
      <circle cx="18" cy="8" r="0.900" fill="currentColor" />
    </svg>
  )
}

export function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-8h3l.5-3.500H15V8.500c0-1 .5-1.700 1.800-1.700H18.500V3.700C18 3.600 17 3.500 16 3.500c-2.600 0-4.200 1.600-4.200 4.200v2.800H9V14h2.800v8z" />
    </svg>
  )
}

// Значок «HTML Academy» в футере
export function HexIcon() {
  return (
    <svg width="26" height="28" viewBox="0 0 26 28" fill="none" stroke="currentColor" strokeWidth="1.400" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2l10 6v12l-10 6-10-6V8z" />
      <path d="M3 8l10 6 10-6M13 14v12" />
    </svg>
  )
}

// Запасной логотип: показывается, пока вы не положили public/img/logo.png
export function LogoFallback({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 64 64" role="img" aria-label="Cat Energy">
      <circle cx="32" cy="32" r="30" fill="#fcc50a" />
      <path d="M12 14l12 10-4 14zM52 14L40 24l4 14z" fill="#f26b1d" />
      <ellipse cx="32" cy="38" rx="14" ry="12" fill="#f26b1d" />
      <circle cx="26" cy="36" r="2" fill="#fff" />
      <circle cx="38" cy="36" r="2" fill="#fff" />
    </svg>
  )
}
