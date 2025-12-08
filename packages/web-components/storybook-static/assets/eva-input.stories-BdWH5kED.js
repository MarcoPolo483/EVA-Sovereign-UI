import{x as e}from"./lit-element-CawQJKOV.js";import"./eva-input-DQPfHoC4.js";import"./EVAElement-Cekp2jMQ.js";const q={title:"Components/Input",component:"eva-input",tags:["autodocs"],argTypes:{label:{control:"text"},type:{control:"select",options:["text","email","password","tel","url","number"]},placeholder:{control:"text"},required:{control:"boolean"},error:{control:"text"},hint:{control:"text"},maxlength:{control:"number"}}},r={render:()=>e`
    <eva-input label="Full Name" placeholder="Enter your name"></eva-input>
  `},a={render:()=>e`
    <eva-input
      label="Email Address"
      type="email"
      placeholder="you@example.com"
      required
    ></eva-input>
  `},t={render:()=>e`
    <eva-input
      label="Password"
      type="password"
      hint="Must be at least 8 characters"
      required
    ></eva-input>
  `},n={render:()=>e`
    <eva-input
      label="Phone Number"
      type="tel"
      value="123-456"
      error="Invalid phone number format"
    ></eva-input>
  `},o={render:()=>e`
    <eva-input
      label="Bio"
      placeholder="Tell us about yourself"
      maxlength="200"
      value="I love web components"
    ></eva-input>
  `};var l,s,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <eva-input label="Full Name" placeholder="Enter your name"></eva-input>
  \`
}`,...(p=(s=r.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,i,c;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <eva-input
      label="Email Address"
      type="email"
      placeholder="you@example.com"
      required
    ></eva-input>
  \`
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,h;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <eva-input
      label="Password"
      type="password"
      hint="Must be at least 8 characters"
      required
    ></eva-input>
  \`
}`,...(h=(d=t.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var v,b,y;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => html\`
    <eva-input
      label="Phone Number"
      type="tel"
      value="123-456"
      error="Invalid phone number format"
    ></eva-input>
  \`
}`,...(y=(b=n.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,g,E;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <eva-input
      label="Bio"
      placeholder="Tell us about yourself"
      maxlength="200"
      value="I love web components"
    ></eva-input>
  \`
}`,...(E=(g=o.parameters)==null?void 0:g.docs)==null?void 0:E.source}}};const C=["Basic","Email","WithHint","WithError","WithCharCounter"];export{r as Basic,a as Email,o as WithCharCounter,n as WithError,t as WithHint,C as __namedExportsOrder,q as default};
