import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('cta-footer')
export class CtaFooter extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div style="display:flex;flex-direction:column;gap:16px">
        <div class="cta-hero">
          <div>
            <div style="font-weight:800;font-size:20px">Ready to make something great?</div>
            <div style="color:var(--muted)">Start a free trial or sign in to your Creative Cloud account to sync your projects.</div>
          </div>
          <div>
            <button class="btn btn-primary" @click=${()=>alert('Start trial (demo)')}>Start free trial</button>
            <button class="btn btn-ghost" style="margin-left:8px" @click=${()=>alert('Contact sales (demo)')}>Contact sales</button>
          </div>
        </div>

        <div class="footer">
          <div>© ${new Date().getFullYear()} Adobe — Demo</div>
          <div style="display:flex;gap:18px">
            <a style="color:var(--muted);text-decoration:none">Docs</a>
            <a style="color:var(--muted);text-decoration:none">Support</a>
            <a style="color:var(--muted);text-decoration:none">Community</a>
          </div>
        </div>
      </div>
    `;
  }
}
