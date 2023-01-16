const Portfolio = () => {
  return (
    <div>
      <section id="navBar">
        <nav>
          <ul>
            <li>
              <h1>
                <a href="index.html">
                  <span class="fa-solid fa-rocket" aria-hidden="true"></span>
                  <span>Javier Alvarez</span>
                </a>
              </h1>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#projects">
                <span class="fa-brands fa-linkedin" aria-hidden="true"></span>
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/javierfrancisco" target="_blank">
                <span
                  class="fa-brands fa-square-github"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a href="#projects" target="_blank" className="button">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <section id="intro">
        <p className="name">
          Hi, my name is <span>Javier Alvarez.</span>
        </p>
        <h2>I develop, create and design digital experiences.</h2>
        <p>I'm a developer specializing in HTML, CSS, JS.</p>
        <p>
          Currently, I'm working at Discover. You can follow me on{" "}
          <a href="https://www.linkedin.com/in/javier-alvarez-35528836/">
            LinkedIn
          </a>
          .
        </p>
      </section>
      <section id="contact">
        <h2>Contact me</h2>
        <p className="contact">
          I'm always interested in hearing about new teaching opportunities,
          writing curricula, or instructional design work.
        </p>
        <p>
          <a href="mailto:javierfrancisco@gmail.com">Email me</a>
        </p>
      </section>
      <section id="footer">
        <h2>Javier Alvarez &middot; 🚀 Software Architect</h2>
        <p>
          <ul>
            <li>
              <a href="#projects">
                <span class="fa-brands fa-linkedin" aria-hidden="true"></span>
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/javierfrancisco" target="_blank">
                <span
                  class="fa-brands fa-square-github"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Github</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/javierfrancisco" target="_blank">
                <span
                  class="fa-solid fa-envelope"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Email Me</span>
              </a>
            </li>
          </ul>
        </p>
        <p>&copy; 2023 Javier Alvarez. All rights reserved.</p>
      </section>
    </div>
  );
};

export default Portfolio;
