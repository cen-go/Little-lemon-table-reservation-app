import { Link } from "react-router-dom";
import heroImg from "../assets/restauranfood.jpg";
import { DUMMY_MEALS } from "../assets/DUMMY_MEALS";
import { DUMMY_USERS } from "../assets/DUMMY_USERS";
import SpecialsCard from "../components/SpecialsCard";
import TestimonialCard from "../components/TestimonialCard";
import ownerImg2 from "../assets/owners2.jpg"

export default function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="container">
          <article className="hero-content">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
            <div className="reservation-btn">
              <Link to="/reservations" className="cta">
                Reserve a Table
              </Link>
            </div>
          </article>
          <div className="hero-img">
            <img src={heroImg} alt="chef holding plate" />
          </div>
        </div>
      </section>

      <section className="specials-section container">
        <div className="specials-header">
          <h2>Specials</h2>
          <a href="/" className="cta">
            Online Menu
          </a>
        </div>
        {DUMMY_MEALS.map((meal) => (
          <SpecialsCard key={meal.id} meal={meal} />
        ))}
      </section>

      <section className="testimonials-section">
        <h2>Testimonials</h2>
        <div className="container">
          {DUMMY_USERS.map((user) => (
            <TestimonialCard key={user.id} user={user} />
          ))}
        </div>
      </section>

      <section className="about-us container">
        <article>
          <h2>Little Lemon</h2>
          <p className="about-subheading">Chicago</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit.
          </p>
        </article>
        <div className="about-images">
          <img src={ownerImg2} alt="mario and luigi" />
        </div>
      </section>
    </>
  );
}
