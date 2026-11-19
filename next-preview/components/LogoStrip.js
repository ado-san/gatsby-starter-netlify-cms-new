export default function LogoStrip({ items = [], label }) {
  return (
    <ul className="logo-strip" aria-label={label}>
      {items.map(item => (
        <li key={item.name}>
          <img src={item.logo} alt="" width="36" height="36" loading="lazy" />
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
