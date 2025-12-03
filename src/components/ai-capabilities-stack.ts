import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

interface AICapability {
  title: string;
  description: string;
  ctaText: string;
  demoImage: string;
  videoUrl?: string;
  powereByText?: string;
  icon?: string;
}

@customElement('ai-capabilities-stack')
export class AICapabilitiesStack extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #ffffff;
      padding: 80px 24px;
    }
    
    .stack-container {
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .section-title {
      text-align: center;
      font-size: clamp(32px, 5vw, 52px);
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 80px 0;
      line-height: 1.2;
    }
    
    .capability-item {
      display: flex;
      gap: 80px;
      align-items: center;
      margin-bottom: 120px;
      padding: 0 40px;
    }
    
    .capability-item:last-child {
      margin-bottom: 0;
    }
    
    .capability-item:nth-child(even) {
      flex-direction: row-reverse;
    }
    
    .content-side {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 600px;
    }
    
    .capability-title {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      line-height: 1.3;
    }
    
    .capability-description {
      font-size: clamp(16px, 2vw, 19px);
      color: #6B7280;
      margin: 0;
      line-height: 1.7;
    }
    
    .capability-cta {
      margin-top: 12px;
    }
    
    .cta-button {
      background: #3b63fb;
      color: white;
      border: none;
      border-radius: 50px;
      padding: 16px 36px;
      font-size: 17px;
      font-weight: 600;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 8px 24px rgba(59, 99, 251, 0.3);
      transition: all 0.3s ease;
    }
    
    .cta-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(59, 99, 251, 0.4);
      background: #2952ea;
    }
    
    .visual-side {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    
    .demo-visual {
      width: 100%;
      max-width: 650px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
      background: linear-gradient(135deg, #F8F9FB 0%, #E8EAF0 100%);
      padding: 24px;
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    
    .demo-visual img,
    .demo-visual video {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 16px;
      background: #ffffff;
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    }
    
    @media (max-width: 1024px) {
      .capability-item {
        flex-direction: column !important;
        gap: 40px;
        padding: 0 20px;
        margin-bottom: 80px;
      }
      
      .content-side {
        max-width: 100%;
        text-align: center;
        align-items: center;
      }
      
      .demo-visual {
        max-width: 100%;
      }
    }
    .powered-by{
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;
      }
      .powered-by img{
        width: 24px;
      }
    @media (max-width: 768px) {
      :host {
        padding: 60px 20px;
      }
      
      .section-title {
        margin-bottom: 60px;
      }
      
      .capability-item {
        margin-bottom: 60px;
      }
    }
  `;

  private capabilities: AICapability[] = [
    {
      title: 'Free Clip maker',
      description: 'Create trending videos in minutes with the Adobe Express Clip maker. Simply upload your video and watch as the Clip maker turns key moments into attention-grabbing short clips, ready for sharing on social media.',
      ctaText: 'Generate',
      demoImage: 'https://picsum.photos/800/600?random=1',
      videoUrl: '/videos/clip-maker.gif',
      powereByText: 'Powered by Adobe Express',
      icon: '/videos/AEL.png'
    },
    {
      title: 'Skip the endless scrubbing',
      description: 'Instantly surface the best bits of your footage with Highlights. AI analyzes your video and identifies the most engaging moments automatically.',
      ctaText: 'Try now',
      demoImage: 'https://picsum.photos/800/600?random=2',
      videoUrl: '/videos/highlight.mp4',
      powereByText: 'Powered by Adobe Premiere Elements',
      icon: '/videos/premiereElement.png'
    },
    {
      title: 'Extend video and audio clips with Generative Extend.',
      description: 'Seamlessly add frames to the beginning or end of a shot with generative AI in Adobe Premiere. Just click, drag, and extend the length of any clip',
      ctaText: 'Try now',
      demoImage: 'https://picsum.photos/800/600?random=3',
      videoUrl: '/videos/generative-extend.mp4',
      powereByText: 'Powered by Adobe Premiere Pro',
      icon: '/videos/premierePro.jpg'
    },
    {
      title: 'Smart audio cleanup',
      description: 'Remove background noise, enhance voices, and balance audio levels automatically. Crystal clear sound in one click.',
      ctaText: 'Learn more',
      demoImage: 'https://picsum.photos/800/600?random=4',
      videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
    }
  ];

  render() {
    return html`
      <div class="stack-container">
        <h2 class="section-title">AI-powered tools to handle the hard edits</h2>
        
        ${this.capabilities.map(capability => this.renderCapabilityItem(capability))}
      </div>
    `;
  }

  private renderCapabilityItem(capability: AICapability) {
    const isGif = capability.videoUrl?.endsWith('.gif');
    const mediaUrl = capability.videoUrl || capability.demoImage;
    
    return html`
      <div class="capability-item">
        <div class="content-side">
          <h3 class="capability-title">${capability.title}</h3>
          <small class="powered-by"><img src="${capability.icon}" > <span>${capability.powereByText}</span> </span></small>
          <p class="capability-description">${capability.description}</p>
          <div class="capability-cta">
            <button class="cta-button" @click=${() => this._handleCTA(capability.title)}>
              ${capability.ctaText}
            </button>
          </div>
        </div>
        
        <div class="visual-side">
          <div class="demo-visual">
            ${isGif ? html`
              <img src="${mediaUrl}" alt="${capability.title} demo" />
            ` : capability.videoUrl ? html`
              <video autoplay muted loop playsinline>
                <source src="${capability.videoUrl}" type="video/mp4" />
              </video>
            ` : html`
              <img src="${capability.demoImage}" alt="${capability.title} demo" />
            `}
          </div>
        </div>
      </div>
    `;
  }

  private _handleCTA(title: string) {
    console.log(`CTA clicked for: ${title}`);
    this.dispatchEvent(new CustomEvent('ai-capability-selected', {
      detail: { title },
      bubbles: true,
      composed: true
    }));
  }
}

