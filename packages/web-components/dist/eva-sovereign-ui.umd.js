(function(n,u){typeof exports=="object"&&typeof module<"u"?u(exports,require("lit")):typeof define=="function"&&define.amd?define(["exports","lit"],u):(n=typeof globalThis<"u"?globalThis:n||self,u(n.EVASovereignUI={},n.Lit))})(this,function(n,u){"use strict";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=globalThis,te=Y.ShadowRoot&&(Y.ShadyCSS===void 0||Y.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,pe=Symbol(),fe=new WeakMap;let He=class{constructor(e,t,s){if(this._$cssResult$=!0,s!==pe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const s=t!==void 0&&t.length===1;s&&(e=fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&fe.set(t,e))}return e}toString(){return this.cssText}};const Ue=r=>new He(typeof r=="string"?r:r+"",void 0,pe),Fe=(r,e)=>{if(te)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const s=document.createElement("style"),i=Y.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=t.cssText,r.appendChild(s)}},me=te?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return Ue(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:qe,defineProperty:We,getOwnPropertyDescriptor:Ke,getOwnPropertyNames:Ge,getOwnPropertySymbols:Ye,getPrototypeOf:Xe}=Object,E=globalThis,be=E.trustedTypes,Ze=be?be.emptyScript:"",ie=E.reactiveElementPolyfillSupport,N=(r,e)=>r,X={toAttribute(r,e){switch(e){case Boolean:r=r?Ze:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},se=(r,e)=>!qe(r,e),ge={attribute:!0,type:String,converter:X,reflect:!1,useDefault:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),E.litPropertyMetadata??(E.litPropertyMetadata=new WeakMap);class z extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ge){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);i!==void 0&&We(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:o}=Ke(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:i,set(a){const c=i==null?void 0:i.call(this);o==null||o.call(this,a),this.requestUpdate(e,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ge}static _$Ei(){if(this.hasOwnProperty(N("elementProperties")))return;const e=Xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(N("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(N("properties"))){const t=this.properties,s=[...Ge(t),...Ye(t)];for(const i of s)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[s,i]of t)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const i of s)t.unshift(me(i))}else e!==void 0&&t.push(me(e));return t}static _$Eu(e,t){const s=t.attribute;return s===!1?void 0:typeof s=="string"?s:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostConnected)==null?void 0:s.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var s;return(s=t.hostDisconnected)==null?void 0:s.call(t)})}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){var o;const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(i!==void 0&&s.reflect===!0){const a=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:X).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(i):this.setAttribute(i,a),this._$Em=null}}_$AK(e,t){var o,a;const s=this.constructor,i=s._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const c=s.getPropertyOptions(i),l=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:X;this._$Em=i;const p=l.fromAttribute(t,c.type);this[i]=p??((a=this._$Ej)==null?void 0:a.get(i))??p,this._$Em=null}}requestUpdate(e,t,s){var i;if(e!==void 0){const o=this.constructor,a=this[e];if(s??(s=o.getPropertyOptions(e)),!((s.hasChanged??se)(a,t)||s.useDefault&&s.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(o._$Eu(e,s))))return;this.C(e,t,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:o},a){s&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,a]of i){const{wrapped:c}=a,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,a,l)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(s=this._$EO)==null||s.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}}z.elementStyles=[],z.shadowRootOptions={mode:"open"},z[N("elementProperties")]=new Map,z[N("finalized")]=new Map,ie==null||ie({ReactiveElement:z}),(E.reactiveElementVersions??(E.reactiveElementVersions=[])).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:se},Qe=(r=Je,e,t)=>{const{kind:s,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),s==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),s==="accessor"){const{name:a}=t;return{set(c){const l=e.get.call(this);e.set.call(this,c),this.requestUpdate(a,l,r)},init(c){return c!==void 0&&this.C(a,void 0,r,c),c}}}if(s==="setter"){const{name:a}=t;return function(c){const l=this[a];e.call(this,c),this.requestUpdate(a,l,r)}}throw Error("Unsupported decorator location: "+s)};function d(r){return(e,t)=>typeof t=="object"?Qe(r,e,t):((s,i,o)=>{const a=i.hasOwnProperty(o);return i.constructor.createProperty(o,s),a?Object.getOwnPropertyDescriptor(i,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function re(r){return d({...r,state:!0,attribute:!1})}const ve=new Map;function O(r,e){ve.set(r,e)}function ye(r,e,t,s){const i=ve.get(r);if(!i)return s??e;const o=i[t];return o?o[e]??s??e:s??e}function et(r,e,t){return new Intl.DateTimeFormat(e,t).format(r)}function tt(r,e,t){return new Intl.NumberFormat(e,t).format(r)}function it(r,e,t="CAD"){return new Intl.NumberFormat(e,{style:"currency",currency:t}).format(r)}O("eva-button",{"en-CA":{loading:"Loading...",submit:"Submit",cancel:"Cancel","sign-in":"Sign in"},"fr-CA":{loading:"Chargement...",submit:"Soumettre",cancel:"Annuler","sign-in":"Se connecter"}}),O("eva-alert",{"en-CA":{"dismiss-alert":"Dismiss alert","alert-dismissed":"Alert dismissed",success:"Success",info:"Information",warning:"Warning",danger:"Error"},"fr-CA":{"dismiss-alert":"Rejeter l'alerte","alert-dismissed":"Alerte rejetée",success:"Succès",info:"Information",warning:"Avertissement",danger:"Erreur"}}),O("eva-card",{"en-CA":{},"fr-CA":{}}),O("eva-modal",{"en-CA":{close:"Close modal","modal-closed":"Modal closed"},"fr-CA":{close:"Fermer le modal","modal-closed":"Modal fermé"}}),O("eva-chat-panel",{"en-CA":{title:"EVA Assistant",you:"You",eva:"EVA",system:"System",placeholder:"Type your message...","input-label":"Chat message input",send:"Send message","message-sent":"Message sent"},"fr-CA":{title:"Assistant EVA",you:"Vous",eva:"EVA",system:"Système",placeholder:"Tapez votre message...","input-label":"Saisie de message de chat",send:"Envoyer le message","message-sent":"Message envoyé"}});let $e="en-CA";const oe=new Set;function Ae(){return $e}function st(r){$e=r,oe.forEach(e=>e(r))}function _e(r){return oe.add(r),()=>oe.delete(r)}function rt(){return(navigator.language||"en-CA").toLowerCase().startsWith("fr")?"fr-CA":"en-CA"}class Ee{constructor(e){this.handleKeydown=t=>{var s,i;t.key==="Tab"&&(t.shiftKey?document.activeElement===this.firstFocusable&&(t.preventDefault(),(s=this.lastFocusable)==null||s.focus()):document.activeElement===this.lastFocusable&&(t.preventDefault(),(i=this.firstFocusable)==null||i.focus()))},this.container=e}activate(){var t;this.previouslyFocused=document.activeElement;const e=this.getFocusableElements();e.length!==0&&(this.firstFocusable=e[0],this.lastFocusable=e[e.length-1],(t=this.firstFocusable)==null||t.focus(),this.container.addEventListener("keydown",this.handleKeydown))}deactivate(){var e;this.container.removeEventListener("keydown",this.handleKeydown),(e=this.previouslyFocused)==null||e.focus()}getFocusableElements(){return Array.from(this.container.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(t=>!t.hasAttribute("disabled")&&t.offsetParent!==null)}}class we{constructor(){this.createLiveRegion()}createLiveRegion(){this.liveRegion||(this.liveRegion=document.createElement("div"),this.liveRegion.setAttribute("role","status"),this.liveRegion.setAttribute("aria-live","polite"),this.liveRegion.setAttribute("aria-atomic","true"),this.liveRegion.style.position="absolute",this.liveRegion.style.left="-10000px",this.liveRegion.style.width="1px",this.liveRegion.style.height="1px",this.liveRegion.style.overflow="hidden",document.body.appendChild(this.liveRegion))}announce(e,t="polite"){this.liveRegion&&(this.liveRegion.setAttribute("aria-live",t),this.liveRegion.textContent="",setTimeout(()=>{this.liveRegion&&(this.liveRegion.textContent=e)},100))}destroy(){this.liveRegion&&(document.body.removeChild(this.liveRegion),this.liveRegion=void 0)}}let ae;function xe(){return ae||(ae=new we),ae}function ot(r){if(r.hasAttribute("disabled")||r.getAttribute("tabindex")==="-1")return!1;const e=r.tagName.toLowerCase();return["a","button","input","select","textarea"].includes(e)?!0:r.hasAttribute("tabindex")&&r.getAttribute("tabindex")!=="-1"}function at(r,e){const t=Array.from(e.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(i=>!i.hasAttribute("disabled")&&i.offsetParent!==null),s=t.indexOf(r);return s===-1||s===t.length-1?null:t[s+1]??null}function nt(r,e){const t=Array.from(e.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(i=>!i.hasAttribute("disabled")&&i.offsetParent!==null),s=t.indexOf(r);return s<=0?null:t[s-1]??null}function lt(r,e,t={}){var p;const{vertical:s=!0,horizontal:i=!1,loop:o=!0}=t,a=Array.from(e.querySelectorAll('a[href], button:not([disabled]), [role="button"], [role="menuitem"], [role="option"]')).filter(b=>!b.hasAttribute("disabled")&&b.offsetParent!==null);if(a.length===0)return;const c=a.indexOf(document.activeElement);let l=c;s&&r.key==="ArrowDown"||i&&r.key==="ArrowRight"?(r.preventDefault(),l=c+1,l>=a.length&&(l=o?0:a.length-1)):s&&r.key==="ArrowUp"||i&&r.key==="ArrowLeft"?(r.preventDefault(),l=c-1,l<0&&(l=o?a.length-1:0)):r.key==="Home"?(r.preventDefault(),l=0):r.key==="End"&&(r.preventDefault(),l=a.length-1),(p=a[l])==null||p.focus()}var ct=Object.defineProperty,Z=(r,e,t,s)=>{for(var i=void 0,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=a(e,t,i)||i);return i&&ct(e,t,i),i};class y extends u.LitElement{constructor(){super(...arguments),this.locale=Ae(),this.ariaLabel=null,this.ariaDescribedBy=null,this.disabled=!1,this.componentName="eva-element"}connectedCallback(){super.connectedCallback(),this._localeUnsubscribe=_e(e=>{this.locale=e})}disconnectedCallback(){super.disconnectedCallback(),this._localeUnsubscribe&&this._localeUnsubscribe()}updated(e){super.updated(e),e.has("locale")&&this.setAttribute("lang",this.locale),e.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled))}t(e,t){return ye(this.componentName,e,this.locale,t)}getMessage(e,t){return this.t(e,t)}announce(e,t="polite"){xe().announce(e,t)}getToken(e){return`var(--gc-${e.replace(/\./g,"-")})`}handleKeyboard(e){console.log(`[Keyboard]: ${e.key}`)}isHighContrastMode(){return window.matchMedia("(prefers-contrast: high)").matches}prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}}Z([d({type:String,reflect:!0})],y.prototype,"locale"),Z([d({type:String,attribute:"aria-label"})],y.prototype,"ariaLabel"),Z([d({type:String,attribute:"aria-describedby"})],y.prototype,"ariaDescribedBy"),Z([d({type:Boolean,reflect:!0})],y.prototype,"disabled");var dt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,L=(r,e,t,s)=>{for(var i=s>1?void 0:s?ht(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&dt(e,t,i),i};n.EVAButton=class extends y{constructor(){super(...arguments),this.componentName="eva-button",this.variant="primary",this.type="button",this.size="medium",this.fullWidth=!1}render(){return u.html`
      <button
        type="${this.type}"
        ?disabled="${this.disabled}"
        aria-label="${this.ariaLabel||""}"
        aria-describedby="${this.ariaDescribedBy||""}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <slot></slot>
      </button>
    `}_handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.dispatchEvent(new CustomEvent("eva-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_handleKeydown(e){if(e.key==="Enter"||e.key===" "){if(this.disabled){e.preventDefault();return}e.key===" "&&e.preventDefault(),e.target.click()}}},n.EVAButton.styles=u.css`
    :host {
      display: inline-block;
    }

    :host([full-width]) {
      display: block;
    }

    button {
      /* Reset default button styles */
      margin: 0;
      border: none;
      background: none;
      font-family: Noto Sans, sans-serif;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition-property: background-color, border-color, color, box-shadow;
      transition-duration: 200ms;
      transition-timing-function: ease-in-out;

      /* WCAG 2.2 AAA: 44px minimum touch target */
      min-height: 44px;
      min-width: 44px;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;

      /* Focus outline (WCAG 2.2 AAA: 3px minimum) */
      outline-offset: 2px;
    }

    button:focus-visible {
      outline: 3px solid #26374A;
    }

    button:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    /* Full width */
    :host([full-width]) button {
      width: 100%;
    }

    /* Size variants */
    :host([size='small']) button {
      padding: 0.5rem 0.75rem;
      font-size: 0.875rem;
    }

    :host([size='large']) button {
      padding: 1rem 1.5rem;
      font-size: 1.25rem;
    }

    /* Variant: Supertask (most prominent) */
    :host([variant='supertask']) button {
      background-color: #af3c43;
      color: #ffffff;
      font-weight: 700;
      border: 2px solid #af3c43;
    }

    :host([variant='supertask']) button:hover:not(:disabled) {
      background-color: #8c2f35;
      border-color: #8c2f35;
    }

    :host([variant='supertask']) button:active:not(:disabled) {
      background-color: #6d2429;
      border-color: #6d2429;
    }

    /* Variant: Primary */
    :host([variant='primary']) button {
      background-color: #284162;
      color: #ffffff;
      border: 2px solid #284162;
    }

    :host([variant='primary']) button:hover:not(:disabled) {
      background-color: #1c2d46;
      border-color: #1c2d46;
    }

    :host([variant='primary']) button:active:not(:disabled) {
      background-color: #15202f;
      border-color: #15202f;
    }

    /* Variant: Secondary */
    :host([variant='secondary']) button {
      background-color: #ffffff;
      color: #284162;
      border: 2px solid #284162;
    }

    :host([variant='secondary']) button:hover:not(:disabled) {
      background-color: #f5f5f5;
    }

    :host([variant='secondary']) button:active:not(:disabled) {
      background-color: #e1e4e7;
    }

    /* Variant: Danger */
    :host([variant='danger']) button {
      background-color: #d3080c;
      color: #ffffff;
      border: 2px solid #d3080c;
    }

    :host([variant='danger']) button:hover:not(:disabled) {
      background-color: #a90609;
      border-color: #a90609;
    }

    :host([variant='danger']) button:active:not(:disabled) {
      background-color: #800507;
      border-color: #800507;
    }

    /* Variant: Link (looks like a hyperlink) */
    :host([variant='link']) button {
      background-color: transparent;
      color: #284162;
      border: none;
      text-decoration: underline;
      min-height: auto;
      min-width: auto;
      padding: 0.25rem 0.5rem;
    }

    :host([variant='link']) button:hover:not(:disabled) {
      color: #1c2d46;
    }

    /* Variant: Contextual Sign-in */
    :host([variant='contextual-signin']) button {
      background-color: #f5f5f5;
      color: #333333;
      border: 1px solid #666666;
    }

    :host([variant='contextual-signin']) button:hover:not(:disabled) {
      background-color: #e1e4e7;
    }

    /* High contrast mode support (Windows High Contrast) */
    @media (prefers-contrast: high) {
      button {
        border-width: 2px;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      button {
        transition: none;
      }
    }
  `,L([d({type:String,reflect:!0})],n.EVAButton.prototype,"variant",2),L([d({type:String})],n.EVAButton.prototype,"type",2),L([d({type:String,reflect:!0})],n.EVAButton.prototype,"size",2),L([d({type:Boolean,reflect:!0})],n.EVAButton.prototype,"fullWidth",2),n.EVAButton=L([$("eva-button")],n.EVAButton);var ut=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,ne=(r,e,t,s)=>{for(var i=s>1?void 0:s?pt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&ut(e,t,i),i};n.EVACard=class extends y{constructor(){super(...arguments),this.componentName="eva-card",this.variant="default",this.padding="medium"}render(){return u.html`
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
    `}},n.EVACard.styles=u.css`
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
  `,ne([d({type:String,reflect:!0})],n.EVACard.prototype,"variant",2),ne([d({type:String,reflect:!0})],n.EVACard.prototype,"padding",2),n.EVACard=ne([$("eva-card")],n.EVACard);var ft=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,B=(r,e,t,s)=>{for(var i=s>1?void 0:s?mt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&ft(e,t,i),i};n.EVAAlert=class extends y{constructor(){super(...arguments),this.componentName="eva-alert",this.type="info",this.dismissible=!1,this.visible=!0,this.live="polite"}render(){return u.html`
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
        ${this.dismissible?u.html`
              <button
                class="alert-dismiss"
                aria-label="${this.t("dismiss-alert","Dismiss alert")}"
                @click="${this._handleDismiss}"
              >
                ×
              </button>
            `:""}
      </div>
    `}_handleDismiss(){this.visible=!1,this.announce(this.t("alert-dismissed","Alert dismissed"),"polite"),this.dispatchEvent(new CustomEvent("eva-dismiss",{bubbles:!0,composed:!0}))}},n.EVAAlert.styles=u.css`
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
  `,B([d({type:String,reflect:!0})],n.EVAAlert.prototype,"type",2),B([d({type:Boolean,reflect:!0})],n.EVAAlert.prototype,"dismissible",2),B([d({type:Boolean,reflect:!0})],n.EVAAlert.prototype,"visible",2),B([d({type:String})],n.EVAAlert.prototype,"live",2),n.EVAAlert=B([$("eva-alert")],n.EVAAlert);var bt=Object.defineProperty,gt=Object.getOwnPropertyDescriptor,A=(r,e,t,s)=>{for(var i=s>1?void 0:s?gt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&bt(e,t,i),i};n.EVAInput=class extends y{constructor(){super(...arguments),this.componentName="eva-input",this.label="",this.type="text",this.value="",this.placeholder="",this.name="",this.required=!1,this.readonly=!1,this.error="",this.hint=""}render(){const e=`eva-input-${this.name||Math.random().toString(36).substr(2,9)}`,t=this.hint?`${e}-hint`:"",s=this.error?`${e}-error`:"";return u.html`
      <div class="input-wrapper">
        ${this.label?u.html`
              <label class="label" for="${e}">
                ${this.label}
                ${this.required?u.html`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?u.html`<div class="hint" id="${t}">${this.hint}</div>`:""}

        <div class="input-container">
          <input
            id="${e}"
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
            aria-describedby="${s||t||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @input="${this._handleInput}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
        </div>

        ${this.error?u.html`
              <div class="error-message" id="${s}" role="alert">
                ${this.error}
              </div>
            `:""}

        ${this.maxlength&&this.value?u.html`
              <div class="char-count">
                ${this.value.length} / ${this.maxlength}
              </div>
            `:""}
      </div>
    `}_handleInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("eva-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){}_handleBlur(){}},n.EVAInput.styles=u.css`
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
  `,A([d({type:String})],n.EVAInput.prototype,"label",2),A([d({type:String})],n.EVAInput.prototype,"type",2),A([d({type:String})],n.EVAInput.prototype,"value",2),A([d({type:String})],n.EVAInput.prototype,"placeholder",2),A([d({type:String})],n.EVAInput.prototype,"name",2),A([d({type:Boolean})],n.EVAInput.prototype,"required",2),A([d({type:Boolean})],n.EVAInput.prototype,"readonly",2),A([d({type:String})],n.EVAInput.prototype,"error",2),A([d({type:String})],n.EVAInput.prototype,"hint",2),A([d({type:Number})],n.EVAInput.prototype,"maxlength",2),n.EVAInput=A([$("eva-input")],n.EVAInput);var vt=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,w=(r,e,t,s)=>{for(var i=s>1?void 0:s?yt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&vt(e,t,i),i};n.EVASelect=class extends y{constructor(){super(...arguments),this.componentName="eva-select",this.label="",this.value="",this.placeholder="",this.name="",this.required=!1,this.error="",this.hint=""}render(){const e=`eva-select-${this.name||Math.random().toString(36).substr(2,9)}`,t=this.hint?`${e}-hint`:"",s=this.error?`${e}-error`:"";return u.html`
      <div class="select-wrapper">
        ${this.label?u.html`
              <label class="label" for="${e}">
                ${this.label}
                ${this.required?u.html`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?u.html`<div class="hint" id="${t}">${this.hint}</div>`:""}

        <div class="select-container">
          <select
            id="${e}"
            .value="${this.value}"
            name="${this.name}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            class="${this.error?"has-error":""}"
            aria-label="${this.ariaLabel||this.label}"
            aria-describedby="${s||t||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @change="${this._handleChange}"
          >
            ${this.placeholder?u.html`<option value="" disabled selected>${this.placeholder}</option>`:""}
            <slot></slot>
          </select>
          <div class="arrow-icon"></div>
        </div>

        ${this.error?u.html`
              <div class="error-message" id="${s}" role="alert">
                ${this.error}
              </div>
            `:""}
      </div>
    `}_handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}},n.EVASelect.styles=u.css`
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
  `,w([d({type:String})],n.EVASelect.prototype,"label",2),w([d({type:String})],n.EVASelect.prototype,"value",2),w([d({type:String})],n.EVASelect.prototype,"placeholder",2),w([d({type:String})],n.EVASelect.prototype,"name",2),w([d({type:Boolean})],n.EVASelect.prototype,"required",2),w([d({type:String})],n.EVASelect.prototype,"error",2),w([d({type:String})],n.EVASelect.prototype,"hint",2),n.EVASelect=w([$("eva-select")],n.EVASelect);var $t=Object.defineProperty,At=Object.getOwnPropertyDescriptor,j=(r,e,t,s)=>{for(var i=s>1?void 0:s?At(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&$t(e,t,i),i};n.EVACheckbox=class extends y{constructor(){super(...arguments),this.componentName="eva-checkbox",this.checked=!1,this.indeterminate=!1,this.value="",this.name=""}render(){const e=`eva-checkbox-${this.name||Math.random().toString(36).substr(2,9)}`;return u.html`
      <label class="checkbox-wrapper">
        <div class="checkbox-input">
          <input
            type="checkbox"
            id="${e}"
            .checked="${this.checked}"
            .indeterminate="${this.indeterminate}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            aria-label="${this.ariaLabel||""}"
            aria-checked="${this.indeterminate?"mixed":this.checked?"true":"false"}"
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
    `}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}},n.EVACheckbox.styles=u.css`
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
  `,j([d({type:Boolean,reflect:!0})],n.EVACheckbox.prototype,"checked",2),j([d({type:Boolean,reflect:!0})],n.EVACheckbox.prototype,"indeterminate",2),j([d({type:String})],n.EVACheckbox.prototype,"value",2),j([d({type:String})],n.EVACheckbox.prototype,"name",2),n.EVACheckbox=j([$("eva-checkbox")],n.EVACheckbox);var _t=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,H=(r,e,t,s)=>{for(var i=s>1?void 0:s?Et(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&_t(e,t,i),i};n.EVARadio=class extends y{constructor(){super(...arguments),this.componentName="eva-radio",this.checked=!1,this.value="",this.name="",this.required=!1}render(){const e=`eva-radio-${this.name}-${this.value||Math.random().toString(36).substr(2,9)}`;return u.html`
      <label class="radio-wrapper" for="${e}">
        <div class="radio-input">
          <input
            type="radio"
            id="${e}"
            .checked="${this.checked}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            aria-label="${this.ariaLabel||""}"
            aria-checked="${this.checked?"true":"false"}"
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
    `}_handleChange(e){const t=e.target;this.checked=t.checked,this.checked&&this.name&&document.querySelectorAll(`eva-radio[name="${this.name}"]`).forEach(i=>{i!==this&&(i.checked=!1)}),this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}},n.EVARadio.styles=u.css`
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
  `,H([d({type:Boolean,reflect:!0})],n.EVARadio.prototype,"checked",2),H([d({type:String})],n.EVARadio.prototype,"value",2),H([d({type:String})],n.EVARadio.prototype,"name",2),H([d({type:Boolean,reflect:!0})],n.EVARadio.prototype,"required",2),n.EVARadio=H([$("eva-radio")],n.EVARadio);var wt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,M=(r,e,t,s)=>{for(var i=s>1?void 0:s?xt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&wt(e,t,i),i};n.EVAModal=class extends y{constructor(){super(...arguments),this.componentName="eva-modal",this.open=!1,this.label="",this.noCloseOnBackdrop=!1,this.noCloseOnEscape=!1,this.size="medium",this._focusTrap=null,this._previousActiveElement=null,this._handleKeydown=e=>{e.key==="Escape"&&!this.noCloseOnEscape&&(e.preventDefault(),this.close())}}render(){return this.open?u.html`
      <div class="backdrop modal-backdrop" @click="${this._handleBackdropClick}"></div>
      <dialog
        class="modal"
        data-size="${this.size}"
        ?open="${this.open}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-header"
        aria-label="${this.label||this.ariaLabel||"Modal dialog"}"
      >
        <div class="modal-header" id="modal-header">
          <slot name="header"></slot>
          <button
            class="close-button modal-close"
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
      </dialog>
    `:u.html``}connectedCallback(){super.connectedCallback(),this.open&&this._setupFocusTrap()}disconnectedCallback(){super.disconnectedCallback(),this._teardownFocusTrap()}updated(e){e.has("open")&&(this.open?(this._setupFocusTrap(),this._previousActiveElement=document.activeElement,document.body.style.overflow="hidden",this.dispatchEvent(new CustomEvent("eva-open",{bubbles:!0,composed:!0}))):(this._teardownFocusTrap(),this._previousActiveElement&&this._previousActiveElement.focus(),document.body.style.overflow=""))}_setupFocusTrap(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector(".modal");e&&(this._focusTrap=new Ee(e),this._focusTrap.activate()),this.noCloseOnEscape||document.addEventListener("keydown",this._handleKeydown)}_teardownFocusTrap(){this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null),document.removeEventListener("keydown",this._handleKeydown)}_handleBackdropClick(e){!this.noCloseOnBackdrop&&e.target===e.currentTarget&&this.close()}close(){this.open=!1,this.dispatchEvent(new CustomEvent("eva-close",{bubbles:!0,composed:!0}))}},n.EVAModal.styles=u.css`
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
  `,M([d({type:Boolean,reflect:!0})],n.EVAModal.prototype,"open",2),M([d({type:String})],n.EVAModal.prototype,"label",2),M([d({type:Boolean})],n.EVAModal.prototype,"noCloseOnBackdrop",2),M([d({type:Boolean})],n.EVAModal.prototype,"noCloseOnEscape",2),M([d({type:String})],n.EVAModal.prototype,"size",2),n.EVAModal=M([$("eva-modal")],n.EVAModal);var St=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,x=(r,e,t,s)=>{for(var i=s>1?void 0:s?kt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&St(e,t,i),i};n.EVATabs=class extends y{constructor(){super(...arguments),this.componentName="eva-tabs",this.activeIndex=0,this.activeTab=0,this.orientation="horizontal",this._tabs=[]}render(){return this.activeTab!==this.activeIndex&&(this.activeIndex=this.activeTab),u.html`
      <div class="tabs-container">
        <div
          role="tablist"
          aria-label="${this.ariaLabel||"Tabs"}"
          aria-orientation="${this.orientation}"
          class="tabs-list"
        >
          ${this._tabs.map((e,t)=>u.html`
              <button
                role="tab"
                class="tab-button"
                id="tab-${t}"
                aria-selected="${t===this.activeIndex}"
                aria-controls="panel-${t}"
                tabindex="${t===this.activeIndex?0:-1}"
                @click="${()=>this._handleTabClick(t)}"
                @keydown="${s=>this._handleKeydown(s,t)}"
              >
                ${e.label}
              </button>
            `)}
        </div>
      </div>
      <div class="tab-panels">
        <slot></slot>
      </div>
    `}firstUpdated(){this._updateTabs()}_updateTabs(){var t;const e=(t=this.shadowRoot)==null?void 0:t.querySelector("slot");if(e){const s=e.assignedElements();this._tabs=s.filter(i=>i.tagName==="EVA-TAB"),this._tabs.forEach((i,o)=>{i.active=o===this.activeIndex,i.setAttribute("role","tabpanel"),i.setAttribute("id",`panel-${o}`),i.setAttribute("aria-labelledby",`tab-${o}`)}),this.requestUpdate()}}_handleTabClick(e){this.activeIndex=e,this.activeTab=e,this._updateTabs(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex},bubbles:!0,composed:!0}))}_handleKeydown(e,t){var o;let s=t;switch(e.key){case"ArrowLeft":case"ArrowUp":e.preventDefault(),s=t>0?t-1:this._tabs.length-1;break;case"ArrowRight":case"ArrowDown":e.preventDefault(),s=t<this._tabs.length-1?t+1:0;break;case"Home":e.preventDefault(),s=0;break;case"End":e.preventDefault(),s=this._tabs.length-1;break;default:return}this.activeIndex=s,this.activeTab=s,this._updateTabs();const i=(o=this.shadowRoot)==null?void 0:o.querySelector(`#tab-${s}`);i&&i.focus(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex,activeTab:this.activeTab},bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("activeTab")&&this.activeTab!==this.activeIndex&&(this.activeIndex=this.activeTab,this._updateTabs(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex,activeTab:this.activeTab},bubbles:!0,composed:!0}))),e.has("orientation")&&this.setAttribute("orientation",this.orientation)}},n.EVATabs.styles=u.css`
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
  `,x([d({type:Number})],n.EVATabs.prototype,"activeIndex",2),x([d({type:Number})],n.EVATabs.prototype,"activeTab",2),x([d({type:String})],n.EVATabs.prototype,"orientation",2),x([re()],n.EVATabs.prototype,"_tabs",2),n.EVATabs=x([$("eva-tabs")],n.EVATabs),n.EVATab=class extends y{constructor(){super(...arguments),this.componentName="eva-tab",this.label="",this.active=!1}render(){return u.html`<slot></slot>`}},n.EVATab.styles=u.css`
    :host {
      display: none;
    }

    :host([active]) {
      display: block;
    }
  `,x([d({type:String})],n.EVATab.prototype,"label",2),x([d({type:Boolean,reflect:!0})],n.EVATab.prototype,"active",2),n.EVATab=x([$("eva-tab")],n.EVATab);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=globalThis,J=U.trustedTypes,Se=J?J.createPolicy("lit-html",{createHTML:r=>r}):void 0,ke="$lit$",S=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+S,Ct=`<${Ce}>`,k=document,Q=()=>k.createComment(""),F=r=>r===null||typeof r!="object"&&typeof r!="function",le=Array.isArray,Vt=r=>le(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,q=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Pe=/>/g,C=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,Oe=/"/g,Me=/^(?:script|style|textarea|title)$/i,R=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),Re=new WeakMap,V=k.createTreeWalker(k,129);function Ie(r,e){if(!le(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(e):e}const Pt=(r,e)=>{const t=r.length-1,s=[];let i,o=e===2?"<svg>":e===3?"<math>":"",a=q;for(let c=0;c<t;c++){const l=r[c];let p,b,h=-1,m=0;for(;m<l.length&&(a.lastIndex=m,b=a.exec(l),b!==null);)m=a.lastIndex,a===q?b[1]==="!--"?a=Ve:b[1]!==void 0?a=Pe:b[2]!==void 0?(Me.test(b[2])&&(i=RegExp("</"+b[2],"g")),a=C):b[3]!==void 0&&(a=C):a===C?b[0]===">"?(a=i??q,h=-1):b[1]===void 0?h=-2:(h=a.lastIndex-b[2].length,p=b[1],a=b[3]===void 0?C:b[3]==='"'?Oe:Te):a===Oe||a===Te?a=C:a===Ve||a===Pe?a=q:(a=C,i=void 0);const f=a===C&&r[c+1].startsWith("/>")?" ":"";o+=a===q?l+Ct:h>=0?(s.push(p),l.slice(0,h)+ke+l.slice(h)+S+f):l+S+(h===-2?c:f)}return[Ie(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),s]};class W{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let o=0,a=0;const c=e.length-1,l=this.parts,[p,b]=Pt(e,t);if(this.el=W.createElement(p,s),V.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=V.nextNode())!==null&&l.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(ke)){const m=b[a++],f=i.getAttribute(h).split(S),v=/([.?@])?(.*)/.exec(m);l.push({type:1,index:o,name:v[2],strings:f,ctor:v[1]==="."?Ot:v[1]==="?"?Mt:v[1]==="@"?Rt:ee}),i.removeAttribute(h)}else h.startsWith(S)&&(l.push({type:6,index:o}),i.removeAttribute(h));if(Me.test(i.tagName)){const h=i.textContent.split(S),m=h.length-1;if(m>0){i.textContent=J?J.emptyScript:"";for(let f=0;f<m;f++)i.append(h[f],Q()),V.nextNode(),l.push({type:2,index:++o});i.append(h[m],Q())}}}else if(i.nodeType===8)if(i.data===Ce)l.push({type:2,index:o});else{let h=-1;for(;(h=i.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:o}),h+=S.length-1}o++}}static createElement(e,t){const s=k.createElement("template");return s.innerHTML=e,s}}function I(r,e,t=r,s){var a,c;if(e===R)return e;let i=s!==void 0?(a=t._$Co)==null?void 0:a[s]:t._$Cl;const o=F(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((c=i==null?void 0:i._$AO)==null||c.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,t,s)),s!==void 0?(t._$Co??(t._$Co=[]))[s]=i:t._$Cl=i),i!==void 0&&(e=I(r,i._$AS(r,e.values),i,s)),e}let Tt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=((e==null?void 0:e.creationScope)??k).importNode(t,!0);V.currentNode=i;let o=V.nextNode(),a=0,c=0,l=s[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new K(o,o.nextSibling,this,e):l.type===1?p=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(p=new It(o,this,e)),this._$AV.push(p),l=s[++c]}a!==(l==null?void 0:l.index)&&(o=V.nextNode(),a++)}return V.currentNode=k,i}p(e){let t=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}};class K{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),F(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==R&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Vt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&F(this._$AH)?this._$AA.nextSibling.data=e:this.T(k.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:s}=e,i=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=W.createElement(Ie(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const a=new Tt(i,this),c=a.u(this.options);a.p(t),this.T(c),this._$AH=a}}_$AC(e){let t=Re.get(e.strings);return t===void 0&&Re.set(e.strings,t=new W(e)),t}k(e){le(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const o of e)i===t.length?t.push(s=new K(this.O(Q()),this.O(Q()),this,this.options)):s=t[i],s._$AI(o),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,t);e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=g}_$AI(e,t=this,s,i){const o=this.strings;let a=!1;if(o===void 0)e=I(this,e,t,0),a=!F(e)||e!==this._$AH&&e!==R,a&&(this._$AH=e);else{const c=e;let l,p;for(e=o[0],l=0;l<o.length-1;l++)p=I(this,c[s+l],t,l),p===R&&(p=this._$AH[l]),a||(a=!F(p)||p!==this._$AH[l]),p===g?e=g:e!==g&&(e+=(p??"")+o[l+1]),this._$AH[l]=p}a&&!i&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ot extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class Mt extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Rt extends ee{constructor(e,t,s,i,o){super(e,t,s,i,o),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??g)===R)return;const s=this._$AH,i=e===g&&s!==g||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==g&&(s===g||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class It{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const Dt={I:K},de=U.litHtmlPolyfillSupport;de==null||de(W,K),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt={CHILD:2},zt=r=>(...e)=>({_$litDirective$:r,values:e});class Lt{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,s){this._$Ct=e,this._$AM=t,this._$Ci=s}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:Bt}=Dt,De=()=>document.createComment(""),G=(r,e,t)=>{var o;const s=r._$AA.parentNode,i=e===void 0?r._$AB:e._$AA;if(t===void 0){const a=s.insertBefore(De(),i),c=s.insertBefore(De(),i);t=new Bt(a,c,r,r.options)}else{const a=t._$AB.nextSibling,c=t._$AM,l=c!==r;if(l){let p;(o=t._$AQ)==null||o.call(t,r),t._$AM=r,t._$AP!==void 0&&(p=r._$AU)!==c._$AU&&t._$AP(p)}if(a!==i||l){let p=t._$AA;for(;p!==a;){const b=p.nextSibling;s.insertBefore(p,i),p=b}}}return t},P=(r,e,t=r)=>(r._$AI(e,t),r),jt={},Ht=(r,e=jt)=>r._$AH=e,Ut=r=>r._$AH,he=r=>{r._$AR(),r._$AA.remove()};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ne=(r,e,t)=>{const s=new Map;for(let i=e;i<=t;i++)s.set(r[i],i);return s},Ft=zt(class extends Lt{constructor(r){if(super(r),r.type!==Nt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,e,t){let s;t===void 0?t=e:e!==void 0&&(s=e);const i=[],o=[];let a=0;for(const c of r)i[a]=s?s(c,a):a,o[a]=t(c,a),a++;return{values:o,keys:i}}render(r,e,t){return this.dt(r,e,t).values}update(r,[e,t,s]){const i=Ut(r),{values:o,keys:a}=this.dt(e,t,s);if(!Array.isArray(i))return this.ut=a,o;const c=this.ut??(this.ut=[]),l=[];let p,b,h=0,m=i.length-1,f=0,v=o.length-1;for(;h<=m&&f<=v;)if(i[h]===null)h++;else if(i[m]===null)m--;else if(c[h]===a[f])l[f]=P(i[h],o[f]),h++,f++;else if(c[m]===a[v])l[v]=P(i[m],o[v]),m--,v--;else if(c[h]===a[v])l[v]=P(i[h],o[v]),G(r,l[v+1],i[h]),h++,v--;else if(c[m]===a[f])l[f]=P(i[m],o[f]),G(r,i[h],i[m]),m--,f++;else if(p===void 0&&(p=Ne(a,f,v),b=Ne(c,h,m)),p.has(c[h]))if(p.has(c[m])){const _=b.get(a[f]),ue=_!==void 0?i[_]:null;if(ue===null){const je=G(r,i[h]);P(je,o[f]),l[f]=je}else l[f]=P(ue,o[f]),G(r,i[h],ue),i[_]=null;f++}else he(i[m]),m--;else he(i[h]),h++;for(;f<=v;){const _=G(r,l[v+1]);P(_,o[f]),l[f++]=_}for(;h<=m;){const _=i[h++];_!==null&&he(_)}return this.ut=a,Ht(r,l),R}});var qt=Object.defineProperty,Wt=Object.getOwnPropertyDescriptor,D=(r,e,t,s)=>{for(var i=s>1?void 0:s?Wt(e,t):e,o=r.length-1,a;o>=0;o--)(a=r[o])&&(i=(s?a(e,t,i):a(i))||i);return s&&i&&qt(e,t,i),i};n.EVAChatPanel=class extends y{constructor(){super(...arguments),this.componentName="eva-chat-panel",this.greeting="",this.isTyping=!1,this.messages=[],this._inputValue="",this._messagesEndRef=null,this._setMessagesEndRef=e=>{this._messagesEndRef=e}}render(){return u.html`
      <div class="chat-header">
        ${this.t("eva-chat-panel.title","EVA Assistant")}
      </div>

      <div class="chat-messages" @scroll="${this._handleScroll}">
        ${this.greeting&&this.messages.length===0?u.html`<div class="greeting-message">${this.greeting}</div>`:""}

        ${Ft(this.messages,e=>e.id,e=>u.html`
            <div class="message ${e.sender}" role="article">
              <div class="message-bubble">${e.content}</div>
              <div class="message-meta">
                <span class="sender-label">
                  ${e.sender==="user"?this.t("eva-chat-panel.you","You"):e.sender==="assistant"?this.t("eva-chat-panel.eva","EVA"):this.t("eva-chat-panel.system","System")}
                </span>
                <span class="timestamp">${this._formatTime(e.timestamp)}</span>
              </div>
            </div>
          `)}

        ${this.isTyping?u.html`
              <div class="typing-indicator" role="status" aria-live="polite">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            `:""}

        <div style="height: 1px;" ${this._setMessagesEndRef}></div>
      </div>

      <div class="chat-input-container">
        <input
          type="text"
          class="chat-input"
          .value="${this._inputValue}"
          placeholder="${this.t("eva-chat-panel.placeholder","Type your message...")}"
          aria-label="${this.t("eva-chat-panel.input-label","Chat message input")}"
          @input="${this._handleInput}"
          @keydown="${this._handleKeydown}"
        />
        <button
          class="send-button"
          aria-label="${this.t("eva-chat-panel.send","Send message")}"
          ?disabled="${!this._inputValue.trim()||this.isTyping}"
          @click="${this._handleSend}"
        >
          ➤
        </button>
      </div>
    `}updated(e){(e.has("messages")||e.has("isTyping"))&&this._scrollToBottom()}_scrollToBottom(){this._messagesEndRef&&this._messagesEndRef.scrollIntoView({behavior:"smooth",block:"end"})}_handleScroll(){}_handleInput(e){const t=e.target;this._inputValue=t.value}_handleKeydown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._handleSend())}_handleSend(){if(!this._inputValue.trim()||this.isTyping)return;const e={id:`msg-${Date.now()}`,sender:"user",content:this._inputValue.trim(),timestamp:new Date,type:"text"};this.messages=[...this.messages,e],this._inputValue="",this.dispatchEvent(new CustomEvent("eva-message-send",{detail:{message:e},bubbles:!0,composed:!0})),this.announce(this.t("eva-chat-panel.message-sent","Message sent"),"polite")}_formatTime(e){return e.toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit"})}addMessage(e){const t={...e,id:`msg-${Date.now()}`,timestamp:new Date};this.messages=[...this.messages,t]}clearMessages(){this.messages=[]}},n.EVAChatPanel.styles=u.css`
    :host {
      display: flex;
      flex-direction: column;
      height: 600px;
      max-width: 800px;
      margin: 0 auto;
      border: 1px solid #e5e5e5;
      border-radius: 0.5rem;
      background-color: #ffffff;
      overflow: hidden;
    }

    .chat-header {
      padding: 1rem 1.5rem;
      background-color: #26374A;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.125rem;
      border-bottom: 2px solid #1C578A;
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      background-color: #f9f9f9;
    }

    .message {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 75%;
      animation: slideIn 200ms ease-out;
    }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .message.user {
      align-self: flex-end;
    }

    .message.assistant,
    .message.system {
      align-self: flex-start;
    }

    .message-bubble {
      padding: 1rem 1.25rem;
      border-radius: 1rem;
      line-height: 1.6;
      word-wrap: break-word;
    }

    .message.user .message-bubble {
      background-color: #284162;
      color: #ffffff;
      border-bottom-right-radius: 0.25rem;
    }

    .message.assistant .message-bubble {
      background-color: #ffffff;
      color: #333333;
      border: 1px solid #e5e5e5;
      border-bottom-left-radius: 0.25rem;
    }

    .message.system .message-bubble {
      background-color: #f0f7fb;
      color: #284162;
      border: 1px solid #cce7f3;
      font-style: italic;
      text-align: center;
      border-radius: 1rem;
    }

    .message-meta {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      color: #666666;
    }

    .message.user .message-meta {
      justify-content: flex-end;
    }

    .sender-label {
      font-weight: 700;
    }

    .typing-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 1.25rem;
      background-color: #ffffff;
      border: 1px solid #e5e5e5;
      border-radius: 1rem;
      max-width: 75px;
      animation: slideIn 200ms ease-out;
    }

    .typing-dot {
      width: 8px;
      height: 8px;
      background-color: #666666;
      border-radius: 50%;
      animation: typing 1.5s infinite;
    }

    .typing-dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .typing-dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes typing {
      0%, 60%, 100% {
        opacity: 0.3;
        transform: translateY(0);
      }
      30% {
        opacity: 1;
        transform: translateY(-8px);
      }
    }

    .chat-input-container {
      padding: 1rem 1.5rem;
      border-top: 1px solid #e5e5e5;
      background-color: #ffffff;
      display: flex;
      gap: 0.75rem;
      align-items: center;
    }

    .chat-input {
      flex: 1;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      font-family: Noto Sans, sans-serif;
      line-height: 1.5;
      color: #333333;
      background-color: #f9f9f9;
      border: 2px solid #e5e5e5;
      border-radius: 1.5rem;
      transition: border-color 200ms ease-in-out;
      min-height: 44px;
    }

    .chat-input:focus {
      outline: none;
      border-color: #284162;
      background-color: #ffffff;
    }

    .chat-input::placeholder {
      color: #999999;
    }

    .send-button {
      background-color: #284162;
      color: #ffffff;
      border: none;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 200ms ease-in-out;
      font-size: 1.25rem;
      flex-shrink: 0;
    }

    .send-button:hover:not(:disabled) {
      background-color: #1C578A;
    }

    .send-button:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .send-button:disabled {
      background-color: #cccccc;
      cursor: not-allowed;
    }

    .greeting-message {
      padding: 1.5rem;
      background-color: #f0f7fb;
      border: 1px solid #cce7f3;
      border-radius: 0.5rem;
      color: #284162;
      text-align: center;
      font-size: 1.125rem;
      line-height: 1.6;
    }

    /* Scrollbar styling */
    .chat-messages::-webkit-scrollbar {
      width: 8px;
    }

    .chat-messages::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    .chat-messages::-webkit-scrollbar-thumb {
      background: #cccccc;
      border-radius: 4px;
    }

    .chat-messages::-webkit-scrollbar-thumb:hover {
      background: #999999;
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .message,
      .typing-indicator {
        animation: none;
      }

      .typing-dot {
        animation: none;
        opacity: 0.6;
      }

      .chat-input,
      .send-button {
        transition: none;
      }
    }
  `,D([d({type:String})],n.EVAChatPanel.prototype,"greeting",2),D([d({type:Boolean})],n.EVAChatPanel.prototype,"isTyping",2),D([d({type:Array})],n.EVAChatPanel.prototype,"messages",2),D([re()],n.EVAChatPanel.prototype,"_inputValue",2),D([re()],n.EVAChatPanel.prototype,"_messagesEndRef",2),n.EVAChatPanel=D([$("eva-chat-panel")],n.EVAChatPanel);const ze={id:"canada-gc",name:"Government of Canada",colors:{fipRed:"#af3c43",linkBlue:"#284162",errorRed:"#d3080c",accentBlue:"#26374A",textPrimary:"#333333",textSecondary:"#666666",textDisabled:"#999999",textInverse:"#ffffff",backgroundPrimary:"#ffffff",backgroundSecondary:"#f5f5f5",backgroundTertiary:"#e1e4e7",successGreen:"#278400",warningYellow:"#ff9900",infoCyan:"#269abc",dangerRed:"#d3080c",focusOutline:"#26374A",hoverBackground:"#e8e8e8",activeBackground:"#d9d9d9"},typography:{fontFamilyHeadings:"Lato, sans-serif",fontFamilyBody:"Noto Sans, sans-serif",fontFamilyMono:"Courier New, monospace",fontWeightRegular:400,fontWeightBold:700,fontSizeXs:"0.75rem",fontSizeSm:"0.875rem",fontSizeBase:"1rem",fontSizeMd:"1.125rem",fontSizeLg:"1.25rem",fontSizeXl:"1.5rem",fontSize2xl:"2rem",fontSize3xl:"2.5rem",lineHeightTight:1.2,lineHeightNormal:1.5,lineHeightRelaxed:1.75,letterSpacingNormal:"0",letterSpacingWide:"0.025em"},spacing:{space0:"0",space1:"0.25rem",space2:"0.5rem",space3:"0.75rem",space4:"1rem",space5:"1.25rem",space6:"1.5rem",space8:"2rem",space10:"2.5rem",space12:"3rem",space16:"4rem",space20:"5rem"},shadows:{shadowSm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",shadowBase:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",shadowMd:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",shadowLg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",shadowXl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},breakpoints:{xs:"320px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},accessibility:{contrastRatioAAA:7,contrastRatioAA:4.5,touchTargetMin:"44px",focusOutlineWidth:"3px",focusOutlineStyle:"solid",focusOutlineOffset:"2px",transitionDuration:"200ms",transitionTimingFunction:"ease-in-out"},layout:{maxLineLength:"65ch",containerSm:"640px",containerMd:"768px",containerLg:"1024px",containerXl:"1280px",radiusNone:"0",radiusSm:"0.125rem",radiusBase:"0.25rem",radiusMd:"0.375rem",radiusLg:"0.5rem",radiusFull:"9999px",borderWidth0:"0",borderWidth1:"1px",borderWidth2:"2px",borderWidth4:"4px"}};function Le(r){const e=document.documentElement;Object.entries(r.colors).forEach(([t,s])=>{e.style.setProperty(`--gc-color-${T(t)}`,String(s))}),Object.entries(r.typography).forEach(([t,s])=>{e.style.setProperty(`--gc-typography-${T(t)}`,String(s))}),Object.entries(r.spacing).forEach(([t,s])=>{e.style.setProperty(`--gc-spacing-${T(t)}`,String(s))}),Object.entries(r.shadows).forEach(([t,s])=>{e.style.setProperty(`--gc-shadow-${T(t)}`,String(s))}),Object.entries(r.breakpoints).forEach(([t,s])=>{e.style.setProperty(`--gc-breakpoint-${T(t)}`,String(s))}),Object.entries(r.accessibility).forEach(([t,s])=>{e.style.setProperty(`--gc-a11y-${T(t)}`,String(s))}),Object.entries(r.layout).forEach(([t,s])=>{e.style.setProperty(`--gc-layout-${T(t)}`,String(s))})}function T(r){return r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function Be(){Le(ze)}typeof document<"u"&&Be(),n.EVAElement=y,n.FocusTrap=Ee,n.LiveRegionManager=we,n.applySovereignProfile=Le,n.formatCurrency=it,n.formatDate=et,n.formatNumber=tt,n.gcProfile=ze,n.getGlobalLocale=Ae,n.getLiveRegionManager=xe,n.getMessage=ye,n.getNextFocusable=at,n.getPreviousFocusable=nt,n.getSystemLocale=rt,n.handleArrowKeyNavigation=lt,n.initGCProfile=Be,n.isFocusable=ot,n.registerMessages=O,n.setGlobalLocale=st,n.subscribeToLocale=_e,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=eva-sovereign-ui.umd.js.map
