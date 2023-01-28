const NavBar = () => {
  return (
    <section id="navBar">
      <nav>
        <ul>
          <li>
            <h1>
              <a href="index.html">
                <span className="fa-solid fa-rocket" aria-hidden="true"></span>
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
            <div className="iconList">
              <a href="#projects">
                <span
                  className="fa-brands fa-linkedin"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://github.com/javierfrancisco" target="_blank">
                <span
                  className="fa-brands fa-square-github"
                  aria-hidden="true"
                ></span>
                <span className="sr-only">Github</span>
              </a>
            </div>
          </li>
          <li>
            <a href="#projects" target="_blank" className="button">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
};
export default NavBar;
