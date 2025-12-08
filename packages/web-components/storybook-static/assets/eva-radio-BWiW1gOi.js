import{i as c,x as p}from"./lit-element-CawQJKOV.js";import{n as l,E as h,t as u}from"./EVAElement-Cekp2jMQ.js";var m=Object.defineProperty,f=Object.getOwnPropertyDescriptor,s=(t,r,o,e)=>{for(var i=e>1?void 0:e?f(r,o):r,n=t.length-1,d;n>=0;n--)(d=t[n])&&(i=(e?d(r,o,i):d(i))||i);return e&&i&&m(r,o,i),i};let a=class extends h{constructor(){super(...arguments),this.componentName="eva-radio",this.checked=!1,this.value="",this.name=""}render(){const t=`eva-radio-${this.name||Math.random().toString(36).substr(2,9)}`;return p`
      <label class="radio-wrapper">
        <div class="radio-input">
          <input
            type="radio"
            id="${t}"
            .checked="${this.checked}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            aria-label="${this.ariaLabel||""}"
            @change="${this._handleChange}"
          />
          <div class="radio-circle">
            <span class="radio-dot"></span>
          </div>
        </div>
        <span class="radio-label">
          <slot></slot>
        </span>
      </label>
    `}_handleChange(t){const r=t.target;this.checked=r.checked,this.checked&&this.name&&document.querySelectorAll(`eva-radio[name="${this.name}"]`).forEach(e=>{e!==this&&(e.checked=!1)}),this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}};a.styles=c`
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

    .radio-wrapper {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      min-height: 44px;
    }

    .radio-input {
      position: relative;
      width: 24px;
      height: 24px;
      flex-shrink: 0;
    }

    input[type='radio'] {
      position: absolute;
      opacity: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      cursor: pointer;
    }

    input[type='radio']:disabled {
      cursor: not-allowed;
    }

    .radio-circle {
      width: 24px;
      height: 24px;
      border: 2px solid #666666;
      border-radius: 50%;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 200ms ease-in-out;
      pointer-events: none;
    }

    input[type='radio']:checked + .radio-circle {
      border-color: #284162;
    }

    input[type='radio']:focus-visible + .radio-circle {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .radio-dot {
      display: none;
      width: 12px;
      height: 12px;
      background-color: #284162;
      border-radius: 50%;
    }

    input[type='radio']:checked + .radio-circle .radio-dot {
      display: block;
    }

    .radio-label {
      font-size: 1rem;
      color: #333333;
      line-height: 1.5;
      display: flex;
      align-items: center;
      min-height: 24px;
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .radio-circle {
        border-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .radio-circle {
        transition: none;
      }
    }
  `;s([l({type:Boolean,reflect:!0})],a.prototype,"checked",2);s([l({type:String})],a.prototype,"value",2);s([l({type:String})],a.prototype,"name",2);a=s([u("eva-radio")],a);
