export default function LogoGrid({ items = [], variant = 'tech' }) {
  return (
    <ul className={`logo-grid logo-grid--${variant}`}>
      {items.map(item => (
        <li className="logo-card" key={item.name}>
          <img className="logo-card__logo" src={item.logo} alt="" width="48" height="48" loading="lazy" />
          <div>
            {item.category && <p className="logo-card__category">{item.category}</p>}
            <h3 className="logo-card__title">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              ) : (
                item.name
              )}
            </h3>
            <p className="logo-card__text">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
