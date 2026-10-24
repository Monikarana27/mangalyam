const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right']

export default function PageOrnaments() {
  return (
    <div className="page-ornaments" aria-hidden="true">
      {corners.map((corner) => (
        <img
          key={corner}
          className={`page-corner page-corner--${corner}`}
          src="/images/gold-corner.png"
          alt=""
          width="64"
          height="64"
        />
      ))}
    </div>
  )
}