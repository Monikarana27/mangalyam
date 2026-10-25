import PageIntro from '../components/PageIntro'
import { services } from '../data/services'
import ServiceIcon from '../components/ServiceIcon'
const images = ['palace', 'garden', 'details', 'garden', 'palace', 'details']
const inclusions = [
  'Guest capacity, ceremony space and dining arrangements',
  'Accommodation, welcome events and multi-day itineraries',
  'Menu preferences, dietary requirements and dining style',
  'Room requirements, accessibility and guest comfort',
  'Ceremony coverage, candid moments and delivery preferences',
  'Floral palettes, mandap styling and reception tablescapes',
]
export default function ServicesPage() {
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="Everything for your occasion"
        title="The details that make it yours"
        description="Explore six essentials for a celebration that feels considered, connected and completely personal."
      />
      <div className="collection-grid">
        {services.map((s, i) => (
          <article className="collection-card" id={s.id} key={s.id}>
            <img
              loading="lazy"
              src={`/images/${images[i]}.png`}
              alt={`Illustrative ${s.title.toLowerCase()} inspiration`}
            />
            <div className="collection-body">
              <ServiceIcon name={s.icon} />
              <h2>{s.title}</h2>
              <p>{s.description}.</p>
              <p>{inclusions[i]}.</p>
              <a
                className="text-link"
                href={
                  i < 2 || i === 3
                    ? '#/venues'
                    : `#/contact?service=${encodeURIComponent(s.title)}`
                }
              >
                {i < 2 || i === 3 ? 'Explore venues' : 'Prepare an enquiry'} →
              </a>
            </div>
          </article>
        ))}
      </div>
      <p className="demo-note">
        Service concepts and images are illustrative. Partner availability has
        not been connected.
      </p>
    </div>
  )
}
