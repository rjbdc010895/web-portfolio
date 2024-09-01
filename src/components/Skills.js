import React, { useEffect, useRef } from "react";
import "./Skills.css";
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGithub,
  FaMobileAlt,
} from "react-icons/fa";
import CsharpIcon from "../assets/svg/csharp.svg";
import JavaScriptIcon from "../assets/svg/javascript.svg";
import DotNetCoreIcon from "../assets/svg/dotnetcore.svg";
import ReactIcon from "../assets/svg/react.svg";
import NodeJsIcon from "../assets/svg/nodejs.svg";
import SQLIcon from "../assets/svg/sql.svg";
import GitIcon from "../assets/svg/git.svg";
import ResponsiveDesignIcon from "../assets/svg/responsivedesign.svg";
import DockerIcon from "../assets/svg/docker.svg";
import PythonIcon from "../assets/svg/python.svg";
import APIIcon from "../assets/svg/api.svg";
import HtmlCssIcon from "../assets/svg/htmlcss.svg";
import JavaIcon from "../assets/svg/java.svg";

const Skills = () => {
  const skillsRef = useRef([]);
  const sectionRef = useRef(null);

  const skills = [
    { name: "C#", icon: CsharpIcon },
    { name: ".Net Core", icon: DotNetCoreIcon },
    { name: "JavaScript", icon: JavaScriptIcon },
    { name: "React", icon: ReactIcon },
    { name: "Node.js", icon: NodeJsIcon },
    { name: "HTML & CSS", icon: HtmlCssIcon },
    { name: "SQL", icon: SQLIcon },
    { name: "Python", icon: PythonIcon },
    { name: "Java", icon: JavaIcon },
    { name: "API", icon: APIIcon },
    { name: "Git & GitHub", icon: GitIcon },
    { name: "Docker", icon: DockerIcon },
    { name: "Responsive Design", icon: ResponsiveDesignIcon },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Animate h2 and hr
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          sectionRef.current.classList.add("show-title");
        }
      }

      // Animate each skill card
      skillsRef.current.forEach((skill, index) => {
        const rect = skill.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          skill.classList.add("show");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="skills-section" ref={sectionRef}>
      <h2>My Skills</h2>
      <hr className="skills-hr"></hr>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card"
            ref={(el) => (skillsRef.current[index] = el)}
          >
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} icon`} />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
