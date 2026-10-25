import { venues } from '../data/catalog'
import useShortlist from '../hooks/useShortlist'
import './HomeSections.css'

const styles = [
  {
    name: 'Modern & understated',
    detail: 'Clean lines. Thoughtful details. Room to be yourself.',
    image: 'modern',
    type: 'Banquet',
  },
  {
    name: 'Under open skies',
    detail: 'Garden ceremonies and slow, sunlit celebrations.',
    image: 'garden',
    type: 'Resort',
  },
  {
    name: 'Rooted in tradition',
    detail: 'Meaningful rituals in timeless surroundings.',
    image: 'palace',
    type: 'Heritage',
  },
]
const steps = [
  [
    'Explore your possibilities',
    'Start with your city, guest list and the kind of setting you love.',
  ],
  [
    'Keep your favourites close',
    'Save venue concepts to your shortlist and revisit them as your plans take shape.',
  ],
  [
    'Bring your brief together',
    'Collect your date, guest count and preferences in a brief you can copy and share.',
  ],
]
const faqs = [
  [
    'Where should we begin?',
    'Start with an approximate guest count, your preferred city and a comfortable budget range. These make it easier to narrow down the venue and the services you need.',
  ],
  [
    'What should we check for an outdoor celebration?',
    'Ask about a covered backup space, power, lighting, accessible paths and arrangements for rain or heat. Confirm what is included before you commit to a venue.',
  ],
  [
    'Do the packages include venue and vendor costs?',
    'The packages shown here are sample planning scopes, not priced bookings. Actual inclusions, vendor fees and availability would need to be confirmed with a provider.',
  ],
  [
    'Can we book or send an enquiry here?',
    'This frontend demonstration helps you explore sample venues, save favourites in your browser and prepare a copyable enquiry brief. It does not send messages, accept payments or confirm bookings.',
  ],
]
export default function HomeSections() {
  const { saved, toggle } = useShortlist()
  return (
    <div className="home-discovery">
      <section className="home-section" aria-labelledby="styles-title">
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">A little inspiration</p>
            <h2 id="styles-title">
              Your celebration.
              <br />
              <em>Your kind of beautiful.</em>
            </h2>
          </div>
          <p>
            From a quiet garden gathering to a room full of music and family.
            Find a setting that feels like you.
          </p>
        </div>
        <div className="style-mosaic">
          {styles.map((style) => (
            <a
              className="style-tile"
              href={`#/venues?type=${style.type}`}
              key={style.type}
            >
              <img
                src={`/images/${style.image}.webp`}
                alt=""
                loading="lazy"
                width="1200"
                height="800"
              />
              <div>
                <h3>{style.name}</h3>
                <p>{style.detail}</p>
                <span>
                  Explore this style <span aria-hidden="true">↗</span>
                </span>
              </div>
            </a>
          ))}
        </div>
        <p className="home-caption">
          Illustrative celebration concepts · AI-generated imagery
        </p>
      </section>
      <section
        className="home-section home-venue-section"
        aria-labelledby="home-venues-title"
      >
        <div className="home-section-heading">
          <div>
            <p className="eyebrow">Start with the setting</p>
            <h2 id="home-venues-title">A place for your people.</h2>
          </div>
          <a className="home-link" href="#/venues">
            Explore all venues <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="home-venue-grid">
          {[venues[2], venues[1], venues[0]].map((v) => (
            <article className="home-venue-card" key={v.id}>
              <div className="image-wrap">
                <a
                  href={`#/venues?venue=${v.id}`}
                  aria-label={`View ${v.name}`}
                >
                  <img
                    src={`/images/${v.id === 'kamala' ? 'modern' : v.image}.webp`}
                    alt={`${v.type} wedding setting concept`}
                    width="1200"
                    height="800"
                    loading="lazy"
                  />
                </a>
                <button
                  className="save-venue"
                  aria-pressed={saved.includes(v.id)}
                  aria-label={`${saved.includes(v.id) ? 'Remove' : 'Save'} ${v.name} ${saved.includes(v.id) ? 'from' : 'to'} shortlist`}
                  onClick={() => toggle(v.id)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    fill={saved.includes(v.id) ? 'currentColor' : 'none'}
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z" />
                  </svg>
                </button>
              </div>
              <div className="home-venue-copy">
                <p className="eyebrow">
                  {v.city} · {v.type}
                </p>
                <h3>
                  <a href={`#/venues?venue=${v.id}`}>{v.name}</a>
                </h3>
                <p>Up to {v.guests} guests</p>
                <ul className="venue-features">
                  {v.features.slice(0, 2).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a className="home-link" href={`#/venues?venue=${v.id}`}>
                  View concept →
                </a>
              </div>
            </article>
          ))}
        </div>
        <p className="home-caption">
          Sample venues and capacities for demonstration. Availability and
          pricing are not connected.
        </p>
        <p className="sr-only" role="status">
          {saved.length} venues in your shortlist.
        </p>
      </section>
      <section
        className="home-section planning-section"
        aria-labelledby="planning-title"
      >
        <div className="planning-photo">
          <img
            src="/images/details.webp"
            alt="Burgundy flowers and brass candleholders on an ivory reception table"
            width="1200"
            height="800"
            loading="lazy"
          />
          <span>
            Big moments.
            <br />
            Considered details.
          </span>
        </div>
        <div className="planning-copy">
          <p className="eyebrow">Make room for the celebration</p>
          <h2 id="planning-title">
            A little less searching.
            <br />
            <em>A little more clarity.</em>
          </h2>
          <ol className="planning-steps">
            {steps.map(([title, body], i) => (
              <li key={title}>
                <span aria-hidden="true">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="button" href="#/contact">
            Prepare your celebration brief
          </a>
        </div>
      </section>
      <section className="home-section home-faq" aria-labelledby="faq-title">
        <div>
          <p className="eyebrow">Before the big decisions</p>
          <h2 id="faq-title">
            A few things
            <br />
            worth knowing.
          </h2>
          <a className="home-link" href="#/packages">
            Explore planning packages →
          </a>
        </div>
        <div>
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>{q}</summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="home-closing" aria-labelledby="closing-title">
        <p className="eyebrow">Make it yours</p>
        <h2 id="closing-title">
          Every celebration starts
          <br />
          with a possibility.
        </h2>
        <p>Find your setting. Gather your ideas. Take the next step.</p>
        <a className="button" href="#/venues">
          Find your setting →
        </a>
      </section>
    </div>
  )
}
