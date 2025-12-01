import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('adobe-video-hub')
export class AdobeVideoHub extends LitElement {

  static styles = css`
    :host {
      display: block;
      padding: 0;
    }

    /* --- General Styling --- */
    .section {
      padding: 80px 40px;
      max-width: 1400px;
      margin: 0 auto;
      text-align: center;
    }
    .h1, .h2 {
      margin-top: 0;
      font-weight: 600;
    }

    /* --- Hero Section --- */
    .hero {
      background: linear-gradient(135deg, #1A1A1A 0%, #323232 100%);
      color: white;
      padding: 120px 40px;
    }
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 20px;
    }
    .hero p {
      font-size: 1.5rem;
      margin-bottom: 40px;
      opacity: 0.8;
    }
    .hero-visual {
      margin-top: 60px;
      overflow: hidden;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
    .hero-video-placeholder {
      width: 100%;
      height: 450px;
      background-color: #000;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      color: #999;
    }
    .cta-primary {
      background-color: #1473E6; /* Adobe Blue */
      color: white;
      border: none;
      padding: 15px 40px;
      font-size: 1.25rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s;
      text-decoration: none;
      display: inline-block;
      font-weight: 700;
    }
    .cta-primary:hover {
      background-color: #0d63cf;
    }
    .cta-secondary {
      display: block;
      margin-top: 20px;
      color: #999;
      font-size: 0.95rem;
      text-decoration: underline;
      cursor: pointer;
    }

    /* --- Quick Actions Section --- */
    .quick-actions-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      margin-top: 40px;
    }
    .action-card {
      background-color: white;
      padding: 30px;
      border-radius: 8px;
      text-align: left;
      transition: transform 0.2s, box-shadow 0.2s;
      border: 1px solid #e0e0e0;
    }
    .action-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
    }
    .action-icon {
      font-size: 2.5rem;
      color: #F89C1C; /* Adobe Orange */
      margin-bottom: 15px;
    }
    .action-card h3 {
      font-size: 1.5rem;
      margin-top: 0;
      margin-bottom: 10px;
      font-weight: 600;
    }
    .action-card p {
      font-size: 0.95rem;
      color: #555;
      margin-bottom: 20px;
    }
    .action-card a {
      color: #1473E6;
      text-decoration: none;
      font-weight: 600;
    }

    /* --- AI Powerhouse Section --- */
    .ai-showcase {
      background-color: #f0f0f0;
      padding: 100px 40px;
      text-align: left;
    }
    .ai-showcase-grid {
      display: flex;
      gap: 50px;
      align-items: center;
      margin-top: 60px;
    }
    .ai-feature-text {
      flex: 1;
    }
    .ai-feature-visual {
      flex: 1;
      height: 400px;
      background-color: #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      color: #777;
      text-align: center;
    }
    .ai-showcase h2 {
      font-size: 2.5rem;
      color: #1473E6;
    }

    /* --- Professional Connection Section --- */
    .pro-connect {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 50px;
      margin-top: 60px;
    }
    .pro-product-card {
      padding: 40px;
      background-color: white;
      border-radius: 8px;
      text-align: left;
      border-left: 5px solid;
    }
    .pro-pp { border-left-color: #E30737; } /* Premiere Pro Red */
    .pro-ae { border-left-color: #9D9D9D; } /* After Effects Gray */

    .pro-product-card h3 {
      font-size: 2rem;
      margin-bottom: 10px;
    }
    .pro-product-card ul {
      list-style: none;
      padding-left: 0;
    }
    .pro-product-card li {
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
      font-size: 1.1rem;
    }
    .pro-product-card li:before {
      content: '✓';
      position: absolute;
      left: 0;
      color: #1473E6;
    }
  `;

  private _renderHero() {
    // Placeholder for a sample video link (to be replaced)
    const sampleVideoUrl = "https://sample-media.com/quick-action-demo.mp4"; 

    return html`
      <div class="section hero">
        <h1>Video Editing, Powered by Adobe. Fast. Free. For Everyone.</h1>
        <p>Start with a simple trim, add AI-powered effects, or go pro—all with the world's leading video tools.</p>
        <a href="#upload-modal" class="cta-primary">Start Editing Now</a>
        <a href="#quick-actions" class="cta-secondary">Browse All Video Quick Actions</a>
        
        <div class="hero-visual">
          <div class="hero-video-placeholder">
            [Sample Video Loop: Resize/Add Text in Express]
          </div>
        </div>
        <p style="font-size: 0.9rem; margin-top: 30px;">Seamlessly integrated with Premiere Pro, After Effects, and Adobe Express.</p>
      </div>
    `;
  }

  private _renderQuickActions() {
    const quickActions = [
      { icon: '✂️', title: 'Trim / Cut Video', desc: 'Reduce clip length, remove unwanted sections, and speed up your workflow.' },
      { icon: '📐', title: 'Resize Video', desc: 'Instantly change aspect ratios for social media: 16:9, 9:16, 1:1, and more.' },
      { icon: '🔄', title: 'Convert Format', desc: 'Quickly change file formats between MP4, MOV, GIF, and others for any platform.' },
      { icon: '➕', title: 'Merge Clips', desc: 'Combine two or more videos into one cohesive file in seconds.' },
      { icon: '🔊', title: 'Audio Control', desc: 'Mute video or adjust volume levels without needing a separate app.' },
      { icon: '✍️', title: 'Add Text & Captions', desc: 'Overlay titles, subtitles, and calls-to-action directly on your footage.' },
    ];

    return html`
      <div id="quick-actions" class="section">
        <h2 class="h1">Zero Friction Editing: Video Quick Actions</h2>
        <p>High-utility, low-commitment tools to get the job done fast. Try them free!</p>
        <div class="quick-actions-grid">
          ${quickActions.map(action => html`
            <div class="action-card">
              <span class="action-icon">${action.icon}</span>
              <h3>${action.title}</h3>
              <p>${action.desc}</p>
              <a href="#quick-action-modal-${action.title.toLowerCase().replace(/\s|\//g, '-')}" class="cta-secondary">Try Now</a>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  private _renderAI() {
    return html`
      <div class="ai-showcase">
        <div class="section" style="text-align: left;">
          <h2 class="h1">The AI Powerhouse: Magic Tools & Smart Lenses</h2>
          <p style="font-size: 1.25rem; color: #555;">Discover the cutting edge of video creation with tools that automate the tedious and unlock the impossible.</p>
          
          <div class="ai-showcase-grid">
            <div class="ai-feature-text">
              <h3 style="font-size: 2rem;">Magic Crop & Reframe</h3>
              <p>Stop manually tracking subjects. Our AI automatically detects the most compelling action in your clip and reframes it perfectly for any vertical format, like TikTok or Reels.</p>
              <h3 style="font-size: 2rem; margin-top: 40px;">Generative Effects (Firefly)</h3>
              <p>Use simple text prompts to add complex, cinematic elements—like a floating purple smoke, a neon glow, or a rain effect—directly to your video clips.</p>
              <a href="#ai-suite" class="cta-primary" style="margin-top: 30px; font-size: 1rem;">Explore Adobe's AI Video Toolkit</a>
            </div>
            <div class="ai-feature-visual">
              [Visual: Split-screen Animation Mockup of BEFORE (Wide Shot) and AFTER (Perfectly Framed Vertical Video)]
            </div>
          </div>
        </div>
      </div>
    `;
  }

  private _renderProConnect() {
    return html`
      <div class="section">
        <h2 class="h1">Ready for the Director's Chair? Seamlessly Graduate to Pro.</h2>
        <p style="font-size: 1.25rem; color: #555;">Your journey doesn't end here. Easily transition your quick projects into the industry's most powerful editing suite.</p>
        
        <div class="pro-connect">
          <div class="pro-product-card pro-pp">
            <h3>Adobe Premiere Pro</h3>
            <p style="color: #777;">The industry standard for professional video and film editing.</p>
            <ul>
              <li>Unmatched multi-cam editing support.</li>
              <li>Advanced color grading and Lumetri panel.</li>
              <li>Integrated team collaboration features (Frame.io).</li>
            </ul>
            <a href="https://www.adobe.com/products/premiere.html" class="cta-primary" style="background-color: #E30737;">Go Pro with Premiere Pro</a>
          </div>
          
          <div class="pro-product-card pro-ae">
            <h3>Adobe After Effects</h3>
            <p style="color: #777;">Cinematic visual effects and motion graphics.</p>
            <ul>
              <li>Create custom animations and visual effects.</li>
              <li>Deep integration with 3D models and virtual camera.</li>
              <li>Dynamic Link to Premiere Pro for instant updates.</li>
            </ul>
            <a href="https://www.adobe.com/products/aftereffects.html" class="cta-primary" style="background-color: #9D9D9D;">Explore After Effects</a>
          </div>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      ${this._renderHero()}
      ${this._renderQuickActions()}
      ${this._renderAI()}
      ${this._renderProConnect()}
      
      `;
  }
}