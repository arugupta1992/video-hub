import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('clip-maker')
export class ClipMaker extends LitElement {
  @property({ type: Boolean }) isOpen = false;

  static styles = css`
    .overlay {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
    }
    .popup {
      height: 90%;
      background: white;
      border-radius: 5px;
      padding: 0px;
      display: flex;
      position: relative;
      overflow: hidden;
      font-family: Inter, sans-serif;
    }
    .popup video{
          width: 100%;
        height: 104%;
        margin: -10px -2px;
      }

    button.main-btn {
      padding: 12px 24px;
      background: #4f46e5;
      color: white;
      border: none;
      border-radius: 12px;
      font-size: 16px;
      cursor: pointer;
    }

    .close-btn {
      position: absolute;
      top: 3px;
      right: 6px;
      background: #e5e7eb;
      border: none;
      padding: 8px;
      border-radius: 50%;
      cursor: pointer;
    }

    .left, .right {
      width: 50%;
      padding: 24px;
      overflow-y: auto;
    }

    .upload-box {
      border: 2px dashed #cbd5e1;
      padding: 48px;
      text-align: center;
      border-radius: 16px;
      cursor: pointer;
      color: #475569;
    }

    .demo-thumb {
      width: 160px;
      border-radius: 16px;
      overflow: hidden;
      cursor: pointer;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }

    .right {
      background: #e0e7ff;
      border-radius: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .share-btn {
      position: absolute;
      bottom: 32px;
      padding: 16px 40px;
      font-size: 20px;
      background: #4f46e5;
      color: white;
      border-radius: 16px;
      cursor: pointer;
      border: none;
    }

    .preview-card {
      width: 160px;
      height: 280px;
      background: white;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      margin: 0 12px;
      position: relative;
    }

    .duration {
      position: absolute;
      top: 8px;
      left: 8px;
      background: rgba(0,0,0,0.7);
      color: white;
      padding: 4px 6px;
      border-radius: 6px;
      font-size: 12px;
    }
  `;

  render() {
    return html`
      ${this.isOpen
        ? html`
            <div class="overlay">
              <div class="popup">
                <video
                  autoplay
                  muted
                  loop
                  playsinline
                >
                  <source src="/videos/AV2.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          `
        : ''}
    `;
  }

  private _handleClose() {
    this.dispatchEvent(new CustomEvent('close-clip-maker', {
      bubbles: true,
      composed: true,
      detail:{
        isOpen:false
      }
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'clip-maker-popup': ClipMaker;
  }
}