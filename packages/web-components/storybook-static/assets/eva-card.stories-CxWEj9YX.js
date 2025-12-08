import{x as d}from"./lit-element-CawQJKOV.js";import"./eva-card-C8mlijEV.js";import"./EVAElement-Cekp2jMQ.js";const w={title:"Components/Card",component:"eva-card",tags:["autodocs"]},e={render:()=>d`
    <eva-card>
      <p>This is a default card with no border.</p>
    </eva-card>
  `},r={render:()=>d`
    <eva-card variant="bordered">
      <p>This is a bordered card with a 1px border.</p>
    </eva-card>
  `},a={render:()=>d`
    <eva-card variant="elevated">
      <p>This is an elevated card with a shadow.</p>
    </eva-card>
  `},t={render:()=>d`
    <eva-card variant="bordered" padding="large">
      <h2 slot="header">Card Header</h2>
      <p>This card uses all three slots: header, default, and footer.</p>
      <p>The content is in the default slot.</p>
      <div slot="footer" style="text-align: right;">
        <eva-button variant="primary">Action</eva-button>
      </div>
    </eva-card>
  `};var o,s,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => html\`
    <eva-card>
      <p>This is a default card with no border.</p>
    </eva-card>
  \`
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => html\`
    <eva-card variant="bordered">
      <p>This is a bordered card with a 1px border.</p>
    </eva-card>
  \`
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,v,h;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => html\`
    <eva-card variant="elevated">
      <p>This is an elevated card with a shadow.</p>
    </eva-card>
  \`
}`,...(h=(v=a.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var m,u,b;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <eva-card variant="bordered" padding="large">
      <h2 slot="header">Card Header</h2>
      <p>This card uses all three slots: header, default, and footer.</p>
      <p>The content is in the default slot.</p>
      <div slot="footer" style="text-align: right;">
        <eva-button variant="primary">Action</eva-button>
      </div>
    </eva-card>
  \`
}`,...(b=(u=t.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const x=["Default","Bordered","Elevated","WithSlots"];export{r as Bordered,e as Default,a as Elevated,t as WithSlots,x as __namedExportsOrder,w as default};
