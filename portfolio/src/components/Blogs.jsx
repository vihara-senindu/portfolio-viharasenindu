import "./Blogs.css";

import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vihara-senindu`
        );
        if (!response.ok) throw new Error("Failed");
        const data = await response.json();
        setBlogs(data.items.slice(0, 3));
      } catch (error) {
        console.log("Medium API Error");
      }
    };
    fetchBlogs();
  }, []);

  const stripHtml = (html) => {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || "").substring(0, 100) + "...";
  };

  return (
    <section className="section-wrapper" id="blogs">
      <h2 className="section-title">Blogs ✍️</h2>
      <div className="glass-container full-width-glass">
        <div className="blogs-grid">
          {blogs.map((item, index) => (
            <div className="blog-card" key={index}>
              <div className="blog-header">
                <h3>{item.title}</h3>
              </div>
              <p className="blog-desc">{stripHtml(item.description)}</p>
              <a href={item.link} target="_blank" className="blog-link">
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
          {blogs.length === 0 && <p>Loading blogs...</p>}
        </div>
      </div>
    </section>
  );
};

export default Blogs;