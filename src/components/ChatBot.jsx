import React, { useState, useEffect, useRef } from "react";
import "./ChatBot.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      text: "👋 Hi! I'm Vihara's AI Assistant. I know everything about his code, designs, and even his music! What would you like to know?", 
      isUser: false 
    },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    const userMsg = { text: option, isUser: true };
    setMessages((prev) => [...prev, userMsg]);

    let botResponse = {};

    switch (option) {
      case "About Vihara":
        botResponse = { text: "Vihara is a unique mix! 🌟 He's a Full-Stack Developer & UI/UX Designer. Fun fact: He's also a 'Visharada' in Violin 🎻 and currently studying Textile Engineering at UoM!", isUser: false };
        break;
        
      case "Tech Stack":
        botResponse = { text: "He's fully equipped! 🛠️ Frontend: React, React Native, Vite. Backend: Node.js, Python, PHP, Java. He designs with Figma & Adobe Suite.", isUser: false };
        break;
        
      case "Projects":
        botResponse = { text: "Top builds include 'Empreza' (Sport Website), an 'Food Delivery' app UI, and futuristic UI designs for NFT Marketplaces. 🚀", isUser: false };
        break;
        
      case "Education":
        botResponse = { text: "He's a multitasker! 🎓 Currently pursuing a in Textile & Clothing Tech (ITUM) AND a Bachelor of IT (UoM). Talk about dedication!", isUser: false };
        break;

      case "Contact":
        botResponse = { text: "Let's connect! 📬 Email him at viharasenindu22@gmail.com or use the form on this page.", isUser: false };
        break;

      case "Socials":
        botResponse = { 
          text: "Catch Vihara on these platforms! 👇", 
          isUser: false, 
          isSocials: true 
        };
        break;
        
      default:
        botResponse = { text: "I can help you navigate Vihara's portfolio! Just pick a topic below.", isUser: false };
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 600);
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chat-window">
          {/* Header */}
          <div className="chat-header">
            <div className="header-info">
              <div className="status-dot"></div>
              <div>
                <h4>Vihara's AI</h4>
                <span style={{fontSize: '0.7rem', opacity: 0.8}}>Online</span>
              </div>
            </div>
            <button onClick={toggleChat} className="close-btn">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`message ${msg.isUser ? "user-msg" : "bot-msg"}`}
              >
                {msg.text}

                {msg.isSocials && (
                  <div className="social-btns-grid">
                    <a href="https://github.com/vihara-senindu" target="_blank" rel="noreferrer" className="chat-social-link">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/vihara-senindu-11a14a284/" target="_blank" rel="noreferrer" className="chat-social-link">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                    <a href="https://medium.com/@viharasenindu" target="_blank" rel="noreferrer" className="chat-social-link">
                      <i className="fab fa-medium"></i> Medium
                    </a>
                    <a href="https://www.facebook.com/vihara2002" target="_blank" rel="noreferrer" className="chat-social-link">
                      <i className="fab fa-facebook"></i> Facebook
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef}></div>
          </div>

          <div className="chat-options">
            <button onClick={() => handleOptionClick("About Vihara")}>About 👨‍💻</button>
            <button onClick={() => handleOptionClick("Tech Stack")}>Skills ⚡</button>
            <button onClick={() => handleOptionClick("Projects")}>Projects 🚀</button>
            <button onClick={() => handleOptionClick("Education")}>Education 🎓</button>
            <button onClick={() => handleOptionClick("Socials")}>Socials 🌐</button> 
            <button onClick={() => handleOptionClick("Contact")}>Contact 📬</button>
          </div>
        </div>
      )}

      <button className="chat-toggle-btn" onClick={toggleChat}>
        {isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-robot"></i>}
      </button>
    </div>
  );
};

export default ChatBot;