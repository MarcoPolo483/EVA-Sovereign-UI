import{T,i as V,x as v}from"./lit-element-CawQJKOV.js";import{n as w,E as S,t as C}from"./EVAElement-Cekp2jMQ.js";import{r as E}from"./state-B8ZcOztO.js";import{p as D,v as h,s as b,M as _,m as M}from"./directive-helpers-HCDniILq.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const I={CHILD:2},R=e=>(...s)=>({_$litDirective$:e,values:s});class j{constructor(s){}get _$AU(){return this._$AM._$AU}_$AT(s,a,l){this._$Ct=s,this._$AM=a,this._$Ci=l}_$AS(s,a){return this.update(s,a)}update(s,a){return this.render(...a)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=(e,s,a)=>{const l=new Map;for(let t=s;t<=a;t++)l.set(e[t],t);return l},z=R(class extends j{constructor(e){if(super(e),e.type!==I.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,s,a){let l;a===void 0?a=s:s!==void 0&&(l=s);const t=[],o=[];let i=0;for(const p of e)t[i]=l?l(p,i):i,o[i]=a(p,i),i++;return{values:o,keys:t}}render(e,s,a){return this.dt(e,s,a).values}update(e,[s,a,l]){const t=D(e),{values:o,keys:i}=this.dt(s,a,l);if(!Array.isArray(t))return this.ut=i,o;const p=this.ut??(this.ut=[]),m=[];let y,k,n=0,d=t.length-1,r=0,c=o.length-1;for(;n<=d&&r<=c;)if(t[n]===null)n++;else if(t[d]===null)d--;else if(p[n]===i[r])m[r]=h(t[n],o[r]),n++,r++;else if(p[d]===i[c])m[c]=h(t[d],o[c]),d--,c--;else if(p[n]===i[c])m[c]=h(t[n],o[c]),b(e,m[c+1],t[n]),n++,c--;else if(p[d]===i[r])m[r]=h(t[d],o[r]),b(e,t[n],t[d]),d--,r++;else if(y===void 0&&(y=A(i,r,c),k=A(p,n,d)),y.has(p[n]))if(y.has(p[d])){const f=k.get(i[r]),x=f!==void 0?t[f]:null;if(x===null){const $=b(e,t[n]);h($,o[r]),m[r]=$}else m[r]=h(x,o[r]),b(e,t[n],x),t[f]=null;r++}else _(t[d]),d--;else _(t[n]),n++;for(;r<=c;){const f=b(e,m[c+1]);h(f,o[r]),m[r++]=f}for(;n<=d;){const f=t[n++];f!==null&&_(f)}return this.ut=i,M(e,m),T}});var Y=Object.defineProperty,O=Object.getOwnPropertyDescriptor,g=(e,s,a,l)=>{for(var t=l>1?void 0:l?O(s,a):s,o=e.length-1,i;o>=0;o--)(i=e[o])&&(t=(l?i(s,a,t):i(t))||t);return l&&t&&Y(s,a,t),t};let u=class extends S{constructor(){super(...arguments),this.componentName="eva-chat-panel",this.greeting="",this.isTyping=!1,this.messages=[],this._inputValue="",this._messagesEndRef=null,this._setMessagesEndRef=e=>{this._messagesEndRef=e}}render(){return v`
      <div class="chat-header">
        ${this.t("eva-chat-panel.title","EVA Assistant")}
      </div>

      <div class="chat-messages" @scroll="${this._handleScroll}">
        ${this.greeting&&this.messages.length===0?v`<div class="greeting-message">${this.greeting}</div>`:""}

        ${z(this.messages,e=>e.id,e=>v`
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

        ${this.isTyping?v`
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
    `}updated(e){(e.has("messages")||e.has("isTyping"))&&this._scrollToBottom()}_scrollToBottom(){this._messagesEndRef&&this._messagesEndRef.scrollIntoView({behavior:"smooth",block:"end"})}_handleScroll(){}_handleInput(e){const s=e.target;this._inputValue=s.value}_handleKeydown(e){e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this._handleSend())}_handleSend(){if(!this._inputValue.trim()||this.isTyping)return;const e={id:`msg-${Date.now()}`,sender:"user",content:this._inputValue.trim(),timestamp:new Date,type:"text"};this.messages=[...this.messages,e],this._inputValue="",this.dispatchEvent(new CustomEvent("eva-message-send",{detail:{message:e},bubbles:!0,composed:!0})),this.announce(this.t("eva-chat-panel.message-sent","Message sent"),"polite")}_formatTime(e){return e.toLocaleTimeString(this.locale,{hour:"2-digit",minute:"2-digit"})}addMessage(e){const s={...e,id:`msg-${Date.now()}`,timestamp:new Date};this.messages=[...this.messages,s]}clearMessages(){this.messages=[]}};u.styles=V`
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
  `;g([w({type:String})],u.prototype,"greeting",2);g([w({type:Boolean})],u.prototype,"isTyping",2);g([w({type:Array})],u.prototype,"messages",2);g([E()],u.prototype,"_inputValue",2);g([E()],u.prototype,"_messagesEndRef",2);u=g([C("eva-chat-panel")],u);
