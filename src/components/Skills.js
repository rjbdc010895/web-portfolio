import React, { useEffect, useRef, useState } from "react";
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
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skills = [
    { name: "C#", icon: CsharpIcon, yearsOfExperience: 9 },
    { name: ".Net Core", icon: DotNetCoreIcon, yearsOfExperience: 5 },
    { name: "JavaScript", icon: JavaScriptIcon, yearsOfExperience: 9 },
    { name: "React", icon: ReactIcon, yearsOfExperience: 4 },
    { name: "Node.js", icon: NodeJsIcon, yearsOfExperience: 4 },
    { name: "HTML & CSS", icon: HtmlCssIcon, yearsOfExperience: 9 },
    { name: "SQL", icon: SQLIcon, yearsOfExperience: 9 },
    { name: "Python", icon: PythonIcon, yearsOfExperience: 2 },
    { name: "Java", icon: JavaIcon, yearsOfExperience: 9 },
    { name: "API", icon: APIIcon, yearsOfExperience: 4 },
    { name: "Git & GitHub", icon: GitIcon, yearsOfExperience: 6 },
    { name: "Docker", icon: DockerIcon, yearsOfExperience: 3 },
    {
      name: "Responsive Design",
      icon: ResponsiveDesignIcon,
      yearsOfExperience: 9,
    },
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

  const openModal = (skill) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedSkill(null);
    setIsModalOpen(false);
  };

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
            onClick={() => openModal(skill)}
          >
            <div className="skill-icon">
              <img src={skill.icon} alt={`${skill.name} icon`} />
            </div>
            <div className="skill-name">{skill.name}</div>
          </div>
        ))}
      </div>

      {isModalOpen && selectedSkill && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <h3>{selectedSkill.name}</h3>
            <p>
              <strong>Years of Experience:</strong>{" "}
              {selectedSkill.yearsOfExperience} years
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;
