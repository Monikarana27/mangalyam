import { useId } from 'react'

const drawings = {
  hall: (
    <>
      <path d="M8 25 32 10l24 15H8Z" />
      <path d="M14 29h7v23h-7zm15 0h7v23h-7zm15 0h7v23h-7z" />
      <path d="M8 54h48v5H8zM30 4h4v8h-4z" />
    </>
  ),

  resort: (
    <>
      <path
        d="M30 55c5-12 7-25 6-36"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
      />
      <path d="M36 20C22 7 13 13 10 22c10-5 17-4 26-2Z" />
      <path d="M36 20C39 5 51 5 57 14c-10-1-14 2-21 6Z" />
      <path d="M36 20C48 15 58 23 57 33c-7-8-13-10-21-13Z" />
      <path d="M36 20C24 20 20 29 23 37c3-9 7-13 13-17Z" />
      <path d="M7 57c15-9 36-9 50 0H7Z" />
    </>
  ),

  catering: (
    <>
      <circle cx="32" cy="13" r="4" />
      <path d="M9 45a23 23 0 0 1 46 0H9ZM5 49h54v6H5Z" />
      <path
        d="M18 36c2-6 5-10 10-12"
        fill="none"
        stroke="var(--cream)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </>
  ),

  hotel: (
    <>
      <path d="M7 15h5v40H7zM52 31h5v24h-5zM12 39h40v9H12z" />
      <rect x="16" y="24" width="12" height="12" rx="4" />
      <path d="M31 24h14a7 7 0 0 1 7 7v5H31V24Z" />
    </>
  ),

  camera: (
    <path
      fillRule="evenodd"
      d="M23 12h18l4 8h10a5 5 0 0 1 5 5v26a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V25a5 5 0 0 1 5-5h10l4-8Zm9 13a13 13 0 1 0 0 26 13 13 0 0 0 0-26Zm0 4a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z"
    />
  ),

  flowers: (
    <>
      <path
        d="M32 56V30M32 47 18 37M32 42l14-10"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <ellipse
        cx="18"
        cy="37"
        rx="6"
        ry="10"
        transform="rotate(-40 18 37)"
      />

      <ellipse
        cx="46"
        cy="33"
        rx="6"
        ry="10"
        transform="rotate(40 46 33)"
      />

      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="32"
          cy="12"
          rx="5"
          ry="8"
          transform={`rotate(${angle} 32 21)`}
        />
      ))}

      <circle cx="32" cy="21" r="5" fill="var(--cream)" />
      <path d="M20 56h24v4H20z" />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  const gradientId = useId()

  return (
    <svg
      className="service-icon"
      viewBox="0 0 64 64"
      fill={`url(#${gradientId})`}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient
          id={gradientId}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#d5b265" />
          <stop offset="48%" stopColor="#a47a2b" />
          <stop offset="100%" stopColor="#795116" />
        </linearGradient>
      </defs>

      {drawings[name]}
    </svg>
  )
}