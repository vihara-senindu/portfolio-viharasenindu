import "./Education.css";

const Education = () => {
  return (
    <section className="section-wrapper" id="education">
      <div className="glass-container">
        <div className="section-image">
          <img src="./Web Images/Education.png" alt="Education Illustration" />
        </div>
        <div className="section-content">
          <h2 className="section-title">Education 👩‍🎓</h2>
          <p className="section-subtitle">My academic journey and certifications.</p>
          <div className="education-list">
            <div className="edu-card">
              <div className="edu-icon"><i className="fas fa-university"></i></div>
              <div className="edu-info">
                <h3>Institute of Technology University of Moratuwa</h3>
                <h4>Textile and Clothing Technology</h4>
                <span className="edu-date">February 2025 - Present</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon"><i className="fas fa-laptop-code"></i></div>
              <div className="edu-info">
                <h3>University of Moratuwa</h3>
                <h4>Bachelor of Information Technology</h4>
                <span className="edu-date">October 2023 - present</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon"><i className="fas fa-music"></i></div>
              <div className="edu-info">
                <h3>Bhatkhande Music institute university</h3>
                <h4>Visharada (Violin)</h4>
                <span className="edu-date">Jan 2017 - December 2020</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon"><i className="fas fa-school"></i></div>
              <div className="edu-info">
                <h3>St. Thomas College Matara</h3>
                <h4>Advanced Level</h4>
                <span className="edu-date">2018 - 2021</span>
              </div>
            </div>
            <div className="edu-card">
              <div className="edu-icon"><i className="fas fa-school"></i></div>
              <div className="edu-info">
                <h3>Matara Central College</h3>
                <h4>Ordinary Level</h4>
                <span className="edu-date">2013 - 2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;