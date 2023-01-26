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
                <p className="black-box">A digital product configurator that allows customers to create custom versions of a product by selecting from a range of options. This tool allows customer to design and purchase products online.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>VueJs</li>
                  <li>Rest</li>
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
                <h4>Google Maps Integration</h4>
                <h3>Buscaplex</h3>
                <p className="black-box">
                  A website that allows users to search for food places based on their current location.
                  The website also allows users to set a custom location if they want to search for places in a specific area.
                A link looks like
                <a href="https://frontendmasters.github.io/grid-flexbox-v2/">this</a>,
                and multiple links look <a href="#">like this</a> and{" "}
                <a href="#">like this</a>.
                </p>
                <h4>Technologies used include:</h4>
                <ul>
                  <li>Spring</li>
                  <li>HTML</li>
                  <li>CSS</li>
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
                <h4>LeetCode</h4>
                <h3>Code Challenge Compilation</h3>
                <p className="black-box">A series of algorithm challenges with implementations and test cases.
                
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
