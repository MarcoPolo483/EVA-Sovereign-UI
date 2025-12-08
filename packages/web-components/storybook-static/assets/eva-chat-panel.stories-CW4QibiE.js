import{x as g}from"./lit-element-CawQJKOV.js";import"./eva-chat-panel-Qs3T1Uwq.js";import"./EVAElement-Cekp2jMQ.js";import"./state-B8ZcOztO.js";import"./directive-helpers-HCDniILq.js";const I={title:"Components/Chat Panel",component:"eva-chat-panel",tags:["autodocs"],argTypes:{greeting:{control:"text",description:"Welcome message shown when no messages"},isTyping:{control:"boolean",description:"Show typing indicator"}}},t={render:()=>g`
    <eva-chat-panel
      greeting="Hello! I'm EVA, your Government of Canada assistant. How can I help you today?"
    ></eva-chat-panel>
  `},n={render:()=>{const e=document.createElement("eva-chat-panel");return e.greeting="Hello! I'm EVA.",e.messages=[{id:"1",sender:"assistant",content:"Welcome! How can I assist you today?",timestamp:new Date(Date.now()-6e4),type:"text"},{id:"2",sender:"user",content:"Can you help me with my tax return?",timestamp:new Date(Date.now()-3e4),type:"text"},{id:"3",sender:"assistant",content:"Of course! I can help you with tax-related questions. What would you like to know?",timestamp:new Date(Date.now()-1e4),type:"text"}],e}},a={render:()=>{const e=document.createElement("eva-chat-panel");return e.isTyping=!0,e.messages=[{id:"1",sender:"user",content:"Hello, are you there?",timestamp:new Date,type:"text"}],e}},s={render:()=>{const e=document.createElement("eva-chat-panel");return e.messages=[{id:"1",sender:"system",content:"Conversation started",timestamp:new Date(Date.now()-12e4),type:"info"},{id:"2",sender:"assistant",content:"Hello! How can I help?",timestamp:new Date(Date.now()-6e4),type:"text"},{id:"3",sender:"user",content:"I need assistance",timestamp:new Date(Date.now()-3e4),type:"text"}],e}};var o,r,c;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <eva-chat-panel
      greeting="Hello! I'm EVA, your Government of Canada assistant. How can I help you today?"
    ></eva-chat-panel>
  \`
}`,...(c=(r=t.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};var m,i,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const chatPanel = document.createElement('eva-chat-panel');
    chatPanel.greeting = "Hello! I'm EVA.";
    chatPanel.messages = [{
      id: '1',
      sender: 'assistant',
      content: 'Welcome! How can I assist you today?',
      timestamp: new Date(Date.now() - 60000),
      type: 'text'
    }, {
      id: '2',
      sender: 'user',
      content: 'Can you help me with my tax return?',
      timestamp: new Date(Date.now() - 30000),
      type: 'text'
    }, {
      id: '3',
      sender: 'assistant',
      content: 'Of course! I can help you with tax-related questions. What would you like to know?',
      timestamp: new Date(Date.now() - 10000),
      type: 'text'
    }];
    return chatPanel;
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const chatPanel = document.createElement('eva-chat-panel');
    chatPanel.isTyping = true;
    chatPanel.messages = [{
      id: '1',
      sender: 'user',
      content: 'Hello, are you there?',
      timestamp: new Date(),
      type: 'text'
    }];
    return chatPanel;
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var h,y,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const chatPanel = document.createElement('eva-chat-panel');
    chatPanel.messages = [{
      id: '1',
      sender: 'system',
      content: 'Conversation started',
      timestamp: new Date(Date.now() - 120000),
      type: 'info'
    }, {
      id: '2',
      sender: 'assistant',
      content: 'Hello! How can I help?',
      timestamp: new Date(Date.now() - 60000),
      type: 'text'
    }, {
      id: '3',
      sender: 'user',
      content: 'I need assistance',
      timestamp: new Date(Date.now() - 30000),
      type: 'text'
    }];
    return chatPanel;
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};const E=["Empty","WithMessages","Typing","SystemMessage"];export{t as Empty,s as SystemMessage,a as Typing,n as WithMessages,E as __namedExportsOrder,I as default};
