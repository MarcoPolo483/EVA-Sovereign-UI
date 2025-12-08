import{i as l,x as c}from"./lit-element-CawQJKOV.js";import{n as p,E as m,t as f}from"./EVAElement-Cekp2jMQ.js";var g=Object.defineProperty,v=Object.getOwnPropertyDescriptor,n=(s,o,d,a)=>{for(var r=a>1?void 0:a?v(o,d):o,t=s.length-1,i;t>=0;t--)(i=s[t])&&(r=(a?i(o,d,r):i(r))||r);return a&&r&&g(o,d,r),r};let e=class extends m{constructor(){super(...arguments),this.componentName="eva-card",this.variant="default",this.padding="medium"}render(){return c`
      <div class="card-container" role="region">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-body">
          <slot></slot>
        </div>
        <div class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `}};e.styles=l`
    :host {
      display: block;
      background-color: #ffffff;
      color: #333333;
    }

    /* Variant: Default */
    :host([variant='default']) {
      border: none;
    }

    /* Variant: Bordered */
    :host([variant='bordered']) {
      border: 1px solid #e1e4e7;
      border-radius: 0.25rem;
    }

    /* Variant: Elevated (with shadow) */
    :host([variant='elevated']) {
      border: 1px solid #e1e4e7;
      border-radius: 0.25rem;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    }

    /* Padding variants */
    .card-container {
      display: flex;
      flex-direction: column;
    }

    :host([padding='none']) .card-container {
      padding: 0;
    }

    :host([padding='small']) .card-container {
      padding: 0.5rem;
    }

    :host([padding='medium']) .card-container {
      padding: 1rem;
    }

    :host([padding='large']) .card-container {
      padding: 1.5rem;
    }

    /* Header slot */
    .card-header {
      border-bottom: 1px solid #e1e4e7;
      padding-bottom: 0.75rem;
      margin-bottom: 0.75rem;
    }

    .card-header:empty {
      display: none;
    }

    /* Footer slot */
    .card-footer {
      border-top: 1px solid #e1e4e7;
      padding-top: 0.75rem;
      margin-top: 0.75rem;
    }

    .card-footer:empty {
      display: none;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      :host {
        border: 2px solid currentColor;
      }
    }
  `;n([p({type:String,reflect:!0})],e.prototype,"variant",2);n([p({type:String,reflect:!0})],e.prototype,"padding",2);e=n([f("eva-card")],e);
