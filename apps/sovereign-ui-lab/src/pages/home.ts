/**
 * Home Page - EVA Sovereign UI Lab
 * Professional GC Design System demo with live chat and framework examples
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../components/framework-switcher';
import '../components/code-panel';
import type { Framework } from '../components/framework-switcher';

@customElement('lab-home-page')
export class LabHomePage extends LitElement {
  @state() private framework: Framework = 'vanilla';

  static styles = css`
    :host {
      display: block;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
    }

    /* Hero Section */
    .hero {
      background: linear-gradient(135deg, #26374a 0%, #2b5a8c 100%);
      color: white;
      padding: 4rem 2rem;
      border-radius: 12px;
      margin: 2rem 0 3rem 0;
      text-align: center;
      box-shadow: 0 4px 12px rgba(38, 55, 74, 0.15);
    }

    .hero h1 {
      font-family: 'Lato', sans-serif;
      font-size: 3rem;
      margin: 0 0 1rem 0;
      font-weight: 700;
      line-height: 1.2;
    }

    .hero p {
      font-size: 1.25rem;
      opacity: 0.95;
      max-width: 800px;
      margin: 0 auto 2rem auto;
      line-height: 1.6;
    }

    .hero-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    /* Live Demo Section */
    .demo-section {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 3rem;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }

    .demo-section h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.75rem;
      color: #26374a;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .demo-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 1.5rem;
    }

    @media (max-width: 968px) {
      .demo-layout {
        grid-template-columns: 1fr;
      }
    }

    .demo-panel {
      background: #f8f9fa;
      border-radius: 8px;
      padding: 1.5rem;
      min-height: 400px;
    }

    .demo-panel h3 {
      font-family: 'Lato', sans-serif;
      font-size: 1.25rem;
      color: #26374a;
      margin: 0 0 1rem 0;
      font-weight: 600;
    }

    /* Features Grid */
    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 968px) {
      .features {
        grid-template-columns: 1fr;
      }
    }

    .feature-card {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
      transition: transform 0.2s, box-shadow 0.2s;
    }

    .feature-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 20px rgba(38, 55, 74, 0.15);
    }

    .feature-card h3 {
      font-family: 'Lato', sans-serif;
      font-size: 1.25rem;
      margin: 0 0 1rem 0;
      color: #26374a;
      font-weight: 600;
    }

    .feature-card p {
      color: var(--eva-color-text-secondary, #555);
      line-height: 1.6;
      margin: 0 0 1.5rem 0;
    }

    .feature-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      display: block;
    }

    /* Quick Start Section */
    .quick-start {
      background: #f8f9fa;
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 3rem;
      border-left: 4px solid #26374a;
    }

    .quick-start h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.75rem;
      color: #26374a;
      margin: 0 0 1rem 0;
      font-weight: 600;
    }

    .quick-start pre {
      background: #1e1e1e;
      color: #d4d4d4;
      padding: 1rem;
      border-radius: 8px;
      overflow-x: auto;
      font-family: 'Consolas', 'Monaco', monospace;
      font-size: 0.9rem;
      margin: 1rem 0;
    }

    /* Navigation Cards */
    .nav-cards {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin-bottom: 3rem;
    }

    @media (max-width: 968px) {
      .nav-cards {
        grid-template-columns: 1fr;
      }
    }

    .nav-card {
      background: var(--eva-color-background-elevated, #fff);
      border: 2px solid #26374a;
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
      color: inherit;
      display: block;
    }

    .nav-card:hover {
      background: #26374a;
      color: white;
      transform: scale(1.05);
    }

    .nav-card h3 {
      font-family: 'Lato', sans-serif;
      font-size: 1.25rem;
      margin: 1rem 0 0.5rem 0;
      font-weight: 600;
    }

    .nav-card p {
      margin: 0;
      font-size: 0.95rem;
    }

    .nav-icon {
      font-size: 2rem;
    }
  `;

  private handleFrameworkChange = (e: CustomEvent<{ framework: Framework }>) => {
    this.framework = e.detail.framework;
  };

  private getChatCode(): string {
    const codes = {
      vanilla: `<!-- Add to your HTML -->
<eva-chat-panel id="myChat"></eva-chat-panel>

<script type="module">
  const chat = document.getElementById('myChat');
  
  chat.addEventListener('message-sent', (e) => {
    console.log('User:', e.detail.message);
    // Process and respond
  });
</script>`,
      react: `import { ChatPanel } from '@eva-suite/react';
import { useState } from 'react';

function MyApp() {
  const [messages, setMessages] = useState([]);
  
  const handleSend = (text: string) => {
    setMessages([...messages, { role: 'user', text }]);
    // Process and respond
  };

  return (
    <ChatPanel 
      messages={messages}
      onSendMessage={handleSend}
    />
  );
}`,
      vue: `<script setup>
import { EVAChatPanel } from '@eva-suite/vue';
import { ref } from 'vue';

const messages = ref([]);

const handleSend = (text) => {
  messages.value.push({ role: 'user', text });
  // Process and respond
};
</script>

<template>
  <EVAChatPanel 
    :messages="messages"
    @send-message="handleSend"
  />
</template>`,
      angular: `import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  template: \`
    <eva-chat-panel 
      [messages]="messages"
      (sendMessage)="handleSend($event)"
    ></eva-chat-panel>
  \`
})
export class ChatComponent {
  messages: any[] = [];
  
  handleSend(text: string) {
    this.messages.push({ role: 'user', text });
    // Process and respond
  }
}`,
      svelte: `<script>
  import { ChatPanel } from '@eva-suite/svelte';
  
  let messages = [];
  
  function handleSend(event) {
    messages = [...messages, { role: 'user', text: event.detail }];
    // Process and respond
  }
</script>

<ChatPanel 
  {messages}
  on:sendMessage={handleSend}
/>`
    };
    return codes[this.framework];
  }

  render() {
    return html`
      <div class="hero">
        <div class="hero-badge">🇨🇦 Government of Canada Design System</div>
        <h1>EVA Sovereign UI Lab</h1>
        <p>
          88 Production-Ready Web Components for Government Services<br>
          Built with GC Design System • Accessible • Bilingual • Framework-Agnostic
        </p>
      </div>

      <div class="demo-section">
        <h2>🚀 Live Interactive Demo</h2>
        <p style="margin: 0 0 1rem 0; color: #555;">
          Try the GC Chat Assistant below, then see how to implement it in your framework
        </p>
        
        <div class="demo-layout">
          <div class="demo-panel">
            <h3>💬 Live Chat Assistant</h3>
            <eva-chat-panel></eva-chat-panel>
          </div>
          
          <div class="demo-panel">
            <h3>📝 Implementation Code</h3>
            <lab-framework-switcher 
              .framework="${this.framework}"
              @framework-change="${this.handleFrameworkChange}"
            ></lab-framework-switcher>
            <lab-code-panel
              .framework="${this.framework}"
              .code="${this.getChatCode()}"
              language="typescript"
            ></lab-code-panel>
          </div>
        </div>
      </div>

      <div class="features">
        <div class="feature-card">
          <span class="feature-icon">🏛️</span>
          <h3>Official GC Design</h3>
          <p>
            Full compliance with Canada.ca design system, including official wordmark, 
            FIP branding, and WCAG 2.2 AA accessibility standards.
          </p>
        </div>
        
        <div class="feature-card">
          <span class="feature-icon">🌐</span>
          <h3>Framework Agnostic</h3>
          <p>
            Use with Vanilla JS, React, Vue, Angular, or Svelte. Web Components work 
            everywhere with zero configuration required.
          </p>
        </div>
        
        <div class="feature-card">
          <span class="feature-icon">🇨🇦🇫🇷</span>
          <h3>Bilingual Ready</h3>
          <p>
            Built-in English/French support with seamless language switching. All 
            components fully translated for both official languages.
          </p>
        </div>
      </div>

      <div class="quick-start">
        <h2>⚡ Quick Start</h2>
        <p style="margin: 0 0 1rem 0; color: #555;">Install and start building in 30 seconds</p>
        <pre>npm install @eva-suite/sovereign-ui-wc</pre>
        <pre>import '@eva-suite/sovereign-ui-wc';

// Start using components
&lt;eva-gc-button variant="primary"&gt;Submit&lt;/eva-gc-button&gt;
&lt;eva-chat-panel&gt;&lt;/eva-chat-panel&gt;</pre>
      </div>

      <div class="nav-cards">
        <a href="/lab/scenario-1" class="nav-card">
          <span class="nav-icon">💬</span>
          <h3>Chat Assistant</h3>
          <p>GC-branded chat with AI integration</p>
        </a>
        
        <a href="/lab/scenario-2" class="nav-card">
          <span class="nav-icon">📝</span>
          <h3>Complex Forms</h3>
          <p>Multi-step forms with validation</p>
        </a>
        
        <a href="/lab/scenario-3" class="nav-card">
          <span class="nav-icon">🎨</span>
          <h3>Theme Showcase</h3>
          <p>Light, dark, and high-contrast themes</p>
        </a>
      </div>

      <eva-gc-footer></eva-gc-footer>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-home-page': LabHomePage;
  }
}
