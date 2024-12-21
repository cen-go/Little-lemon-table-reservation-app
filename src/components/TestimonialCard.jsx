export default function TestimonialCard({ user }) {
  return (
    <div className="testimonials-card">
      <div className="testimonial-img">
        <img src={user.image} alt="user" />
      </div>
      <article>
        <h3>{user.username}</h3>
        <p>{user.rating}</p>
        <p>
          {user.review}
        </p>
      </article>
    </div>
  );
}
