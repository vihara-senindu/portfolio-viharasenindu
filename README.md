# ⚡️ Modern React Portfolio Template

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A high-performance, responsive portfolio website built with **React** and **Vite**. This project features a modern "Glassmorphism" UI design, dynamic API integrations, and a fully functional Dark/Light mode theme engine.

## ✨ Key Features

* **🎨 Glassmorphism Design:** Modern UI with translucent backgrounds, blur effects, and neon glowing accents.
* **🌓 Dark & Light Mode:** Fully persistent theme toggler (saves preference to LocalStorage).
* **📱 Fully Responsive:** Optimized for desktops, tablets, and mobile devices with a custom hamburger menu.
* **🔌 API Integrations:**
    * **GitHub API:** Automatically fetches and displays top repositories.
    * **Medium RSS:** Fetches and displays recent blog posts via RSS-to-JSON.
* **⚡️ Fast Performance:** Built on Vite for lightning-fast HMR and optimized builds.
* **✨ Interactivity:** CSS animations, hover effects, and smooth scrolling.

## 🛠 Tech Stack

* **Framework:** React (v18+)
* **Build Tool:** Vite
* **Styling:** Modular CSS3 (Custom Properties & Animations)
* **Icons:** FontAwesome
* **Deployment:** Ready for Netlify/Vercel

## 📂 Project Structure

```text
src/
├── components/          # Individual UI sections
│   ├── Navbar.jsx       # Navigation & Theme Toggle
│   ├── Hero.jsx         # Landing section with bio
│   ├── Skills.jsx       # Tech stack icons & proficiency bars
│   ├── Projects.jsx     # Project showcase cards
│   ├── OpenSource.jsx   # GitHub API integration
│   ├── Blogs.jsx        # Medium API integration
│   └── ...
├── index.css            # Global variables & resets
├── main.jsx             # Entry point
└── App.jsx              # Main component layout
public/                  # Static assets (images, icons)


Follow these steps to set up the project locally on your machine.

### Prerequisites
* **Node.js** (v14 or higher)
* **npm** (Node Package Manager)

### Installation Guide

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```
    > The app should now be running at `http://localhost:5173`

4.  **Build for production** (Optional)
    ```bash
    npm run build
    ```