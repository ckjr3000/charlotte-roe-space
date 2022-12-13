class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = ` <section id="header">
    <section id="site-id">
      <h1>Charlotte Roe | Artist / Creative Technologist</h1>
    </section>
    <nav>
      <a href="./index.html">Home</a>
      <a href="./art.html">Art</a>
      <a href="./development.html">Code</a>
      <a href="./cv.html">CV</a>
      <a href="./contact.html">Contact</a>
    </nav>
  </section>`;
  }
}

customElements.define("header-component", Header);

class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `<section id="footer">
    <p>Website hand-coded by me, &copy; 2022</p>
  </section>`;
  }
}

customElements.define("footer-component", Footer);

console.log(window.innerWidth);
