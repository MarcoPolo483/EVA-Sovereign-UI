import{i as d,x as s}from"./lit-element-CawQJKOV.js";import{n as o,E as u,t as c}from"./EVAElement-Cekp2jMQ.js";var m=Object.defineProperty,g=Object.getOwnPropertyDescriptor,i=(t,r,n,l)=>{for(var a=l>1?void 0:l?g(r,n):r,h=t.length-1,p;h>=0;h--)(p=t[h])&&(a=(l?p(r,n,a):p(a))||a);return l&&a&&m(r,n,a),a};let e=class extends u{constructor(){super(...arguments),this.componentName="eva-input",this.label="",this.type="text",this.value="",this.placeholder="",this.name="",this.required=!1,this.readonly=!1,this.error="",this.hint=""}render(){const t=`eva-input-${this.name||Math.random().toString(36).substr(2,9)}`,r=this.hint?`${t}-hint`:"",n=this.error?`${t}-error`:"";return s`
      <div class="input-wrapper">
        ${this.label?s`
              <label class="label" for="${t}">
                ${this.label}
                ${this.required?s`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?s`<div class="hint" id="${r}">${this.hint}</div>`:""}

        <div class="input-container">
          <input
            id="${t}"
            type="${this.type}"
            .value="${this.value}"
            placeholder="${this.placeholder}"
            name="${this.name}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
            maxlength="${this.maxlength||""}"
            class="${this.error?"has-error":""}"
            aria-label="${this.ariaLabel||this.label}"
            aria-describedby="${n||r||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @input="${this._handleInput}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
        </div>

        ${this.error?s`
              <div class="error-message" id="${n}" role="alert">
                ${this.error}
              </div>
            `:""}

        ${this.maxlength&&this.value?s`
              <div class="char-count">
                ${this.value.length} / ${this.maxlength}
              </div>
            `:""}
      </div>
    `}_handleInput(t){const r=t.target;this.value=r.value,this.dispatchEvent(new CustomEvent("eva-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleChange(t){const r=t.target;this.value=r.value,this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){}_handleBlur(){}};e.styles=d`
    :host {
      display: block;
      margin-bottom: 1rem;
    }

    .input-wrapper {
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

    .input-container {
      position: relative;
    }

    input {
      width: 100%;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: Noto Sans, sans-serif;
      line-height: 1.5;
      color: #333333;
      background-color: #ffffff;
      border: 2px solid #666666;
      border-radius: 0.25rem;
      transition: border-color 200ms ease-in-out;
      min-height: 44px;
    }

    input:focus {
      outline: none;
      border-color: #284162;
      box-shadow: 0 0 0 3px rgba(40, 65, 98, 0.2);
    }

    input:disabled,
    input:read-only {
      background-color: #f5f5f5;
      color: #666666;
      cursor: not-allowed;
    }

    input::placeholder {
      color: #999999;
    }

    /* Error state */
    :host([error]) input,
    input.has-error {
      border-color: #d3080c;
    }

    :host([error]) input:focus,
    input.has-error:focus {
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

    .char-count {
      font-size: 0.875rem;
      color: #666666;
      text-align: right;
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      input {
        border-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      input {
        transition: none;
      }
    }
  `;i([o({type:String})],e.prototype,"label",2);i([o({type:String})],e.prototype,"type",2);i([o({type:String})],e.prototype,"value",2);i([o({type:String})],e.prototype,"placeholder",2);i([o({type:String})],e.prototype,"name",2);i([o({type:Boolean})],e.prototype,"required",2);i([o({type:Boolean})],e.prototype,"readonly",2);i([o({type:String})],e.prototype,"error",2);i([o({type:String})],e.prototype,"hint",2);i([o({type:Number})],e.prototype,"maxlength",2);e=i([c("eva-input")],e);
