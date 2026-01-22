import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h1>Hi there, I'm Vihara<br />Senindu <span className="wave">👋</span></h1>
        <p className="bio">
          I design and build modern web applications, mobile solutions, and
          intelligent AI systems that address real business needs. As a
          full-stack developer, I transform complex challenges into powerful,
          scalable digital experiences that stand out.
        </p>
        <div className="social-icons">
          <a href="#" className="icon"><i className="fab fa-github"></i></a>
          <a href="#" className="icon"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="icon"><i className="fas fa-envelope"></i></a>
          <a href="#" className="icon"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="icon"><i className="fab fa-instagram"></i></a>
        </div>
        <div className="buttons">
          <a href="#contact" className="btn btn-primary">CONTACT ME</a>
          <a href="#" className="btn btn-secondary">SEE MY RESUME</a>
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