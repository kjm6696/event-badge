/* eslint-disable lit/no-native-attributes */
/* eslint-disable lit-a11y/alt-text */
import { LitElement, html, css } from 'lit';

class EventBadge extends LitElement {
  static properties = {
    image: { type: String, Reflect: true },
    name: { type: String, Reflect: true },
    job: { type: String, Reflect: true },
    occupation: { type: String, Reflect: true },
    companyLogo: { type: String, Reflect: true },
  };

  static styles = css`
    :host {
      font-size: calc(10px + 2vmin);
      margin: 1 auto;
      text-align: center;
    }
    .container {
      background-color: #898989;
      border-radius: 10px;
      border: 1px solid #000;
      width: 400px;
      margin-top: 5%;
    }

    .image {
      width: 35%;
      left: 5%;
      position: relative;
      margin-top: 7%;
      margin-right: 7%;
    }
    .header {
      /* background-color: #787878; */
      background-image: url('https://th.bing.com/th/id/R.4c20723f6def227a3c6bb933160fe419?rik=QZo6ZuW%2fAaRiyw&riu=http%3a%2f%2fwww.rainbowsig.org%2fwp-content%2fuploads%2f2017%2f05%2fcropped-rainbow-header.jpg&ehk=KNrNKmKlEV%2f2LzmZCPeZxiqWHU24VtxOqdTtbfoPqxc%3d&risl=&pid=ImgRaw&r=0');
      padding-top: 1%;
      border-radius: 10px 10px 0 0;
      color: white;
      position: relative;
      letter-spacing: 20px;
      height: 81px;
      /* font-family: 'arial-black', sans-serif; */
      top: 0;
      text-transform: uppercase;
      text-align: center;
      font-stretch: expanded;
    }
    .info {
      font-size: 1rem;
      text-align: left;
      padding: 0 1rem;
      padding-top: 1rem;
      padding-bottom: 1rem;
      background-color: #898989;
      border-radius: 0 0 10px 10px;
      color: #ffffff;
      font-family: 'papyrus', Fantasy;
    }
    .circle {
      width: 15px;
      height: 15px;
      background-color: #000000;
      border-radius: 50%;
      left: 50%;
      top: 50%;
      position: absolute;
    }

    .headText {
      position: relative;
      top: 30%;
      font-stretch: expanded;
    }

    .tv {
      position: absolute;
      top: -15%;
      width: 80%;
      left: 14%;
    }
    .img-container {
      position: relative;
    }

    .footer {
      background-image: url('https://th.bing.com/th/id/R.4c20723f6def227a3c6bb933160fe419?rik=QZo6ZuW%2fAaRiyw&riu=http%3a%2f%2fwww.rainbowsig.org%2fwp-content%2fuploads%2f2017%2f05%2fcropped-rainbow-header.jpg&ehk=KNrNKmKlEV%2f2LzmZCPeZxiqWHU24VtxOqdTtbfoPqxc%3d&risl=&pid=ImgRaw&r=0');
      position: relative;
      height: 50px;
      border-radius: 0 0 10px 10px;
    }
    .companyLogo {
      position: relative;
      width: 30%;
      float: right;
      top: -50%;
    }
  `;

  constructor() {
    super();
    this.header = 'MEDIA';
    this.image =
      'https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000';
    this.tv =
      'https://purepng.com/public/uploads/large/purepng.com-old-televisiontvtelecommunicationmonochromeblack-and-whittelevisionoldblack-and-whiteclipart-1421526536097wgqy0.png';
    this.name = 'Sir Shrek';
    this.job = 'Swamp Monster';
    this.occupation = 'King of the Swamp';
    this.companyLogo =
      'https://www.logolynx.com/images/logolynx/4e/4ea5536c64b9a89540dfcac2ca4e16f9.png';
  }

  render() {
    return html`
      <main>
        <div class="container">
          <div class="header">
            <div class="circle"></div>
              <p class="headText"><h2>${this.header}</h2></p>
          </div>
          <div class="img-container">
          <img class="image" src="${this.image}"/>
            <img class="tv" src="${this.tv}"/>
          </div>
          <div class="info">
            <div class="name">${this.name}</div>
            <div class="job">${this.job}</div>
            <img class="companyLogo" src="${this.companyLogo}"/>
            <div class="occupation">${this.occupation}</div>
          </div>
          <div class="footer"></div>
        </div>
      </main>
    `;
  }
}

customElements.define('event-badge', EventBadge);
