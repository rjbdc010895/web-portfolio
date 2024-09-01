import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Particles from "./components/magicui/particles";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import { ChevronRight } from "lucide-react";

function App() {
  const aboutSectionRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="App">
      <section className="hero">
        <div className="particles-container">
          <Particles
            className="absolute inset-0 particles-container"
            quantity={300}
            staticity={20}
            ease={50}
            size={1}
            color="#ffffff"
            vx={0.5}
            vy={0.5}
            refresh
          />
        </div>
        <header className="App-header">
          <img src="profile.jpg" className="profile-pic" alt="Profile" />
          <h1>Hello World!</h1>
          <p>I'm Robert Jan B. Dela Cruz.</p>
          <p>I'm a full-stack developer.</p>
          <div
            className="mt-4 text-2xl flex items-center justify-center animated-gradient-container"
            onClick={scrollToAbout}
            style={{ cursor: "pointer" }}
          >
            <span role="img" aria-label="rocket">
              🚀
            </span>
            <hr className="vertical-divider" />
            <span className="animated-gradient-text">About Me</span>
            <ChevronRight
              style={{ height: "15px", width: "auto" }}
              className="ml-1 chevron-right transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </div>
        </header>
      </section>
      <section id="about" className="about" ref={aboutSectionRef}>
        <div
          className={`transition-opacity duration-1000 ${
            isInView ? "animate-pull-up opacity-100" : "opacity-0"
          }`}
        >
          <h2>About Me</h2>
          <hr className="about-hr"></hr>
        </div>
        <div
          className={`about-card transition-opacity duration-1000 ${
            isInView ? "animate-pull-up opacity-100" : "opacity-0"
          }`}
        >
          <p
            className={`transition-opacity duration-1000 delay-500 ${
              isInView ? "animate-pull-up opacity-100" : "opacity-0"
            }`}
          >
            I'm Robert Jan B. Dela Cruz, a passionate and experienced full-stack
            developer with a strong background in building dynamic and
            responsive web applications. With expertise in both front-end and
            back-end technologies, I specialize in creating seamless user
            experiences and efficient server-side logic. Over the years, I've
            honed my skills in C#, JavaScript, React, Node.js, and various other
            modern frameworks and tools.
          </p>
          <p
            className={`transition-opacity duration-1000 delay-700 ${
              isInView ? "animate-pull-up opacity-100" : "opacity-0"
            }`}
          >
            My Journey as developer began with a deep curiosity for how things
            work under the hood. This curiosity has driven me to continuously
            learn and adapt to the ever-evolving landscape of web development. I
            take pride in writing clean, maintainable code and enjoy
            collaborating with other developers and designers to bring ideas to
            life.
          </p>
        </div>
      </section>
      <Skills />
      <WorkExperience />
      <Contact />
      <SocialMedia />
    </div>
  );
}

export default App;
