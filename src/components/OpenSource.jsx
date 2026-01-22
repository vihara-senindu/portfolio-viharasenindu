import "./Projects.css";

import { useState, useEffect } from "react";

const OpenSource = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/vihara-senindu/repos?sort=updated&direction=desc`
        );
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setRepos(data.slice(0, 6)); 
      } catch (error) {
        console.log("GitHub API Error - using static fallback");
      }
    };
    fetchRepos();
  }, []);

  const getLangColor = (lang) => {
    if (lang === "JavaScript") return "#f1e05a";
    if (lang === "HTML") return "#e34c26";
    return "#fff";
  };

  return (
    <section className="section-wrapper" id="opensource">
      <h2 className="section-title">Open Source Projects 👩‍💻</h2>
      <div className="glass-container full-width-glass">
        <div className="projects-grid">
          {repos.length > 0 ? (
            repos.map((repo) => (
              <div className="project-card" key={repo.id}>
                <div className="project-header">
                  <i className="fas fa-book book-icon"></i>
                  <h3>{repo.name}</h3>
                </div>
                <p className="project-desc">
                  {repo.description ? repo.description.substring(0, 80) + "..." : "No description."}
                </p>
                <div className="project-stats">
                  <div className="lang-row">
                    <span className="lang-dot" style={{ backgroundColor: getLangColor(repo.language) }}></span>
                    <span>{repo.language || "Code"}</span>
                  </div>
                  <div className="stats-row">
                    <span><i className="fas fa-star"></i> {repo.stargazers_count}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
             <p>Loading projects...</p>
          )}
        </div>
        <div className="center-btn-container">
          <a href="https://github.com/vihara-senindu?tab=repositories" target="_blank" className="btn btn-primary">MORE PROJECTS</a>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;