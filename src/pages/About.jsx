import PageIntro from '../components/PageIntro'
export default function About() {
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="The Mangalyam idea"
        title="For the moments that bring us together"
        description="A thoughtful place to begin planning your celebration, from the first idea to the final detail."
      />
      <section className="story-grid">
        <img
          src="/images/palace.png"
          alt="Illustrative heritage courtyard styled for an Indian wedding"
        />
        <div>
          <p className="eyebrow">Tradition meets thoughtful planning</p>
          <h2>
            Many details.
            <br />
            One beautiful occasion.
          </h2>
          <p>
            Every celebration begins with people. The family who travels to be
            there. The friends who stay until the last song. The moments you
            will remember long after the flowers have faded.
          </p>
          <p>
            Mangalyam brings venues, catering, photography, décor and guest
            stays into one planning experience, so you can explore what fits
            your occasion and build a clear brief.
          </p>
          <a className="text-link" href="#/services">
            Explore our services →
          </a>
        </div>
      </section>
      <section className="editorial-section">
        <p className="eyebrow">A simpler way to begin</p>
        <h2>Your celebration, in three thoughtful steps</h2>
        <div className="steps-grid">
          {[
            [
              '01',
              'Find your setting',
              'Explore venue concepts by location, style and guest capacity.',
            ],
            [
              '02',
              'Bring the details together',
              'Choose services and a package concept that reflect your priorities.',
            ],
            [
              '03',
              'Prepare your brief',
              'Collect your preferences into a clear enquiry ready to share.',
            ],
          ].map(([n, title, copy]) => (
            <article key={n}>
              <span className="step-number">{n}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="callout">
        <h2>Start with what matters to you.</h2>
        <p>
          An intimate ceremony or a wedding weekend—make room for your own
          story.
        </p>
        <a className="button" href="#/contact">
          Plan your celebration
        </a>
      </section>
    </div>
  )
}
