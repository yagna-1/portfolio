import React from "react";
import "./PortfolioSite.css";
import myPhoto from "./myPhoto.jpg";

function PortfolioSite() {
  return (
    <div className="container">
      <header className="header">
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#summary">AboutMe</a>
            </li>
            <li className="nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="nav-item">
              <a href="#education">Education</a>
            </li>
            <li className="nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a href="#certifications">Certifications</a>
            </li>
            <li className="nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="name-and-photo">
        <h1 className="name">
          HELLO I'M <span>YAGNA SIVA SAI KUMAR</span>
        </h1>
        <img src={myPhoto} alt="Yagna Siva Sai Kumar" className="photo" />
      </div>
      <main className="main">
        <section id="summary" className="section">
          <h2 className="section-title">About Me</h2>
          <p className="section-content">
            As a fresher with skills in Python, C/C++, JS, HTML/CSS, React.js,
            Javascript, and Django, I aspire to become a skilled SDE. My passion
            for technology and software development drives me to continuously
            learn and improve my skills. I am eager to work on challenging
            projects that allow me to grow as a developer and contribute to the
            field of technology.
          </p>
        </section>
        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <ul className="section-list">
            <li>Python</li>
            <li>C/C++(basic)</li>
            <li>React.js</li>
            <li>Django</li>
            <li>JavaScript</li>
            <li>HTML/CSS</li>
            <li>PostgreSQL</li>
          </ul>
        </section>
        <section id="education" className="section">
          <h2 className="section-title">Education</h2>
          <ul className="section-list">
            <li>
              Pursuing Bachelor's Degree in ELECTRONICS AND COMMUNICATION
              ENGINEERING at MNIT Jaipur
            </li>
          </ul>
        </section>
        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <ul className="section-list">
            <li>
              <a href="https://yagna-1.github.io/food-app/">Food App</a>
              <p>
                Developed a food delivery web application using HTML, CSS, and
                JavaScript. Implemented responsive design to ensure optimal user
                experience on various device sizes. Utilized JavaScript for
                interactive features such as search functionality and cart
                management. Incorporated CSS for visually appealing layout and
                design. The app is built so that it is easy to use and navigate.
                The end goal was to create an application that was both
                functional and visually appealing, and that was able to meet the
                needs of its users
              </p>
            </li>
            <li>
              <a href="https://github.com/yagna-1/notes-app/tree/master">
                Notes App
              </a>
              <p>
                I have successfully built a notes app using a combination of
                React, Django, and RESTful API. This project showcases my
                ability to create modern web interfaces for note-taking, as well
                as handle server-side logic using Django. I took the initiative
                to implement a RESTful API for seamless communication between
                the front-end and back-end. Overall, this project highlights my
                proficiency in full-stack web development skills and my
                enthusiasm for learning and taking on challenging projects.
              </p>
            </li>
          </ul>
        </section>
        <section id="certifications" className="section">
          <h2 className="section-title">Certifications</h2>
          <ul className="section-list">
            <li>
              Programming for Everybody (Getting Started with Python):{" "}
              <a href="https://coursera.org/share/b7207fd1f2559420f7c437651352591f">
                Coursera
              </a>
            </li>
            <li>
              Python Data Structures:{" "}
              <a href="https://coursera.org/share/35b6ee3ec9745b0cd44a0ba4e83d808b">
                Coursera
              </a>
            </li>
            <li>
              The Complete SQL Bootcamp: Go from Zero to Hero:{" "}
              <a href="https://www.udemy.com/certificate/UC-1e729f3d-4ebb-4e31-a7e8-79d7adbc3d32">
                Udemy
              </a>
            </li>
            <li>
              Linux Tools for developers:{" "}
              <a href="https://coursera.org/share/c8699093119da343d0070c53b6b873f8">
                Coursera
              </a>
            </li>
            <li>
              Linux for developers:{" "}
              <a href="https://coursera.org/share/9eb28fc6e4f241e1295138446f578778">
                Coursera
              </a>
            </li>
          </ul>
        </section>
        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <ul className="section-list">
            <li>Email: yagnasivasaikumar@gmail.com.com</li>
            <li>Phone: +918367499619</li>
            <li>
              <a href="https://www.linkedin.com/in/yagna-siva-sai-kumar-984881201">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/yagna-1">GitHub</a>
            </li>
          </ul>
        </section>
      </main>
      <footer className="footer">
        <p className="footer-text">
          &copy; 2023 PortfolioSite. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default PortfolioSite;
