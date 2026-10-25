import { site, externalUrl } from '../config/site'
import { useRef } from 'react'

export default function DownloadApp() {
  const dialogRef = useRef(null)

  return (
    <>
      <button
        className="button download-app"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        Download app
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#46c6eb" d="M3 2 14 12 3 22Z" />
          <path fill="#5bd68b" d="m3 2 14 8-3 2Z" />
          <path fill="#ffcf49" d="m17 10 4 2-4 2-3-2Z" />
          <path fill="#f56b78" d="m3 22 14-8-3-2Z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M16.4 1.5c.2 1.5-.5 2.9-1.3 3.8-.9 1-2.2 1.7-3.5 1.6-.2-1.4.5-2.8 1.4-3.7.9-1 2.3-1.7 3.4-1.7ZM20.2 17.4c-.5 1.2-.8 1.8-1.5 2.8-1 1.4-2.4 3.1-4.1 3.1-1.5 0-1.9-1-4-1s-2.6 1-4 1c-1.7 0-3-1.5-4-2.9C-.2 16.3.3 10.3 4.5 8.1c1.5-.8 3.5-.9 5.1-.3 1.2.5 1.9.5 3.2 0 1.6-.6 3.6-.5 5 .3.7.4 1.3.9 1.8 1.5-3.7 2-3.1 6.9.6 7.8Z" />
        </svg>
      </button>

      <dialog ref={dialogRef} className="app-dialog">
        <h2>App download</h2>
        {!externalUrl(site.playStore) && !externalUrl(site.appStore) ? (
          <p>
            App downloads are not available yet. You can use the website on your
            phone.
          </p>
        ) : (
          <div className="contact-channels">
            {externalUrl(site.playStore) && (
              <a
                href={externalUrl(site.playStore)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play ↗
              </a>
            )}
            {externalUrl(site.appStore) && (
              <a
                href={externalUrl(site.appStore)}
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store ↗
              </a>
            )}
          </div>
        )}
        <form method="dialog">
          <button className="button">Close</button>
        </form>
      </dialog>
    </>
  )
}
