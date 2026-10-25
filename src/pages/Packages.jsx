import PageIntro from '../components/PageIntro'
import { packages } from '../data/catalog'
export default function Packages() {
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="Thoughtfully brought together"
        title="Choose a starting point. Make it yours."
        description="Three planning concepts to help you decide what you need, with room to adapt every detail."
      />
      <p className="demo-note">
        Illustrative package concepts. Inclusions are planning examples, not
        confirmed commercial offers.
      </p>
      <div className="collection-grid">
        {packages.map((p, i) => (
          <article
            className={`collection-card package-card ${i === 1 ? 'featured-package' : ''}`}
            key={p.name}
          >
            <img
              src={`/images/${p.image}.webp`}
              alt={`${p.name} celebration inspiration`}
            />
            <div className="collection-body">
              <p className="eyebrow">{p.guests}</p>
              <h2>{p.name}</h2>
              <p>{p.subtitle}</p>
              <ul className="inclusion-list">
                {p.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <p className="quote-note">
                Tailored quote after scope confirmation
              </p>
              <a className="button" href={`#/contact?package=${p.name}`}>
                Explore {p.name}
              </a>
            </div>
          </article>
        ))}
      </div>
      <section className="editorial-section">
        <h2>A few things you may be wondering</h2>
        {[
          [
            'Can I combine services?',
            'Yes, your brief can include any combination of the six service categories. Final scope would be agreed with the relevant partners.',
          ],
          [
            'What affects the final cost?',
            'Guest count, location, dates, venue requirements, menus, décor and coverage hours all influence a quote. This demo does not provide live pricing.',
          ],
          [
            'Can I plan an occasion other than a wedding?',
            'You can prepare a brief for an engagement, anniversary, birthday or other family celebration using the contact form.',
          ],
        ].map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </section>
    </div>
  )
}
