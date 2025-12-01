import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('timeline-section')
export class TimelineSection extends LitElement {
  static styles = css``;

  @state() playTime = 0;
  videoEl: HTMLVideoElement | null = null;

  firstUpdated() {
    this.videoEl = this.renderRoot.querySelector('#demoVideo') as HTMLVideoElement;
    if (this.videoEl) {
      this.videoEl.addEventListener('timeupdate', () => {
        this.playTime = this.videoEl!.currentTime;
        this.requestUpdate();
      });
    }
  }

  render() {
    const samples = [
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4',
      'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/bee.mp4'
    ];
    return html`
      <div class="timeline-wrap">
        <div class="timeline-card">
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <h3 style="margin:0">Interactive Timeline</h3>
            <div style="color:var(--muted);font-size:13px">Try scrubbing or trimming</div>
          </div>

          <div class="video-player" part="video-player">
            <video id="demoVideo" src="${samples[0]}" controls playsinline style="width:100%;height:100%;object-fit:cover;border-radius:8px"></video>
            <div style="position:absolute;left:12px;bottom:12px;color:var(--muted);font-size:13px;background:rgba(0,0,0,0.35);padding:6px;border-radius:8px;">
              ${this._formatTime(this.playTime)} / ${this._formatTime(this.videoEl?.duration || 0)}
            </div>
          </div>

          <div class="timeline-controls">
            <input class="range" type="range" min="0" max=${this.videoEl?.duration || 100} step="0.01" @input=${this._onSeek} />
            <button class="btn" @click=${this._playPause}>Play/Pause</button>
          </div>

          <div class="thumbnail-track" role="list">
            ${samples.map(s => html`<div class="thumb" role="listitem"><img src="https://picsum.photos/seed/${encodeURIComponent(s)}/200/120" style="width:100%;height:100%;object-fit:cover" alt="thumb"/></div>`)}
          </div>
        </div>

        <div style="flex:0 0 360px">
          <div class="feature-card">
            <div class="feature-media"></div>
            <div>
              <div class="feature-title">Quick Trim</div>
              <div style="color:var(--muted)">Drag the range to scrub; click Play to preview. Export trims in a single click in the editor.</div>
            </div>
          </div>

          <div style="height:18px"></div>

          <div class="feature-card">
            <div class="feature-media"></div>
            <div>
              <div class="feature-title">Auto Transitions</div>
              <div style="color:var(--muted)">Smart transition suggestions between beats or scene changes.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  _onSeek(e: Event) {
    const input = e.target as HTMLInputElement;
    const t = parseFloat(input.value);
    if (this.videoEl) {
      this.videoEl.currentTime = t;
    }
  }

  _playPause() {
    if (!this.videoEl) return;
    if (this.videoEl.paused) this.videoEl.play();
    else this.videoEl.pause();
  }

  _formatTime(s = 0) {
    if (!isFinite(s) || s === 0) return '0:00';
    const mins = Math.floor(s / 60);
    const secs = Math.floor(s % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  }
}
