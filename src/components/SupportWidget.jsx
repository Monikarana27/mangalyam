import { useEffect, useRef, useState } from 'react'
import { site, whatsappUrl } from '../config/site'

const topics = [
  {
    label: 'Find a venue',
    match: /venue|hall|location|resort/i,
    answer:
      'Explore the venue collection by city, setting and guest count. Tap a heart to save your favourites on this browser.',
    href: '#/venues',
    action: 'Explore venues',
  },
  {
    label: 'Packages & pricing',
    match: /package|price|cost|budget/i,
    answer:
      'Packages show sample planning scopes. Final prices depend on your date, guest count, location and service requirements. No live prices are connected here.',
    href: '#/packages',
    action: 'Compare planning scopes',
  },
  {
    label: 'Prepare an enquiry',
    match: /contact|enquir|book|date|availability|plan/i,
    answer:
      'The contact page helps you create a celebration brief. Review it, then copy it or share it through a configured contact channel. No booking is confirmed here.',
    href: '#/contact',
    action: 'Prepare your brief',
  },
  {
    label: 'My saved venues',
    match: /sav|favourite|favorite|shortlist/i,
    answer:
      'Your saved venues stay in this browser. Open the heart in the header or choose My shortlist on the Venues page. No login is needed.',
    href: '#/venues',
    action: 'Open venues',
  },
]
const welcome = {
  role: 'helper',
  text: 'Hello! I can help you find venues, understand the planning options or prepare an enquiry. These are instant guides, not a live-agent conversation.',
}
export default function SupportWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([welcome])
  const [input, setInput] = useState('')
  const panel = useRef(null)
  const launcher = useRef(null)
  const inputRef = useRef(null)
  const log = useRef(null)
  const whatsapp = whatsappUrl()
  useEffect(() => {
    if (open) {
      panel.current?.show()
      inputRef.current?.focus({ preventScroll: true })
    } else panel.current?.close()
  }, [open])
  useEffect(() => {
    if (open && log.current) log.current.scrollTop = log.current.scrollHeight
  }, [messages, open])
  function close() {
    setOpen(false)
    launcher.current?.focus({ preventScroll: true })
  }
  function ask(text) {
    const value = text.trim().slice(0, 300)
    if (!value) return
    const topic = topics.find((t) => t.match.test(value))
    const reply = topic
      ? { text: topic.answer, href: topic.href, action: topic.action }
      : {
          text: 'I can answer basic questions about venues, packages, enquiries and saved favourites. For a personal request, prepare your brief or use WhatsApp when business contact details are available.',
          href: '#/contact',
          action: 'Prepare an enquiry',
        }
    setMessages((current) => [
      ...current.slice(-18),
      { role: 'visitor', text: value },
      { role: 'helper', ...reply },
    ])
    setInput('')
  }
  return (
    <div className="support-widget">
      <dialog
        ref={panel}
        id="support-panel"
        className="support-panel"
        aria-labelledby="support-title"
        onCancel={(e) => {
          e.preventDefault()
          close()
        }}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            e.preventDefault()
            close()
          }
        }}
      >
        <div className="support-heading">
          <div>
            <h2 id="support-title">Celebration help</h2>
            <p>{site.name} · Instant planning guides</p>
          </div>
          <button
            type="button"
            className="support-close"
            onClick={close}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
        <div
          className="support-log"
          role="log"
          aria-live="polite"
          aria-relevant="additions"
          ref={log}
        >
          {messages.map((m, i) => (
            <div className={`support-message ${m.role}`} key={i}>
              <span className="sr-only">
                {m.role === 'visitor' ? 'You: ' : 'Guide: '}
              </span>
              <p>{m.text}</p>
              {m.href && (
                <a href={m.href} onClick={close}>
                  {m.action} →
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="support-topics" aria-label="Suggested questions">
          {topics.map((t) => (
            <button type="button" key={t.label} onClick={() => ask(t.label)}>
              {t.label}
            </button>
          ))}
        </div>
        <form
          className="support-form"
          onSubmit={(e) => {
            e.preventDefault()
            ask(input)
          }}
        >
          <label className="sr-only" htmlFor="support-question">
            Your planning question
          </label>
          <input
            id="support-question"
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength="300"
            placeholder="Ask a planning question…"
            autoComplete="off"
          />
          <button type="submit" disabled={!input.trim()}>
            Send
          </button>
        </form>
        <div className="support-footnote">
          Questions stay on this page. Avoid sharing private details.
          {whatsapp ? (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              Talk to the team on WhatsApp ↗
            </a>
          ) : (
            <span>WhatsApp contact details have not been added yet.</span>
          )}
          {site.supportHours && <span>{site.supportHours}</span>}
        </div>
      </dialog>
      <div className="support-launchers">
        {whatsapp ? (
          <a
            className="whatsapp-launcher"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp (opens a new tab)"
          >
            <WhatsAppIcon />
          </a>
        ) : (
          <button
            className="whatsapp-launcher"
            type="button"
            aria-label="WhatsApp contact information"
            onClick={() => {
              setOpen(true)
              setMessages((current) => [
                ...current.slice(-19),
                {
                  role: 'helper',
                  text: 'A WhatsApp business number has not been provided yet. You can still prepare and copy your celebration brief on the Contact page.',
                  href: '#/contact',
                  action: 'Prepare your brief',
                },
              ])
            }}
          >
            <WhatsAppIcon />
          </button>
        )}
        <button
          ref={launcher}
          className="chat-launcher"
          type="button"
          aria-expanded={open}
          aria-controls="support-panel"
          onClick={() => (open ? close() : setOpen(true))}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="M20 11a8 8 0 0 1-8 8H8l-5 3 1-6a8 8 0 1 1 16-5Z" />
            <path d="M8 10h8M8 14h5" />
          </svg>
          <span>{open ? 'Close help' : 'Need help?'}</span>
        </button>
      </div>
    </div>
  )
}
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M27 15.5a11 11 0 0 1-16 10l-7 2 2-7a11 11 0 1 1 21-5Z" />
      <path
        d="m11 9 2 4-2 2c1 3 3 4 5 5l2-2 4 2c0 3-3 4-6 2-5-2-8-6-8-9 0-2 1-4 3-4Z"
        strokeLinejoin="round"
      />
    </svg>
  )
}
