export function ChevronIcon({ size = 11, open = false }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      style={{
        transform: open ? 'rotate(180deg)' : 'none',
        transition: 'transform 220ms var(--ease-out)',
      }}
    >
      <path d="M2.5 4.5 6 8l3.5-3.5" />
    </svg>
  )
}
