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
      width: 90%;
      height: 90%;
      background: white;
      border-radius: 24px;
      padding: 24px;
      display: flex;
      position: relative;
      overflow: hidden;
      font-family: Inter, sans-serif;
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
                <button class="close-btn" @click="${this._handleClose}">✕</button>

                <!-- Left section -->
                <div class="left">
                  <h1 style="font-size: 28px; font-weight: 600;">Clip maker</h1>
                  <p style="margin-top: 8px; color: #475569;">
                    Quickly turn a video into multiple clips, ready to share on social media.
                  </p>

                  <div style="margin-top: 16px; background: #eef2ff; padding: 12px 16px; border-radius: 12px; color:#4f46e5;">
                    At this time, upload videos in English with speech.
                  </div>

                  <div class="upload-box" style="margin-top: 24px;">
                    <div style="font-size: 24px; margin-bottom: 8px;">⬆️</div>
                    Drag & drop video or <span style="color:#4f46e5; cursor:pointer;">browse</span>
                    <div style="font-size: 12px; margin-top: 4px; color:#94a3b8;">Up to 1GB • 1–2 hours</div>
                  </div>

                  <div style="margin-top: 24px; display:flex; align-items:center; justify-content:space-between;">
                    <select style="padding:8px 12px; border-radius:12px;">
                      <option>Reel / Story</option>
                      <option>Square</option>
                      <option>Landscape</option>
                    </select>

                    <label><input type="checkbox" /> Add captions</label>
                  </div>

                  <button style="margin-top:24px; width:100%; padding:12px; opacity:0.6; border-radius:12px; border:none; background:#4f46e5; color:white; cursor:not-allowed;">
                    Generate clips
                  </button>
                </div>

                <!-- Right section -->
                <div class="right">
                  <div style="display:flex;background-image:url(./videos/clip-maker-hero.webp);width: 100%;height: 100%; background-size:cover;" >
                  </div>

                  <button class="share-btn">Share</button>
                </div>
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