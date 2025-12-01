import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('ai-tools')
export class AiTools extends LitElement {
  static styles = css``;

  render() {
    const tools = [
      { id: 'smart-cut', title: 'Smart Cut', desc: 'Automatically removes filler words and silences.' },
      { id: 'audio-enhance', title: 'Audio Enhance', desc: 'Denoise, equalize & normalize audio tracks.' },
      { id: 'auto-caption', title: 'Auto Captions', desc: 'Speech-to-text captions in multiple languages.' },
      { id: 'color-match', title: 'Auto Color Match', desc: 'Match tones across shots.' }
    ];

    return html`
      <div>
        <h2 style="margin-top:0">AI tools</h2>
        <p style="color:var(--muted)">Smart features that speed up editing: use AI to reduce manual work and focus on creativity.</p>
        <div class="ai-grid" style="margin-top:18px">
          ${tools.map(t => html`
            <div class="ai-card" tabindex="0" @click=${() => this._preview(t.id)}>
              <div style="font-weight:700;margin-bottom:8px">${t.title}</div>
              <div style="color:var(--muted);font-size:13px">${t.desc}</div>
              <div style="margin-top:12px"><button class="btn btn-ghost" @click=${(e:Event)=>{ e.stopPropagation(); this._apply(t.id)}}>Try this</button></div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  _preview(id: string) {
    alert(`Previewing AI tool: ${id}`);
  }

  _apply(id: string) {
    alert(`Applying AI tool (demo): ${id}`);
  }
}
