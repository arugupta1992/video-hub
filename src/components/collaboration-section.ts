import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('collaboration-section')
export class CollaborationSection extends LitElement {
  static styles = css``;

  render() {
    return html`
      <div>
        <h2 style="margin-top:0">Collaboration & publishing</h2>
        <p style="color:var(--muted)">Share projects, comment on frames, and co-edit in real time with teammates across devices.</p>

        <div class="collab-map" style="margin-top:18px">
          <div style="flex:1">
            <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px">
              <div class="avatar">AG</div>
              <div>
                <div style="font-weight:700">Arushi Gupta</div>
                <div style="color:var(--muted)">Designer • Owner</div>
              </div>
            </div>

            <div style="background:#0b0b12;border-radius:12px;padding:16px">
              <div style="display:flex;gap:12px;align-items:center">
                <div style="width:74%;height:120px;background:#05050a;border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--muted)">Timeline with comments (preview)</div>
                <div style="flex:1">
                  <div style="font-weight:700">Comments</div>
                  <div style="color:var(--muted);margin-top:8px">• @shiv: Adjust color grade on 00:20–00:24<br>• @maria: Lower music at 00:41</div>
                </div>
              </div>
            </div>
          </div>

          <div style="flex:0 0 320px">
            <div style="background:linear-gradient(180deg,#081025,#0b0b14);padding:12px;border-radius:12px">
              <div style="font-weight:700">Live presence</div>
              <div style="margin-top:8px;display:flex;gap:8px;flex-wrap:wrap">
                <div class="avatar">SH</div>
                <div class="avatar">MJ</div>
                <div class="avatar">AL</div>
                <div class="avatar">PT</div>
              </div>
              <div style="margin-top:12px;color:var(--muted)">See who is currently editing, where they are in the timeline, and open their current selection.</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}
