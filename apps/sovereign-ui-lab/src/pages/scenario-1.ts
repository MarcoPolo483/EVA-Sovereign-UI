/**
 * Scenario 1: GC Chat Assistant
 * Interactive chat with framework examples
 */

import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '../components/framework-switcher';
import '../components/code-panel';
import type { Framework } from '../components/framework-switcher';

interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  citations?: string[];
}

@customElement('lab-scenario-1')
export class LabScenario1 extends LitElement {
  @state() private messages: ChatMessage[] = [];
  @state() private inputValue = '';
  @state() private isLoading = false;
  @state() private framework: Framework = 'vanilla';
  @state() private selectedTopics = new Set<string>();

  static styles = css`
    :host {
      display: block;
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }

    .page-header {
      margin-bottom: 2rem;
    }

    h1 {
      font-family: 'Lato', sans-serif;
      font-size: 2.5rem;
      margin: 0 0 0.5rem 0;
      color: #26374a;
      font-weight: 700;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #555;
      margin: 0;
    }

    .main-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      margin-top: 2rem;
    }

    @media (max-width: 968px) {
      .main-layout {
        grid-template-columns: 1fr;
      }
    }

    .demo-section {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .demo-section h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.5rem;
      color: #26374a;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .code-section {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 12px;
      padding: 2rem;
    }

    .code-section h2 {
      font-family: 'Lato', sans-serif;
      font-size: 1.5rem;
      color: #26374a;
      margin: 0 0 1.5rem 0;
      font-weight: 600;
    }

    .chat-layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
      height: calc(100vh - 300px);
    }

    .sidebar {
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 8px;
      padding: 1.5rem;
      overflow-y: auto;
    }

    .sidebar h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--eva-color-primary, #26374a);
    }

    .topic-filters {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    .topic-filter {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      border-radius: 4px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .topic-filter:hover {
      background: var(--eva-color-background-hover, #f0f0f0);
    }

    .topic-filter input[type="checkbox"] {
      cursor: pointer;
    }

    .chat-container {
      display: flex;
      flex-direction: column;
      background: var(--eva-color-background-elevated, #fff);
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 8px;
      overflow: hidden;
    }

    .messages-container {
      flex: 1;
      overflow-y: auto;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .message {
      display: flex;
      gap: 1rem;
      max-width: 80%;
    }

    .message.user {
      align-self: flex-end;
      flex-direction: row-reverse;
    }

    .message-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      flex-shrink: 0;
    }

    .message.user .message-avatar {
      background: var(--eva-color-secondary, #2b5a8c);
    }

    .message-content {
      background: var(--eva-color-background, #f5f5f5);
      padding: 1rem;
      border-radius: 12px;
      flex: 1;
    }

    .message.user .message-content {
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
    }

    .message-text {
      margin: 0;
      line-height: 1.5;
    }

    .message-citations {
      margin-top: 0.75rem;
      padding-top: 0.75rem;
      border-top: 1px solid rgba(0,0,0,0.1);
      font-size: 0.9rem;
    }

    .citation-link {
      color: var(--eva-color-link, #284162);
      text-decoration: none;
      display: block;
      margin-top: 0.25rem;
    }

    .citation-link:hover {
      text-decoration: underline;
    }

    .message.user .citation-link {
      color: var(--eva-color-on-primary, #fff);
    }

    .message-timestamp {
      font-size: 0.8rem;
      color: var(--eva-color-text-secondary, #666);
      margin-top: 0.25rem;
    }

    .input-container {
      border-top: 1px solid var(--eva-color-border, #ddd);
      padding: 1rem 1.5rem;
      display: flex;
      gap: 1rem;
      align-items: flex-end;
    }

    .input-wrapper {
      flex: 1;
    }

    .chat-input {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--eva-color-border, #ddd);
      border-radius: 8px;
      font-size: 1rem;
      font-family: inherit;
      resize: vertical;
      min-height: 60px;
    }

    .chat-input:focus {
      outline: none;
      border-color: var(--eva-color-primary, #26374a);
      box-shadow: 0 0 0 3px rgba(38, 55, 74, 0.1);
    }

    .send-button {
      padding: 0.75rem 2rem;
      background: var(--eva-color-primary, #26374a);
      color: var(--eva-color-on-primary, #fff);
      border: none;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.2s;
    }

    .send-button:hover:not(:disabled) {
      opacity: 0.9;
    }

    .send-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .loading-indicator {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: var(--eva-color-text-secondary, #666);
      padding: 1rem;
    }

    .loading-dots {
      display: flex;
      gap: 0.25rem;
    }

    .loading-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--eva-color-primary, #26374a);
      animation: pulse 1.4s infinite ease-in-out both;
    }

    .loading-dot:nth-child(1) { animation-delay: -0.32s; }
    .loading-dot:nth-child(2) { animation-delay: -0.16s; }

    @keyframes pulse {
      0%, 80%, 100% { opacity: 0.3; transform: scale(0.8); }
      40% { opacity: 1; transform: scale(1); }
    }

    .welcome-message {
      text-align: center;
      padding: 3rem 2rem;
      color: var(--eva-color-text-secondary, #666);
    }

    .welcome-message h3 {
      color: var(--eva-color-primary, #26374a);
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .chat-layout {
        grid-template-columns: 1fr;
      }

      .sidebar {
        height: auto;
        margin-bottom: 1rem;
      }

      .message {
        max-width: 95%;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.initializeChat();
  }

  private initializeChat() {
    // Add welcome message
    this.messages = [{
      id: '1',
      sender: 'assistant',
      content: 'Welcome to the Government of Canada Chat Assistant! How can I help you today?',
      timestamp: new Date(),
    }];
  }

  private handleTopicChange(topic: string, checked: boolean) {
    if (checked) {
      this.selectedTopics.add(topic);
    } else {
      this.selectedTopics.delete(topic);
    }
    this.requestUpdate();
  }

  private handleInput(e: Event) {
    const textarea = e.target as HTMLTextAreaElement;
    this.inputValue = textarea.value;
  }

  private async handleSend() {
    if (!this.inputValue.trim() || this.isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: this.inputValue,
      timestamp: new Date(),
    };

    this.messages = [...this.messages, userMessage];
    this.inputValue = '';
    this.isLoading = true;

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Generate mock response
    const assistantMessage: ChatMessage = {
      id: (Date.now() + 1).toString(),
      sender: 'assistant',
      content: this.generateMockResponse(userMessage.content),
      timestamp: new Date(),
      citations: [
        'Canada.ca - Government Services',
        'Service Canada Information',
      ],
    };

    this.messages = [...this.messages, assistantMessage];
    this.isLoading = false;

    // Announce to screen readers
  }

  private generateMockResponse(userInput: string): string {
    const responses = [
      'Thank you for your question. Based on Government of Canada guidelines, I can help you with that.',
      'I understand your inquiry. Let me provide you with relevant information from our official resources.',
      'That\'s a great question. Here\'s what you need to know according to current policies.',
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }

  private handleKeyPress(e: KeyboardEvent) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      this.handleSend();
    }
  }

  private handleFrameworkChange = (e: CustomEvent<{ framework: Framework }>) => {
    this.framework = e.detail.framework;
  };

  private getChatCode(): string {
    const codes = {
      vanilla: `<!-- Basic Chat Setup -->
<eva-chat-panel id="gcChat"></eva-chat-panel>

<script type="module">
  const chat = document.getElementById('gcChat');
  
  chat.addEventListener('message-sent', async (e) => {
    const userMessage = e.detail.message;
    
    // Send to your backend API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage })
    });
    
    const data = await response.json();
    chat.addMessage('assistant', data.reply);
  });
</script>`,
      react: `import { ChatPanel } from '@eva-suite/react';
import { useState } from 'react';

export function GCChatAssistant() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: 'How can I help you today?' }
  ]);

  const handleSend = async (text: string) => {
    setMessages([...messages, { role: 'user', text }]);
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    
    const data = await response.json();
    setMessages(prev => [...prev, { 
      role: 'assistant', 
      text: data.reply 
    }]);
  };

  return (
    <ChatPanel 
      messages={messages}
      onSendMessage={handleSend}
      placeholder="Ask about GC services..."
    />
  );
}`,
      vue: `<script setup>
import { EVAChatPanel } from '@eva-suite/vue';
import { ref } from 'vue';

const messages = ref([
  { role: 'assistant', text: 'How can I help you today?' }
]);

const handleSend = async (text) => {
  messages.value.push({ role: 'user', text });
  
  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: text })
  });
  
  const data = await response.json();
  messages.value.push({ 
    role: 'assistant', 
    text: data.reply 
  });
};
</script>

<template>
  <EVAChatPanel 
    :messages="messages"
    @send-message="handleSend"
    placeholder="Ask about GC services..."
  />
</template>`,
      angular: `import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gc-chat',
  template: \`
    <eva-chat-panel 
      [messages]="messages"
      (sendMessage)="handleSend($event)"
      placeholder="Ask about GC services..."
    ></eva-chat-panel>
  \`
})
export class GCChatComponent {
  messages: any[] = [
    { role: 'assistant', text: 'How can I help you today?' }
  ];

  constructor(private http: HttpClient) {}

  async handleSend(text: string) {
    this.messages.push({ role: 'user', text });
    
    const response = await this.http.post('/api/chat', { 
      message: text 
    }).toPromise();
    
    this.messages.push({ 
      role: 'assistant', 
      text: response.reply 
    });
  }
}`,
      svelte: `<script>
  import { ChatPanel } from '@eva-suite/svelte';
  
  let messages = [
    { role: 'assistant', text: 'How can I help you today?' }
  ];
  
  async function handleSend(event) {
    const text = event.detail;
    messages = [...messages, { role: 'user', text }];
    
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text })
    });
    
    const data = await response.json();
    messages = [...messages, { 
      role: 'assistant', 
      text: data.reply 
    }];
  }
</script>

<ChatPanel 
  {messages}
  on:sendMessage={handleSend}
  placeholder="Ask about GC services..."
/>`
    };
    return codes[this.framework];
  }

  private formatTime(date: Date): string {
    return date.toLocaleTimeString('en-CA', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  }

  render() {
    return html`
      <div class="page-header">
        <h1>💬 GC Chat Assistant</h1>
        <p class="subtitle">Interactive chat with framework implementation examples</p>
      </div>

      <div class="main-layout">
        <!-- Live Demo Section -->
        <div class="demo-section">
          <h2>Live Demo</h2>
          <eva-chat-panel></eva-chat-panel>
        </div>

        <!-- Code Section -->
        <div class="code-section">
          <h2>Implementation Code</h2>
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

      <div class="chat-layout" style="display: none;">
        <!-- Original sidebar code (hidden for simplified demo) -->
        <aside class="sidebar" role="complementary" aria-label="Topic filters">
          <h2>Topics</h2>
          <div class="topic-filters" role="group" aria-label="Filter by topic">
            ${[
              { id: 'general', label: 'General Information' },
              { id: 'benefits', label: 'Benefits & Programs' },
              { id: 'taxes', label: 'Taxes' },
              { id: 'immigration', label: 'Immigration' },
              { id: 'travel', label: 'Travel' },
              { id: 'business', label: 'Business' },
            ].map(topic => html`
              <label class="topic-filter">
                <input 
                  type="checkbox"
                  .checked=${false}
                  aria-label="Filter ${topic.label}"
                >
                ${topic.label}
              </label>
            `)}
          </div>
        </aside>

        <!-- Chat container -->
        <div class="chat-container" role="main">
          <div 
            class="messages-container" 
            role="log" 
            aria-label="Chat messages"
            aria-live="polite"
            aria-atomic="false"
          >
            ${this.messages.length === 0 ? html`
              <div class="welcome-message">
                <h3>👋 Welcome!</h3>
                <p>Ask me anything about Government of Canada services.</p>
                <p>I can help you find information about benefits, taxes, immigration, and more.</p>
              </div>
            ` : ''}

            ${this.messages.map(msg => html`
              <div class="message ${msg.sender}" role="article">
                <div class="message-avatar" aria-hidden="true">
                  ${msg.sender === 'user' ? 'U' : 'GC'}
                </div>
                <div class="message-content">
                  <p class="message-text">${msg.content}</p>
                  
                  ${msg.citations ? html`
                    <div class="message-citations">
                      <strong>Sources:</strong>
                      ${msg.citations.map(citation => html`
                        <a href="#" class="citation-link" @click=${(e: Event) => e.preventDefault()}>
                          📎 ${citation}
                        </a>
                      `)}
                    </div>
                  ` : ''}
                  
                  <div class="message-timestamp">
                    ${this.formatTime(msg.timestamp)}
                  </div>
                </div>
              </div>
            `)}

            ${this.isLoading ? html`
              <div class="loading-indicator" role="status" aria-label="Loading response">
                <span>GC Assistant is typing</span>
                <div class="loading-dots" aria-hidden="true">
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                  <div class="loading-dot"></div>
                </div>
              </div>
            ` : ''}
          </div>

          <div class="input-container">
            <div class="input-wrapper">
              <label for="chat-input" class="sr-only">Type your message</label>
              <textarea
                id="chat-input"
                class="chat-input"
                .value=${this.inputValue}
                @input=${this.handleInput}
                @keypress=${this.handleKeyPress}
                placeholder="Type your message... (Press Enter to send, Shift+Enter for new line)"
                aria-label="Type your message"
                ?disabled=${this.isLoading}
              ></textarea>
            </div>
            <button
              class="send-button"
              @click=${this.handleSend}
              ?disabled=${!this.inputValue.trim() || this.isLoading}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'lab-scenario-1': LabScenario1;
  }
}
