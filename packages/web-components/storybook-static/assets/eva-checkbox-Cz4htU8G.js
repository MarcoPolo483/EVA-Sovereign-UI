import{i as l,x as p}from"./lit-element-CawQJKOV.js";import{n as a,E as d,t as b}from"./EVAElement-Cekp2jMQ.js";var x=Object.defineProperty,u=Object.getOwnPropertyDescriptor,s=(t,c,n,i)=>{for(var e=i>1?void 0:i?u(c,n):c,h=t.length-1,r;h>=0;h--)(r=t[h])&&(e=(i?r(c,n,e):r(e))||e);return i&&e&&x(c,n,e),e};let o=class extends d{constructor(){super(...arguments),this.componentName="eva-checkbox",this.checked=!1,this.value="",this.name=""}render(){const t=`eva-checkbox-${this.name||Math.random().toString(36).substr(2,9)}`;return p`
      <label class="checkbox-wrapper">
        <div class="checkbox-input">
          <input
            type="checkbox"
            id="${t}"
            .checked="${this.checked}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            aria-label="${this.ariaLabel||""}"
            @change="${this._handleChange}"
          />
          <div class="checkbox-box">
            <span class="checkbox-checkmark">✓</span>
          </div>
        </div>
        <span class="checkbox-label">
          <slot></slot>
        </span>
      </label>
    `}_handleChange(t){const c=t.target;this.checked=c.checked,this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}};o.styles=l`
    :host {
      display: inline-flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
      user-select: none;
      min-height: 44px;
    }

    :host([disabled]) {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-height: 44px;
    }

    .checkbox-input {
      position: relative;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    input[type='checkbox'] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
    }

    input[type='checkbox']:disabled {
      cursor: not-allowed;
    }

    .checkbox-box {
      width: 24px;
      height: 24px;
      border: 2px solid #666666;
      border-radius: 0.25rem;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 200ms ease-in-out;
      pointer-events: none;
    }

    input[type='checkbox']:checked + .checkbox-box {
      background-color: #284162;
      border-color: #284162;
    }

    input[type='checkbox']:focus-visible + .checkbox-box {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .checkbox-checkmark {
      display: none;
      width: 16px;
      height: 16px;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1;
    }

    input[type='checkbox']:checked + .checkbox-box .checkbox-checkmark {
      display: block;
    }

    .checkbox-label {
      font-size: 1rem;
      color: #333333;
      line-height: 1.5;
      display: flex;
      align-items: center;
      min-height: 24px;
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .checkbox-box {
        border-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .checkbox-box {
        transition: none;
      }
    }
  `;s([a({type:Boolean,reflect:!0})],o.prototype,"checked",2);s([a({type:String})],o.prototype,"value",2);s([a({type:String})],o.prototype,"name",2);o=s([b("eva-checkbox")],o);
