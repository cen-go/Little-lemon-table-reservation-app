export default function SpecialsCard({ meal }) {
  return (
    <div className="specials-card">
      <img src={meal.image} alt={meal.title} />
      <article>
        <div className="specials-card-header">
          <h3>{meal.title}</h3>
          <p>{meal.price}</p>
        </div>
        <p className="specials-card-text">{meal.description}</p>
        <a href="/">Order a delivery</a>
      </article>
    </div>
  );
}
