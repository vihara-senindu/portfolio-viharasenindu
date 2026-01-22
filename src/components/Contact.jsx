import "./Contact.css";

import { useState } from "react";

const Contact = () => {
  const [btnText, setBtnText] = useState("Send Secretly");

  const handleSubmit = (e) => {
    e.preventDefault();
    setBtnText("Sending...");
    
    setTimeout(() => {
      alert("Message Sent Secretly! (This is a demo)");
      e.target.reset();
      setBtnText("Send Secretly");
    }, 1500);
  };

  return (
    <section className="section-wrapper" id="contact">
      <h2 className="section-title center-text">Contact Me 📬</h2>
      <div className="glass-container contact-container">
        <div className="contact-left">
          <h3>Let's Chat!</h3>
          <p>Whether you have a question, want to collaborate, or just want to say hi...</p>
        </div>

        <div className="contact-right">
          <h3>Send an Anonymous Message 🕵️‍♀️</h3>
          <p className="form-note">Your identity will be hidden. Say whatever is on your mind!</p>
          <form className="anon-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input type="text" placeholder="Subject (Optional)" className="glass-input" />
            </div>
            <div className="input-group">
              <textarea placeholder="Type your secret message here..." required className="glass-input textarea-input"></textarea>
            </div>
            <button type="submit" className="btn btn-primary form-btn">
              {btnText} <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;