import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('features-grid')
export class FeaturesGrid extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div style="display:flex;gap:28px;align-items:flex-start;flex-wrap:wrap">
        <div style="flex:1;min-width:320px">
          <h2 style="margin-top:0">Video editing</h2>
          <p style="color:var(--muted)">Professional multi-track editing, color grading, and advanced timeline tools — polished for pros and approachable for beginners.</p>

          <div class="grid" style="margin-top:18px">
            <div class="feature-card">
              <div class="feature-media"></div>
              <div>
                <div class="feature-title">Multi-track workspace</div>
                <div style="color:var(--muted)">Layer video, audio, graphics and effects.</div>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-media"></div>
              <div>
                <div class="feature-title">Motion templates</div>
                <div style="color:var(--muted)">Drag-and-drop animated packs and titles.</div>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-media"></div>
              <div>
                <div class="feature-title">Social formats</div>
                <div style="color:var(--muted)">Auto reframe for square, vertical & stories.</div>
              </div>
            </div>

            <div class="feature-card">
              <div class="feature-media"></div>
              <div>
                <div class="feature-title">Export & publish</div>
                <div style="color:var(--muted)">Presets for YouTube, Instagram, and more.</div>
              </div>
            </div>
          </div>
        </div>

        <div style="flex:0 0 420px">
          <h3 style="margin-top:0">Animation & motion graphics</h3>
          <div style="background:#0b0b12;border-radius:12px;padding:12px;height:260px;display:flex;align-items:center;justify-content:center">
            <div style="text-align:center;color:var(--muted)">
              <div style="font-weight:700;font-size:18px">Stylized motion presets</div>
              <div style="margin-top:8px">After Effects templates rendered quickly in the cloud.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
