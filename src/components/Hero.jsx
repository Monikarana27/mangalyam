import TrustBadges from './TrustBadges'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-content">
        <div className="hero-intro">
          <h1 id="hero-title">
            <span>One platform </span>
            <span>For every celebration</span>
          </h1>

          <div className="ornamental-rule" aria-hidden="true">
            ✦
          </div>

          <p>Book. Plan. Celebrate. All in One Place.</p>
        </div>

        <div className="hero-logo">
          <img
            src="/images/mangalyam-logo.png"
            alt="Mangalyam"
            width="1024"
            height="1024"
          />
        </div>

        <div className="hero-booking">
          <h2>
            Book everything for your
            <em>Special Day</em>
          </h2>

          <a className="button" href="#services">
            Book now
          </a>

         <TrustBadges />
        </div>
      </div>
    </section>
  )
}