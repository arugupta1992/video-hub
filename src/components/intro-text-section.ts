import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('intro-text-section')
export class IntroTextSection extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #ffffff;
      padding: 80px 24px 100px;
      text-align: center;
    }
    
    .intro-container {
      max-width: 900px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 60px;
    }
    
    .intro-description {
      font-size: clamp(18px, 2vw, 22px);
      line-height: 1.6;
      color: #4a4a4a;
      margin: 0;
      font-weight: 400;
    }
    
    .main-heading {
      font-size: clamp(40px, 6vw, 72px);
      line-height: 1.1;
      margin: 0;
      font-weight: 700;
      color: #1a1a1a;
    }
    
    @media (max-width: 768px) {
      :host {
        padding: 60px 20px 80px;
      }
      
      .intro-container {
        gap: 40px;
      }
    }
  `;

  render() {
    return html`
      <div class="intro-container">
        <p class="intro-description">
        Professional video editing, minus the learning curve. Discover the all-in-one editing suite designed to help creators shine.
        </p>
        
        <h2 class="main-heading">
        Edit. Export. Impress.
        </h2>
      </div>
    `;
  }
}

