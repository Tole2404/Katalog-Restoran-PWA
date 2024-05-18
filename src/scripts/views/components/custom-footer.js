class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const now = new Date();
    const currentYear = now.getFullYear();

    this.innerHTML = `
      <div class="footer">
        <p>Copyright © ${currentYear} - RasaMangan.</p>
      </div>
        `;
  }
}

customElements.define('custom-footer', Footer);
