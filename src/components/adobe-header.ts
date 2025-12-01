import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('adobe-header')
export class AdobeHeader extends LitElement {
  @state() dropdownOpen = false;
  @state() active = 'Photoshop';

  static styles = css`
    :host {
      display: block;
      font-family: 'Inter', sans-serif;
    }

    header {
      display: flex;
        align-items: center;
        justify-content: space-around;
        padding: 16px 32px;
        border-bottom: 1px solid #e5e7eb;
        background: white;
        position: fixed;
        width: 100%;
    }

    .left {
      display: flex;
      align-items: center;
      gap: 32px;
    }

    .logo {
      font-size: 24px;
      font-weight: 700;
      color: #e60000;
      cursor: pointer;
    }

    .menu {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    .dropdown {
      position: relative;
      cursor: pointer;
      font-size: 15px;
      padding: 4px 6px;
    }

    .dropdown-menu {
      position: absolute;
      top: 32px;
      left: 0;
      background: white;
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px 0;
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      width: 200px;
      z-index: 20;
    }

    .dropdown-item {
      padding: 8px 16px;
      font-size: 14px;
      cursor: pointer;
    }

    .dropdown-item:hover {
      background: #f3f4f6;
    }

    .nav-link {
      font-size: 15px;
      cursor: pointer;
      padding-bottom: 4px;
      position: relative;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background: black;
      bottom: -6px;
      left: 0;
      border-radius: 2px;
    }

    .right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .btn {
      padding: 8px 16px;
      border: 1px solid #d1d5db;
      background: white;
      border-radius: 24px;
      cursor: pointer;
      font-size: 14px;
    }

    .icon-grid {
      font-size: 22px;
      cursor: pointer;
      padding: 6px;
      border-radius: 8px;
    }

    .icon-grid:hover {
      background: #f3f4f6;
    }
  `;

  render() {
    return html`
      <header>
        <div class="left">
          <div class="logo">Adobe</div>

          <div class="dropdown" @click="${this.toggleDropdown}">
            Creativity & Design ▼
            ${this.dropdownOpen
              ? html`
                  <div class="dropdown-menu">
                    <div class="dropdown-item">Photoshop</div>
                    <div class="dropdown-item">Illustrator</div>
                    <div class="dropdown-item">InDesign</div>
                    <div class="dropdown-item">Premiere Pro</div>
                    <div class="dropdown-item">After Effects</div>
                  </div>
                `
              : ''}
          </div>

          <nav class="menu">
            ${['Photoshop', 'Features', 'Mobile', 'Compare Plans', 'Free Trial Details'].map(
              label => html`
                <div
                  class="nav-link ${this.active === label ? 'active' : ''}"
                  @click="${() => (this.active = label)}"
                >
                  ${label}
                </div>
              `
            )}
          </nav>
        </div>

        <div class="right">
          <button class="btn">Go to Photoshop</button>
          <div class="icon-grid">⋮⋮⋮</div>
          <button class="btn">Sign in</button>
        </div>
      </header>
    `;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'adobe-header': AdobeHeader;
  }
}
function render() {
    throw new Error('Function not implemented.');
}


function toggleDropdown() {
    throw new Error('Function not implemented.');
}
/* Removed duplicate toggleDropdown function to avoid confusion with class method */

