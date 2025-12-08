import{i as p,x as c}from"./lit-element-CawQJKOV.js";import{n as o,E as m,t as f}from"./EVAElement-Cekp2jMQ.js";var h=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=(d,r,l,s)=>{for(var e=s>1?void 0:s?u(r,l):r,a=d.length-1,n;a>=0;a--)(n=d[a])&&(e=(s?n(r,l,e):n(e))||e);return s&&e&&h(r,l,e),e};let t=class extends m{constructor(){super(...arguments),this.componentName="eva-alert",this.type="info",this.dismissible=!1,this.visible=!0,this.live="polite"}render(){return c`
      <div
        class="alert-container"
        role="alert"
        aria-live="${this.live}"
        aria-atomic="true"
      >
        <div class="alert-content">
          <div class="alert-title">
            <slot name="title"></slot>
          </div>
          <div class="alert-message">
            <slot></slot>
          </div>
        </div>
        ${this.dismissible?c`
              <button
                class="alert-dismiss"
                aria-label="${this.t("dismiss-alert","Dismiss alert")}"
                @click="${this._handleDismiss}"
              >
                ×
              </button>
            `:""}
      </div>
    `}_handleDismiss(){this.visible=!1,this.announce(this.t("alert-dismissed","Alert dismissed"),"polite"),this.dispatchEvent(new CustomEvent("eva-dismiss",{bubbles:!0,composed:!0}))}};t.styles=p`
    :host {
      display: block;
      margin: 1rem 0;
    }

    :host([visible='false']) {
      display: none;
    }

    .alert-container {
      display: flex;
      align-items: flex-start;
      padding: 1rem;
      border-left: 4px solid;
      border-radius: 0.25rem;
      position: relative;
    }

    .alert-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .alert-title {
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.5;
    }

    .alert-title:empty {
      display: none;
    }

    .alert-message {
      font-size: 1rem;
      line-height: 1.5;
    }

    .alert-dismiss {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.25rem;
      margin-left: 1rem;
      color: inherit;
      font-size: 1.25rem;
      line-height: 1;
      opacity: 0.7;
      transition: opacity 200ms ease-in-out;
      min-height: 44px;
      min-width: 44px;
    }

    .alert-dismiss:hover {
      opacity: 1;
    }

    .alert-dismiss:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    /* Type: Success */
    :host([type='success']) .alert-container {
      background-color: #d4edda;
      color: #155724;
      border-left-color: #278400;
    }

    /* Type: Info */
    :host([type='info']) .alert-container {
      background-color: #d1ecf1;
      color: #0c5460;
      border-left-color: #269abc;
    }

    /* Type: Warning */
    :host([type='warning']) .alert-container {
      background-color: #fff3cd;
      color: #856404;
      border-left-color: #ff9900;
    }

    /* Type: Danger */
    :host([type='danger']) .alert-container {
      background-color: #f8d7da;
      color: #721c24;
      border-left-color: #d3080c;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .alert-container {
        border: 2px solid currentColor;
        border-left-width: 4px;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .alert-dismiss {
        transition: none;
      }
    }
  `;i([o({type:String,reflect:!0})],t.prototype,"type",2);i([o({type:Boolean,reflect:!0})],t.prototype,"dismissible",2);i([o({type:Boolean,reflect:!0})],t.prototype,"visible",2);i([o({type:String})],t.prototype,"live",2);t=i([f("eva-alert")],t);
