!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).EVASovereignUI={})}(this,function(e){"use strict";var t;const i=globalThis,s=i.ShadowRoot&&(void 0===i.ShadyCSS||i.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,o=Symbol(),n=new WeakMap;let a=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==o)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}};const r=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new a(i,e,o)},l=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new a("string"==typeof e?e:e+"",void 0,o))(t)})(e):e,{is:d,defineProperty:c,getOwnPropertyDescriptor:h,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:m}=Object,g=globalThis,b=g.trustedTypes,f=b?b.emptyScript:"",v=g.reactiveElementPolyfillSupport,y=(e,t)=>e,x={toAttribute(e,t){switch(t){case Boolean:e=e?f:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(s){i=null}}return i}},A=(e,t)=>!d(e,t),_={attribute:!0,type:String,converter:x,reflect:!1,useDefault:!1,hasChanged:A};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),g.litPropertyMetadata??(g.litPropertyMetadata=new WeakMap);let $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=_){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:o}=h(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const n=null==s?void 0:s.call(this);null==o||o.call(this,t),this.requestUpdate(e,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??_}static _$Ei(){if(this.hasOwnProperty(y("elementProperties")))return;const e=m(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(y("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const e=this._$Eu(t,i);void 0!==e&&this._$Eh.set(e,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(l(e))}else void 0!==e&&t.push(l(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),null==(e=this.constructor.l)||e.forEach(e=>e(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),void 0!==this.renderRoot&&this.isConnected&&(null==(t=e.hostConnected)||t.call(e))}removeController(e){var t;null==(t=this._$EO)||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{if(s)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of t){const t=document.createElement("style"),o=i.litNonce;void 0!==o&&t.setAttribute("nonce",o),t.textContent=s.cssText,e.appendChild(t)}})(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null==(e=this._$EO)||e.forEach(e=>{var t;return null==(t=e.hostConnected)?void 0:t.call(e)})}enableUpdating(e){}disconnectedCallback(){var e;null==(e=this._$EO)||e.forEach(e=>{var t;return null==(t=e.hostDisconnected)?void 0:t.call(e)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var i;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(void 0!==o&&!0===s.reflect){const n=(void 0!==(null==(i=s.converter)?void 0:i.toAttribute)?s.converter:x).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,t){var i,s;const o=this.constructor,n=o._$Eh.get(e);if(void 0!==n&&this._$Em!==n){const e=o.getPropertyOptions(n),a="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null==(i=e.converter)?void 0:i.fromAttribute)?e.converter:x;this._$Em=n;const r=a.fromAttribute(t,e.type);this[n]=r??(null==(s=this._$Ej)?void 0:s.get(n))??r,this._$Em=null}}requestUpdate(e,t,i){var s;if(void 0!==e){const o=this.constructor,n=this[e];if(i??(i=o.getPropertyOptions(e)),!((i.hasChanged??A)(n,t)||i.useDefault&&i.reflect&&n===(null==(s=this._$Ej)?void 0:s.get(e))&&!this.hasAttribute(o._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),!0!==o||void 0!==n)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null==(e=this._$EO)||e.forEach(e=>{var t;return null==(t=e.hostUpdate)?void 0:t.call(e)}),this.update(i)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null==(t=this._$EO)||t.forEach(e=>{var t;return null==(t=e.hostUpdated)?void 0:t.call(e)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[y("elementProperties")]=new Map,$[y("finalized")]=new Map,null==v||v({ReactiveElement:$}),(g.reactiveElementVersions??(g.reactiveElementVersions=[])).push("2.1.1");const E=globalThis,w=E.trustedTypes,k=w?w.createPolicy("lit-html",{createHTML:e=>e}):void 0,S="$lit$",C=`lit$${Math.random().toFixed(9).slice(2)}$`,V="?"+C,T=`<${V}>`,P=document,L=()=>P.createComment(""),z=e=>null===e||"object"!=typeof e&&"function"!=typeof e,O=Array.isArray,I="[ \t\n\f\r]",M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,N=/>/g,D=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,j=/"/g,H=/^(?:script|style|textarea|title)$/i,U=(G=1,(e,...t)=>({_$litType$:G,strings:e,values:t})),F=Symbol.for("lit-noChange"),q=Symbol.for("lit-nothing"),K=new WeakMap,W=P.createTreeWalker(P,129);var G;function Y(e,t){if(!O(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==k?k.createHTML(t):t}class X{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,n=0;const a=e.length-1,r=this.parts,[l,d]=((e,t)=>{const i=e.length-1,s=[];let o,n=2===t?"<svg>":3===t?"<math>":"",a=M;for(let r=0;r<i;r++){const t=e[r];let i,l,d=-1,c=0;for(;c<t.length&&(a.lastIndex=c,l=a.exec(t),null!==l);)c=a.lastIndex,a===M?"!--"===l[1]?a=R:void 0!==l[1]?a=N:void 0!==l[2]?(H.test(l[2])&&(o=RegExp("</"+l[2],"g")),a=D):void 0!==l[3]&&(a=D):a===D?">"===l[0]?(a=o??M,d=-1):void 0===l[1]?d=-2:(d=a.lastIndex-l[2].length,i=l[1],a=void 0===l[3]?D:'"'===l[3]?j:B):a===j||a===B?a=D:a===R||a===N?a=M:(a=D,o=void 0);const h=a===D&&e[r+1].startsWith("/>")?" ":"";n+=a===M?t+T:d>=0?(s.push(i),t.slice(0,d)+S+t.slice(d)+C+h):t+C+(-2===d?r:h)}return[Y(e,n+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]})(e,t);if(this.el=X.createElement(l,i),W.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=W.nextNode())&&r.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(S)){const t=d[n++],i=s.getAttribute(e).split(C),a=/([.?@])?(.*)/.exec(t);r.push({type:1,index:o,name:a[2],strings:i,ctor:"."===a[1]?te:"?"===a[1]?ie:"@"===a[1]?se:ee}),s.removeAttribute(e)}else e.startsWith(C)&&(r.push({type:6,index:o}),s.removeAttribute(e));if(H.test(s.tagName)){const e=s.textContent.split(C),t=e.length-1;if(t>0){s.textContent=w?w.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],L()),W.nextNode(),r.push({type:2,index:++o});s.append(e[t],L())}}}else if(8===s.nodeType)if(s.data===V)r.push({type:2,index:o});else{let e=-1;for(;-1!==(e=s.data.indexOf(C,e+1));)r.push({type:7,index:o}),e+=C.length-1}o++}}static createElement(e,t){const i=P.createElement("template");return i.innerHTML=e,i}}function J(e,t,i=e,s){var o,n;if(t===F)return t;let a=void 0!==s?null==(o=i._$Co)?void 0:o[s]:i._$Cl;const r=z(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==r&&(null==(n=null==a?void 0:a._$AO)||n.call(a,!1),void 0===r?a=void 0:(a=new r(e),a._$AT(e,i,s)),void 0!==s?(i._$Co??(i._$Co=[]))[s]=a:i._$Cl=a),void 0!==a&&(t=J(e,a._$AS(e,t.values),a,s)),t}let Z=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=((null==e?void 0:e.creationScope)??P).importNode(t,!0);W.currentNode=s;let o=W.nextNode(),n=0,a=0,r=i[0];for(;void 0!==r;){if(n===r.index){let t;2===r.type?t=new Q(o,o.nextSibling,this,e):1===r.type?t=new r.ctor(o,r.name,r.strings,this,e):6===r.type&&(t=new oe(o,this,e)),this._$AV.push(t),r=i[++a]}n!==(null==r?void 0:r.index)&&(o=W.nextNode(),n++)}return W.currentNode=P,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}};class Q{get _$AU(){var e;return(null==(e=this._$AM)?void 0:e._$AU)??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=q,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=(null==s?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=J(this,e,t),z(e)?e===q||null==e||""===e?(this._$AH!==q&&this._$AR(),this._$AH=q):e!==this._$AH&&e!==F&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>O(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==q&&z(this._$AH)?this._$AA.nextSibling.data=e:this.T(P.createTextNode(e)),this._$AH=e}$(e){var t;const{values:i,_$litType$:s}=e,o="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=X.createElement(Y(s.h,s.h[0]),this.options)),s);if((null==(t=this._$AH)?void 0:t._$AD)===o)this._$AH.p(i);else{const e=new Z(o,this),t=e.u(this.options);e.p(i),this.T(t),this._$AH=e}}_$AC(e){let t=K.get(e.strings);return void 0===t&&K.set(e.strings,t=new X(e)),t}k(e){O(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const o of e)s===t.length?t.push(i=new Q(this.O(L()),this.O(L()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for(null==(i=this._$AP)||i.call(this,!1,!0,t);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cv=e,null==(t=this._$AP)||t.call(this,e))}}class ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,o){this.type=1,this._$AH=q,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=q}_$AI(e,t=this,i,s){const o=this.strings;let n=!1;if(void 0===o)e=J(this,e,t,0),n=!z(e)||e!==this._$AH&&e!==F,n&&(this._$AH=e);else{const s=e;let a,r;for(e=o[0],a=0;a<o.length-1;a++)r=J(this,s[i+a],t,a),r===F&&(r=this._$AH[a]),n||(n=!z(r)||r!==this._$AH[a]),r===q?e=q:e!==q&&(e+=(r??"")+o[a+1]),this._$AH[a]=r}n&&!s&&this.j(e)}j(e){e===q?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class te extends ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===q?void 0:e}}class ie extends ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==q)}}class se extends ee{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){if((e=J(this,e,t,0)??q)===F)return;const i=this._$AH,s=e===q&&i!==q||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==q&&(i===q||s);s&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;"function"==typeof this._$AH?this._$AH.call((null==(t=this.options)?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class oe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){J(this,e)}}const ne={I:Q},ae=E.litHtmlPolyfillSupport;null==ae||ae(X,Q),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.3.1");const re=globalThis;let le=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=(null==i?void 0:i.renderBefore)??t;let o=s._$litPart$;if(void 0===o){const e=(null==i?void 0:i.renderBefore)??null;s._$litPart$=o=new Q(t.insertBefore(L(),e),e,void 0,i??{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null==(e=this._$Do)||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null==(e=this._$Do)||e.setConnected(!1)}render(){return F}};le._$litElement$=!0,le.finalized=!0,null==(t=re.litElementHydrateSupport)||t.call(re,{LitElement:le});const de=re.litElementPolyfillSupport;null==de||de({LitElement:le}),(re.litElementVersions??(re.litElementVersions=[])).push("4.2.1");const ce=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},he={attribute:!0,type:String,converter:x,reflect:!1,hasChanged:A},pe=(e=he,t,i)=>{const{kind:s,metadata:o}=i;let n=globalThis.litPropertyMetadata.get(o);if(void 0===n&&globalThis.litPropertyMetadata.set(o,n=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),n.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const o=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,o,e)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const o=this[s];t.call(this,i),this.requestUpdate(s,o,e)}}throw Error("Unsupported decorator location: "+s)};function ue(e){return(t,i)=>"object"==typeof i?pe(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}function me(e){return ue({...e,state:!0,attribute:!1})}function ge(e,t){return(t,i,s)=>((e,t,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&"object"!=typeof t&&Object.defineProperty(e,t,i),i))(t,i,{get(){return(t=>{var i;return(null==(i=t.renderRoot)?void 0:i.querySelector(e))??null})(this)}})}const be=new Map;function fe(e,t){be.set(e,t)}function ve(e,t,i,s){const o=be.get(e);if(!o)return s??t;const n=o[i];return n?n[t]??s??t:s??t}fe("eva-button",{"en-CA":{loading:"Loading...",submit:"Submit",cancel:"Cancel","sign-in":"Sign in"},"fr-CA":{loading:"Chargement...",submit:"Soumettre",cancel:"Annuler","sign-in":"Se connecter"}}),fe("eva-alert",{"en-CA":{"dismiss-alert":"Dismiss alert","alert-dismissed":"Alert dismissed",success:"Success",info:"Information",warning:"Warning",danger:"Error"},"fr-CA":{"dismiss-alert":"Rejeter l'alerte","alert-dismissed":"Alerte rejetée",success:"Succès",info:"Information",warning:"Avertissement",danger:"Erreur"}}),fe("eva-card",{"en-CA":{},"fr-CA":{}}),fe("eva-modal",{"en-CA":{close:"Close modal","modal-closed":"Modal closed"},"fr-CA":{close:"Fermer le modal","modal-closed":"Modal fermé"}}),fe("eva-chat-panel",{"en-CA":{title:"EVA Assistant",you:"You",eva:"EVA",system:"System",placeholder:"Type your message...","input-label":"Chat message input",send:"Send message","message-sent":"Message sent"},"fr-CA":{title:"Assistant EVA",you:"Vous",eva:"EVA",system:"Système",placeholder:"Tapez votre message...","input-label":"Saisie de message de chat",send:"Envoyer le message","message-sent":"Message envoyé"}});const ye=new Map;let xe="en-CA";function Ae(e){const t=xe,i=_e(e);xe=i,document.documentElement.lang=i;try{localStorage.setItem("eva-locale",i)}catch(s){}window.dispatchEvent(new CustomEvent("eva-locale-change",{detail:{locale:i,previousLocale:t}}))}function _e(e){return"en"===e||"en-CA"===e?"en-CA":"fr"===e||"fr-CA"===e?"fr-CA":"en-CA"}var $e,Ee;$e="common",Ee={"en-CA":{close:"Close",submit:"Submit",cancel:"Cancel",required:"Required",optional:"Optional",loading:"Loading...",error:"Error",success:"Success",warning:"Warning",info:"Information",yes:"Yes",no:"No",search:"Search",menu:"Menu",home:"Home",language:"Language",english:"English",french:"Français"},"fr-CA":{close:"Fermer",submit:"Soumettre",cancel:"Annuler",required:"Obligatoire",optional:"Optionnel",loading:"Chargement...",error:"Erreur",success:"Succès",warning:"Avertissement",info:"Information",yes:"Oui",no:"Non",search:"Recherche",menu:"Menu",home:"Accueil",language:"Langue",english:"Anglais",french:"Français"}},ye.set($e,Ee),"undefined"!=typeof window&&function(){const e=new URLSearchParams(window.location.search).get("lang");if(e)return void Ae(_e(e));try{const e=localStorage.getItem("eva-locale");if(e)return void Ae(e)}catch(t){}navigator.language.startsWith("fr")?Ae("fr-CA"):Ae("en-CA")}();let we="en-CA";const ke=new Set;function Se(){return we}function Ce(e){return ke.add(e),()=>ke.delete(e)}class Ve{constructor(e){this.handleKeydown=e=>{var t,i;"Tab"===e.key&&(e.shiftKey?document.activeElement===this.firstFocusable&&(e.preventDefault(),null==(t=this.lastFocusable)||t.focus()):document.activeElement===this.lastFocusable&&(e.preventDefault(),null==(i=this.firstFocusable)||i.focus()))},this.container=e}activate(){var e;this.previouslyFocused=document.activeElement;const t=this.getFocusableElements();0!==t.length&&(this.firstFocusable=t[0],this.lastFocusable=t[t.length-1],null==(e=this.firstFocusable)||e.focus(),this.container.addEventListener("keydown",this.handleKeydown))}deactivate(){var e;this.container.removeEventListener("keydown",this.handleKeydown),null==(e=this.previouslyFocused)||e.focus()}getFocusableElements(){return Array.from(this.container.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled")&&null!==e.offsetParent)}}class Te{constructor(){this.createLiveRegion()}createLiveRegion(){this.liveRegion||(this.liveRegion=document.createElement("div"),this.liveRegion.setAttribute("role","status"),this.liveRegion.setAttribute("aria-live","polite"),this.liveRegion.setAttribute("aria-atomic","true"),this.liveRegion.style.position="absolute",this.liveRegion.style.left="-10000px",this.liveRegion.style.width="1px",this.liveRegion.style.height="1px",this.liveRegion.style.overflow="hidden",document.body.appendChild(this.liveRegion))}announce(e,t="polite"){this.liveRegion&&(this.liveRegion.setAttribute("aria-live",t),this.liveRegion.textContent="",setTimeout(()=>{this.liveRegion&&(this.liveRegion.textContent=e)},100))}destroy(){this.liveRegion&&(document.body.removeChild(this.liveRegion),this.liveRegion=void 0)}}let Pe;function Le(){return Pe||(Pe=new Te),Pe}var ze=Object.defineProperty,Oe=(e,t,i,s)=>{for(var o,n=void 0,a=e.length-1;a>=0;a--)(o=e[a])&&(n=o(t,i,n)||n);return n&&ze(t,i,n),n};class Ie extends le{constructor(){super(...arguments),this.locale=Se(),this.ariaLabel=null,this.ariaDescribedBy=null,this.disabled=!1,this.componentName="eva-element",this.componentId=this._generateId()}_generateId(){return`eva-${Math.random().toString(36).substr(2,9)}`}connectedCallback(){super.connectedCallback(),this._localeUnsubscribe=Ce(e=>{this.locale=e})}disconnectedCallback(){super.disconnectedCallback(),this._localeUnsubscribe&&this._localeUnsubscribe()}updated(e){super.updated(e),e.has("locale")&&this.setAttribute("lang",this.locale),e.has("disabled")&&this.setAttribute("aria-disabled",String(this.disabled))}t(e,t){let i=ve(this.componentName,e,this.locale,"");return i&&i!==e||(i=function(e,t,i,s){var o;const n=i||xe,a=ye.get(e);if(!a)return s??t;const r=a[n];if(!r)return s??t;const l=r[t];if(l)return l;if("fr-CA"===n){const e=null==(o=a["en-CA"])?void 0:o[t];if(e)return e}return s??t}(this.componentName,e,this.locale,"")),i||t||e}getMessage(e,t){return this.t(e,t)}announce(e,t="polite"){Le().announce(e,t)}emitEvent(e,t,i={}){const s=new CustomEvent(e,{detail:t,bubbles:i.bubbles??!0,composed:i.composed??!0,cancelable:i.cancelable??!1});return this.dispatchEvent(s)}focusElement(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');t&&t.focus()}getToken(e){return`var(--gc-${e.replace(/\./g,"-")})`}handleKeyboard(e){}isHighContrastMode(){return window.matchMedia("(prefers-contrast: high)").matches}prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}}Oe([ue({type:String,reflect:!0})],Ie.prototype,"locale"),Oe([ue({type:String,attribute:"aria-label"})],Ie.prototype,"ariaLabel"),Oe([ue({type:String,attribute:"aria-describedby"})],Ie.prototype,"ariaDescribedBy"),Oe([ue({type:Boolean,reflect:!0})],Ie.prototype,"disabled"),Oe([ue({type:String,attribute:"component-id"})],Ie.prototype,"componentId");var Me=Object.defineProperty,Re=Object.getOwnPropertyDescriptor,Ne=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Re(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Me(t,i,n),n};e.EVAButton=class extends Ie{constructor(){super(...arguments),this.componentName="eva-button",this.variant="primary",this.type="button",this.size="medium",this.fullWidth=!1}render(){return U`
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
    `}_handleClick(e){if(this.disabled)return e.preventDefault(),void e.stopPropagation();this.dispatchEvent(new CustomEvent("eva-click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}_handleKeydown(e){if("Enter"===e.key||" "===e.key){if(this.disabled)return void e.preventDefault();" "===e.key&&e.preventDefault(),e.target.click()}}},e.EVAButton.styles=r`
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
  `,Ne([ue({type:String,reflect:!0})],e.EVAButton.prototype,"variant",2),Ne([ue({type:String})],e.EVAButton.prototype,"type",2),Ne([ue({type:String,reflect:!0})],e.EVAButton.prototype,"size",2),Ne([ue({type:Boolean,reflect:!0})],e.EVAButton.prototype,"fullWidth",2),e.EVAButton=Ne([ce("eva-button")],e.EVAButton);var De=Object.defineProperty,Be=Object.getOwnPropertyDescriptor,je=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Be(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&De(t,i,n),n};e.EVACard=class extends Ie{constructor(){super(...arguments),this.componentName="eva-card",this.variant="default",this.padding="medium"}render(){return U`
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
    `}},e.EVACard.styles=r`
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
  `,je([ue({type:String,reflect:!0})],e.EVACard.prototype,"variant",2),je([ue({type:String,reflect:!0})],e.EVACard.prototype,"padding",2),e.EVACard=je([ce("eva-card")],e.EVACard);var He=Object.defineProperty,Ue=Object.getOwnPropertyDescriptor,Fe=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Ue(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&He(t,i,n),n};e.EVAAlert=class extends Ie{constructor(){super(...arguments),this.componentName="eva-alert",this.type="info",this.dismissible=!1,this.visible=!0,this.live="polite"}render(){return U`
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
        ${this.dismissible?U`
              <button
                class="alert-dismiss"
                aria-label="${this.t("dismiss-alert","Dismiss alert")}"
                @click="${this._handleDismiss}"
              >
                ×
              </button>
            `:""}
      </div>
    `}_handleDismiss(){this.visible=!1,this.announce(this.t("alert-dismissed","Alert dismissed"),"polite"),this.dispatchEvent(new CustomEvent("eva-dismiss",{bubbles:!0,composed:!0}))}},e.EVAAlert.styles=r`
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
  `,Fe([ue({type:String,reflect:!0})],e.EVAAlert.prototype,"type",2),Fe([ue({type:Boolean,reflect:!0})],e.EVAAlert.prototype,"dismissible",2),Fe([ue({type:Boolean,reflect:!0})],e.EVAAlert.prototype,"visible",2),Fe([ue({type:String})],e.EVAAlert.prototype,"live",2),e.EVAAlert=Fe([ce("eva-alert")],e.EVAAlert);var qe=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,We=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Ke(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&qe(t,i,n),n};e.EVAInput=class extends Ie{constructor(){super(...arguments),this.componentName="eva-input",this.label="",this.type="text",this.value="",this.placeholder="",this.name="",this.required=!1,this.readonly=!1,this.error="",this.hint=""}render(){const e=`eva-input-${this.name||Math.random().toString(36).substr(2,9)}`,t=this.hint?`${e}-hint`:"",i=this.error?`${e}-error`:"";return U`
      <div class="input-wrapper">
        ${this.label?U`
              <label class="label" for="${e}">
                ${this.label}
                ${this.required?U`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?U`<div class="hint" id="${t}">${this.hint}</div>`:""}

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
            aria-describedby="${i||t||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @input="${this._handleInput}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
        </div>

        ${this.error?U`
              <div class="error-message" id="${i}" role="alert">
                ${this.error}
              </div>
            `:""}

        ${this.maxlength&&this.value?U`
              <div class="char-count">
                ${this.value.length} / ${this.maxlength}
              </div>
            `:""}
      </div>
    `}_handleInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("eva-input",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}_handleFocus(){}_handleBlur(){}},e.EVAInput.styles=r`
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
  `,We([ue({type:String})],e.EVAInput.prototype,"label",2),We([ue({type:String})],e.EVAInput.prototype,"type",2),We([ue({type:String})],e.EVAInput.prototype,"value",2),We([ue({type:String})],e.EVAInput.prototype,"placeholder",2),We([ue({type:String})],e.EVAInput.prototype,"name",2),We([ue({type:Boolean})],e.EVAInput.prototype,"required",2),We([ue({type:Boolean})],e.EVAInput.prototype,"readonly",2),We([ue({type:String})],e.EVAInput.prototype,"error",2),We([ue({type:String})],e.EVAInput.prototype,"hint",2),We([ue({type:Number})],e.EVAInput.prototype,"maxlength",2),e.EVAInput=We([ce("eva-input")],e.EVAInput);var Ge=Object.defineProperty,Ye=Object.getOwnPropertyDescriptor,Xe=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Ye(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Ge(t,i,n),n};e.EVASelect=class extends Ie{constructor(){super(...arguments),this.componentName="eva-select",this.label="",this.value="",this.placeholder="",this.name="",this.required=!1,this.error="",this.hint=""}render(){const e=`eva-select-${this.name||Math.random().toString(36).substr(2,9)}`,t=this.hint?`${e}-hint`:"",i=this.error?`${e}-error`:"";return U`
      <div class="select-wrapper">
        ${this.label?U`
              <label class="label" for="${e}">
                ${this.label}
                ${this.required?U`<span class="required-marker">*</span>`:""}
              </label>
            `:""}

        ${this.hint&&!this.error?U`<div class="hint" id="${t}">${this.hint}</div>`:""}

        <div class="select-container">
          <select
            id="${e}"
            .value="${this.value}"
            name="${this.name}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            class="${this.error?"has-error":""}"
            aria-label="${this.ariaLabel||this.label}"
            aria-describedby="${i||t||this.ariaDescribedBy||""}"
            aria-invalid="${this.error?"true":"false"}"
            @change="${this._handleChange}"
          >
            ${this.placeholder?U`<option value="" disabled selected>${this.placeholder}</option>`:""}
            <slot></slot>
          </select>
          <div class="arrow-icon"></div>
        </div>

        ${this.error?U`
              <div class="error-message" id="${i}" role="alert">
                ${this.error}
              </div>
            `:""}
      </div>
    `}_handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("eva-change",{detail:{value:this.value},bubbles:!0,composed:!0}))}},e.EVASelect.styles=r`
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
  `,Xe([ue({type:String})],e.EVASelect.prototype,"label",2),Xe([ue({type:String})],e.EVASelect.prototype,"value",2),Xe([ue({type:String})],e.EVASelect.prototype,"placeholder",2),Xe([ue({type:String})],e.EVASelect.prototype,"name",2),Xe([ue({type:Boolean})],e.EVASelect.prototype,"required",2),Xe([ue({type:String})],e.EVASelect.prototype,"error",2),Xe([ue({type:String})],e.EVASelect.prototype,"hint",2),e.EVASelect=Xe([ce("eva-select")],e.EVASelect);var Je=Object.defineProperty,Ze=Object.getOwnPropertyDescriptor,Qe=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Ze(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Je(t,i,n),n};e.EVACheckbox=class extends Ie{constructor(){super(...arguments),this.componentName="eva-checkbox",this.checked=!1,this.indeterminate=!1,this.value="",this.name=""}render(){const e=`eva-checkbox-${this.name||Math.random().toString(36).substr(2,9)}`;return U`
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
    `}_handleChange(e){const t=e.target;this.checked=t.checked,this.indeterminate=!1,this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}},e.EVACheckbox.styles=r`
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
  `,Qe([ue({type:Boolean,reflect:!0})],e.EVACheckbox.prototype,"checked",2),Qe([ue({type:Boolean,reflect:!0})],e.EVACheckbox.prototype,"indeterminate",2),Qe([ue({type:String})],e.EVACheckbox.prototype,"value",2),Qe([ue({type:String})],e.EVACheckbox.prototype,"name",2),e.EVACheckbox=Qe([ce("eva-checkbox")],e.EVACheckbox);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,it=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?tt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&et(t,i,n),n};e.EVARadio=class extends Ie{constructor(){super(...arguments),this.componentName="eva-radio",this.checked=!1,this.value="",this.name="",this.required=!1}render(){const e=`eva-radio-${this.name}-${this.value||Math.random().toString(36).substr(2,9)}`;return U`
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
    `}_handleChange(e){const t=e.target;if(this.checked=t.checked,this.checked&&this.name){document.querySelectorAll(`eva-radio[name="${this.name}"]`).forEach(e=>{e!==this&&(e.checked=!1)})}this.dispatchEvent(new CustomEvent("eva-change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}},e.EVARadio.styles=r`
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
  `,it([ue({type:Boolean,reflect:!0})],e.EVARadio.prototype,"checked",2),it([ue({type:String})],e.EVARadio.prototype,"value",2),it([ue({type:String})],e.EVARadio.prototype,"name",2),it([ue({type:Boolean,reflect:!0})],e.EVARadio.prototype,"required",2),e.EVARadio=it([ce("eva-radio")],e.EVARadio);var st=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,nt=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?ot(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&st(t,i,n),n};e.EVAModal=class extends Ie{constructor(){super(...arguments),this.componentName="eva-modal",this.open=!1,this.label="",this.noCloseOnBackdrop=!1,this.noCloseOnEscape=!1,this.size="medium",this._focusTrap=null,this._previousActiveElement=null,this._handleKeydown=e=>{"Escape"!==e.key||this.noCloseOnEscape||(e.preventDefault(),this.close())}}render(){return this.open?U`
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
    `:U``}connectedCallback(){super.connectedCallback(),this.open&&this._setupFocusTrap()}disconnectedCallback(){super.disconnectedCallback(),this._teardownFocusTrap()}updated(e){e.has("open")&&(this.open?(this._setupFocusTrap(),this._previousActiveElement=document.activeElement,document.body.style.overflow="hidden",this.dispatchEvent(new CustomEvent("eva-open",{bubbles:!0,composed:!0}))):(this._teardownFocusTrap(),this._previousActiveElement&&this._previousActiveElement.focus(),document.body.style.overflow=""))}_setupFocusTrap(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector(".modal");t&&(this._focusTrap=new Ve(t),this._focusTrap.activate()),this.noCloseOnEscape||document.addEventListener("keydown",this._handleKeydown)}_teardownFocusTrap(){this._focusTrap&&(this._focusTrap.deactivate(),this._focusTrap=null),document.removeEventListener("keydown",this._handleKeydown)}_handleBackdropClick(e){this.noCloseOnBackdrop||e.target!==e.currentTarget||this.close()}close(){this.open=!1,this.dispatchEvent(new CustomEvent("eva-close",{bubbles:!0,composed:!0}))}},e.EVAModal.styles=r`
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
  `,nt([ue({type:Boolean,reflect:!0})],e.EVAModal.prototype,"open",2),nt([ue({type:String})],e.EVAModal.prototype,"label",2),nt([ue({type:Boolean})],e.EVAModal.prototype,"noCloseOnBackdrop",2),nt([ue({type:Boolean})],e.EVAModal.prototype,"noCloseOnEscape",2),nt([ue({type:String})],e.EVAModal.prototype,"size",2),e.EVAModal=nt([ce("eva-modal")],e.EVAModal);var at=Object.defineProperty,rt=Object.getOwnPropertyDescriptor,lt=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?rt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&at(t,i,n),n};e.EVATabs=class extends Ie{constructor(){super(...arguments),this.componentName="eva-tabs",this.activeIndex=0,this.activeTab=0,this.orientation="horizontal",this._tabs=[]}render(){return this.activeTab!==this.activeIndex&&(this.activeIndex=this.activeTab),U`
      <div class="tabs-container">
        <div
          role="tablist"
          aria-label="${this.ariaLabel||"Tabs"}"
          aria-orientation="${this.orientation}"
          class="tabs-list"
        >
          ${this._tabs.map((e,t)=>U`
              <button
                role="tab"
                class="tab-button"
                id="tab-${t}"
                aria-selected="${t===this.activeIndex}"
                aria-controls="panel-${t}"
                tabindex="${t===this.activeIndex?0:-1}"
                @click="${()=>this._handleTabClick(t)}"
                @keydown="${e=>this._handleKeydown(e,t)}"
              >
                ${e.label}
              </button>
            `)}
        </div>
      </div>
      <div class="tab-panels">
        <slot></slot>
      </div>
    `}firstUpdated(){this._updateTabs()}_updateTabs(){var e;const t=null==(e=this.shadowRoot)?void 0:e.querySelector("slot");if(t){const e=t.assignedElements();this._tabs=e.filter(e=>"EVA-TAB"===e.tagName),this._tabs.forEach((e,t)=>{e.active=t===this.activeIndex,e.setAttribute("role","tabpanel"),e.setAttribute("id",`panel-${t}`),e.setAttribute("aria-labelledby",`tab-${t}`)}),this.requestUpdate()}}_handleTabClick(e){this.activeIndex=e,this.activeTab=e,this._updateTabs(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex},bubbles:!0,composed:!0}))}_handleKeydown(e,t){var i;let s=t;switch(e.key){case"ArrowLeft":case"ArrowUp":e.preventDefault(),s=t>0?t-1:this._tabs.length-1;break;case"ArrowRight":case"ArrowDown":e.preventDefault(),s=t<this._tabs.length-1?t+1:0;break;case"Home":e.preventDefault(),s=0;break;case"End":e.preventDefault(),s=this._tabs.length-1;break;default:return}this.activeIndex=s,this.activeTab=s,this._updateTabs();const o=null==(i=this.shadowRoot)?void 0:i.querySelector(`#tab-${s}`);o&&o.focus(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex,activeTab:this.activeTab},bubbles:!0,composed:!0}))}updated(e){super.updated(e),e.has("activeTab")&&this.activeTab!==this.activeIndex&&(this.activeIndex=this.activeTab,this._updateTabs(),this.dispatchEvent(new CustomEvent("eva-tab-change",{detail:{activeIndex:this.activeIndex,activeTab:this.activeTab},bubbles:!0,composed:!0}))),e.has("orientation")&&this.setAttribute("orientation",this.orientation)}},e.EVATabs.styles=r`
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
  `,lt([ue({type:Number})],e.EVATabs.prototype,"activeIndex",2),lt([ue({type:Number})],e.EVATabs.prototype,"activeTab",2),lt([ue({type:String})],e.EVATabs.prototype,"orientation",2),lt([me()],e.EVATabs.prototype,"_tabs",2),e.EVATabs=lt([ce("eva-tabs")],e.EVATabs),e.EVATab=class extends Ie{constructor(){super(...arguments),this.componentName="eva-tab",this.label="",this.active=!1}render(){return U`<slot></slot>`}},e.EVATab.styles=r`
    :host {
      display: none;
    }

    :host([active]) {
      display: block;
    }
  `,lt([ue({type:String})],e.EVATab.prototype,"label",2),lt([ue({type:Boolean,reflect:!0})],e.EVATab.prototype,"active",2),e.EVATab=lt([ce("eva-tab")],e.EVATab);const dt=2;class ct{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this._$Ct=e,this._$AM=t,this._$Ci=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}const{I:ht}=ne,pt=()=>document.createComment(""),ut=(e,t,i)=>{var s;const o=e._$AA.parentNode,n=void 0===t?e._$AB:t._$AA;if(void 0===i){const t=o.insertBefore(pt(),n),s=o.insertBefore(pt(),n);i=new ht(t,s,e,e.options)}else{const t=i._$AB.nextSibling,a=i._$AM,r=a!==e;if(r){let t;null==(s=i._$AQ)||s.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==a._$AU&&i._$AP(t)}if(t!==n||r){let e=i._$AA;for(;e!==t;){const t=e.nextSibling;o.insertBefore(e,n),e=t}}}return i},mt=(e,t,i=e)=>(e._$AI(t,i),e),gt={},bt=e=>{e._$AR(),e._$AA.remove()},ft=(e,t,i)=>{const s=new Map;for(let o=t;o<=i;o++)s.set(e[o],o);return s},vt=(e=>(...t)=>({_$litDirective$:e,values:t}))(class extends ct{constructor(e){if(super(e),e.type!==dt)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let s;void 0===i?i=t:void 0!==t&&(s=t);const o=[],n=[];let a=0;for(const r of e)o[a]=s?s(r,a):a,n[a]=i(r,a),a++;return{values:n,keys:o}}render(e,t,i){return this.dt(e,t,i).values}update(e,[t,i,s]){const o=e._$AH,{values:n,keys:a}=this.dt(t,i,s);if(!Array.isArray(o))return this.ut=a,n;const r=this.ut??(this.ut=[]),l=[];let d,c,h=0,p=o.length-1,u=0,m=n.length-1;for(;h<=p&&u<=m;)if(null===o[h])h++;else if(null===o[p])p--;else if(r[h]===a[u])l[u]=mt(o[h],n[u]),h++,u++;else if(r[p]===a[m])l[m]=mt(o[p],n[m]),p--,m--;else if(r[h]===a[m])l[m]=mt(o[h],n[m]),ut(e,l[m+1],o[h]),h++,m--;else if(r[p]===a[u])l[u]=mt(o[p],n[u]),ut(e,o[h],o[p]),p--,u++;else if(void 0===d&&(d=ft(a,u,m),c=ft(r,h,p)),d.has(r[h]))if(d.has(r[p])){const t=c.get(a[u]),i=void 0!==t?o[t]:null;if(null===i){const t=ut(e,o[h]);mt(t,n[u]),l[u]=t}else l[u]=mt(i,n[u]),ut(e,o[h],i),o[t]=null;u++}else bt(o[p]),p--;else bt(o[h]),h++;for(;u<=m;){const t=ut(e,l[m+1]);mt(t,n[u]),l[u++]=t}for(;h<=p;){const e=o[h++];null!==e&&bt(e)}return this.ut=a,((e,t=gt)=>{e._$AH=t})(e,l),F}});var yt=Object.defineProperty,xt=Object.getOwnPropertyDescriptor,At=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?xt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&yt(t,i,n),n};e.EVAChatPanel=class extends Ie{constructor(){super(...arguments),this.componentName="eva-chat-panel",this.greeting="",this.isTyping=!1,this.messages=[],this._inputValue="",this._messagesEndRef=null,this._setMessagesEndRef=e=>{this._messagesEndRef=e}}render(){return U`
      <div class="chat-header">
        ${this.t("eva-chat-panel.title","EVA Assistant")}
      </div>

      <div class="chat-messages" @scroll="${this._handleScroll}">
        ${this.greeting&&0===this.messages.length?U`<div class="greeting-message">${this.greeting}</div>`:""}

        ${vt(this.messages,e=>e.id,e=>U`
            <div class="message ${e.sender}" role="article">
              <div class="message-bubble">${e.content}</div>
              <div class="message-meta">
                <span class="sender-label">
                  ${"user"===e.sender?this.t("eva-chat-panel.you","You"):"assistant"===e.sender?this.t("eva-chat-panel.eva","EVA"):this.t("eva-chat-panel.system","System")}
                </span>
                <span class="timestamp">${this._formatTime(e.timestamp)}</span>
              </div>
            </div>
          `)}

        ${this.isTyping?U`
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
    `}updated(e){(e.has("messages")||e.has("isTyping"))&&this._scrollToBottom()}_scrollToBottom(){this._messagesEndRef&&this._messagesEndRef.scrollIntoView({behavior:"smooth",block:"end"})}_handleScroll(){}_handleInput(e){const t=e.target;this._inputValue=t.value}_handleKeydown(e){"Enter"!==e.key||e.shiftKey||(e.preventDefault(),this._handleSend())}_handleSend(){if(!this._inputValue.trim()||this.isTyping)return;const e={id:`msg-${Date.now()}`,sender:"user",content:this._inputValue.trim(),timestamp:new Date,type:"text"};this.messages=[...this.messages,e],this._inputValue="",this.dispatchEvent(new CustomEvent("eva-message-send",{detail:{message:e},bubbles:!0,composed:!0})),this.announce(this.t("eva-chat-panel.message-sent","Message sent"),"polite")}_formatTime(e){return e.toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit"})}addMessage(e){const t={...e,id:`msg-${Date.now()}`,timestamp:new Date};this.messages=[...this.messages,t]}clearMessages(){this.messages=[]}},e.EVAChatPanel.styles=r`
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
  `,At([ue({type:String})],e.EVAChatPanel.prototype,"greeting",2),At([ue({type:Boolean})],e.EVAChatPanel.prototype,"isTyping",2),At([ue({type:Array})],e.EVAChatPanel.prototype,"messages",2),At([me()],e.EVAChatPanel.prototype,"_inputValue",2),At([me()],e.EVAChatPanel.prototype,"_messagesEndRef",2),e.EVAChatPanel=At([ce("eva-chat-panel")],e.EVAChatPanel);var _t=Object.defineProperty,$t=Object.getOwnPropertyDescriptor,Et=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?$t(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&_t(t,i,n),n};e.EVANavShell=class extends Ie{constructor(){super(...arguments),this.componentName="eva-nav-shell",this.mode="sidebar",this.open=!1,this.navLabel="",this.collapsed=!1,this.items=[],this._focusedIndex=0}render(){const e=this.navLabel||this.t("nav.label","Main navigation");return U`
      <a href="#main-content" class="skip-link">
        ${this.t("nav.skipToContent","Skip to main content")}
      </a>

      <div class="nav-shell">
        ${"sidebar"===this.mode?this.renderSidebar(e):this.renderTabs(e)}
        ${"sidebar"===this.mode&&this.open?this.renderOverlay():""}
        
        <div class="content" id="main-content">
          <slot></slot>
        </div>
      </div>
    `}renderSidebar(e){return U`
      <aside class="sidebar" role="navigation" aria-label="${e}">
        <div class="sidebar-header">
          <slot name="header"></slot>
          
          <button
            class="sidebar-toggle"
            @click="${this.toggleSidebar}"
            aria-expanded="${this.open}"
            aria-label="${this.open?this.t("nav.closeSidebar","Close sidebar"):this.t("nav.openSidebar","Open sidebar")}"
          >
            <div class="hamburger" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        <div class="sidebar-nav" role="list">
          <nav @keydown="${this.handleKeyDown}">
            <slot name="nav-items"></slot>
          </nav>
        </div>
      </aside>
    `}renderTabs(e){return U`
      <div class="tabs" role="navigation" aria-label="${e}">
        <nav @keydown="${this.handleKeyDown}">
          <slot name="nav-items"></slot>
        </nav>
      </div>
    `}renderOverlay(){return U`
      <div
        class="overlay"
        @click="${this.closeSidebar}"
        aria-hidden="true"
      ></div>
    `}toggleSidebar(){this.open=!this.open,this.dispatchEvent(new CustomEvent("nav-toggle",{detail:{open:this.open},bubbles:!0,composed:!0}))}closeSidebar(){this.open&&(this.open=!1,this.dispatchEvent(new CustomEvent("nav-toggle",{detail:{open:this.open},bubbles:!0,composed:!0})))}handleKeyDown(e){var t,i;const s=Array.from((null==(i=null==(t=this.shadowRoot)?void 0:t.querySelectorAll('slot[name="nav-items"]'))?void 0:i.assignedElements())||[]);if(0!==s.length)switch(e.key){case"ArrowDown":case"ArrowRight":e.preventDefault(),this._focusedIndex=(this._focusedIndex+1)%s.length,s[this._focusedIndex].focus();break;case"ArrowUp":case"ArrowLeft":e.preventDefault(),this._focusedIndex=(this._focusedIndex-1+s.length)%s.length,s[this._focusedIndex].focus();break;case"Home":e.preventDefault(),this._focusedIndex=0,s[0].focus();break;case"End":e.preventDefault(),this._focusedIndex=s.length-1,s[s.length-1].focus();break;case"Escape":"sidebar"===this.mode&&this.open&&(e.preventDefault(),this.closeSidebar())}}t(e,t){return this.getMessage(`${this.componentName}.${e}`,t)}},e.EVANavShell.styles=r`
    :host {
      display: block;
      position: relative;
      height: 100%;
    }

    .nav-shell {
      display: flex;
      height: 100%;
      position: relative;
    }

    /* Sidebar Mode */
    :host([mode='sidebar']) .nav-shell {
      flex-direction: row;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      background-color: #26374A;
      color: #ffffff;
      width: 280px;
      height: 100%;
      transition: transform 300ms ease-in-out, width 300ms ease-in-out;
      position: relative;
      z-index: 100;
    }

    :host([mode='sidebar'][collapsed]) .sidebar {
      width: 64px;
    }

    /* Mobile: sidebar slides in from left */
    @media (max-width: 768px) {
      .sidebar {
        position: fixed;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
      }

      :host([open]) .sidebar {
        transform: translateX(0);
      }
    }

    /* Desktop: always visible */
    @media (min-width: 769px) {
      .sidebar {
        position: relative;
        transform: translateX(0);
      }
    }

    .sidebar-header {
      padding: 1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .sidebar-toggle {
      background: none;
      border: none;
      color: #ffffff;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      transition: background-color 200ms ease-in-out;
    }

    .sidebar-toggle:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    .sidebar-toggle:focus-visible {
      outline: 3px solid #ffffff;
      outline-offset: 2px;
    }

    /* Hamburger icon */
    .hamburger {
      width: 24px;
      height: 24px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: stretch;
    }

    .hamburger span {
      display: block;
      height: 3px;
      background-color: currentColor;
      border-radius: 2px;
      transition: transform 200ms ease-in-out, opacity 200ms ease-in-out;
    }

    :host([open]) .hamburger span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }

    :host([open]) .hamburger span:nth-child(2) {
      opacity: 0;
    }

    :host([open]) .hamburger span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }

    .sidebar-nav {
      flex: 1;
      overflow-y: auto;
      padding: 0.5rem 0;
    }

    nav {
      display: flex;
      flex-direction: column;
    }

    /* Tabs Mode */
    :host([mode='tabs']) .nav-shell {
      flex-direction: column;
    }

    .tabs {
      display: flex;
      background-color: #26374A;
      border-bottom: 2px solid #1C578A;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    .tabs nav {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
    }

    /* Content area */
    .content {
      flex: 1;
      overflow: auto;
      position: relative;
    }

    /* Overlay for mobile when sidebar is open */
    .overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 99;
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

    @media (max-width: 768px) {
      :host([open]) .overlay {
        display: block;
      }
    }

    /* Accessibility: Skip to content link */
    .skip-link {
      position: absolute;
      top: -100px;
      left: 0;
      background-color: #284162;
      color: #ffffff;
      padding: 0.75rem 1rem;
      text-decoration: none;
      border-radius: 0 0 0.25rem 0;
      z-index: 1000;
      transition: top 200ms ease-in-out;
    }

    .skip-link:focus {
      top: 0;
      outline: 3px solid #ffffff;
      outline-offset: 2px;
    }

    /* Collapsed sidebar styles */
    :host([collapsed]) .sidebar-header slot[name='header'] {
      display: none;
    }

    :host([collapsed]) .sidebar-nav ::slotted(*) {
      text-align: center;
    }

    /* Screen reader only text */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }
  `,Et([ue({type:String,reflect:!0})],e.EVANavShell.prototype,"mode",2),Et([ue({type:Boolean,reflect:!0})],e.EVANavShell.prototype,"open",2),Et([ue({type:String})],e.EVANavShell.prototype,"navLabel",2),Et([ue({type:Boolean,reflect:!0})],e.EVANavShell.prototype,"collapsed",2),Et([ue({type:Array})],e.EVANavShell.prototype,"items",2),Et([me()],e.EVANavShell.prototype,"_focusedIndex",2),e.EVANavShell=Et([ce("eva-nav-shell")],e.EVANavShell);var wt=Object.defineProperty,kt=Object.getOwnPropertyDescriptor,St=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?kt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&wt(t,i,n),n};e.EVABackstageShell=class extends Ie{constructor(){super(...arguments),this.componentName="eva-backstage-shell",this.open=!1,this.position="right",this.width="480px",this.title="",this.showTrigger=!0,this.triggerLabel="",this._focusableElements=[],this._handlePanelKeyDown=e=>{if("Escape"===e.key)return e.preventDefault(),void this.close();if("Tab"===e.key){const t=this._focusableElements[0],i=this._focusableElements[this._focusableElements.length-1];e.shiftKey&&document.activeElement===t?(e.preventDefault(),null==i||i.focus()):e.shiftKey||document.activeElement!==i||(e.preventDefault(),null==t||t.focus())}}}render(){const e=this.title||this.t("title","Customization"),t=this.triggerLabel||this.t("trigger.label","Open customization panel");return U`
      ${this.showTrigger?U`
            <button
              class="backstage-trigger"
              @click="${this.open?this.close:this.openPanel}"
              aria-label="${t}"
              aria-expanded="${this.open}"
              aria-controls="backstage-panel"
            >
              <slot name="trigger">
                <svg
                  class="trigger-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  aria-hidden="true"
                >
                  <path
                    d="M12 15a3 3 0 100-6 3 3 0 000 6z"
                  />
                  <path
                    d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
                  />
                </svg>
              </slot>
            </button>
          `:""}

      <div
        class="backstage-overlay"
        @click="${this.close}"
        aria-hidden="true"
      ></div>

      <aside
        id="backstage-panel"
        class="backstage-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="backstage-title"
        style="--backstage-width: ${this.width}"
      >
        <header class="backstage-header">
          <h2 id="backstage-title" class="backstage-title">
            ${e}
          </h2>
          
          <button
            class="close-button"
            @click="${this.close}"
            aria-label="${this.t("close.label","Close customization panel")}"
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        ${this.renderNav()}

        <div class="backstage-content">
          <slot></slot>
        </div>
      </aside>
    `}renderNav(){return this.querySelector('[slot="nav"]')?U`
      <nav class="backstage-nav" aria-label="${this.t("nav.label","Panel navigation")}">
        <slot name="nav"></slot>
      </nav>
    `:""}openPanel(){this.open||(this._previousFocus=document.activeElement,this.open=!0,this.updateComplete.then(()=>{var e;null==(e=this._closeButton)||e.focus(),this._setupFocusTrap()}),this.dispatchEvent(new CustomEvent("backstage-open",{bubbles:!0,composed:!0})))}close(){this.open&&(this.open=!1,this._previousFocus&&this._previousFocus.focus&&this._previousFocus.focus(),this.dispatchEvent(new CustomEvent("backstage-close",{bubbles:!0,composed:!0})))}_setupFocusTrap(){this._panel&&(this._focusableElements=Array.from(this._panel.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')),this._panel.addEventListener("keydown",this._handlePanelKeyDown))}disconnectedCallback(){super.disconnectedCallback(),this._panel&&this._panel.removeEventListener("keydown",this._handlePanelKeyDown)}t(e,t){return this.getMessage(`${this.componentName}.${e}`,t)}},e.EVABackstageShell.styles=r`
    :host {
      display: contents;
    }

    /* Trigger button */
    .backstage-trigger {
      background: none;
      border: none;
      color: inherit;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.25rem;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      transition: background-color 200ms ease-in-out;
      position: relative;
    }

    .backstage-trigger:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .backstage-trigger:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .trigger-icon {
      width: 24px;
      height: 24px;
      display: block;
    }

    /* Overlay */
    .backstage-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
      animation: fadeIn 200ms ease-in-out;
    }

    :host([open]) .backstage-overlay {
      display: block;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    /* Panel */
    .backstage-panel {
      position: fixed;
      top: 0;
      bottom: 0;
      width: var(--backstage-width, 480px);
      max-width: 90vw;
      background-color: #ffffff;
      box-shadow: -4px 0 16px rgba(0, 0, 0, 0.2);
      z-index: 1000;
      display: flex;
      flex-direction: column;
      transition: transform 300ms ease-in-out;
    }

    :host([position='right']) .backstage-panel {
      right: 0;
      transform: translateX(100%);
    }

    :host([position='left']) .backstage-panel {
      left: 0;
      transform: translateX(-100%);
      box-shadow: 4px 0 16px rgba(0, 0, 0, 0.2);
    }

    :host([open][position='right']) .backstage-panel {
      transform: translateX(0);
    }

    :host([open][position='left']) .backstage-panel {
      transform: translateX(0);
    }

    /* Panel header */
    .backstage-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 1.5rem;
      border-bottom: 1px solid #e5e5e5;
      background-color: #f9f9f9;
    }

    .backstage-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #26374A;
      margin: 0;
    }

    .close-button {
      background: none;
      border: none;
      color: #26374A;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.25rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-width: 44px;
      min-height: 44px;
      font-size: 1.5rem;
      line-height: 1;
      transition: background-color 200ms ease-in-out;
    }

    .close-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .close-button:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    /* Panel navigation */
    .backstage-nav {
      border-bottom: 1px solid #e5e5e5;
      background-color: #ffffff;
    }

    /* Panel content */
    .backstage-content {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
    }

    /* Screen reader only */
    .sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border: 0;
    }

    /* Mobile responsive */
    @media (max-width: 768px) {
      .backstage-panel {
        max-width: 100vw;
        width: 100vw;
      }
    }
  `,St([ue({type:Boolean,reflect:!0})],e.EVABackstageShell.prototype,"open",2),St([ue({type:String,reflect:!0})],e.EVABackstageShell.prototype,"position",2),St([ue({type:String})],e.EVABackstageShell.prototype,"width",2),St([ue({type:String})],e.EVABackstageShell.prototype,"title",2),St([ue({type:Boolean})],e.EVABackstageShell.prototype,"showTrigger",2),St([ue({type:String})],e.EVABackstageShell.prototype,"triggerLabel",2),St([ge(".backstage-panel")],e.EVABackstageShell.prototype,"_panel",2),St([ge(".close-button")],e.EVABackstageShell.prototype,"_closeButton",2),St([me()],e.EVABackstageShell.prototype,"_previousFocus",2),e.EVABackstageShell=St([ce("eva-backstage-shell")],e.EVABackstageShell);var Ct=Object.defineProperty,Vt=Object.getOwnPropertyDescriptor,Tt=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Vt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Ct(t,i,n),n};e.EVAA11yPanel=class extends Ie{constructor(){super(...arguments),this.componentName="eva-a11y-panel",this.showActions=!0,this.immediate=!0,this.storageKey="gc-a11y-settings",this._fontSize=100,this._contrast="aa",this._animations="on",this._lineHeight=1.5,this._letterSpacing=0,this._hasChanges=!1,this.DEFAULT_SETTINGS={fontSize:100,contrast:"aa",animations:"on",lineHeight:1.5,letterSpacing:0}}connectedCallback(){super.connectedCallback(),this._loadSettings()}render(){return U`
      <div class="a11y-panel">
        ${this.renderFontSizeSection()}
        ${this.renderContrastSection()}
        ${this.renderAnimationsSection()}
        ${this.renderTextSpacingSection()}
        ${this.showActions?this.renderActions():""}
      </div>
    `}renderFontSizeSection(){return U`
      <section class="panel-section">
        <h3 class="section-title">
          ${this.t("fontSize.title","Font Size")}
        </h3>
        
        <div class="control-group">
          <label class="control-label">
            <span>${this.t("fontSize.label","Text size")}</span>
            <span class="control-value">${this._fontSize}%</span>
          </label>
          
          <input
            type="range"
            class="slider"
            min="75"
            max="200"
            step="25"
            .value="${String(this._fontSize)}"
            @input="${this._handleFontSizeChange}"
            aria-label="${this.t("fontSize.ariaLabel","Adjust font size")}"
            aria-valuemin="75"
            aria-valuemax="200"
            aria-valuenow="${this._fontSize}"
            aria-valuetext="${this._fontSize} percent"
          />
          
          <div class="info-box">
            <strong>${this.t("fontSize.info.title","Recommended sizes:")}</strong>
            ${this.t("fontSize.info.text","75% (Compact), 100% (Standard), 125% (Large), 150% (Extra Large), 200% (Maximum)")}
          </div>
        </div>
      </section>
    `}renderContrastSection(){return U`
      <section class="panel-section">
        <h3 class="section-title">
          ${this.t("contrast.title","Contrast Mode")}
        </h3>
        
        <div class="radio-group" role="radiogroup" aria-label="${this.t("contrast.ariaLabel","Select contrast mode")}">
          <label class="radio-option">
            <input
              type="radio"
              class="radio-input"
              name="contrast"
              value="aa"
              .checked="${"aa"===this._contrast}"
              @change="${this._handleContrastChange}"
            />
            <span class="radio-label">
              <span class="radio-label-text">${this.t("contrast.aa.title","Standard Contrast (AA)")}</span>
              <span class="radio-description">${this.t("contrast.aa.description","Minimum contrast ratio of 4.5:1 for normal text (WCAG 2.1 AA)")}</span>
            </span>
          </label>
          
          <label class="radio-option">
            <input
              type="radio"
              class="radio-input"
              name="contrast"
              value="aaa"
              .checked="${"aaa"===this._contrast}"
              @change="${this._handleContrastChange}"
            />
            <span class="radio-label">
              <span class="radio-label-text">${this.t("contrast.aaa.title","High Contrast (AAA)")}</span>
              <span class="radio-description">${this.t("contrast.aaa.description","Enhanced contrast ratio of 7:1 for normal text (WCAG 2.1 AAA)")}</span>
            </span>
          </label>
        </div>
      </section>
    `}renderAnimationsSection(){return U`
      <section class="panel-section">
        <h3 class="section-title">
          ${this.t("animations.title","Motion & Animations")}
        </h3>
        
        <div class="radio-group" role="radiogroup" aria-label="${this.t("animations.ariaLabel","Select animation preference")}">
          <label class="radio-option">
            <input
              type="radio"
              class="radio-input"
              name="animations"
              value="on"
              .checked="${"on"===this._animations}"
              @change="${this._handleAnimationsChange}"
            />
            <span class="radio-label">
              <span class="radio-label-text">${this.t("animations.on.title","All Animations")}</span>
              <span class="radio-description">${this.t("animations.on.description","Show all transitions and animations (default)")}</span>
            </span>
          </label>
          
          <label class="radio-option">
            <input
              type="radio"
              class="radio-input"
              name="animations"
              value="reduced"
              .checked="${"reduced"===this._animations}"
              @change="${this._handleAnimationsChange}"
            />
            <span class="radio-label">
              <span class="radio-label-text">${this.t("animations.reduced.title","Reduced Motion")}</span>
              <span class="radio-description">${this.t("animations.reduced.description","Minimize animations and transitions (recommended for vestibular disorders)")}</span>
            </span>
          </label>
          
          <label class="radio-option">
            <input
              type="radio"
              class="radio-input"
              name="animations"
              value="off"
              .checked="${"off"===this._animations}"
              @change="${this._handleAnimationsChange}"
            />
            <span class="radio-label">
              <span class="radio-label-text">${this.t("animations.off.title","No Animations")}</span>
              <span class="radio-description">${this.t("animations.off.description","Disable all animations completely (instant transitions)")}</span>
            </span>
          </label>
        </div>
      </section>
    `}renderTextSpacingSection(){return U`
      <section class="panel-section">
        <h3 class="section-title">
          ${this.t("spacing.title","Text Spacing")}
        </h3>
        
        <div class="control-group">
          <label class="control-label">
            <span>${this.t("spacing.lineHeight.label","Line height")}</span>
            <span class="control-value">${this._lineHeight.toFixed(1)}</span>
          </label>
          
          <input
            type="range"
            class="slider"
            min="1.0"
            max="2.0"
            step="0.1"
            .value="${String(this._lineHeight)}"
            @input="${this._handleLineHeightChange}"
            aria-label="${this.t("spacing.lineHeight.ariaLabel","Adjust line height")}"
          />
        </div>
        
        <div class="control-group">
          <label class="control-label">
            <span>${this.t("spacing.letterSpacing.label","Letter spacing")}</span>
            <span class="control-value">${this._letterSpacing.toFixed(2)}em</span>
          </label>
          
          <input
            type="range"
            class="slider"
            min="0"
            max="0.5"
            step="0.05"
            .value="${String(this._letterSpacing)}"
            @input="${this._handleLetterSpacingChange}"
            aria-label="${this.t("spacing.letterSpacing.ariaLabel","Adjust letter spacing")}"
          />
        </div>
      </section>
    `}renderActions(){return U`
      <div class="panel-actions">
        <button
          class="action-button button-primary"
          @click="${this._handleApply}"
          ?disabled="${!this._hasChanges}"
        >
          ${this.t("actions.apply","Apply Changes")}
        </button>
        
        <button
          class="action-button button-secondary"
          @click="${this._handleReset}"
        >
          ${this.t("actions.reset","Reset to Defaults")}
        </button>
      </div>
    `}_handleFontSizeChange(e){const t=e.target.valueAsNumber;this._fontSize=t,this._hasChanges=!0,this.immediate&&this._applySettings({fontSize:t}),this._emitChange({fontSize:t})}_handleContrastChange(e){const t=e.target.value;this._contrast=t,this._hasChanges=!0,this.immediate&&this._applySettings({contrast:t}),this._emitChange({contrast:t})}_handleAnimationsChange(e){const t=e.target.value;this._animations=t,this._hasChanges=!0,this.immediate&&this._applySettings({animations:t}),this._emitChange({animations:t})}_handleLineHeightChange(e){const t=e.target.valueAsNumber;this._lineHeight=t,this._hasChanges=!0,this.immediate&&this._applySettings({lineHeight:t}),this._emitChange({lineHeight:t})}_handleLetterSpacingChange(e){const t=e.target.valueAsNumber;this._letterSpacing=t,this._hasChanges=!0,this.immediate&&this._applySettings({letterSpacing:t}),this._emitChange({letterSpacing:t})}_handleApply(){const e=this._getCurrentSettings();this._applySettings(e),this._saveSettings(e),this._hasChanges=!1,this.dispatchEvent(new CustomEvent("a11y-apply",{detail:{settings:e},bubbles:!0,composed:!0}))}_handleReset(){this._fontSize=this.DEFAULT_SETTINGS.fontSize,this._contrast=this.DEFAULT_SETTINGS.contrast,this._animations=this.DEFAULT_SETTINGS.animations,this._lineHeight=this.DEFAULT_SETTINGS.lineHeight,this._letterSpacing=this.DEFAULT_SETTINGS.letterSpacing,this._hasChanges=!1,this._applySettings(this.DEFAULT_SETTINGS),this._clearSettings(),this.dispatchEvent(new CustomEvent("a11y-reset",{detail:{settings:this.DEFAULT_SETTINGS},bubbles:!0,composed:!0}))}_applySettings(e){const t=document.documentElement;void 0!==e.fontSize&&t.style.setProperty("--gc-a11y-font-scale",""+e.fontSize/100),void 0!==e.contrast&&t.setAttribute("data-contrast",e.contrast),void 0!==e.animations&&t.setAttribute("data-animations",e.animations),void 0!==e.lineHeight&&t.style.setProperty("--gc-a11y-line-height",String(e.lineHeight)),void 0!==e.letterSpacing&&t.style.setProperty("--gc-a11y-letter-spacing",`${e.letterSpacing}em`)}_emitChange(e){const t=this._getCurrentSettings();this.dispatchEvent(new CustomEvent("a11y-change",{detail:{settings:t,changes:e},bubbles:!0,composed:!0}))}_getCurrentSettings(){return{fontSize:this._fontSize,contrast:this._contrast,animations:this._animations,lineHeight:this._lineHeight,letterSpacing:this._letterSpacing}}_loadSettings(){try{const e=localStorage.getItem(this.storageKey);if(e){const t=JSON.parse(e);this._fontSize=t.fontSize??this.DEFAULT_SETTINGS.fontSize,this._contrast=t.contrast??this.DEFAULT_SETTINGS.contrast,this._animations=t.animations??this.DEFAULT_SETTINGS.animations,this._lineHeight=t.lineHeight??this.DEFAULT_SETTINGS.lineHeight,this._letterSpacing=t.letterSpacing??this.DEFAULT_SETTINGS.letterSpacing,this._applySettings(t)}}catch(e){}}_saveSettings(e){try{localStorage.setItem(this.storageKey,JSON.stringify(e))}catch(t){}}_clearSettings(){try{localStorage.removeItem(this.storageKey)}catch(e){}}t(e,t){return this.getMessage(`${this.componentName}.${e}`,t)}},e.EVAA11yPanel.styles=r`
    :host {
      display: block;
    }

    .a11y-panel {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .panel-section {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .section-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: #26374A;
      margin: 0;
      padding-bottom: 0.5rem;
      border-bottom: 2px solid #e5e5e5;
    }

    .control-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .control-label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 600;
      color: #333333;
      font-size: 0.9375rem;
    }

    .control-value {
      color: #666666;
      font-size: 0.875rem;
      min-width: 60px;
      text-align: right;
    }

    /* Range slider */
    .slider {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 8px;
      border-radius: 4px;
      background: #e5e5e5;
      outline: none;
      transition: background 200ms ease-in-out;
    }

    .slider:hover {
      background: #d5d5d5;
    }

    .slider:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .slider::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #284162;
      cursor: pointer;
      transition: background 200ms ease-in-out;
    }

    .slider::-moz-range-thumb {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #284162;
      cursor: pointer;
      border: none;
      transition: background 200ms ease-in-out;
    }

    .slider:hover::-webkit-slider-thumb,
    .slider:hover::-moz-range-thumb {
      background: #1c2d46;
    }

    /* Radio group */
    .radio-group {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .radio-option {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      cursor: pointer;
    }

    .radio-input {
      margin-top: 0.25rem;
      width: 20px;
      height: 20px;
      cursor: pointer;
      accent-color: #284162;
    }

    .radio-input:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .radio-label {
      flex: 1;
      cursor: pointer;
    }

    .radio-label-text {
      display: block;
      font-weight: 600;
      color: #333333;
      margin-bottom: 0.25rem;
    }

    .radio-description {
      display: block;
      font-size: 0.875rem;
      color: #666666;
      line-height: 1.4;
    }

    /* Action buttons */
    .panel-actions {
      display: flex;
      gap: 1rem;
      padding-top: 1rem;
      border-top: 1px solid #e5e5e5;
    }

    .action-button {
      flex: 1;
      padding: 0.75rem 1rem;
      border-radius: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 200ms ease-in-out;
      border: 2px solid;
      min-height: 44px;
    }

    .action-button:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    .button-primary {
      background-color: #284162;
      color: #ffffff;
      border-color: #284162;
    }

    .button-primary:hover:not(:disabled) {
      background-color: #1c2d46;
      border-color: #1c2d46;
    }

    .button-primary:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .button-secondary {
      background-color: transparent;
      color: #284162;
      border-color: #284162;
    }

    .button-secondary:hover:not(:disabled) {
      background-color: #f0f7fb;
    }

    /* Info box */
    .info-box {
      background-color: #f0f7fb;
      border-left: 4px solid #1C578A;
      padding: 1rem;
      margin-top: 0.5rem;
      font-size: 0.875rem;
      line-height: 1.6;
      color: #284162;
    }

    .info-box strong {
      display: block;
      margin-bottom: 0.25rem;
      font-weight: 700;
    }
  `,Tt([ue({type:Boolean})],e.EVAA11yPanel.prototype,"showActions",2),Tt([ue({type:Boolean})],e.EVAA11yPanel.prototype,"immediate",2),Tt([ue({type:String})],e.EVAA11yPanel.prototype,"storageKey",2),Tt([me()],e.EVAA11yPanel.prototype,"_fontSize",2),Tt([me()],e.EVAA11yPanel.prototype,"_contrast",2),Tt([me()],e.EVAA11yPanel.prototype,"_animations",2),Tt([me()],e.EVAA11yPanel.prototype,"_lineHeight",2),Tt([me()],e.EVAA11yPanel.prototype,"_letterSpacing",2),Tt([me()],e.EVAA11yPanel.prototype,"_hasChanges",2),e.EVAA11yPanel=Tt([ce("eva-a11y-panel")],e.EVAA11yPanel);var Pt=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,zt=(e,t,i,s)=>{for(var o,n=s>1?void 0:s?Lt(t,i):t,a=e.length-1;a>=0;a--)(o=e[a])&&(n=(s?o(t,i,n):o(n))||n);return s&&n&&Pt(t,i,n),n};e.EVALivePreview=class extends Ie{constructor(){super(...arguments),this.componentName="eva-live-preview",this.src="",this.iframeTitle="",this.showLoading=!0,this.targetOrigin=window.location.origin,this.syncA11y=!0,this.syncTheme=!0,this.syncI18n=!0,this._loading=!0,this._error=!1,this._messageListeners=new Map,this._handleA11yChange=e=>{this.sendMessage({type:"a11y-update",data:e.detail})},this._handleThemeChange=e=>{this.sendMessage({type:"theme-update",data:e.detail})},this._handleI18nChange=e=>{this.sendMessage({type:"i18n-update",data:e.detail})},this._handleMessage=e=>{if("*"===this.targetOrigin||e.origin===this.targetOrigin)try{const t=e.data;this.dispatchEvent(new CustomEvent("preview-message",{detail:t,bubbles:!0,composed:!0}));const i=this._messageListeners.get(t.type);i&&i.forEach(e=>e(t.data))}catch(t){}}}connectedCallback(){super.connectedCallback(),this._setupEventListeners()}disconnectedCallback(){super.disconnectedCallback(),this._cleanupEventListeners()}render(){const e=this.iframeTitle||this.t("iframe.title","Live preview");return U`
      <div class="preview-container">
        ${this._error?this.renderError():this.renderPreview(e)}
        ${this._loading&&this.showLoading&&!this._error?this.renderLoading():""}
      </div>
    `}renderPreview(e){return U`
      <div class="preview-iframe-container">
        <iframe
          src="${this.src}"
          title="${e}"
          @load="${this._handleIframeLoad}"
          @error="${this._handleIframeError}"
          sandbox="allow-scripts allow-same-origin allow-forms"
        ></iframe>
      </div>
    `}renderLoading(){return U`
      <div class="loading-overlay">
        <div class="loading-spinner" role="status"></div>
        <div class="loading-text">
          ${this.t("loading.text","Loading preview...")}
        </div>
      </div>
    `}renderError(){return U`
      <div class="error-overlay">
        <svg
          class="error-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        
        <h3 class="error-title">
          ${this.t("error.title","Preview Failed to Load")}
        </h3>
        
        <p class="error-message">
          ${this.t("error.message","The preview could not be loaded. Please check the preview URL and try again.")}
        </p>
        
        <button class="error-retry" @click="${this._handleRetry}">
          ${this.t("error.retry","Retry")}
        </button>
      </div>
    `}_handleIframeLoad(){this._loading=!1,this._error=!1,this.dispatchEvent(new CustomEvent("preview-ready",{detail:{src:this.src},bubbles:!0,composed:!0}))}_handleIframeError(){this._loading=!1,this._error=!0,this.dispatchEvent(new CustomEvent("preview-error",{detail:{src:this.src},bubbles:!0,composed:!0}))}_handleRetry(){this._error=!1,this._loading=!0,this._iframe&&(this._iframe.src=this.src)}_setupEventListeners(){this.syncA11y&&window.addEventListener("a11y-change",this._handleA11yChange),this.syncTheme&&window.addEventListener("theme-change",this._handleThemeChange),this.syncI18n&&window.addEventListener("i18n-change",this._handleI18nChange),window.addEventListener("message",this._handleMessage)}_cleanupEventListeners(){window.removeEventListener("a11y-change",this._handleA11yChange),window.removeEventListener("theme-change",this._handleThemeChange),window.removeEventListener("i18n-change",this._handleI18nChange),window.removeEventListener("message",this._handleMessage)}sendMessage(e){if(this._iframe&&this._iframe.contentWindow)try{this._iframe.contentWindow.postMessage(e,this.targetOrigin)}catch(t){}}onMessage(e,t){this._messageListeners.has(e)||this._messageListeners.set(e,new Set),this._messageListeners.get(e).add(t)}offMessage(e,t){const i=this._messageListeners.get(e);i&&i.delete(t)}updateA11y(e){this.sendMessage({type:"a11y-update",data:e})}updateTheme(e){this.sendMessage({type:"theme-update",data:e})}updateI18n(e){this.sendMessage({type:"i18n-update",data:e})}updateConfig(e){this.sendMessage({type:"config-update",data:e})}reload(){this._iframe&&(this._loading=!0,this._error=!1,this._iframe.src=this.src)}t(e,t){return this.getMessage(`${this.componentName}.${e}`,t)}},e.EVALivePreview.styles=r`
    :host {
      display: block;
      position: relative;
      width: 100%;
      height: 100%;
      background-color: #f9f9f9;
      border-radius: 0.5rem;
      overflow: hidden;
      border: 1px solid #e5e5e5;
    }

    .preview-container {
      width: 100%;
      height: 100%;
      position: relative;
    }

    iframe {
      width: 100%;
      height: 100%;
      border: none;
      display: block;
      background-color: #ffffff;
    }

    /* Loading overlay */
    .loading-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: rgba(255, 255, 255, 0.95);
      z-index: 10;
      animation: fadeIn 200ms ease-in-out;
    }

    .loading-overlay.hidden {
      display: none;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    .loading-spinner {
      width: 48px;
      height: 48px;
      border: 4px solid #e5e5e5;
      border-top-color: #284162;
      border-radius: 50%;
      animation: spin 800ms linear infinite;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    .loading-text {
      margin-top: 1rem;
      color: #666666;
      font-size: 0.9375rem;
    }

    /* Error state */
    .error-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #ffffff;
      padding: 2rem;
      text-align: center;
    }

    .error-icon {
      width: 64px;
      height: 64px;
      color: #d32f2f;
      margin-bottom: 1rem;
    }

    .error-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #26374A;
      margin: 0 0 0.5rem 0;
    }

    .error-message {
      color: #666666;
      font-size: 0.9375rem;
      line-height: 1.6;
      max-width: 400px;
    }

    .error-retry {
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      background-color: #284162;
      color: #ffffff;
      border: none;
      border-radius: 0.25rem;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 200ms ease-in-out;
      min-height: 44px;
    }

    .error-retry:hover {
      background-color: #1c2d46;
    }

    .error-retry:focus-visible {
      outline: 3px solid #26374A;
      outline-offset: 2px;
    }

    /* Preview header */
    .preview-header {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      background-color: #26374A;
      color: #ffffff;
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      font-weight: 600;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 5;
      border-bottom: 2px solid #1C578A;
    }

    .preview-badge {
      background-color: rgba(255, 255, 255, 0.2);
      padding: 0.25rem 0.5rem;
      border-radius: 0.25rem;
      font-size: 0.75rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .preview-iframe-container {
      width: 100%;
      height: 100%;
    }

    :host([show-header]) .preview-iframe-container {
      padding-top: 40px;
    }
  `,zt([ue({type:String})],e.EVALivePreview.prototype,"src",2),zt([ue({type:String})],e.EVALivePreview.prototype,"iframeTitle",2),zt([ue({type:Boolean})],e.EVALivePreview.prototype,"showLoading",2),zt([ue({type:String})],e.EVALivePreview.prototype,"targetOrigin",2),zt([ue({type:Boolean})],e.EVALivePreview.prototype,"syncA11y",2),zt([ue({type:Boolean})],e.EVALivePreview.prototype,"syncTheme",2),zt([ue({type:Boolean})],e.EVALivePreview.prototype,"syncI18n",2),zt([me()],e.EVALivePreview.prototype,"_loading",2),zt([me()],e.EVALivePreview.prototype,"_error",2),zt([ge("iframe")],e.EVALivePreview.prototype,"_iframe",2),e.EVALivePreview=zt([ce("eva-live-preview")],e.EVALivePreview);const Ot={id:"canada-gc",name:"Government of Canada",colors:{fipRed:"#af3c43",linkBlue:"#284162",errorRed:"#d3080c",accentBlue:"#26374A",textPrimary:"#333333",textSecondary:"#666666",textDisabled:"#999999",textInverse:"#ffffff",backgroundPrimary:"#ffffff",backgroundSecondary:"#f5f5f5",backgroundTertiary:"#e1e4e7",successGreen:"#278400",warningYellow:"#ff9900",infoCyan:"#269abc",dangerRed:"#d3080c",focusOutline:"#26374A",hoverBackground:"#e8e8e8",activeBackground:"#d9d9d9"},typography:{fontFamilyHeadings:"Lato, sans-serif",fontFamilyBody:"Noto Sans, sans-serif",fontFamilyMono:"Courier New, monospace",fontWeightRegular:400,fontWeightBold:700,fontSizeXs:"0.75rem",fontSizeSm:"0.875rem",fontSizeBase:"1rem",fontSizeMd:"1.125rem",fontSizeLg:"1.25rem",fontSizeXl:"1.5rem",fontSize2xl:"2rem",fontSize3xl:"2.5rem",lineHeightTight:1.2,lineHeightNormal:1.5,lineHeightRelaxed:1.75,letterSpacingNormal:"0",letterSpacingWide:"0.025em"},spacing:{space0:"0",space1:"0.25rem",space2:"0.5rem",space3:"0.75rem",space4:"1rem",space5:"1.25rem",space6:"1.5rem",space8:"2rem",space10:"2.5rem",space12:"3rem",space16:"4rem",space20:"5rem"},shadows:{shadowSm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",shadowBase:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",shadowMd:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",shadowLg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",shadowXl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"},breakpoints:{xs:"320px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"},accessibility:{contrastRatioAAA:7,contrastRatioAA:4.5,touchTargetMin:"44px",focusOutlineWidth:"3px",focusOutlineStyle:"solid",focusOutlineOffset:"2px",transitionDuration:"200ms",transitionTimingFunction:"ease-in-out"},layout:{maxLineLength:"65ch",containerSm:"640px",containerMd:"768px",containerLg:"1024px",containerXl:"1280px",radiusNone:"0",radiusSm:"0.125rem",radiusBase:"0.25rem",radiusMd:"0.375rem",radiusLg:"0.5rem",radiusFull:"9999px",borderWidth0:"0",borderWidth1:"1px",borderWidth2:"2px",borderWidth4:"4px"}};function It(e){const t=document.documentElement;Object.entries(e.colors).forEach(([e,i])=>{t.style.setProperty(`--gc-color-${Mt(e)}`,String(i))}),Object.entries(e.typography).forEach(([e,i])=>{t.style.setProperty(`--gc-typography-${Mt(e)}`,String(i))}),Object.entries(e.spacing).forEach(([e,i])=>{t.style.setProperty(`--gc-spacing-${Mt(e)}`,String(i))}),Object.entries(e.shadows).forEach(([e,i])=>{t.style.setProperty(`--gc-shadow-${Mt(e)}`,String(i))}),Object.entries(e.breakpoints).forEach(([e,i])=>{t.style.setProperty(`--gc-breakpoint-${Mt(e)}`,String(i))}),Object.entries(e.accessibility).forEach(([e,i])=>{t.style.setProperty(`--gc-a11y-${Mt(e)}`,String(i))}),Object.entries(e.layout).forEach(([e,i])=>{t.style.setProperty(`--gc-layout-${Mt(e)}`,String(i))})}function Mt(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}function Rt(){It(Ot)}"undefined"!=typeof document&&Rt(),customElements.get("eva-button")||customElements.define("eva-button",e.EVAButton),customElements.get("eva-card")||customElements.define("eva-card",e.EVACard),customElements.get("eva-alert")||customElements.define("eva-alert",e.EVAAlert),customElements.get("eva-input")||customElements.define("eva-input",e.EVAInput),customElements.get("eva-select")||customElements.define("eva-select",e.EVASelect),customElements.get("eva-checkbox")||customElements.define("eva-checkbox",e.EVACheckbox),customElements.get("eva-radio")||customElements.define("eva-radio",e.EVARadio),customElements.get("eva-modal")||customElements.define("eva-modal",e.EVAModal),customElements.get("eva-tabs")||customElements.define("eva-tabs",e.EVATabs),customElements.get("eva-tab")||customElements.define("eva-tab",e.EVATab),customElements.get("eva-chat-panel")||customElements.define("eva-chat-panel",e.EVAChatPanel),customElements.get("eva-nav-shell")||customElements.define("eva-nav-shell",e.EVANavShell),customElements.get("eva-backstage-shell")||customElements.define("eva-backstage-shell",e.EVABackstageShell),customElements.get("eva-a11y-panel")||customElements.define("eva-a11y-panel",e.EVAA11yPanel),customElements.get("eva-live-preview")||customElements.define("eva-live-preview",e.EVALivePreview),e.FocusTrap=Ve,e.LiveRegionManager=Te,e.applySovereignProfile=It,e.formatCurrency=function(e,t,i="CAD"){return new Intl.NumberFormat(t,{style:"currency",currency:i}).format(e)},e.formatDate=function(e,t,i){return new Intl.DateTimeFormat(t,i).format(e)},e.formatNumber=function(e,t,i){return new Intl.NumberFormat(t,i).format(e)},e.gcProfile=Ot,e.getGlobalLocale=Se,e.getLiveRegionManager=Le,e.getMessage=ve,e.getNextFocusable=function(e,t){const i=Array.from(t.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled")&&null!==e.offsetParent),s=i.indexOf(e);return-1===s||s===i.length-1?null:i[s+1]??null},e.getPreviousFocusable=function(e,t){const i=Array.from(t.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(e=>!e.hasAttribute("disabled")&&null!==e.offsetParent),s=i.indexOf(e);return s<=0?null:i[s-1]??null},e.getSystemLocale=function(){return(navigator.language||"en-CA").toLowerCase().startsWith("fr")?"fr-CA":"en-CA"},e.handleArrowKeyNavigation=function(e,t,i={}){var s;const{vertical:o=!0,horizontal:n=!1,loop:a=!0}=i,r=Array.from(t.querySelectorAll('a[href], button:not([disabled]), [role="button"], [role="menuitem"], [role="option"]')).filter(e=>!e.hasAttribute("disabled")&&null!==e.offsetParent);if(0===r.length)return;const l=r.indexOf(document.activeElement);let d=l;o&&"ArrowDown"===e.key||n&&"ArrowRight"===e.key?(e.preventDefault(),d=l+1,d>=r.length&&(d=a?0:r.length-1)):o&&"ArrowUp"===e.key||n&&"ArrowLeft"===e.key?(e.preventDefault(),d=l-1,d<0&&(d=a?r.length-1:0)):"Home"===e.key?(e.preventDefault(),d=0):"End"===e.key&&(e.preventDefault(),d=r.length-1),null==(s=r[d])||s.focus()},e.initGCProfile=Rt,e.isFocusable=function(e){if(e.hasAttribute("disabled")||"-1"===e.getAttribute("tabindex"))return!1;const t=e.tagName.toLowerCase();return!!["a","button","input","select","textarea"].includes(t)||e.hasAttribute("tabindex")&&"-1"!==e.getAttribute("tabindex")},e.registerMessages=fe,e.setGlobalLocale=function(e){we=e,ke.forEach(t=>t(e))},e.subscribeToLocale=Ce,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=eva-sovereign-ui.umd.js.map
