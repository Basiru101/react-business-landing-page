
import restaurant1 from "../assets/portfolio/restaurant1.jpg";
import school1 from "../assets/portfolio/school1.jpg";
import business4 from "../assets/portfolio/business4.jpg";


function Portfolio() {
  return (
    <section className="portfolio" id="portfolio" data-aos="zoom-in">
      <h2>Recent Projects</h2>

      <p className="portfolio-subtitle">
        A showcase of websites and applications built using modern web technologies.
      </p>

      {/* KEEP THIS CONTAINER */}
      <div className="portfolio-container">

        {/* Card 1 */}
        <div className="portfolio-card">
          <img src={restaurant1} alt="Restaurant Website" />

          <h3>Restaurant Website</h3>

          <p>
            Modern restaurant landing page with online reservations and menu showcase.
          </p>

          <div className="portfolio-tags">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="portfolio-buttons">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="portfolio-card">
          <img src={school1} alt="School Website" />

          <h3>School Management Website</h3>

          <p>
            Responsive educational platform for schools and training centers.
          </p>

          <div className="portfolio-tags">
            <span>React</span>
            <span>Node</span>
            <span>MongoDB</span>
          </div>

          <div className="portfolio-buttons">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="portfolio-card">
          <img src={business4} alt="Business Website" />

          <h3>Business Landing Page</h3>

          <p>
            Professional business website designed to generate leads and increase conversions.
          </p>

          <div className="portfolio-tags">
            <span>React</span>
            <span>HTML</span>
            <span>CSS</span>
          </div>

          <div className="portfolio-buttons">
            <a href="#">Live Demo</a>
            <a href="#">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Portfolio;