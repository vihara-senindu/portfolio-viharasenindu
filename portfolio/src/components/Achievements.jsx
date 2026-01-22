import "./Achievements.css";

const Achievements = () => {
  return (
    <section className="section-wrapper" id="achievements">
      <h2 className="section-title center-text">
        Achievements And Certifications 🏆
      </h2>
      <div className="achievements-grid">
        <div className="ach-card">
          <div className="ach-img-container">
            <img
              src="https://via.placeholder.com/300x200/5e35b1/ffffff?text=NVQ+Level+4"
              alt="Certificate"
            />
          </div>
          <h3>ICT NVQ LEVEL 4</h3>
          <div className="ach-btns">
            <a href="#" className="btn-sm">Certification</a>
            <a href="#" className="btn-sm">Website</a>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-img-container">
            <img
              src="https://via.placeholder.com/300x200/5e35b1/ffffff?text=Python+Beginners"
              alt="Certificate"
            />
          </div>
          <h3>Python For Beginners</h3>
          <div className="ach-btns">
            <a href="#" className="btn-sm">Certification</a>
            <a href="#" className="btn-sm">Website</a>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-img-container">
            <img
              src="https://via.placeholder.com/300x200/5e35b1/ffffff?text=Front+End+Web"
              alt="Certificate"
            />
          </div>
          <h3>Front-End Web Development</h3>
          <div className="ach-btns">
            <a href="#" className="btn-sm">Certification</a>
            <a href="#" className="btn-sm">Website</a>
          </div>
        </div>
        <div className="ach-card">
          <div className="ach-img-container">
            <img
              src="https://via.placeholder.com/300x200/5e35b1/ffffff?text=Certified+UI/UX"
              alt="Certificate"
            />
          </div>
          <h3>Certified Ui / UX Developer</h3>
          <div className="ach-btns">
            <a href="#" className="btn-sm">Certification</a>
            <a href="#" className="btn-sm">Website</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;