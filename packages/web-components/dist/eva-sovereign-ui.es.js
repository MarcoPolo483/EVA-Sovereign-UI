import { LitElement as Fe, css as $, html as u } from "lit";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const x = (s) => (e, t) => {
  t !== void 0 ? t.addInitializer(() => {
    customElements.define(s, e);
  }) : customElements.define(s, e);
};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ae = globalThis, ye = ae.ShadowRoot && (ae.ShadyCSS === void 0 || ae.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ie = Symbol(), ke = /* @__PURE__ */ new WeakMap();
let qe = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== Ie) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ye && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = ke.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && ke.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const We = (s) => new qe(typeof s == "string" ? s : s + "", void 0, Ie), Ke = (s, e) => {
  if (ye) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), i = ae.litNonce;
    i !== void 0 && r.setAttribute("nonce", i), r.textContent = t.cssText, s.appendChild(r);
  }
}, Ee = ye ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return We(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Ge, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Je, getPrototypeOf: Qe } = Object, E = globalThis, Se = E.trustedTypes, et = Se ? Se.emptyScript : "", ue = E.reactiveElementPolyfillSupport, Y = (s, e) => s, ne = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? et : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, $e = (s, e) => !Ye(s, e), Ce = { attribute: !0, type: String, converter: ne, reflect: !1, useDefault: !1, hasChanged: $e };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), E.litPropertyMetadata ?? (E.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class q extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ce) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), i = this.getPropertyDescriptor(e, r, t);
      i !== void 0 && Ge(this.prototype, e, i);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: i, set: a } = Xe(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get: i, set(o) {
      const l = i == null ? void 0 : i.call(this);
      a == null || a.call(this, o), this.requestUpdate(e, l, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ce;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Y("elementProperties"))) return;
    const e = Qe(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Y("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Y("properties"))) {
      const t = this.properties, r = [...Ze(t), ...Je(t)];
      for (const i of r) this.createProperty(i, t[i]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, i] of t) this.elementProperties.set(r, i);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const i = this._$Eu(t, r);
      i !== void 0 && this._$Eh.set(i, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const i of r) t.unshift(Ee(i));
    } else e !== void 0 && t.push(Ee(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ke(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$ET(e, t) {
    var a;
    const r = this.constructor.elementProperties.get(e), i = this.constructor._$Eu(e, r);
    if (i !== void 0 && r.reflect === !0) {
      const o = (((a = r.converter) == null ? void 0 : a.toAttribute) !== void 0 ? r.converter : ne).toAttribute(t, r.type);
      this._$Em = e, o == null ? this.removeAttribute(i) : this.setAttribute(i, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var a, o;
    const r = this.constructor, i = r._$Eh.get(e);
    if (i !== void 0 && this._$Em !== i) {
      const l = r.getPropertyOptions(i), n = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((a = l.converter) == null ? void 0 : a.fromAttribute) !== void 0 ? l.converter : ne;
      this._$Em = i;
      const h = n.fromAttribute(t, l.type);
      this[i] = h ?? ((o = this._$Ej) == null ? void 0 : o.get(i)) ?? h, this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    var i;
    if (e !== void 0) {
      const a = this.constructor, o = this[e];
      if (r ?? (r = a.getPropertyOptions(e)), !((r.hasChanged ?? $e)(o, t) || r.useDefault && r.reflect && o === ((i = this._$Ej) == null ? void 0 : i.get(e)) && !this.hasAttribute(a._$Eu(e, r)))) return;
      this.C(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: r, reflect: i, wrapped: a }, o) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, o ?? t ?? this[e]), a !== !0 || o !== void 0) || (this._$AL.has(e) || (this.hasUpdated || r || (t = void 0), this._$AL.set(e, t)), i === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [a, o] of this._$Ep) this[a] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [a, o] of i) {
        const { wrapped: l } = o, n = this[a];
        l !== !0 || this._$AL.has(a) || n === void 0 || this.C(a, void 0, o, n);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((i) => {
        var a;
        return (a = i.hostUpdate) == null ? void 0 : a.call(i);
      }), this.update(t)) : this._$EM();
    } catch (i) {
      throw e = !1, this._$EM(), i;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var i;
      return (i = r.hostUpdated) == null ? void 0 : i.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[Y("elementProperties")] = /* @__PURE__ */ new Map(), q[Y("finalized")] = /* @__PURE__ */ new Map(), ue == null || ue({ ReactiveElement: q }), (E.reactiveElementVersions ?? (E.reactiveElementVersions = [])).push("2.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const tt = { attribute: !0, type: String, converter: ne, reflect: !1, hasChanged: $e }, st = (s = tt, e, t) => {
  const { kind: r, metadata: i } = t;
  let a = globalThis.litPropertyMetadata.get(i);
  if (a === void 0 && globalThis.litPropertyMetadata.set(i, a = /* @__PURE__ */ new Map()), r === "setter" && ((s = Object.create(s)).wrapped = !0), a.set(t.name, s), r === "accessor") {
    const { name: o } = t;
    return { set(l) {
      const n = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(o, n, s);
    }, init(l) {
      return l !== void 0 && this.C(o, void 0, s, l), l;
    } };
  }
  if (r === "setter") {
    const { name: o } = t;
    return function(l) {
      const n = this[o];
      e.call(this, l), this.requestUpdate(o, n, s);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function c(s) {
  return (e, t) => typeof t == "object" ? st(s, e, t) : ((r, i, a) => {
    const o = i.hasOwnProperty(a);
    return i.constructor.createProperty(a, r), o ? Object.getOwnPropertyDescriptor(i, a) : void 0;
  })(s, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function xe(s) {
  return c({ ...s, state: !0, attribute: !1 });
}
const Le = /* @__PURE__ */ new Map();
function ee(s, e) {
  Le.set(s, e);
}
function it(s, e, t, r) {
  const i = Le.get(s);
  if (!i)
    return r ?? e;
  const a = i[t];
  return a ? a[e] ?? r ?? e : r ?? e;
}
function Jt(s, e, t) {
  return new Intl.DateTimeFormat(e, t).format(s);
}
function Qt(s, e, t) {
  return new Intl.NumberFormat(e, t).format(s);
}
function es(s, e, t = "CAD") {
  return new Intl.NumberFormat(e, {
    style: "currency",
    currency: t
  }).format(s);
}
ee("eva-button", {
  "en-CA": {
    loading: "Loading...",
    submit: "Submit",
    cancel: "Cancel",
    "sign-in": "Sign in"
  },
  "fr-CA": {
    loading: "Chargement...",
    submit: "Soumettre",
    cancel: "Annuler",
    "sign-in": "Se connecter"
  }
});
ee("eva-alert", {
  "en-CA": {
    "dismiss-alert": "Dismiss alert",
    "alert-dismissed": "Alert dismissed",
    success: "Success",
    info: "Information",
    warning: "Warning",
    danger: "Error"
  },
  "fr-CA": {
    "dismiss-alert": "Rejeter l'alerte",
    "alert-dismissed": "Alerte rejetée",
    success: "Succès",
    info: "Information",
    warning: "Avertissement",
    danger: "Erreur"
  }
});
ee("eva-card", {
  "en-CA": {
    // Card component doesn't have default messages yet
  },
  "fr-CA": {
    // Card component doesn't have default messages yet
  }
});
ee("eva-modal", {
  "en-CA": {
    close: "Close modal",
    "modal-closed": "Modal closed"
  },
  "fr-CA": {
    close: "Fermer le modal",
    "modal-closed": "Modal fermé"
  }
});
ee("eva-chat-panel", {
  "en-CA": {
    title: "EVA Assistant",
    you: "You",
    eva: "EVA",
    system: "System",
    placeholder: "Type your message...",
    "input-label": "Chat message input",
    send: "Send message",
    "message-sent": "Message sent"
  },
  "fr-CA": {
    title: "Assistant EVA",
    you: "Vous",
    eva: "EVA",
    system: "Système",
    placeholder: "Tapez votre message...",
    "input-label": "Saisie de message de chat",
    send: "Envoyer le message",
    "message-sent": "Message envoyé"
  }
});
let je = "en-CA";
const ve = /* @__PURE__ */ new Set();
function rt() {
  return je;
}
function ts(s) {
  je = s, ve.forEach((e) => e(s));
}
function ot(s) {
  return ve.add(s), () => ve.delete(s);
}
function ss() {
  return (navigator.language || "en-CA").toLowerCase().startsWith("fr") ? "fr-CA" : "en-CA";
}
class at {
  constructor(e) {
    this.handleKeydown = (t) => {
      var r, i;
      t.key === "Tab" && (t.shiftKey ? document.activeElement === this.firstFocusable && (t.preventDefault(), (r = this.lastFocusable) == null || r.focus()) : document.activeElement === this.lastFocusable && (t.preventDefault(), (i = this.firstFocusable) == null || i.focus()));
    }, this.container = e;
  }
  /**
   * Activate focus trap
   */
  activate() {
    var t;
    this.previouslyFocused = document.activeElement;
    const e = this.getFocusableElements();
    e.length !== 0 && (this.firstFocusable = e[0], this.lastFocusable = e[e.length - 1], (t = this.firstFocusable) == null || t.focus(), this.container.addEventListener("keydown", this.handleKeydown));
  }
  /**
   * Deactivate focus trap
   */
  deactivate() {
    var e;
    this.container.removeEventListener("keydown", this.handleKeydown), (e = this.previouslyFocused) == null || e.focus();
  }
  /**
   * Get all focusable elements in container
   */
  getFocusableElements() {
    return Array.from(this.container.querySelectorAll('a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
      (t) => !t.hasAttribute("disabled") && t.offsetParent !== null
    );
  }
}
class nt {
  constructor() {
    this.createLiveRegion();
  }
  /**
   * Create hidden live region in DOM
   */
  createLiveRegion() {
    this.liveRegion || (this.liveRegion = document.createElement("div"), this.liveRegion.setAttribute("role", "status"), this.liveRegion.setAttribute("aria-live", "polite"), this.liveRegion.setAttribute("aria-atomic", "true"), this.liveRegion.style.position = "absolute", this.liveRegion.style.left = "-10000px", this.liveRegion.style.width = "1px", this.liveRegion.style.height = "1px", this.liveRegion.style.overflow = "hidden", document.body.appendChild(this.liveRegion));
  }
  /**
   * Announce message to screen readers
   * @param message Message to announce
   * @param priority 'polite' or 'assertive'
   */
  announce(e, t = "polite") {
    this.liveRegion && (this.liveRegion.setAttribute("aria-live", t), this.liveRegion.textContent = "", setTimeout(() => {
      this.liveRegion && (this.liveRegion.textContent = e);
    }, 100));
  }
  /**
   * Clean up live region
   */
  destroy() {
    this.liveRegion && (document.body.removeChild(this.liveRegion), this.liveRegion = void 0);
  }
}
let fe;
function lt() {
  return fe || (fe = new nt()), fe;
}
function is(s) {
  if (s.hasAttribute("disabled") || s.getAttribute("tabindex") === "-1")
    return !1;
  const e = s.tagName.toLowerCase();
  return ["a", "button", "input", "select", "textarea"].includes(e) ? !0 : s.hasAttribute("tabindex") && s.getAttribute("tabindex") !== "-1";
}
function rs(s, e) {
  const t = Array.from(
    e.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((i) => !i.hasAttribute("disabled") && i.offsetParent !== null), r = t.indexOf(s);
  return r === -1 || r === t.length - 1 ? null : t[r + 1] ?? null;
}
function os(s, e) {
  const t = Array.from(
    e.querySelectorAll(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  ).filter((i) => !i.hasAttribute("disabled") && i.offsetParent !== null), r = t.indexOf(s);
  return r <= 0 ? null : t[r - 1] ?? null;
}
function as(s, e, t = {}) {
  var h;
  const { vertical: r = !0, horizontal: i = !1, loop: a = !0 } = t, o = Array.from(
    e.querySelectorAll(
      'a[href], button:not([disabled]), [role="button"], [role="menuitem"], [role="option"]'
    )
  ).filter((m) => !m.hasAttribute("disabled") && m.offsetParent !== null);
  if (o.length === 0)
    return;
  const l = o.indexOf(document.activeElement);
  let n = l;
  r && s.key === "ArrowDown" || i && s.key === "ArrowRight" ? (s.preventDefault(), n = l + 1, n >= o.length && (n = a ? 0 : o.length - 1)) : r && s.key === "ArrowUp" || i && s.key === "ArrowLeft" ? (s.preventDefault(), n = l - 1, n < 0 && (n = a ? o.length - 1 : 0)) : s.key === "Home" ? (s.preventDefault(), n = 0) : s.key === "End" && (s.preventDefault(), n = o.length - 1), (h = o[n]) == null || h.focus();
}
var ct = Object.defineProperty, de = (s, e, t, r) => {
  for (var i = void 0, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = o(e, t, i) || i);
  return i && ct(e, t, i), i;
};
class v extends Fe {
  constructor() {
    super(...arguments), this.locale = rt(), this.ariaLabel = null, this.ariaDescribedBy = null, this.disabled = !1, this.componentName = "eva-element";
  }
  /**
   * Lifecycle: Connect to global locale
   */
  connectedCallback() {
    super.connectedCallback(), this._localeUnsubscribe = ot((e) => {
      this.locale = e;
    });
  }
  /**
   * Lifecycle: Disconnect from global locale
   */
  disconnectedCallback() {
    super.disconnectedCallback(), this._localeUnsubscribe && this._localeUnsubscribe();
  }
  /**
   * Lifecycle: Called when properties change
   */
  updated(e) {
    super.updated(e), e.has("locale") && this.setAttribute("lang", this.locale), e.has("disabled") && this.setAttribute("aria-disabled", String(this.disabled));
  }
  /**
   * Get localized message from component's message registry
   * @param key Message key
   * @param fallback Fallback text if key not found
   * @returns Localized message
   */
  t(e, t) {
    return it(this.componentName, e, this.locale, t);
  }
  /**
   * Alias for t() - Get localized message
   * @param key Message key
   * @param fallback Fallback text if key not found
   * @returns Localized message
   */
  getMessage(e, t) {
    return this.t(e, t);
  }
  /**
   * Announce message to screen readers using ARIA live region
   * @param message Message to announce
   * @param priority 'polite' or 'assertive'
   */
  announce(e, t = "polite") {
    lt().announce(e, t);
  }
  /**
   * Get GC Design System token value
   * @param tokenPath Path to token (e.g., 'colors.fipRed')
   * @returns Token value
   */
  getToken(e) {
    return `var(--gc-${e.replace(/\./g, "-")})`;
  }
  /**
   * Handle keyboard navigation (common patterns)
   * @param event Keyboard event
   */
  handleKeyboard(e) {
    console.log(`[Keyboard]: ${e.key}`);
  }
  /**
   * Check if component is in high contrast mode (Windows High Contrast)
   * @returns True if high contrast mode is active
   */
  isHighContrastMode() {
    return window.matchMedia("(prefers-contrast: high)").matches;
  }
  /**
   * Check if user prefers reduced motion
   * @returns True if reduced motion is preferred
   */
  prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
}
de([
  c({ type: String, reflect: !0 })
], v.prototype, "locale");
de([
  c({ type: String, attribute: "aria-label" })
], v.prototype, "ariaLabel");
de([
  c({ type: String, attribute: "aria-describedby" })
], v.prototype, "ariaDescribedBy");
de([
  c({ type: Boolean, reflect: !0 })
], v.prototype, "disabled");
var dt = Object.defineProperty, ht = Object.getOwnPropertyDescriptor, te = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? ht(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && dt(e, t, i), i;
};
let z = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-button", this.variant = "primary", this.type = "button", this.size = "medium", this.fullWidth = !1;
  }
  render() {
    return u`
      <button
        type="${this.type}"
        ?disabled="${this.disabled}"
        aria-label="${this.ariaLabel || ""}"
        aria-describedby="${this.ariaDescribedBy || ""}"
        @click="${this._handleClick}"
        @keydown="${this._handleKeydown}"
      >
        <slot></slot>
      </button>
    `;
  }
  _handleClick(s) {
    if (this.disabled) {
      s.preventDefault(), s.stopPropagation();
      return;
    }
    this.dispatchEvent(
      new CustomEvent("eva-click", {
        detail: { originalEvent: s },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleKeydown(s) {
    if (s.key === "Enter" || s.key === " ") {
      if (this.disabled) {
        s.preventDefault();
        return;
      }
      s.key === " " && s.preventDefault(), s.target.click();
    }
  }
};
z.styles = $`
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
  `;
te([
  c({ type: String, reflect: !0 })
], z.prototype, "variant", 2);
te([
  c({ type: String })
], z.prototype, "type", 2);
te([
  c({ type: String, reflect: !0 })
], z.prototype, "size", 2);
te([
  c({ type: Boolean, reflect: !0 })
], z.prototype, "fullWidth", 2);
z = te([
  x("eva-button")
], z);
var pt = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, _e = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? ut(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && pt(e, t, i), i;
};
let X = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-card", this.variant = "default", this.padding = "medium";
  }
  render() {
    return u`
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
    `;
  }
};
X.styles = $`
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
  `;
_e([
  c({ type: String, reflect: !0 })
], X.prototype, "variant", 2);
_e([
  c({ type: String, reflect: !0 })
], X.prototype, "padding", 2);
X = _e([
  x("eva-card")
], X);
var ft = Object.defineProperty, mt = Object.getOwnPropertyDescriptor, se = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? mt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && ft(e, t, i), i;
};
let N = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-alert", this.type = "info", this.dismissible = !1, this.visible = !0, this.live = "polite";
  }
  render() {
    return u`
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
        ${this.dismissible ? u`
              <button
                class="alert-dismiss"
                aria-label="${this.t("dismiss-alert", "Dismiss alert")}"
                @click="${this._handleDismiss}"
              >
                ×
              </button>
            ` : ""}
      </div>
    `;
  }
  _handleDismiss() {
    this.visible = !1, this.announce(this.t("alert-dismissed", "Alert dismissed"), "polite"), this.dispatchEvent(
      new CustomEvent("eva-dismiss", {
        bubbles: !0,
        composed: !0
      })
    );
  }
};
N.styles = $`
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
  `;
se([
  c({ type: String, reflect: !0 })
], N.prototype, "type", 2);
se([
  c({ type: Boolean, reflect: !0 })
], N.prototype, "dismissible", 2);
se([
  c({ type: Boolean, reflect: !0 })
], N.prototype, "visible", 2);
se([
  c({ type: String })
], N.prototype, "live", 2);
N = se([
  x("eva-alert")
], N);
var bt = Object.defineProperty, gt = Object.getOwnPropertyDescriptor, _ = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? gt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && bt(e, t, i), i;
};
let y = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-input", this.label = "", this.type = "text", this.value = "", this.placeholder = "", this.name = "", this.required = !1, this.readonly = !1, this.error = "", this.hint = "";
  }
  render() {
    const s = `eva-input-${this.name || Math.random().toString(36).substr(2, 9)}`, e = this.hint ? `${s}-hint` : "", t = this.error ? `${s}-error` : "";
    return u`
      <div class="input-wrapper">
        ${this.label ? u`
              <label class="label" for="${s}">
                ${this.label}
                ${this.required ? u`<span class="required-marker">*</span>` : ""}
              </label>
            ` : ""}

        ${this.hint && !this.error ? u`<div class="hint" id="${e}">${this.hint}</div>` : ""}

        <div class="input-container">
          <input
            id="${s}"
            type="${this.type}"
            .value="${this.value}"
            placeholder="${this.placeholder}"
            name="${this.name}"
            ?required="${this.required}"
            ?readonly="${this.readonly}"
            ?disabled="${this.disabled}"
            maxlength="${this.maxlength || ""}"
            class="${this.error ? "has-error" : ""}"
            aria-label="${this.ariaLabel || this.label}"
            aria-describedby="${t || e || this.ariaDescribedBy || ""}"
            aria-invalid="${this.error ? "true" : "false"}"
            @input="${this._handleInput}"
            @change="${this._handleChange}"
            @focus="${this._handleFocus}"
            @blur="${this._handleBlur}"
          />
        </div>

        ${this.error ? u`
              <div class="error-message" id="${t}" role="alert">
                ${this.error}
              </div>
            ` : ""}

        ${this.maxlength && this.value ? u`
              <div class="char-count">
                ${this.value.length} / ${this.maxlength}
              </div>
            ` : ""}
      </div>
    `;
  }
  _handleInput(s) {
    const e = s.target;
    this.value = e.value, this.dispatchEvent(
      new CustomEvent("eva-input", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleChange(s) {
    const e = s.target;
    this.value = e.value, this.dispatchEvent(
      new CustomEvent("eva-change", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleFocus() {
  }
  _handleBlur() {
  }
};
y.styles = $`
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
  `;
_([
  c({ type: String })
], y.prototype, "label", 2);
_([
  c({ type: String })
], y.prototype, "type", 2);
_([
  c({ type: String })
], y.prototype, "value", 2);
_([
  c({ type: String })
], y.prototype, "placeholder", 2);
_([
  c({ type: String })
], y.prototype, "name", 2);
_([
  c({ type: Boolean })
], y.prototype, "required", 2);
_([
  c({ type: Boolean })
], y.prototype, "readonly", 2);
_([
  c({ type: String })
], y.prototype, "error", 2);
_([
  c({ type: String })
], y.prototype, "hint", 2);
_([
  c({ type: Number })
], y.prototype, "maxlength", 2);
y = _([
  x("eva-input")
], y);
var vt = Object.defineProperty, yt = Object.getOwnPropertyDescriptor, P = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? yt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && vt(e, t, i), i;
};
let A = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-select", this.label = "", this.value = "", this.placeholder = "", this.name = "", this.required = !1, this.error = "", this.hint = "";
  }
  render() {
    const s = `eva-select-${this.name || Math.random().toString(36).substr(2, 9)}`, e = this.hint ? `${s}-hint` : "", t = this.error ? `${s}-error` : "";
    return u`
      <div class="select-wrapper">
        ${this.label ? u`
              <label class="label" for="${s}">
                ${this.label}
                ${this.required ? u`<span class="required-marker">*</span>` : ""}
              </label>
            ` : ""}

        ${this.hint && !this.error ? u`<div class="hint" id="${e}">${this.hint}</div>` : ""}

        <div class="select-container">
          <select
            id="${s}"
            .value="${this.value}"
            name="${this.name}"
            ?required="${this.required}"
            ?disabled="${this.disabled}"
            class="${this.error ? "has-error" : ""}"
            aria-label="${this.ariaLabel || this.label}"
            aria-describedby="${t || e || this.ariaDescribedBy || ""}"
            aria-invalid="${this.error ? "true" : "false"}"
            @change="${this._handleChange}"
          >
            ${this.placeholder ? u`<option value="" disabled selected>${this.placeholder}</option>` : ""}
            <slot></slot>
          </select>
          <div class="arrow-icon"></div>
        </div>

        ${this.error ? u`
              <div class="error-message" id="${t}" role="alert">
                ${this.error}
              </div>
            ` : ""}
      </div>
    `;
  }
  _handleChange(s) {
    const e = s.target;
    this.value = e.value, this.dispatchEvent(
      new Event("change", {
        bubbles: !0,
        composed: !0
      })
    ), this.dispatchEvent(
      new CustomEvent("eva-change", {
        detail: { value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
};
A.styles = $`
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
  `;
P([
  c({ type: String })
], A.prototype, "label", 2);
P([
  c({ type: String })
], A.prototype, "value", 2);
P([
  c({ type: String })
], A.prototype, "placeholder", 2);
P([
  c({ type: String })
], A.prototype, "name", 2);
P([
  c({ type: Boolean })
], A.prototype, "required", 2);
P([
  c({ type: String })
], A.prototype, "error", 2);
P([
  c({ type: String })
], A.prototype, "hint", 2);
A = P([
  x("eva-select")
], A);
var $t = Object.defineProperty, xt = Object.getOwnPropertyDescriptor, ie = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? xt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && $t(e, t, i), i;
};
let I = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-checkbox", this.checked = !1, this.indeterminate = !1, this.value = "", this.name = "";
  }
  render() {
    const s = `eva-checkbox-${this.name || Math.random().toString(36).substr(2, 9)}`;
    return u`
      <label class="checkbox-wrapper">
        <div class="checkbox-input">
          <input
            type="checkbox"
            id="${s}"
            .checked="${this.checked}"
            .indeterminate="${this.indeterminate}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            aria-label="${this.ariaLabel || ""}"
            aria-checked="${this.indeterminate ? "mixed" : this.checked ? "true" : "false"}"
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
    `;
  }
  _handleChange(s) {
    const e = s.target;
    this.checked = e.checked, this.indeterminate = !1, this.dispatchEvent(
      new CustomEvent("eva-change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
};
I.styles = $`
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
  `;
ie([
  c({ type: Boolean, reflect: !0 })
], I.prototype, "checked", 2);
ie([
  c({ type: Boolean, reflect: !0 })
], I.prototype, "indeterminate", 2);
ie([
  c({ type: String })
], I.prototype, "value", 2);
ie([
  c({ type: String })
], I.prototype, "name", 2);
I = ie([
  x("eva-checkbox")
], I);
var _t = Object.defineProperty, At = Object.getOwnPropertyDescriptor, re = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? At(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && _t(e, t, i), i;
};
let L = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-radio", this.checked = !1, this.value = "", this.name = "", this.required = !1;
  }
  render() {
    const s = `eva-radio-${this.name}-${this.value || Math.random().toString(36).substr(2, 9)}`;
    return u`
      <label class="radio-wrapper" for="${s}">
        <div class="radio-input">
          <input
            type="radio"
            id="${s}"
            .checked="${this.checked}"
            .value="${this.value}"
            name="${this.name}"
            ?disabled="${this.disabled}"
            ?required="${this.required}"
            aria-label="${this.ariaLabel || ""}"
            aria-checked="${this.checked ? "true" : "false"}"
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
    `;
  }
  _handleChange(s) {
    const e = s.target;
    this.checked = e.checked, this.checked && this.name && document.querySelectorAll(`eva-radio[name="${this.name}"]`).forEach((r) => {
      r !== this && (r.checked = !1);
    }), this.dispatchEvent(
      new CustomEvent("eva-change", {
        detail: { checked: this.checked, value: this.value },
        bubbles: !0,
        composed: !0
      })
    );
  }
};
L.styles = $`
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
  `;
re([
  c({ type: Boolean, reflect: !0 })
], L.prototype, "checked", 2);
re([
  c({ type: String })
], L.prototype, "value", 2);
re([
  c({ type: String })
], L.prototype, "name", 2);
re([
  c({ type: Boolean, reflect: !0 })
], L.prototype, "required", 2);
L = re([
  x("eva-radio")
], L);
var wt = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, V = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? kt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && wt(e, t, i), i;
};
let S = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-modal", this.open = !1, this.label = "", this.noCloseOnBackdrop = !1, this.noCloseOnEscape = !1, this.size = "medium", this._focusTrap = null, this._previousActiveElement = null, this._handleKeydown = (s) => {
      s.key === "Escape" && !this.noCloseOnEscape && (s.preventDefault(), this.close());
    };
  }
  render() {
    return this.open ? u`
      <div class="backdrop modal-backdrop" @click="${this._handleBackdropClick}"></div>
      <dialog
        class="modal"
        data-size="${this.size}"
        ?open="${this.open}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-header"
        aria-label="${this.label || this.ariaLabel || "Modal dialog"}"
      >
        <div class="modal-header" id="modal-header">
          <slot name="header"></slot>
          <button
            class="close-button modal-close"
            aria-label="${this.t("eva-modal.close", "Close modal")}"
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
    ` : u``;
  }
  connectedCallback() {
    super.connectedCallback(), this.open && this._setupFocusTrap();
  }
  disconnectedCallback() {
    super.disconnectedCallback(), this._teardownFocusTrap();
  }
  updated(s) {
    s.has("open") && (this.open ? (this._setupFocusTrap(), this._previousActiveElement = document.activeElement, document.body.style.overflow = "hidden", this.dispatchEvent(
      new CustomEvent("eva-open", {
        bubbles: !0,
        composed: !0
      })
    )) : (this._teardownFocusTrap(), this._previousActiveElement && this._previousActiveElement.focus(), document.body.style.overflow = ""));
  }
  _setupFocusTrap() {
    var e;
    const s = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".modal");
    s && (this._focusTrap = new at(s), this._focusTrap.activate()), this.noCloseOnEscape || document.addEventListener("keydown", this._handleKeydown);
  }
  _teardownFocusTrap() {
    this._focusTrap && (this._focusTrap.deactivate(), this._focusTrap = null), document.removeEventListener("keydown", this._handleKeydown);
  }
  _handleBackdropClick(s) {
    !this.noCloseOnBackdrop && s.target === s.currentTarget && this.close();
  }
  close() {
    this.open = !1, this.dispatchEvent(
      new CustomEvent("eva-close", {
        bubbles: !0,
        composed: !0
      })
    );
  }
};
S.styles = $`
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
  `;
V([
  c({ type: Boolean, reflect: !0 })
], S.prototype, "open", 2);
V([
  c({ type: String })
], S.prototype, "label", 2);
V([
  c({ type: Boolean })
], S.prototype, "noCloseOnBackdrop", 2);
V([
  c({ type: Boolean })
], S.prototype, "noCloseOnEscape", 2);
V([
  c({ type: String })
], S.prototype, "size", 2);
S = V([
  x("eva-modal")
], S);
var Et = Object.defineProperty, St = Object.getOwnPropertyDescriptor, T = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? St(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && Et(e, t, i), i;
};
let j = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-tabs", this.activeIndex = 0, this.activeTab = 0, this.orientation = "horizontal", this._tabs = [];
  }
  render() {
    return this.activeTab !== this.activeIndex && (this.activeIndex = this.activeTab), u`
      <div class="tabs-container">
        <div
          role="tablist"
          aria-label="${this.ariaLabel || "Tabs"}"
          aria-orientation="${this.orientation}"
          class="tabs-list"
        >
          ${this._tabs.map(
      (s, e) => u`
              <button
                role="tab"
                class="tab-button"
                id="tab-${e}"
                aria-selected="${e === this.activeIndex}"
                aria-controls="panel-${e}"
                tabindex="${e === this.activeIndex ? 0 : -1}"
                @click="${() => this._handleTabClick(e)}"
                @keydown="${(t) => this._handleKeydown(t, e)}"
              >
                ${s.label}
              </button>
            `
    )}
        </div>
      </div>
      <div class="tab-panels">
        <slot></slot>
      </div>
    `;
  }
  firstUpdated() {
    this._updateTabs();
  }
  _updateTabs() {
    var e;
    const s = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    if (s) {
      const t = s.assignedElements();
      this._tabs = t.filter((r) => r.tagName === "EVA-TAB"), this._tabs.forEach((r, i) => {
        r.active = i === this.activeIndex, r.setAttribute("role", "tabpanel"), r.setAttribute("id", `panel-${i}`), r.setAttribute("aria-labelledby", `tab-${i}`);
      }), this.requestUpdate();
    }
  }
  _handleTabClick(s) {
    this.activeIndex = s, this.activeTab = s, this._updateTabs(), this.dispatchEvent(
      new CustomEvent("eva-tab-change", {
        detail: { activeIndex: this.activeIndex },
        bubbles: !0,
        composed: !0
      })
    );
  }
  _handleKeydown(s, e) {
    var i;
    let t = e;
    switch (s.key) {
      case "ArrowLeft":
      case "ArrowUp":
        s.preventDefault(), t = e > 0 ? e - 1 : this._tabs.length - 1;
        break;
      case "ArrowRight":
      case "ArrowDown":
        s.preventDefault(), t = e < this._tabs.length - 1 ? e + 1 : 0;
        break;
      case "Home":
        s.preventDefault(), t = 0;
        break;
      case "End":
        s.preventDefault(), t = this._tabs.length - 1;
        break;
      default:
        return;
    }
    this.activeIndex = t, this.activeTab = t, this._updateTabs();
    const r = (i = this.shadowRoot) == null ? void 0 : i.querySelector(`#tab-${t}`);
    r && r.focus(), this.dispatchEvent(
      new CustomEvent("eva-tab-change", {
        detail: { activeIndex: this.activeIndex, activeTab: this.activeTab },
        bubbles: !0,
        composed: !0
      })
    );
  }
  updated(s) {
    super.updated(s), s.has("activeTab") && this.activeTab !== this.activeIndex && (this.activeIndex = this.activeTab, this._updateTabs(), this.dispatchEvent(
      new CustomEvent("eva-tab-change", {
        detail: { activeIndex: this.activeIndex, activeTab: this.activeTab },
        bubbles: !0,
        composed: !0
      })
    )), s.has("orientation") && this.setAttribute("orientation", this.orientation);
  }
};
j.styles = $`
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
  `;
T([
  c({ type: Number })
], j.prototype, "activeIndex", 2);
T([
  c({ type: Number })
], j.prototype, "activeTab", 2);
T([
  c({ type: String })
], j.prototype, "orientation", 2);
T([
  xe()
], j.prototype, "_tabs", 2);
j = T([
  x("eva-tabs")
], j);
let Z = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-tab", this.label = "", this.active = !1;
  }
  render() {
    return u`<slot></slot>`;
  }
};
Z.styles = $`
    :host {
      display: none;
    }

    :host([active]) {
      display: block;
    }
  `;
T([
  c({ type: String })
], Z.prototype, "label", 2);
T([
  c({ type: Boolean, reflect: !0 })
], Z.prototype, "active", 2);
Z = T([
  x("eva-tab")
], Z);
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis, le = G.trustedTypes, Pe = le ? le.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Be = "$lit$", k = `lit$${Math.random().toFixed(9).slice(2)}$`, He = "?" + k, Ct = `<${He}>`, B = document, ce = () => B.createComment(""), J = (s) => s === null || typeof s != "object" && typeof s != "function", Ae = Array.isArray, Pt = (s) => Ae(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", me = `[ 	
\f\r]`, W = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Te = /-->/g, Oe = />/g, O = RegExp(`>|${me}(?:([^\\s"'>=/]+)(${me}*=${me}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Re = /'/g, Me = /"/g, Ue = /^(?:script|style|textarea|title)$/i, H = Symbol.for("lit-noChange"), g = Symbol.for("lit-nothing"), De = /* @__PURE__ */ new WeakMap(), D = B.createTreeWalker(B, 129);
function Ve(s, e) {
  if (!Ae(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Pe !== void 0 ? Pe.createHTML(e) : e;
}
const Tt = (s, e) => {
  const t = s.length - 1, r = [];
  let i, a = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = W;
  for (let l = 0; l < t; l++) {
    const n = s[l];
    let h, m, d = -1, f = 0;
    for (; f < n.length && (o.lastIndex = f, m = o.exec(n), m !== null); ) f = o.lastIndex, o === W ? m[1] === "!--" ? o = Te : m[1] !== void 0 ? o = Oe : m[2] !== void 0 ? (Ue.test(m[2]) && (i = RegExp("</" + m[2], "g")), o = O) : m[3] !== void 0 && (o = O) : o === O ? m[0] === ">" ? (o = i ?? W, d = -1) : m[1] === void 0 ? d = -2 : (d = o.lastIndex - m[2].length, h = m[1], o = m[3] === void 0 ? O : m[3] === '"' ? Me : Re) : o === Me || o === Re ? o = O : o === Te || o === Oe ? o = W : (o = O, i = void 0);
    const p = o === O && s[l + 1].startsWith("/>") ? " " : "";
    a += o === W ? n + Ct : d >= 0 ? (r.push(h), n.slice(0, d) + Be + n.slice(d) + k + p) : n + k + (d === -2 ? l : p);
  }
  return [Ve(s, a + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class Q {
  constructor({ strings: e, _$litType$: t }, r) {
    let i;
    this.parts = [];
    let a = 0, o = 0;
    const l = e.length - 1, n = this.parts, [h, m] = Tt(e, t);
    if (this.el = Q.createElement(h, r), D.currentNode = this.el.content, t === 2 || t === 3) {
      const d = this.el.content.firstChild;
      d.replaceWith(...d.childNodes);
    }
    for (; (i = D.nextNode()) !== null && n.length < l; ) {
      if (i.nodeType === 1) {
        if (i.hasAttributes()) for (const d of i.getAttributeNames()) if (d.endsWith(Be)) {
          const f = m[o++], p = i.getAttribute(d).split(k), b = /([.?@])?(.*)/.exec(f);
          n.push({ type: 1, index: a, name: b[2], strings: p, ctor: b[1] === "." ? Rt : b[1] === "?" ? Mt : b[1] === "@" ? Dt : he }), i.removeAttribute(d);
        } else d.startsWith(k) && (n.push({ type: 6, index: a }), i.removeAttribute(d));
        if (Ue.test(i.tagName)) {
          const d = i.textContent.split(k), f = d.length - 1;
          if (f > 0) {
            i.textContent = le ? le.emptyScript : "";
            for (let p = 0; p < f; p++) i.append(d[p], ce()), D.nextNode(), n.push({ type: 2, index: ++a });
            i.append(d[f], ce());
          }
        }
      } else if (i.nodeType === 8) if (i.data === He) n.push({ type: 2, index: a });
      else {
        let d = -1;
        for (; (d = i.data.indexOf(k, d + 1)) !== -1; ) n.push({ type: 7, index: a }), d += k.length - 1;
      }
      a++;
    }
  }
  static createElement(e, t) {
    const r = B.createElement("template");
    return r.innerHTML = e, r;
  }
}
function U(s, e, t = s, r) {
  var o, l;
  if (e === H) return e;
  let i = r !== void 0 ? (o = t._$Co) == null ? void 0 : o[r] : t._$Cl;
  const a = J(e) ? void 0 : e._$litDirective$;
  return (i == null ? void 0 : i.constructor) !== a && ((l = i == null ? void 0 : i._$AO) == null || l.call(i, !1), a === void 0 ? i = void 0 : (i = new a(s), i._$AT(s, t, r)), r !== void 0 ? (t._$Co ?? (t._$Co = []))[r] = i : t._$Cl = i), i !== void 0 && (e = U(s, i._$AS(s, e.values), i, r)), e;
}
let Ot = class {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: r } = this._$AD, i = ((e == null ? void 0 : e.creationScope) ?? B).importNode(t, !0);
    D.currentNode = i;
    let a = D.nextNode(), o = 0, l = 0, n = r[0];
    for (; n !== void 0; ) {
      if (o === n.index) {
        let h;
        n.type === 2 ? h = new oe(a, a.nextSibling, this, e) : n.type === 1 ? h = new n.ctor(a, n.name, n.strings, this, e) : n.type === 6 && (h = new zt(a, this, e)), this._$AV.push(h), n = r[++l];
      }
      o !== (n == null ? void 0 : n.index) && (a = D.nextNode(), o++);
    }
    return D.currentNode = B, i;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
};
class oe {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, r, i) {
    this.type = 2, this._$AH = g, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = (i == null ? void 0 : i.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = U(this, e, t), J(e) ? e === g || e == null || e === "" ? (this._$AH !== g && this._$AR(), this._$AH = g) : e !== this._$AH && e !== H && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Pt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== g && J(this._$AH) ? this._$AA.nextSibling.data = e : this.T(B.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var a;
    const { values: t, _$litType$: r } = e, i = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = Q.createElement(Ve(r.h, r.h[0]), this.options)), r);
    if (((a = this._$AH) == null ? void 0 : a._$AD) === i) this._$AH.p(t);
    else {
      const o = new Ot(i, this), l = o.u(this.options);
      o.p(t), this.T(l), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = De.get(e.strings);
    return t === void 0 && De.set(e.strings, t = new Q(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, i = 0;
    for (const a of e) i === t.length ? t.push(r = new oe(this.O(ce()), this.O(ce()), this, this.options)) : r = t[i], r._$AI(a), i++;
    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e !== this._$AB; ) {
      const i = e.nextSibling;
      e.remove(), e = i;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, i, a) {
    this.type = 1, this._$AH = g, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = a, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = g;
  }
  _$AI(e, t = this, r, i) {
    const a = this.strings;
    let o = !1;
    if (a === void 0) e = U(this, e, t, 0), o = !J(e) || e !== this._$AH && e !== H, o && (this._$AH = e);
    else {
      const l = e;
      let n, h;
      for (e = a[0], n = 0; n < a.length - 1; n++) h = U(this, l[r + n], t, n), h === H && (h = this._$AH[n]), o || (o = !J(h) || h !== this._$AH[n]), h === g ? e = g : e !== g && (e += (h ?? "") + a[n + 1]), this._$AH[n] = h;
    }
    o && !i && this.j(e);
  }
  j(e) {
    e === g ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Rt extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === g ? void 0 : e;
  }
}
class Mt extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== g);
  }
}
class Dt extends he {
  constructor(e, t, r, i, a) {
    super(e, t, r, i, a), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = U(this, e, t, 0) ?? g) === H) return;
    const r = this._$AH, i = e === g && r !== g || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, a = e !== g && (r === g || i);
    i && this.element.removeEventListener(this.name, this, r), a && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class zt {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    U(this, e);
  }
}
const Nt = { I: oe }, be = G.litHtmlPolyfillSupport;
be == null || be(Q, oe), (G.litHtmlVersions ?? (G.litHtmlVersions = [])).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const It = { CHILD: 2 }, Lt = (s) => (...e) => ({ _$litDirective$: s, values: e });
class jt {
  constructor(e) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(e, t, r) {
    this._$Ct = e, this._$AM = t, this._$Ci = r;
  }
  _$AS(e, t) {
    return this.update(e, t);
  }
  update(e, t) {
    return this.render(...t);
  }
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { I: Bt } = Nt, ze = () => document.createComment(""), K = (s, e, t) => {
  var a;
  const r = s._$AA.parentNode, i = e === void 0 ? s._$AB : e._$AA;
  if (t === void 0) {
    const o = r.insertBefore(ze(), i), l = r.insertBefore(ze(), i);
    t = new Bt(o, l, s, s.options);
  } else {
    const o = t._$AB.nextSibling, l = t._$AM, n = l !== s;
    if (n) {
      let h;
      (a = t._$AQ) == null || a.call(t, s), t._$AM = s, t._$AP !== void 0 && (h = s._$AU) !== l._$AU && t._$AP(h);
    }
    if (o !== i || n) {
      let h = t._$AA;
      for (; h !== o; ) {
        const m = h.nextSibling;
        r.insertBefore(h, i), h = m;
      }
    }
  }
  return t;
}, R = (s, e, t = s) => (s._$AI(e, t), s), Ht = {}, Ut = (s, e = Ht) => s._$AH = e, Vt = (s) => s._$AH, ge = (s) => {
  s._$AR(), s._$AA.remove();
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ne = (s, e, t) => {
  const r = /* @__PURE__ */ new Map();
  for (let i = e; i <= t; i++) r.set(s[i], i);
  return r;
}, Ft = Lt(class extends jt {
  constructor(s) {
    if (super(s), s.type !== It.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(s, e, t) {
    let r;
    t === void 0 ? t = e : e !== void 0 && (r = e);
    const i = [], a = [];
    let o = 0;
    for (const l of s) i[o] = r ? r(l, o) : o, a[o] = t(l, o), o++;
    return { values: a, keys: i };
  }
  render(s, e, t) {
    return this.dt(s, e, t).values;
  }
  update(s, [e, t, r]) {
    const i = Vt(s), { values: a, keys: o } = this.dt(e, t, r);
    if (!Array.isArray(i)) return this.ut = o, a;
    const l = this.ut ?? (this.ut = []), n = [];
    let h, m, d = 0, f = i.length - 1, p = 0, b = a.length - 1;
    for (; d <= f && p <= b; ) if (i[d] === null) d++;
    else if (i[f] === null) f--;
    else if (l[d] === o[p]) n[p] = R(i[d], a[p]), d++, p++;
    else if (l[f] === o[b]) n[b] = R(i[f], a[b]), f--, b--;
    else if (l[d] === o[b]) n[b] = R(i[d], a[b]), K(s, n[b + 1], i[d]), d++, b--;
    else if (l[f] === o[p]) n[p] = R(i[f], a[p]), K(s, i[d], i[f]), f--, p++;
    else if (h === void 0 && (h = Ne(o, p, b), m = Ne(l, d, f)), h.has(l[d])) if (h.has(l[f])) {
      const w = m.get(o[p]), pe = w !== void 0 ? i[w] : null;
      if (pe === null) {
        const we = K(s, i[d]);
        R(we, a[p]), n[p] = we;
      } else n[p] = R(pe, a[p]), K(s, i[d], pe), i[w] = null;
      p++;
    } else ge(i[f]), f--;
    else ge(i[d]), d++;
    for (; p <= b; ) {
      const w = K(s, n[b + 1]);
      R(w, a[p]), n[p++] = w;
    }
    for (; d <= f; ) {
      const w = i[d++];
      w !== null && ge(w);
    }
    return this.ut = o, Ut(s, n), H;
  }
});
var qt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, F = (s, e, t, r) => {
  for (var i = r > 1 ? void 0 : r ? Wt(e, t) : e, a = s.length - 1, o; a >= 0; a--)
    (o = s[a]) && (i = (r ? o(e, t, i) : o(i)) || i);
  return r && i && qt(e, t, i), i;
};
let C = class extends v {
  constructor() {
    super(...arguments), this.componentName = "eva-chat-panel", this.greeting = "", this.isTyping = !1, this.messages = [], this._inputValue = "", this._messagesEndRef = null, this._setMessagesEndRef = (s) => {
      this._messagesEndRef = s;
    };
  }
  render() {
    return u`
      <div class="chat-header">
        ${this.t("eva-chat-panel.title", "EVA Assistant")}
      </div>

      <div class="chat-messages" @scroll="${this._handleScroll}">
        ${this.greeting && this.messages.length === 0 ? u`<div class="greeting-message">${this.greeting}</div>` : ""}

        ${Ft(
      this.messages,
      (s) => s.id,
      (s) => u`
            <div class="message ${s.sender}" role="article">
              <div class="message-bubble">${s.content}</div>
              <div class="message-meta">
                <span class="sender-label">
                  ${s.sender === "user" ? this.t("eva-chat-panel.you", "You") : s.sender === "assistant" ? this.t("eva-chat-panel.eva", "EVA") : this.t("eva-chat-panel.system", "System")}
                </span>
                <span class="timestamp">${this._formatTime(s.timestamp)}</span>
              </div>
            </div>
          `
    )}

        ${this.isTyping ? u`
              <div class="typing-indicator" role="status" aria-live="polite">
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
                <span class="typing-dot"></span>
              </div>
            ` : ""}

        <div style="height: 1px;" ${this._setMessagesEndRef}></div>
      </div>

      <div class="chat-input-container">
        <input
          type="text"
          class="chat-input"
          .value="${this._inputValue}"
          placeholder="${this.t("eva-chat-panel.placeholder", "Type your message...")}"
          aria-label="${this.t("eva-chat-panel.input-label", "Chat message input")}"
          @input="${this._handleInput}"
          @keydown="${this._handleKeydown}"
        />
        <button
          class="send-button"
          aria-label="${this.t("eva-chat-panel.send", "Send message")}"
          ?disabled="${!this._inputValue.trim() || this.isTyping}"
          @click="${this._handleSend}"
        >
          ➤
        </button>
      </div>
    `;
  }
  updated(s) {
    (s.has("messages") || s.has("isTyping")) && this._scrollToBottom();
  }
  _scrollToBottom() {
    this._messagesEndRef && this._messagesEndRef.scrollIntoView({ behavior: "smooth", block: "end" });
  }
  _handleScroll() {
  }
  _handleInput(s) {
    const e = s.target;
    this._inputValue = e.value;
  }
  _handleKeydown(s) {
    s.key === "Enter" && !s.shiftKey && (s.preventDefault(), this._handleSend());
  }
  _handleSend() {
    if (!this._inputValue.trim() || this.isTyping) return;
    const s = {
      id: `msg-${Date.now()}`,
      sender: "user",
      content: this._inputValue.trim(),
      timestamp: /* @__PURE__ */ new Date(),
      type: "text"
    };
    this.messages = [...this.messages, s], this._inputValue = "", this.dispatchEvent(
      new CustomEvent("eva-message-send", {
        detail: { message: s },
        bubbles: !0,
        composed: !0
      })
    ), this.announce(
      this.t("eva-chat-panel.message-sent", "Message sent"),
      "polite"
    );
  }
  _formatTime(s) {
    return s.toLocaleTimeString(this.locale, {
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  /**
   * Public method to add assistant response
   */
  addMessage(s) {
    const e = {
      ...s,
      id: `msg-${Date.now()}`,
      timestamp: /* @__PURE__ */ new Date()
    };
    this.messages = [...this.messages, e];
  }
  /**
   * Public method to clear all messages
   */
  clearMessages() {
    this.messages = [];
  }
};
C.styles = $`
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
  `;
F([
  c({ type: String })
], C.prototype, "greeting", 2);
F([
  c({ type: Boolean })
], C.prototype, "isTyping", 2);
F([
  c({ type: Array })
], C.prototype, "messages", 2);
F([
  xe()
], C.prototype, "_inputValue", 2);
F([
  xe()
], C.prototype, "_messagesEndRef", 2);
C = F([
  x("eva-chat-panel")
], C);
const Kt = {
  id: "canada-gc",
  name: "Government of Canada",
  colors: {
    fipRed: "#af3c43",
    linkBlue: "#284162",
    errorRed: "#d3080c",
    accentBlue: "#26374A",
    textPrimary: "#333333",
    textSecondary: "#666666",
    textDisabled: "#999999",
    textInverse: "#ffffff",
    backgroundPrimary: "#ffffff",
    backgroundSecondary: "#f5f5f5",
    backgroundTertiary: "#e1e4e7",
    successGreen: "#278400",
    warningYellow: "#ff9900",
    infoCyan: "#269abc",
    dangerRed: "#d3080c",
    focusOutline: "#26374A",
    hoverBackground: "#e8e8e8",
    activeBackground: "#d9d9d9"
  },
  typography: {
    fontFamilyHeadings: "Lato, sans-serif",
    fontFamilyBody: "Noto Sans, sans-serif",
    fontFamilyMono: "Courier New, monospace",
    fontWeightRegular: 400,
    fontWeightBold: 700,
    fontSizeXs: "0.75rem",
    fontSizeSm: "0.875rem",
    fontSizeBase: "1rem",
    fontSizeMd: "1.125rem",
    fontSizeLg: "1.25rem",
    fontSizeXl: "1.5rem",
    fontSize2xl: "2rem",
    fontSize3xl: "2.5rem",
    lineHeightTight: 1.2,
    lineHeightNormal: 1.5,
    lineHeightRelaxed: 1.75,
    letterSpacingNormal: "0",
    letterSpacingWide: "0.025em"
  },
  spacing: {
    space0: "0",
    space1: "0.25rem",
    space2: "0.5rem",
    space3: "0.75rem",
    space4: "1rem",
    space5: "1.25rem",
    space6: "1.5rem",
    space8: "2rem",
    space10: "2.5rem",
    space12: "3rem",
    space16: "4rem",
    space20: "5rem"
  },
  shadows: {
    shadowSm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    shadowBase: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    shadowMd: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    shadowLg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    shadowXl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
  },
  breakpoints: {
    xs: "320px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px"
  },
  accessibility: {
    contrastRatioAAA: 7,
    contrastRatioAA: 4.5,
    touchTargetMin: "44px",
    focusOutlineWidth: "3px",
    focusOutlineStyle: "solid",
    focusOutlineOffset: "2px",
    transitionDuration: "200ms",
    transitionTimingFunction: "ease-in-out"
  },
  layout: {
    maxLineLength: "65ch",
    containerSm: "640px",
    containerMd: "768px",
    containerLg: "1024px",
    containerXl: "1280px",
    radiusNone: "0",
    radiusSm: "0.125rem",
    radiusBase: "0.25rem",
    radiusMd: "0.375rem",
    radiusLg: "0.5rem",
    radiusFull: "9999px",
    borderWidth0: "0",
    borderWidth1: "1px",
    borderWidth2: "2px",
    borderWidth4: "4px"
  }
};
function Yt(s) {
  const e = document.documentElement;
  Object.entries(s.colors).forEach(([t, r]) => {
    e.style.setProperty(`--gc-color-${M(t)}`, String(r));
  }), Object.entries(s.typography).forEach(([t, r]) => {
    e.style.setProperty(`--gc-typography-${M(t)}`, String(r));
  }), Object.entries(s.spacing).forEach(([t, r]) => {
    e.style.setProperty(`--gc-spacing-${M(t)}`, String(r));
  }), Object.entries(s.shadows).forEach(([t, r]) => {
    e.style.setProperty(`--gc-shadow-${M(t)}`, String(r));
  }), Object.entries(s.breakpoints).forEach(([t, r]) => {
    e.style.setProperty(`--gc-breakpoint-${M(t)}`, String(r));
  }), Object.entries(s.accessibility).forEach(([t, r]) => {
    e.style.setProperty(`--gc-a11y-${M(t)}`, String(r));
  }), Object.entries(s.layout).forEach(([t, r]) => {
    e.style.setProperty(`--gc-layout-${M(t)}`, String(r));
  });
}
function M(s) {
  return s.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}
function Gt() {
  Yt(Kt);
}
typeof document < "u" && Gt();
export {
  N as EVAAlert,
  z as EVAButton,
  X as EVACard,
  C as EVAChatPanel,
  I as EVACheckbox,
  v as EVAElement,
  y as EVAInput,
  S as EVAModal,
  L as EVARadio,
  A as EVASelect,
  Z as EVATab,
  j as EVATabs,
  at as FocusTrap,
  nt as LiveRegionManager,
  Yt as applySovereignProfile,
  es as formatCurrency,
  Jt as formatDate,
  Qt as formatNumber,
  Kt as gcProfile,
  rt as getGlobalLocale,
  lt as getLiveRegionManager,
  it as getMessage,
  rs as getNextFocusable,
  os as getPreviousFocusable,
  ss as getSystemLocale,
  as as handleArrowKeyNavigation,
  Gt as initGCProfile,
  is as isFocusable,
  ee as registerMessages,
  ts as setGlobalLocale,
  ot as subscribeToLocale
};
//# sourceMappingURL=eva-sovereign-ui.es.js.map
