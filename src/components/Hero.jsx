import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>
          Hi there, I'm Vihara
          <br />
          Senindu <span className="wave">👋</span>
        </h1>
        <p className="bio">
          I design and build modern web applications, mobile solutions, and
          intelligent AI systems that address real business needs. As a
          full-stack developer, I transform complex challenges into powerful,
          scalable digital experiences that stand out.
        </p>
        <div className="social-icons">
          <a href="https://github.com/vihara-senindu" className="icon">
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/vihara-senindu-11a14a284"
            className="icon"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="mailto:viharasenindu22@gmail.com" className="icon">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://www.facebook.com/vihara2002" className="icon">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.instagram.com/vihara_senindu" className="icon">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="buttons">
          <a href="#contact" className="btn btn-primary">
            CONTACT ME
          </a>
          <a href="#" className="btn btn-secondary">
            SEE MY RESUME
          </a>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-circle">
          <img src="./Profile/profile.png" alt="Vihara Senindu" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
