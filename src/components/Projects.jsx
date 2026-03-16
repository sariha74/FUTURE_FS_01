import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>

      <div className="project-container">

        <div className="project-card">
          <h3>Mini Pastel Store</h3>
          <p>A simple frontend based e-commerce website for a pastel store.</p>

          <div className="project-links">
            <a href="https://mini-pastel-store-53b8e1.netlify.app/" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Student Management System</h3>
          <p>A web application for managing student information and academic records.</p>

          <div className="project-links">
            <a href="https://github.com/sariha74/Student_Details_" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Login UI Design</h3>
          <p>A clean and intuitive login interface for a web application has been designed using Figma.</p>

          <div className="project-links">
            <a href="https://www.figma.com/proto/qOkZ5FLQxea7sybxaTEaYL/Pastel-Gradient-Login-Screen?node-id=3-5&p=f&t=WwIIknG9x3L6sTqf-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">View Design</a>
          </div>
        </div>

        <div className="project-card">
          <h3>Recipe Hub UI Design</h3>
          <p>A modern UI design for a recipe discovery app has been designed using Figma.</p>

          <div className="project-links">
            <a href="https://www.figma.com/proto/7fKH18MTbPImpPvsVwMBs6/Recipe-hub-ui-design?node-id=1-2&t=fSIRVLYBCmumTCwH-1&starting-point-node-id=1%3A2" target="_blank" rel="noopener noreferrer">View Design</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;