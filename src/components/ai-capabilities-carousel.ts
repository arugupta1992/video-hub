import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

interface AICapability {
  title: string;
  description: string;
  ctaText: string;
  demoImage: string;
  videoUrl?: string;
}

@customElement('ai-capabilities-carousel')
export class AICapabilitiesCarousel extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: linear-gradient(180deg, #F3F4FF 0%, #E8E9FA 100%);
      padding: 100px 24px;
    }
    
    .carousel-container {
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
    
    .carousel-wrapper {
      position: relative;
      overflow: hidden;
    }
    
    .carousel-track {
      display: flex;
      gap: 40px;
      transition: transform 0.5s ease-in-out;
    }
    
    .carousel-slide {
      min-width: 100%;
      flex-shrink: 0;
      display: flex;
      gap: 60px;
      align-items: center;
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 32px;
      padding: 60px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }
    
    .slide-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
      max-width: 500px;
    }
    
    .slide-title {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 700;
      color: #1a1a1a;
      margin: 0;
      line-height: 1.3;
    }
    
    .slide-description {
      font-size: clamp(16px, 2vw, 19px);
      color: #6B7280;
      margin: 0;
      line-height: 1.7;
    }
    
    .slide-cta {
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
    
    .slide-demo {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      padding-right: 40px;
    }
    
    .demo-visual {
      width: 100%;
      max-width: 650px;
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
      background: linear-gradient(135deg, #F8F9FB 0%, #E8EAF0 100%);
      position: relative;
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
    
    .carousel-controls {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 24px;
      margin-top: 48px;
    }
    
    .control-button {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: 1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .control-button:hover {
      background: #ffffff;
      transform: scale(1.05);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    }
    
    .control-button:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      transform: scale(1);
    }
    
    .arrow {
      width: 0;
      height: 0;
      border-style: solid;
    }
    
    .arrow-left {
      border-width: 8px 12px 8px 0;
      border-color: transparent #4A6EF5 transparent transparent;
      margin-right: 2px;
    }
    
    .arrow-right {
      border-width: 8px 0 8px 12px;
      border-color: transparent transparent transparent #4A6EF5;
      margin-left: 2px;
    }
    
    .carousel-indicators {
      display: flex;
      gap: 12px;
    }
    
    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(74, 110, 245, 0.3);
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .indicator.active {
      background: #4A6EF5;
      width: 32px;
      border-radius: 6px;
    }
    
    @media (max-width: 1024px) {
      .carousel-slide {
        flex-direction: column;
        padding: 40px;
        gap: 40px;
      }
      
      .slide-content {
        max-width: 100%;
        text-align: center;
        align-items: center;
      }
      
      .slide-demo {
        padding-right: 0;
      }
      
      .demo-visual {
        max-width: 100%;
      }
    }
    
    @media (max-width: 768px) {
      :host {
        padding: 60px 20px;
      }
      
      .section-title {
        margin-bottom: 48px;
      }
      
      .carousel-slide {
        padding: 32px 24px;
        gap: 32px;
      }
      
      .carousel-controls {
        margin-top: 32px;
        gap: 16px;
      }
    }
  `;

  @state()
  private currentSlide = 0;

  private capabilities: AICapability[] = [
    {
      title: 'Free Clip maker',
    //   description: 'Instantly surface the best bits of your footage with Highlights. AI analyzes your video and identifies the most engaging moments automatically.',
      description: 'Create trending videos in minutes with the Adobe Express Clip maker. Simply upload your video and watch as the Clip maker turns key moments into attention-grabbing short clips, ready for sharing on social media.',
      ctaText: 'Generate',
      demoImage: 'https://picsum.photos/800/600?random=1',
      videoUrl: '/videos/clip-maker.gif'
    },
    {
      title: 'Skip the endless scrubbing',
    //  description: 'Transform speech to text in seconds with AI-powered transcription. Customize styles, positioning, and timing with just a few clicks.',
        description: 'Instantly surface the best bits of your footage with Highlights. AI analyzes your video and identifies the most engaging moments automatically.',
        ctaText: 'Try now',
        demoImage: 'https://picsum.photos/800/600?random=2',
    //  videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
        videoUrl: '/videos/highlight.mp4'
    },
    {
      title: 'Extend video and audio clips with Generative Extend.',
      description: 'Seamlessly add frames to the beginning or end of a shot with generative AI in Adobe Premiere. Just click, drag, and extend the length of any clip',
      ctaText: 'Try now',
      demoImage: 'https://picsum.photos/800/600?random=3',
      videoUrl: '/videos/generative-extend.mp4'
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
      <div class="carousel-container">
        <h2 class="section-title">AI-powered tools to handle the hard edits</h2>
        
        <div class="carousel-wrapper">
          <div class="carousel-track" style="transform: translateX(calc(${-this.currentSlide * 100}% - ${this.currentSlide * 40}px))">
            ${this.capabilities.map(capability => this.renderSlide(capability))}
          </div>
        </div>
        
        <div class="carousel-controls">
          <button 
            class="control-button" 
            @click=${this._previousSlide}
            ?disabled=${this.currentSlide === 0}
            aria-label="Previous slide"
          >
            <div class="arrow arrow-left"></div>
          </button>
          
          <div class="carousel-indicators">
            ${this.capabilities.map((_, index) => html`
              <div 
                class="indicator ${index === this.currentSlide ? 'active' : ''}"
                @click=${() => this._goToSlide(index)}
                aria-label="Go to slide ${index + 1}"
              ></div>
            `)}
          </div>
          
          <button 
            class="control-button" 
            @click=${this._nextSlide}
            ?disabled=${this.currentSlide === this.capabilities.length - 1}
            aria-label="Next slide"
          >
            <div class="arrow arrow-right"></div>
          </button>
        </div>
      </div>
    `;
  }

  private renderSlide(capability: AICapability) {
    const isGif = capability.videoUrl?.endsWith('.gif');
    const mediaUrl = capability.videoUrl || capability.demoImage;
    
    return html`
      <div class="carousel-slide">
        <div class="slide-content">
          <h3 class="slide-title">${capability.title}</h3>
          <p class="slide-description">${capability.description}</p>
          <div class="slide-cta">
            <button class="cta-button" @click=${() => this._handleCTA(capability.title)}>
              ${capability.ctaText}
            </button>
          </div>
        </div>
        
        <div class="slide-demo">
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

  private _nextSlide() {
    if (this.currentSlide < this.capabilities.length - 1) {
      this.currentSlide++;
    }
  }

  private _previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    }
  }

  private _goToSlide(index: number) {
    this.currentSlide = index;
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

