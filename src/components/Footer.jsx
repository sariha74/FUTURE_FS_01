import "./Footer.css";

function Footer() {
  return (
    <footer id="footer" className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h2>My Portfolio</h2>
          <p>Full Stack Web Developer building modern web applications.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-social">
          <h3>Connect</h3>
          <a href="mailto:sksariha@gmail.com">Email</a>
        </div>

      </div>

      <p className="footer-bottom">
        © 2026 Sariha | Passionate Full Stack Web Developer
        
      </p>

    </footer>
  );
}

export default Footer;