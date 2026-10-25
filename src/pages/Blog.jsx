import PageIntro from '../components/PageIntro'
import { articles } from '../data/catalog'
export default function Blog() {
  return (
    <div className="inner-content">
      <PageIntro
        eyebrow="The celebration journal"
        title="A little inspiration. A clearer plan."
        description="Practical ideas for thoughtful hosts, meaningful moments and celebrations that feel like you."
      />
      <div className="collection-grid">
        {articles.map((a) => (
          <article className="collection-card" key={a.id}>
            <img
              src={`/images/${a.image}.png`}
              alt={`${a.category} inspiration`}
            />
            <div className="collection-body">
              <p className="eyebrow">
                {a.category} · {a.time}
              </p>
              <h2>{a.title}</h2>
              <p>{a.intro}</p>
              <a className="text-link" href={`#/blog/${a.id}`}>
                Read the story →
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
export function Article({ id }) {
  const a = articles.find((x) => x.id === id)
  if (!a)
    return (
      <div className="empty-state">
        <h1>Story not found</h1>
        <a href="#/blog">Back to the journal</a>
      </div>
    )
  return (
    <article className="inner-content article-page">
      <a className="text-link" href="#/blog">
        ← Back to the journal
      </a>
      <PageIntro
        eyebrow={`${a.category} · ${a.time}`}
        title={a.title}
        description={a.intro}
      />
      <img
        className="article-cover"
        src={`/images/${a.image}.png`}
        alt={`${a.category} inspiration`}
      />
      <div className="article-copy">
        {a.sections.map(([h, p]) => (
          <section key={h}>
            <h2>{h}</h2>
            <p>{p}</p>
          </section>
        ))}
        <a className="button" href="#/contact">
          Prepare your celebration brief
        </a>
      </div>
    </article>
  )
}
