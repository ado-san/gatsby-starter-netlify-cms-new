export default function FeatureGrid({ items = [] }) {
  return (
    <div className="feature-grid">
      {items.map((item, index) => (
        <article className="feature-item" key={`${item.text}-${index}`}>
          <img
            className="feature-image"
            src={item.image}
            alt=""
            loading={index < 2 ? 'eager' : 'lazy'}
          />
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  )
}
