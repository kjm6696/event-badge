import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class EventBadge extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--event-badge-background-color);
    }
    .container {
      background-color: #867b7b;
      border-radius: 10px;
      border: 1px solid #000;
      width: 400px;
    }

    .image {
      width: 60%;
    }
    .header {
      background-color: #f6ebeb;
      padding-top: 1%;
    }
    .info {
      font-size: 1rem;
      text-align: left;
      padding: 0 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      background-color: #f6ebeb;
    }
    
  `;

  constructor() {
    super();
    this.header = 'Brand Here';
    this.image = 'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000';
    this.name = 'Sir Shrek';
    this.title = 'Swamp Monster'
    this.occupation = 'King of the Swamp'
  }

  render() {
    return html`
      <main>
        <div class="container">
          <div class="header"><h1>${this.header}</h1></div>
          <img class="image" src="${this.image}"/>
          <div class="info">
            <div class="name">${this.name}</div>
            <div class="title">${this.title}</div>
            <div class="occupation">${this.occupation}</div>
          </div>
        </div>
      </main>
    `;
  }
}

customElements.define('event-badge', EventBadge);