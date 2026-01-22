import "./Projects.css";

const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <h2 className="section-title center-text">Designing Projects 🎨</h2>
      <div className="design-grid">
        <div className="design-card">
          <div className="design-img-container">
            <img src="/Projects/Design1.jpeg" alt="Coffee Table Book" />
          </div>
          <div className="design-content">
            <h3>Food Delivery App UI</h3>
            <p>
              A sleek mobile application interface designed for seamless food
              ordering. Features include a dynamic menu, item customization, and
              a streamlined cart checkout process.
            </p>
            <a href="https://www.behance.net/" className="btn-design">
              Visit project
            </a>
          </div>
        </div>
        <div className="design-card">
          <div className="design-img-container">
            <img src="/Projects/Design2.jpeg" alt="Graphic Designs" />
          </div>
          <div className="design-content">
            <h3>NFT Marketplace Landing Page</h3>
            <p>
              A futuristic, dark-themed web interface designed for a digital
              asset marketplace. Features immersive 3D graphics, clean
              navigation, and a secure platform for discovering and trading rare
              NFTs.
            </p>
            <a href="https://www.behance.net/" className="btn-design">
              View projects
            </a>
          </div>
        </div>
        <div className="design-card">
          <div className="design-img-container">
            <img
              src="/Projects/Design3.jpg"
              alt="UI/UX Designs"
            />
          </div>
          <div className="design-content">
            <h3>UI/UX designs</h3>
            <p>
              Coming soon...
            </p>
            <a href="#" className="btn-design">
              View projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
