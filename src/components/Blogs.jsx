import "./Blogs.css";
import { useState, useEffect } from "react";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const featuredBlog = {
    title: "Natural Fibers: Nature's Original Gift to Textiles",
    description:
      "Explore the fascinating world of natural fibers, their inherent properties, and why they remain nature's most enduring gift to the textile industry.",
    link: "https://medium.com/@viharasenindu/natural-fibers-natures-original-gift-to-textiles-c0c77e02e65d",
    pubDate: "2026-01-23",
    category: "Textile Tech" 
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const mediumUsername = "@viharasenindu";
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/${mediumUsername}`
        );
        
        if (!response.ok) throw new Error("Failed");
        const data = await response.json();

        if (data.items && data.items.length > 0) {
          setBlogs(data.items.slice(0, 3));
        } else {
          setBlogs([featuredBlog]);
        }
      } catch (error) {
        console.log("Medium API Error - using static fallback");
        setBlogs([featuredBlog]);
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
      <h2 className="section-title center-text">Latest Articles ✍️</h2>
      
      <div className="blogs-container"> 
        <div className="blogs-grid">
          {blogs.map((item, index) => (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="blog-card" 
              key={index}
            >
              <div className="blog-visual">
                <div className="blog-category">
                   {item.categories && item.categories.length > 0 ? item.categories[0] : (item.category || "Article")}
                </div>
              </div>

              <div className="blog-content">
                <div className="blog-date">
                  <i className="far fa-calendar-alt"></i> {item.pubDate ? item.pubDate.split(' ')[0] : "Recent"}
                </div>
                <h3>{item.title}</h3>
                <p className="blog-desc">
                  {item.description.includes("<") 
                    ? stripHtml(item.description) 
                    : item.description}
                </p>
                <div className="read-more">
                  Read Article <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            </a>
          ))}
          
          {blogs.length === 0 && <p className="loading-text">Loading articles...</p>}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
