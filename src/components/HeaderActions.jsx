import { site, phoneUrl } from '../config/site'
import useShortlist from '../hooks/useShortlist'
import { venues } from '../data/catalog'
import { useRef } from 'react'

export default function HeaderActions() {
  const { saved, toggle } = useShortlist()
  const dialogRef = useRef(null)

  return (
    <>
      <div className="header-actions">
        {phoneUrl() && (
          <a className="header-phone" href={phoneUrl()}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3-1 4C10 22 2 14 3 4l4-1Z"
                fill="currentColor"
              />
              <path
                d="M14 3a8 8 0 0 1 7 7M14 7a4 4 0 0 1 3 3"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>{site.phoneLabel || site.phone}</span>
          </a>
        )}

        <button
          className="wishlist-button"
          type="button"
          aria-label={`View favourites (${saved.length})`}
          onClick={() => dialogRef.current?.showModal()}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
          </svg>
        </button>

        <a className="button header-plan" href="#/contact">
          Plan an event
        </a>
      </div>

      <dialog
        ref={dialogRef}
        className="app-dialog"
        aria-labelledby="header-dialog-title"
      >
        <h2 id="header-dialog-title">Your favourites</h2>
        <p>
          Your shortlist stays in this browser when storage is available. No
          account needed.
        </p>
        <div className="shortlist-content">
          {!saved.length && (
            <p>No saved venues yet. Explore the collection and tap a heart.</p>
          )}
          <ul className="shortlist-list">
            {venues
              .filter((v) => saved.includes(v.id))
              .map((v) => (
                <li key={v.id}>
                  <div>
                    <strong>{v.name}</strong>
                    <small>
                      {v.city} · Up to {v.guests} guests
                    </small>
                  </div>
                  <button
                    className="text-button"
                    aria-label={`Remove ${v.name}`}
                    onClick={() => toggle(v.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
          </ul>
          <a
            className="text-link"
            href="#/venues"
            onClick={() => dialogRef.current.close()}
          >
            Explore venues →
          </a>
        </div>
        <form method="dialog">
          <button className="button">Close</button>
        </form>
      </dialog>
    </>
  )
}
