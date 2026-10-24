import DownloadApp from './DownloadApp'

const benefits = [
  { label: 'All verified', emphasis: 'professionals' },
  { label: 'Best prices', emphasis: 'guaranteed' },
  { label: 'Easy booking', emphasis: 'in a few clicks' },
  { label: '1000+ happy', emphasis: 'customers' },
]

export default function Footer() {
  return (
    <footer id="contact" className="benefits">
      {benefits.map(({ label, emphasis }) => (
        <p key={label}>
          {label}
          <br />
          <strong>{emphasis}</strong>
        </p>
      ))}

     <DownloadApp />
    </footer>
  )
}