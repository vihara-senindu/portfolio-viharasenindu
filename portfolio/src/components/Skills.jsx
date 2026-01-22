import "./Skills.css";

import React from "react";

const Skills = () => {
  // 1. List of Tech Icons (from #skills section)
  const techSkills = [
    { icon: "fab fa-html5", name: "HTML5" },
    { icon: "fab fa-css3-alt", name: "CSS3" },
    { icon: "fab fa-js", name: "JavaScript" },
    { icon: "fab fa-react", name: "React" },
    { icon: "fab fa-node", name: "NodeJS" },
    { icon: "fab fa-npm", name: "npm" },
    { icon: "fas fa-database", name: "SQL" },
    { icon: "fas fa-fire", name: "Firebase" },
    { icon: "fab fa-python", name: "Python" },
    { icon: "fas fa-leaf", name: "MongoDB" },
    { icon: "fab fa-github", name: "GitHub" },
    { icon: "fas fa-pen-nib", name: "Photoshop/Illustrator" },
    { icon: "fab fa-figma", name: "Figma" },
    { icon: "fab fa-php", name: "PHP" },
    { icon: "fab fa-java", name: "Java" },
  ];

  // 2. List of Skill Details (Text descriptions)
  const skillDetails = [
    {
      icon: "fas fa-laptop-code",
      title: "Website Development",
      desc: "I am passionate about front-end and back-end web development, with practical experience in HTML, CSS, JavaScript, MERN stack, and PHP, creating dynamic, efficient, and visually engaging web solutions.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Mobile App UI Design",
      desc: "I’m passionate about elevating products through a design-driven process that delivers visually stunning, user-focused UI experiences.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "Graphic design",
      desc: "I’m passionate about graphic design, with experience in crafting brand identities, logos, flyers, and book covers.",
    },
    {
      icon: "fas fa-code",
      title: "Software Development",
      desc: "Sometimes I code, sometimes I design—but always as a software engineer creating exceptional digital experiences.",
    },
  ];

  // 3. List of Proficiency Bars (from #proficiency section)
  const proficiencies = [
    { label: "Html / Css", pct: "90%" },
    { label: "JavaScript", pct: "70%" },
    { label: "React Native", pct: "30%" },
    { label: "MERN Stack", pct: "40%" },
    { label: "Python", pct: "80%" },
    { label: "Figma", pct: "95%" },
    { label: "Ps / Ai", pct: "90%" },
    { label: "PHP", pct: "50%" },
    { label: "Java", pct: "75%" },
    { label: "C#", pct: "60%" },
    { label: "C++", pct: "50%" },
  ];

  return (
    <>
      {/* --- SKILLS ICONS & DETAILS SECTION --- */}
      <section className="section-wrapper" id="skills">
        <div className="glass-container">
          <div className="section-image">
            <img src="./Web Images/Skills.png" alt="Skills Illustration" />
          </div>
          <div className="section-content">
            <h2 className="section-title">My Skills 🪄</h2>
            <p className="section-subtitle">
              Hello! I’m a technology enthusiast driven by curiosity and a
              passion for exploring innovative solutions.
            </p>

            {/* Grid of Icons */}
            <div className="tech-icons-grid">
              {techSkills.map((tech, index) => (
                <div className="tech-item" key={index}>
                  <i className={tech.icon}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Detailed Text Rows */}
            <div className="skills-details">
              {skillDetails.map((skill, index) => (
                <div
                  className={`skill-row ${
                    skill.title === "Software Development" ? "software-skill" : ""
                  }`}
                  key={index}
                >
                  <h4>
                    <i className={skill.icon}></i> {skill.title}
                  </h4>
                  <p>{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- PROFICIENCY PROGRESS BARS SECTION --- */}
      <section className="section-wrapper" id="proficiency">
        <div className="glass-container reverse-layout">
          <div className="section-content">
            <h2 className="section-title">Proficiency ✨</h2>
            <p className="section-subtitle">
              A visual representation of my technical confidence.
            </p>
            <div className="progress-bars-container">
              {proficiencies.map((skill, i) => (
                <div className="progress-item" key={i}>
                  <div className="progress-label">{skill.label}</div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{ width: skill.pct }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="section-image">
            {/* Note: The filename in original HTML had a space "Proficiency .png" */}
            <img
              src="./Web Images/Proficiency .png"
              alt="Proficiency Illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;