import{i as p,x as c}from"./lit-element-CawQJKOV.js";import{n,E as m,F as u,t as h}from"./EVAElement-Cekp2jMQ.js";var f=Object.defineProperty,v=Object.getOwnPropertyDescriptor,a=(e,o,r,i)=>{for(var t=i>1?void 0:i?v(o,r):o,l=e.length-1,d;l>=0;l--)(d=e[l])&&(t=(i?d(o,r,t):d(t))||t);return i&&t&&f(o,r,t),t};let s=class extends m{constructor(){super(...arguments),this.componentName="eva-modal",this.open=!1,this.closeOnBackdrop=!0,this.closeOnEscape=!0,this.size="medium",this._focusTrap=null,this._previousActiveElement=null,this._handleKeydown=e=>{e.key==="Escape"&&this.closeOnEscape&&(e.preventDefault(),this.close())}}render(){return this.open?c`
      <div class="backdrop" @click="${this._handleBackdropClick}"></div>
      <div
        class="modal"
        data-size="${this.size}"
        role="dialog"
        aria-modal="true"
        aria-label="${this.ariaLabel||"Modal dialog"}"
      >
        <div class="modal-header">
          <slot name="header"></slot>
          <button
            class="close-button"
            aria-label="${this.t("eva-modal.close","Close modal")}"
            @click="${this.close}"
          >
            ×
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
        <div class="modal-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `:c``}connectedCallback(){super.connectedCallback(),this.open&&this._setupFocusTrap()}disconnectedCallback(){super.disconnectedCallback(),this._teardownFocusTrap()}updated(e){e.has("open")&&(this.open?(this._setupFocusTrap(),this._previousActiveElement=document.activeElement,document.body.style.overflow="hidden"):(this._teardownFocusTrap(),this._previousActiveElement&&this._previousActiveElement.focus(),document.body.style.overflow=""))}_setupFocusTrap(){var o;const e=(o=this.shadowRoot)==null?void 0:o.querySelector(".modal");e&&(this._focusTrap=new u(e),this._focusTrap.activate()),this.closeOnEscape&&document.addEventListener("keydown",this._handleKeydown)}_teardownFocusTrap(){this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null),document.removeEventListener("keydown",this._handleKeydown)}_handleBackdropClick(e){this.closeOnBackdrop&&e.target===e.currentTarget&&this.close()}close(){this.open=!1,this.dispatchEvent(new CustomEvent("eva-close",{bubbles:!0,composed:!0}))}};s.styles=p`
    :host {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;
    }

    :host([open]) {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      animation: fadeIn 200ms ease-in-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .modal {
      position: relative;
      background-color: #ffffff;
      border-radius: 0.5rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
      max-height: 90vh;
      overflow-y: auto;
      animation: slideIn 200ms ease-in-out;
      z-index: 1001;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .modal[data-size='small'] {
      width: 90%;
      max-width: 400px;
    }

    .modal[data-size='medium'] {
      width: 90%;
      max-width: 600px;
    }

    .modal[data-size='large'] {
      width: 90%;
      max-width: 900px;
    }

    .modal-header {
      padding: 1.5rem;
      border-bottom: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
    }

    .modal-header ::slotted(h2) {
      margin: 0;
      font-size: 1.5rem;
      color: #333333;
    }

    .close-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.5rem;
      font-size: 1.5rem;
      color: #666666;
      line-height: 1;
      border-radius: 0.25rem;
      min-width: 44px;
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background-color 200ms ease-in-out;
    }

    .close-button:hover {
      background-color: #f5f5f5;
    }

    .close-button:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .modal-body {
      padding: 1.5rem;
      color: #333333;
      line-height: 1.6;
    }

    .modal-footer {
      padding: 1.5rem;
      border-top: 1px solid #e5e5e5;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1rem;
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .backdrop,
      .modal {
        animation: none;
      }
    }
  `;a([n({type:Boolean,reflect:!0})],s.prototype,"open",2);a([n({type:Boolean})],s.prototype,"closeOnBackdrop",2);a([n({type:Boolean})],s.prototype,"closeOnEscape",2);a([n({type:String})],s.prototype,"size",2);s=a([h("eva-modal")],s);
