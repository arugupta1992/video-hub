import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

interface QuickEdit {
  title: string;
  description: string;
  videoUrl: string;
  category?: string;
}

@customElement('quick-edits-grid')
export class QuickEditsGrid extends LitElement {
  static styles = css`
    :host {
      display: block;
      background: #ffffff;
      padding: 35px 24px 35px;
    }
    
    .grid-container {
      max-width: 1400px;
      margin: 0 auto;
    }
    
    .section-header {
      text-align: center;
      margin-bottom: 60px;
    }
    
    .section-title {
      font-size: clamp(32px, 5vw, 48px);
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 16px 0;
    }
    
    .section-subtitle {
      font-size: clamp(16px, 2vw, 20px);
      color: #6B7280;
      margin: 0;
      font-weight: 400;
    }
    
    .edits-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      margin-bottom: 48px;
    }
    
    .edit-card {
      background: #ffffff;
      border-radius: 20px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      cursor: pointer;
      position: relative;
      border: 1px solid rgba(0, 0, 0, 0.06);
    }
    
    .edit-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    }
    
    .video-container {
      width: 100%;
      height: 280px;
      background: linear-gradient(135deg, #F3F4F6 0%, #E5E7EB 100%);
      position: relative;
      overflow: hidden;
    }
    
    .video-container img,
    .video-container video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .category-badge {
      position: absolute;
      top: 16px;
      left: 16px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
      color: #4A6EF5;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .card-content {
      padding: 24px;
    }
    
    .card-title {
      font-size: 22px;
      font-weight: 700;
      color: #1a1a1a;
      margin: 0 0 12px 0;
      line-height: 1.3;
    }
    
    .card-description {
      font-size: 16px;
      color: #6B7280;
      margin: 0;
      line-height: 1.6;
    }
    
    .play-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 64px;
      height: 64px;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      pointer-events: none;
    }
    
    .edit-card:hover .play-icon {
      opacity: 1;
    }
    
    .play-triangle {
      width: 0;
      height: 0;
      border-left: 20px solid #4A6EF5;
      border-top: 12px solid transparent;
      border-bottom: 12px solid transparent;
      margin-left: 4px;
    }
    
    @media (max-width: 768px) {
      :host {
        padding: 40px 20px 60px;
      }
      
      .edits-grid {
        grid-template-columns: 1fr;
        gap: 24px;
      }
      
      .section-header {
        margin-bottom: 40px;
      }
    }
    @media (min-width: 769px) and (max-width: 1200px) {
      .edits-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  `;

  private quickEdits: QuickEdit[] = [
    {
      title: 'Resize Video',
      description: 'Resize and crop your videos to fit any platform or aspect ratio.',
      videoUrl: '/videos/resize-fi.gif',
      // videoUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      //category: 'Quick Edit'
    },
    {
      title: 'Trim Video',
      description: 'Reduce clip length, remove unwanted sections, and speed up your workflow.',
      videoUrl: '/videos/trim.gif',
      // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      // category: 'Text & Titles'
    },
    {
      title: 'Merge Videos',
      description: 'Combine two or more videos into one cohesive file in seconds.',
      // videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      videoUrl: '/videos/merge.gif',
      //category: 'Quick Edit'
    },
    {
      title: 'Convert to GIF',
      description: 'Transform video clips into high-quality animated GIFs instantly.',
      videoUrl: '/videos/convert-gif.gif',
      //category: 'Export'
    }
  ];

  render() {
    return html`
      <div class="grid-container">
        <div class="section-header">
          <h2 class="section-title">Quick Edits, Powerful Results</h2>
          <p class="section-subtitle">
            From simple trims to advanced effects—all in a few clicks
          </p>
        </div>
        
        <div class="edits-grid">
          ${this.quickEdits.map(edit => this.renderEditCard(edit))}
        </div>
      </div>
    `;
  }

  private renderEditCard(edit: QuickEdit) {
    return html`
      <div class="edit-card" @click=${() => this._handleCardClick(edit.title)}>
        <div class="video-container">
          <img src="${edit.videoUrl}" alt="${edit.title}" />
          
        </div>
        <div class="card-content">
          <h3 class="card-title">${edit.title} <span style="float:right"><img src="/videos/AEL.png" style="width: 27px;max-height: 27px;"></span></h3>
          <p class="card-description">${edit.description}</p>
        </div>
      </div>
    `;
  }

  private _handleCardClick(title: string) {
    console.log(`Clicked on: ${title}`);
    // Dispatch custom event for parent component to handle
    this.dispatchEvent(new CustomEvent('edit-selected', {
      detail: { title },
      bubbles: true,
      composed: true
    }));
  }
}

