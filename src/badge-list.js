import { LitElement, html, css } from 'lit';
import './event-badge.js';

export class BadgeList extends LitElement {
  static get tag() {
    return 'badge-list';
  }

  static get properties() {
    return {
      badges: { type: Array },
    };
  }

  constructor() {
    super();
    this.badges = [];
    this.title = 'Badge List';
    this.updateBadgeList();
  }

  updateBadgeList() {
    const address = new URL('../api/badges.json', import.meta.url).href;
    fetch(address)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return [];
      })
      .then(data => {
        this.badges = data;
      });
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }
      .wrapper {
        display: flex;
      }
      .item {
      }
    `;
  }

  render() {
    return html`
      <h1>${this.title}</h1>
      <div class="wrapper">
        ${this.badges.map(
          badge => html`
            <div class="item">
              <event-badge
                image="${badge.image}"
                name="${badge.name}"
                job="${badge.job}"
                occupation="${badge.occupation}"
                companyLogo="${badge.companyLogo}"
              ></event-badge>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define(BadgeList.tag, BadgeList);
