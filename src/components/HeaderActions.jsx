import { useRef, useState } from 'react'

export default function HeaderActions() {
  const dialogRef = useRef(null)
  const [dialogType, setDialogType] = useState('login')

  function openDialog(type) {
    setDialogType(type)
    dialogRef.current?.showModal()
  }

  return (
    <>
      <div className="header-actions">
        <a className="header-phone" href="tel:18001234567">
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
          <span>1800 123 4567</span>
        </a>

        <button
          className="wishlist-button"
          type="button"
          aria-label="View favourites"
          onClick={() => openDialog('favourites')}
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

        <button
          className="button login-button"
          type="button"
          onClick={() => openDialog('login')}
        >
          Login / Signup
        </button>
      </div>

      <dialog
        ref={dialogRef}
        className="app-dialog"
        aria-labelledby="header-dialog-title"
      >
        <h2 id="header-dialog-title">
          {dialogType === 'login' ? 'Login / Signup' : 'Favourites'}
        </h2>

        <p>
          {dialogType === 'login'
            ? 'Account access is not connected in this frontend demo.'
            : 'Saving and viewing favourites is not connected in this frontend demo.'}
        </p>

        <form method="dialog">
          <button className="button">Close</button>
        </form>
      </dialog>
    </>
  )
}