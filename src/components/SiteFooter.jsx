import { site, phoneUrl, whatsappUrl, externalUrl } from '../config/site'
export default function SiteFooter() {
  const phone = phoneUrl()
  const whatsapp = whatsappUrl()
  return (
    <footer className="universal-footer">
      <div className="footer-topline">
        <div>
          <p className="eyebrow">Your next chapter</p>
          <h2>Let’s bring your ideas together.</h2>
        </div>
        <a className="button" href="#/contact">
          Plan your celebration →
        </a>
      </div>
      <div className="footer-columns">
        <div>
          <a className="footer-brand" href="#/">
            {site.name}
          </a>
          <p>{site.tagline}</p>
          <p className="footer-description">
            Thoughtful settings, meaningful details and room for your own kind
            of celebration.
          </p>
        </div>
        <nav aria-label="Footer navigation">
          <h3>Explore</h3>
          {[
            ['About us', 'about'],
            ['Services', 'services'],
            ['Venues', 'venues'],
            ['Packages', 'packages'],
            ['Journal', 'blog'],
            ['Contact', 'contact'],
          ].map(([label, path]) => (
            <a href={`#/${path}`} key={path}>
              {label}
            </a>
          ))}
        </nav>
        <div className="footer-contact">
          <h3>Let’s connect</h3>
          {phone && <a href={phone}>{site.phoneLabel || site.phone}</a>}
          {site.email && <a href={`mailto:${site.email}`}>{site.email}</a>}
          {whatsapp && (
            <a href={whatsapp} target="_blank" rel="noopener noreferrer">
              WhatsApp us ↗
            </a>
          )}
          {site.address && <p>{site.address}</p>}
          {site.supportHours && <p>{site.supportHours}</p>}
          {externalUrl(site.instagram) && (
            <a
              href={externalUrl(site.instagram)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram ↗
            </a>
          )}
          <a href="#/contact">Prepare an enquiry</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>Illustrative venue collection · Frontend demonstration</span>
        <a href="#/about">About this experience</a>
      </div>
    </footer>
  )
}
