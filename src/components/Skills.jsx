import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";
import { SiMongodb, SiFigma } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>My Skills</h2>

      <div className="skills-container">

        <div className="skill-card">
          <FaHtml5 className="skill-icon"/>
          <p>HTML</p>
        </div>

        <div className="skill-card">
          <FaCss3Alt className="skill-icon"/>
          <p>CSS</p>
        </div>

        <div className="skill-card">
          <FaJs className="skill-icon"/>
          <p>JavaScript</p>
        </div>

        <div className="skill-card">
          <FaReact className="skill-icon"/>
          <p>React</p>
        </div>

        <div className="skill-card">
          <FaNodeJs className="skill-icon"/>
          <p>Node.js</p>
        </div>

        <div className="skill-card">
          <SiMongodb className="skill-icon"/>
          <p>MongoDB</p>
        </div>

        <div className="skill-card">
          <FaGit className="skill-icon"/>
          <p>Git</p>
        </div>

        <div className="skill-card">
          <SiFigma className="skill-icon"/>
          <p>Figma</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;