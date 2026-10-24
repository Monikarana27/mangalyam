import { services } from '../data/services'
import ServiceIcon from './ServiceIcon'

export default function Services() {
  return (
    <section
      id="services"
      className="services"
      aria-label="Our services"
    >
      {services.map(({ id, icon, title, description }) => (
        <a className="service-card" href="#contact" key={id}>
          <ServiceIcon name={icon} />
          <h2>{title}</h2>
          <p>{description}</p>
          <span className="card-flourish" aria-hidden="true">
            — ✦ —
          </span>
        </a>
      ))}
    </section>
  )
}