import { useRef, useState } from 'react'
import PageIntro from '../components/PageIntro'
import { venues } from '../data/catalog'
export default function Venues() {
  const [city, setCity] = useState('')
  const [type, setType] = useState('')
  const [guests, setGuests] = useState('')
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState(null)
  const dialog = useRef(null)
  const matches = venues.filter(
    (v) =>
      (!city || v.city === city) &&
      (!type || v.type === type) &&
      (!guests || v.guests >= Number(guests)) &&
      `${v.name} ${v.city}`.toLowerCase().includes(query.trim().toLowerCase()),
  )
  function reset() {
    setCity('')
    setType('')
    setGuests('')
    setQuery('')
  }
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="Find your setting"
        title="A place for your kind of celebration"
        description="From heritage courtyards to garden retreats, discover a setting that suits your people and your plans."
      />
      <p className="demo-note">
        Illustrative venue collection · Fictional names and capacities ·
        AI-generated imagery
      </p>
      <div className="filters">
        <label>
          Search
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Venue name or city"
            type="search"
          />
        </label>
        <label>
          Location
          <select value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">All locations</option>
            {['Bengaluru', 'Mysuru', 'Mangaluru'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Setting
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">All settings</option>
            {['Heritage', 'Resort', 'Banquet'].map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <label>
          Guest count
          <select value={guests} onChange={(e) => setGuests(e.target.value)}>
            <option value="">Any capacity</option>
            {[100, 200, 300, 500].map((x) => (
              <option key={x} value={x}>
                {x} guests
              </option>
            ))}
          </select>
        </label>
        <button className="text-button" onClick={reset}>
          Clear filters
        </button>
      </div>
      <p className="results-count" role="status">
        {matches.length} venue concept{matches.length === 1 ? '' : 's'} found
      </p>
      <div className="collection-grid">
        {matches.map((v) => (
          <article className="collection-card" key={v.id}>
            <div className="image-wrap">
              <img
                loading="lazy"
                src={`/images/${v.image}.png`}
                alt={`${v.type} celebration inspiration for ${v.name}`}
              />
              <span className="image-tag">{v.type}</span>
            </div>
            <div className="collection-body">
              <p className="eyebrow">
                {v.city} · Up to {v.guests} guests
              </p>
              <h2>{v.name}</h2>
              <p>{v.description}</p>
              <button
                className="text-button"
                onClick={() => {
                  setSelected(v)
                  dialog.current.showModal()
                }}
              >
                View venue concept →
              </button>
            </div>
          </article>
        ))}
      </div>
      {!matches.length && (
        <div className="empty-state">
          <h2>Let’s widen the search.</h2>
          <p>Try a different location or a smaller guest count.</p>
          <button className="button" onClick={reset}>
            Reset filters
          </button>
        </div>
      )}
      <dialog
        className="venue-dialog"
        ref={dialog}
        aria-labelledby="venue-title"
      >
        {selected && (
          <>
            <img
              src={`/images/${selected.image}.png`}
              alt="Illustrative venue setting"
            />
            <div className="collection-body">
              <p className="eyebrow">Sample venue · {selected.city}</p>
              <h2 id="venue-title">{selected.name}</h2>
              <p>{selected.description}</p>
              <ul>
                {selected.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <p>
                Concept capacity: {selected.guests} guests. Pricing and real
                availability are not provided in this demo.
              </p>
              <div className="dialog-actions">
                <a
                  className="button"
                  href={`#/contact?venue=${encodeURIComponent(selected.name)}`}
                  onClick={() => dialog.current.close()}
                >
                  Enquire about this style
                </a>
                <form method="dialog">
                  <button className="text-button">Close</button>
                </form>
              </div>
            </div>
          </>
        )}
      </dialog>
    </div>
  )
}
