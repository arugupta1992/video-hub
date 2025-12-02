import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import './hero-section.js';
import './intro-text-section.js';
import './quick-edits-grid.js';
import './ai-capabilities-stack.js';
import './clip-maker.js';
import './trim-video-modal.js';
import './timeline-section.js';
import './features-grid.js';
import './ai-tools.js';
import './collaboration-section.js';
import './templates-section.js';
import './cta-footer.js';
import './adobe-header.js';

@customElement('app-root')
export class AppRoot extends LitElement {
  @state() private clipMakerOpen = false;
  @state() private trimVideoModalOpen = false;
  
  static styles = css``;

  _escClose = (e: KeyboardEvent) => {
    if (e.key === 'Escape'){
      this.clipMakerOpen = false;
      this.trimVideoModalOpen = false;
    } 
  };
  
  connectedCallback() {
    super.connectedCallback();
    // ESC key support
    document.addEventListener('keydown', this._escClose);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._escClose);
  }
  render() {
    return html`
      <div>
         <adobe-header></adobe-header>
        <hero-section></hero-section>
        <intro-text-section></intro-text-section>
        <quick-edits-grid @edit-selected=${this._handleEditSelected} ></quick-edits-grid>
        <ai-capabilities-stack @ai-capability-selected=${this._handleAICapabilitySelected}></ai-capabilities-stack>
        <clip-maker .isOpen=${this.clipMakerOpen} @close-clip-maker=${this._handleCloseClipMaker}></clip-maker>
        <trim-video-modal .isOpen=${this.trimVideoModalOpen} @close-trim-video-modal=${this._handleCloseTrimeVideoModal}></trim-video-modal>
      </div>
    `;
  }

  private _handleAICapabilitySelected(event: CustomEvent) {
    this.clipMakerOpen = true;
    console.log('AI Capability selected:', event.detail);
  }

  private _handleEditSelected(event: CustomEvent) {
    if(event.detail.title === "Trim Video"){
      this.trimVideoModalOpen = true;
    }
    console.log('handleEditSelectedd:', event.detail);
  }

  private _handleCloseClipMaker(event: CustomEvent) {
    this.clipMakerOpen = false;
    console.log('AI Capability selected:', event.detail);
  }
  private _handleCloseTrimeVideoModal(event: CustomEvent) {
    this.trimVideoModalOpen = false;
    console.log('AI Capability selected:', event.detail);
  }
}
