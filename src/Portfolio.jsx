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
      <div className="gradient"></div>
      <div className="section-dkblue">
      <section id="projects">
        <h2>Projects I'm proud of</h2>
        <div className="project-right">
          <article>
              <div className="text">
                <h4>Latest Project</h4>
                <h3>Guided Product Selector</h3>
                <p className="black-box">Description of the project. This should be fairly concise while also describing the key components
                that you developed or worked on. It can be as long as you need it to
                be but should at least be a few sentences long. Be sure to include
                specific links anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>,
                and multiple links look <a href="#">like this</a> and{" "}
                <a href="#">like this</a>.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SVG</li>
                </ul>
              </div>
              <img
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="Screenshot of the Wall of Wonder."
              />
          </article>
        </div>
        <div className="project-left">
          <article>
              <div className="text">
                <h4>Latest Project</h4>
                <h3>Guided Product Selector</h3>
                <p className="black-box">Description of the project. This should be fairly concise while also describing the key components
                that you developed or worked on. It can be as long as you need it to
                be but should at least be a few sentences long. Be sure to include
                specific links anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>,
                and multiple links look <a href="#">like this</a> and{" "}
                <a href="#">like this</a>.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SVG</li>
                </ul>
              </div>
              <img
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="Screenshot of the Wall of Wonder."
              />
          </article>
        </div>
        <div className="project-right">
          <article>
              <div className="text">
                <h4>Latest Project</h4>
                <h3>Guided Product Selector</h3>
                <p className="black-box">Description of the project. This should be fairly concise while also describing the key components
                that you developed or worked on. It can be as long as you need it to
                be but should at least be a few sentences long. Be sure to include
                specific links anywhere in the description. A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>,
                and multiple links look <a href="#">like this</a> and{" "}
                <a href="#">like this</a>.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SVG</li>
                </ul>
              </div>
              <img
                src="https://assets.codepen.io/296057/fem-gettingstartedcss-ch5-1.png"
                alt="Screenshot of the Wall of Wonder."
              />
          </article>
        </div>
      </section>
      </div>
      <div className="gradient"></div>
      <div className="section-plum">
        <section id="contact">
          <h2>Contact me</h2>
          <p className="contact">
            I'm always interested in hearing about new teaching opportunities,
            writing curricula, or instructional design work.
          </p>
          <p>
            <a href="mailto:javierfrancisco@gmail.com" className="button">
              Email me
            </a>
          </p>
        </section>
      </div>
      <div className="gradient"></div>
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
                <span class="fa-solid fa-envelope" aria-hidden="true"></span>
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
