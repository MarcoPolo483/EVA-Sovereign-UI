import{i as h,x as l}from"./lit-element-CawQJKOV.js";import{n as i,E as p,t as m}from"./EVAElement-Cekp2jMQ.js";var b=Object.defineProperty,u=Object.getOwnPropertyDescriptor,o=(r,t,a,n)=>{for(var s=n>1?void 0:n?u(t,a):t,c=r.length-1,d;c>=0;c--)(d=r[c])&&(s=(n?d(t,a,s):d(s))||s);return n&&s&&b(t,a,s),s};let e=class extends p{constructor(){super(...arguments),this.componentName="eva-select",this.label="",this.value="",this.placeholder="",this.name="",this.required=!1,this.error="",this.hint=""}render(){const r=`eva-select-${this.name||Math.random().toString(36).substr(2,9)}`,t=this.hint?`${r}-hint`:"",a=this.error?`${r}-error`:"";return l`
      <div class="select-wrapper">
        ${this.label?l`
              <label class="label" for="${r}">
                ${this.label}
                ${this.required?l`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?l`<div class="hint" id="${t}">${this.hint}</div>`:""}

        <div class="select-container">
          <select
            id="${r}"
            .value="${this.value}"
            name="${this.name}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            class="${this.error?"has-error":""}"
            aria-label="${this.ariaLabel||this.label}"
            aria-describedby="${a||t||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @change="${this._handleChange}"
          >
            ${this.placeholder?l`<option value="" disabled selected>${this.placeholder}</option>`:""}
            <slot></slot>
          </select>
          <div class="arrow-icon"></div>
        </div>

        ${this.error?l`
              <div class="error-message" id="${a}" role="alert">
                ${this.error}
              </div>
            `:""}
      </div>
    `}_handleChange(r){const t=r.target;this.value=t.value,this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}};e.styles=h`
    :host {
      display: block;
      margin-bottom: 1rem;
    }

    .select-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .label {
      font-weight: 700;
      font-size: 1rem;
      color: #333333;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .required-marker {
      color: #d3080c;
      font-weight: 700;
    }

    .select-container {
      position: relative;
    }

    select {
      width: 100%;
      padding: 0.75rem 2.5rem 0.75rem 1rem;
      font-size: 1rem;
      font-family: Noto Sans, sans-serif;
      line-height: 1.5;
      color: #333333;
      background-color: #ffffff;
      border: 2px solid #666666;
      border-radius: 0.25rem;
      cursor: pointer;
      transition: border-color 200ms ease-in-out;
      min-height: 44px;
      appearance: none;
    }

    select:focus {
      outline: none;
      border-color: #284162;
      box-shadow: 0 0 0 3px rgba(40, 65, 98, 0.2);
    }

    select:disabled {
      background-color: #f5f5f5;
      color: #666666;
      cursor: not-allowed;
    }

    /* Custom arrow icon */
    .arrow-icon {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 6px solid #333333;
    }

    select:disabled + .arrow-icon {
      border-top-color: #666666;
    }

    /* Error state */
    :host([error]) select,
    select.has-error {
      border-color: #d3080c;
    }

    :host([error]) select:focus,
    select.has-error:focus {
      border-color: #d3080c;
      box-shadow: 0 0 0 3px rgba(211, 8, 12, 0.2);
    }

    .hint {
      font-size: 0.875rem;
      color: #666666;
      line-height: 1.5;
    }

    .error-message {
      font-size: 0.875rem;
      color: #d3080c;
      font-weight: 700;
      line-height: 1.5;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .error-message::before {
      content: '⚠';
      font-size: 1rem;
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      select {
        border-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      select {
        transition: none;
      }
    }
  `;o([i({type:String})],e.prototype,"label",2);o([i({type:String})],e.prototype,"value",2);o([i({type:String})],e.prototype,"placeholder",2);o([i({type:String})],e.prototype,"name",2);o([i({type:Boolean})],e.prototype,"required",2);o([i({type:String})],e.prototype,"error",2);o([i({type:String})],e.prototype,"hint",2);e=o([m("eva-select")],e);
