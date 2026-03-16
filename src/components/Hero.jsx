import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">
        <h1>
          Hi, I'm <span>Sariha</span>
        </h1>

        <h2>Full Stack Web Developer</h2>

        <p>
          I build modern web applications using React, Node.js and MongoDB.
          Passionate about creating clean UI and solving real-world problems.
        </p>

        <a href="#projects" className="hero-btn">
          View Projects
        </a>

      </div>
    </section>
  );
}

export default Hero;