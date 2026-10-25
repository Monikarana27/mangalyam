import { useState } from 'react'
import PageIntro from '../components/PageIntro'
import { services } from '../data/services'
export default function Contact({ query }) {
  const params = new URLSearchParams(query)
  const [brief, setBrief] = useState('')
  const [copied, setCopied] = useState(false)
  function submit(e) {
    e.preventDefault()
    const d = new FormData(e.currentTarget)
    setBrief(
      [
        'MANGALYAM CELEBRATION BRIEF',
        ...Array.from(d.entries()).map(
          ([k, v]) => `${k}: ${v || 'Not specified'}`,
        ),
      ].join('\n'),
    )
    setCopied(false)
  }
  async function copy() {
    try {
      await navigator.clipboard.writeText(brief)
      setCopied(true)
    } catch {
      setCopied(false)
    }
  }
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="Let’s begin with your story"
        title="What are you celebrating?"
        description="Bring your ideas together into a clear brief, ready for the next conversation."
      />
      <div className="contact-grid">
        <aside>
          <img
            src="/images/details.png"
            alt="Brass candleholders and floral details on a celebration table"
          />
          <h2>A few details go a long way.</h2>
          <p>
            Tell us the occasion, your preferred location and the people you
            want around you. You can leave undecided details open.
          </p>
          <div className="demo-note">
            This demo prepares a brief on your device. It does not send an
            enquiry or reserve a service. No real contact details have been
            supplied.
          </div>
        </aside>
        <form className="enquiry-form" onSubmit={submit}>
          <div className="form-grid">
            <label>
              Your name
              <input name="Name" autoComplete="name" required maxLength="100" />
            </label>
            <label>
              Email
              <input name="Email" type="email" autoComplete="email" required />
            </label>
            <label>
              Occasion
              <select name="Occasion">
                <option>Wedding</option>
                <option>Engagement</option>
                <option>Anniversary</option>
                <option>Birthday</option>
                <option>Other celebration</option>
              </select>
            </label>
            <label>
              Preferred date
              <input
                name="Date"
                type="date"
                min={new Date().toLocaleDateString('en-CA')}
              />
            </label>
            <label>
              City
              <input name="City" placeholder="e.g. Bengaluru" required />
            </label>
            <label>
              Expected guests
              <input
                name="Guests"
                type="number"
                min="1"
                max="10000"
                placeholder="e.g. 200"
              />
            </label>
            <label>
              Service
              <select
                name="Service"
                defaultValue={params.get('service') || 'Still exploring'}
              >
                <option>Still exploring</option>
                {services.map((s) => (
                  <option key={s.id}>{s.title}</option>
                ))}
              </select>
            </label>
            <label>
              Package
              <select
                name="Package"
                defaultValue={params.get('package') || 'Not decided'}
              >
                <option>Not decided</option>
                <option>Intimate</option>
                <option>Signature</option>
                <option>Destination</option>
              </select>
            </label>
          </div>
          <label>
            Preferred venue style
            <input
              name="Venue"
              defaultValue={params.get('venue') || ''}
              placeholder="Optional"
            />
          </label>
          <label>
            Tell us what you have in mind
            <textarea
              name="Notes"
              rows="4"
              maxLength="2000"
              placeholder="Your priorities, colours, traditions or any questions…"
            />
          </label>
          <button className="button" type="submit">
            Prepare my brief
          </button>
          <p className="field-help">
            Your details stay in this page and are cleared when you leave or
            refresh.
          </p>
        </form>
      </div>
      {brief && (
        <section className="brief-result" aria-live="polite">
          <h2>Your brief is ready</h2>
          <p>
            Review and copy it to share through your preferred channel. Nothing
            has been sent.
          </p>
          <textarea
            aria-label="Your celebration brief"
            readOnly
            value={brief}
            rows="13"
          />
          <button className="button" onClick={copy}>
            {copied ? 'Copied' : 'Copy brief'}
          </button>
        </section>
      )}
    </div>
  )
}
