\import { LitElement } from "https://unpkg.com/lit-element@2.4.0/lit-element.js?module";

class ExternalLinkRedirect extends LitElement {
  static get properties() {
    return {
      hass: { type: Object },
      narrow: { type: Boolean },
      route: { type: Object },
      panel: { type: Object },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    // redirect in a new tab
    window.open(this.panel.url, "_blank");
  }

  render() {
    return html` <div></div> `;
  }
}
customElements.define("external-link-redirect", ExternalLinkRedirect);
