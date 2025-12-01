import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('templates-section')
export class TemplatesSection extends LitElement {
  static styles = css``;

  render() {
    const demos = [
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4', title:'Promo 1' },
      { src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4', title:'Social Reel' },
      { src: 'https://picsum.photos/seed/1/400/240', title:'Interview Clip' },
      { src: 'https://picsum.photos/seed/2/400/240', title:'Cinematic Opener' },
      { src: 'https://picsum.photos/seed/3/400/240', title:'Animated Title' },
      { src: 'https://picsum.photos/seed/4/400/240', title:'Product Ad' }
    ];

    return html`
      <div>
        <h2 style="margin-top:0">Templates</h2>
        <p style="color:var(--muted)">Browse professionally designed templates for ads, social, promos, and intros. Hover to preview.</p>

        <div class="template-grid" style="margin-top:18px">
          ${demos.map(d => html`
            <div class="template-card" @click=${()=>this._open(d.src)}>
              ${d.src.endsWith('.mp4') ? html`<video src="${d.src}" autoplay muted loop playsinline></video>` : html`<img src="${d.src}" alt="${d.title}" style="width:100%;height:100%;object-fit:cover" />`}
              <div style="position:absolute;left:12px;bottom:8px;color:#fff;font-weight:700;text-shadow:0 1px 8px rgba(0,0,0,0.6)">${d.title}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _open(src: string) {
    alert('Open template (demo): ' + src);
  }
}
