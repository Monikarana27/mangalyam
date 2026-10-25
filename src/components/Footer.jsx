import DownloadApp from './DownloadApp'

const benefits = [
  {
    id: 'verified',
    label: 'All verified',
    emphasis: 'professionals',
    icon: (
      <>
        <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6l-8-3Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),
  },
  {
    id: 'prices',
    label: 'Best prices',
    emphasis: 'guaranteed',
    icon: (
      <>
        <path d="M3 3h8l10 10-8 8L3 11V3Z" />
        <circle cx="7.5" cy="7.5" r="1" />
        <path d="m11 12 2 2 4-4" />
      </>
    ),
  },
  {
    id: 'booking',
    label: 'Easy booking',
    emphasis: 'in a few clicks',
    icon: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 3v4M17 3v4M3 10h18" />
        <path d="m8 15 3 3 5-5" />
      </>
    ),
  },
  {
    id: 'customers',
    label: '1000+ happy',
    emphasis: 'customers',
    icon: (
      <>
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-3a6 6 0 0 1 12 0v3" />
        <path d="M16 4a3 3 0 0 1 0 6M18 13a5 5 0 0 1 3 5v3" />
      </>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" className="benefits">
      {benefits.map(({ id, label, emphasis, icon }) => (
        <div className="benefit-item" key={id}>
          <svg
            className="benefit-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            {icon}
          </svg>

          <p>
            {label}
            <br />
            <strong>{emphasis}</strong>
          </p>
        </div>
      ))}

      <DownloadApp />
    </footer>
  )
}