export default function PageIntro({ eyebrow, title, description }) {
  return (
    <header className="page-intro">
      <a className="page-back" href="#/">
        ← Back to home
      </a>
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <div className="ornamental-rule" aria-hidden="true">
        ✦
      </div>
      <p className="intro-description">{description}</p>
    </header>
  )
}
