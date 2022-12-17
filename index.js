class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ` <header>
    <section id="site-id">
      <h1>Charlotte Roe | Artist / Developer</h1>
    </section>
    <nav>
      <a href="../index.html">Home</a>
      <a href="../art.html">Art</a>
      <a href="../development.html">Code</a>
      <a href="../cv.html">CV</a>
      <a href="../contact.html">Contact</a>
    </nav>
  </header>`;
  }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<footer id="footer">
    <p>Website hand-coded by me, &copy; 2022</p>
  </footer>`;
  }
}

customElements.define("footer-component", Footer);
