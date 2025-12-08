import{i as p,x as c}from"./lit-element-CawQJKOV.js";import{n as d,E as h,t as u}from"./EVAElement-Cekp2jMQ.js";import{r as v}from"./state-B8ZcOztO.js";var f=Object.defineProperty,m=Object.getOwnPropertyDescriptor,r=(e,t,a,s)=>{for(var o=s>1?void 0:s?m(t,a):t,l=e.length-1,b;l>=0;l--)(b=e[l])&&(o=(s?b(t,a,o):b(o))||o);return s&&o&&f(t,a,o),o};let i=class extends h{constructor(){super(...arguments),this.componentName="eva-tabs",this.activeIndex=0,this._tabs=[]}render(){return c`
      <div class="tabs-container">
        <div
          role="tablist"
          aria-label="${this.ariaLabel||"Tabs"}"
          class="tabs-list"
        >
          ${this._tabs.map((e,t)=>c`
              <button
                role="tab"
                class="tab-button"
                id="tab-${t}"
                aria-selected="${t===this.activeIndex}"
                aria-controls="panel-${t}"
                tabindex="${t===this.activeIndex?0:-1}"
                @click="${()=>this._handleTabClick(t)}"
                @keydown="${a=>this._handleKeydown(a,t)}"
              >
                ${e.label}
              </button>
            `)}
        </div>
      </div>
      <div class="tab-panels">
        <slot></slot>
      </div>
    `}firstUpdated(){this._updateTabs()}_updateTabs(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(e){const a=e.assignedElements();this._tabs=a.filter(s=>s.tagName==="EVA-TAB"),this._tabs.forEach((s,o)=>{s.active=o===this.activeIndex,s.setAttribute("role","tabpanel"),s.setAttribute("id",`panel-${o}`),s.setAttribute("aria-labelledby",`tab-${o}`)}),this.requestUpdate()}}_handleTabClick(e){this.activeIndex=e,this._updateTabs(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex},bubbles:!0,composed:!0}))}_handleKeydown(e,t){var o;let a=t;switch(e.key){case"ArrowLeft":case"ArrowUp":e.preventDefault(),a=t>0?t-1:this._tabs.length-1;break;case"ArrowRight":case"ArrowDown":e.preventDefault(),a=t<this._tabs.length-1?t+1:0;break;case"Home":e.preventDefault(),a=0;break;case"End":e.preventDefault(),a=this._tabs.length-1;break;default:return}this.activeIndex=a,this._updateTabs();const s=(o=this.shadowRoot)==null?void 0:o.querySelector(`#tab-${a}`);s&&s.focus(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex},bubbles:!0,composed:!0}))}};i.styles=p`
    :host {
      display: block;
    }

    .tabs-container {
      border-bottom: 2px solid #e5e5e5;
    }

    .tabs-list {
      display: flex;
      gap: 0;
      list-style: none;
      margin: 0;
      padding: 0;
      overflow-x: auto;
      overflow-y: hidden;
    }

    .tab-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 1rem 1.5rem;
      font-size: 1rem;
      font-family: Noto Sans, sans-serif;
      color: #666666;
      border-bottom: 3px solid transparent;
      transition: all 200ms ease-in-out;
      white-space: nowrap;
      min-height: 44px;
    }

    .tab-button:hover {
      color: #333333;
      background-color: #f5f5f5;
    }

    .tab-button[aria-selected='true'] {
      color: #284162;
      border-bottom-color: #284162;
      font-weight: 700;
    }

    .tab-button:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: -3px;
    }

    .tab-panels {
      padding: 1.5rem 0;
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .tab-button {
        transition: none;
      }
    }
  `;r([d({type:Number})],i.prototype,"activeIndex",2);r([v()],i.prototype,"_tabs",2);i=r([u("eva-tabs")],i);let n=class extends h{constructor(){super(...arguments),this.componentName="eva-tab",this.label="",this.active=!1}render(){return c`<slot></slot>`}};n.styles=p`
    :host {
      display: none;
    }

    :host([active]) {
      display: block;
    }
  `;r([d({type:String})],n.prototype,"label",2);r([d({type:Boolean,reflect:!0})],n.prototype,"active",2);n=r([u("eva-tab")],n);
