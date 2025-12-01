import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hero-section')
export class HeroSection extends LitElement {
  static styles = css`
    :host { 
      display: block;
      background: linear-gradient(180deg, #E8F0FF 0%, #D4E3F7 100%);
      padding: 80px 24px 60px;
      text-align: center;
    }
    
    .hero-inner {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 48px;
    }
    
    .hero-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
    }
    
    h1 {
      font-size: clamp(48px, 7vw, 88px);
      line-height: 1.1;
      margin: 0;
      font-weight: 700;
      color: #1a1a1a;
      max-width: 900px;
    }
    
    .subtitle {
      font-size: clamp(18px, 2vw, 24px);
      color: #4a4a4a;
      margin: 0;
      font-weight: 400;
    }
    
    .cta-button {
      background: #3b63fb;
      color: white;
      border: none;
      border-radius: 50px;
      padding: 16px 40px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      box-shadow: 0 8px 24px rgba(59, 99, 251, 0.35);
      transition: all 0.3s ease;
      margin-top: 12px;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(59, 99, 251, 0.45);
      background: #2952ea;
    }
    
    .cta-button:active {
      transform: translateY(0);
    }
    
    .sparkle-icon {
      width: 20px;
      height: 20px;
    }
    
    .editor-mockup {
      width: 100%;
      max-width: 1100px;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      background: white;
    }
    
    .editor-header {
      background: linear-gradient(90deg, #00C4CC 0%, #7C3AED 100%);
      padding: 16px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .editor-logo {
      color: white;
      font-size: 28px;
      font-weight: 700;
      font-style: italic;
    }
    
    .editor-actions {
      display: flex;
      gap: 12px;
      align-items: center;
    }
    
    .avatar-circle {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: #D1D5DB;
      border: 2px solid white;
    }
    
    .add-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      border: 2px solid white;
      color: white;
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .share-button {
      background: white;
      border: none;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    
    .editor-body {
      background: #F5F5F5;
      padding: 0;
      min-height: 400px;
      display: flex;
    }
    
    .editor-sidebar {
      width: 180px;
      background: white;
      padding: 20px 0;
      border-right: 1px solid #E5E7EB;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .sidebar-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      color: #6B7280;
      font-size: 14px;
      padding: 0 20px;
    }
    
    .sidebar-item.active {
      color: #7C3AED;
    }
    
    .sidebar-icon {
      width: 32px;
      height: 32px;
      background: #E5E7EB;
      border-radius: 6px;
    }
    
    .editor-canvas {
      flex: 1;
      padding: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .video-preview {
      width: 100%;
      max-width: 600px;
      aspect-ratio: 16/9;
      background: #000;
      border-radius: 8px;
      overflow: hidden;
    }
    
    @media (max-width: 768px) {
      :host {
        padding: 60px 20px 40px;
      }
      
      .editor-mockup {
        border-radius: 12px;
      }
      
      .editor-sidebar {
        width: 120px;
      }
      
      .editor-canvas {
        padding: 20px;
      }
    }
  `;

  render() {
    return html`
      <div class="hero-inner">
        <div class="hero-content">
          <h1>
            Edit Faster.<br>
            Create Smarter.
          </h1>
          <p class="subtitle">Start with a simple trim, add AI-powered effects, or go pro—all with the world's leading video tools.</p>
          <button class="cta-button" @click=${this._openDemo}>
            
            Edit a video
          </button>
        </div>
        
        <!-- <div class="editor-mockup">
          <div class="editor-header">
            <div class="editor-logo">Canva</div>
            <div class="editor-actions">
              <div class="avatar-circle"></div>
              <div class="add-button">+</div>
              <button class="share-button">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M8 12L16 7V17L8 12Z" fill="currentColor"/>
                </svg>
              </button>
            </div>
          </div> -->
        <div class="editor-mockup">
          <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;">
            <source src="./videos/hero-marque.mp4" type="video/mp4" />
          </video>
        </div>

          <!-- <div class="editor-body">
            <div class="editor-sidebar">
              <div class="sidebar-item active">
                <div class="sidebar-icon"></div>
                <span>Design</span>
              </div>
              <div class="sidebar-item">
                <div class="sidebar-icon"></div>
                <span>Elements</span>
              </div>
              <div class="sidebar-item">
                <div class="sidebar-icon"></div>
                <span>Text</span>
              </div>
              <div class="sidebar-item">
                <div class="sidebar-icon"></div>
                <span>Brand</span>
              </div>
              <div class="sidebar-item">
                <div class="sidebar-icon"></div>
                <span>Uploads</span>
              </div>
            </div>
            <div class="editor-canvas">
              <div class="video-preview">
                <video autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover;">
                  <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    `;
  }

  _openDemo() {
    const ev = new CustomEvent('open-demo', { bubbles: true, composed: true });
    this.dispatchEvent(ev);
    alert('Demo editor: (in production) — placeholder action');
  }

  _openTour() {
    alert('Video tour: placeholder action');
  }
}
