const badges = [
  {
    label: 'Verified Partners',
    drawing: (
      <>
        <path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  },
  {
    label: 'Best Prices',
    drawing: (
      <>
        <path d="M21 3h-8L3 13l8 8L21 11V3Z" />
        <circle cx="17" cy="7" r="1" />
      </>
    ),
  },
  {
    label: '24/7 Support',
    drawing: (
      <>
        <path d="M4 13v-2a8 8 0 0 1 16 0v2M20 17v2h-6" />
        <rect x="3" y="11" width="4" height="7" rx="2" />
        <rect x="17" y="11" width="4" height="7" rx="2" />
      </>
    ),
  },
]

export default function TrustBadges() {
  return (
    <ul className="trust-badges" aria-label="Our promises">
      {badges.map(({ label, drawing }) => (
        <li key={label}>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {drawing}
          </svg>
          <span>{label}</span>
        </li>
      ))}
    </ul>
  )
}