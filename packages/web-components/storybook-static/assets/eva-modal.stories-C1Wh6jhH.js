import{x as o}from"./lit-element-CawQJKOV.js";import"./eva-modal-CFzIucod.js";import"./eva-button-B2ZVfP67.js";import"./EVAElement-Cekp2jMQ.js";var m=Object.freeze,h=Object.defineProperty,l=(d,f)=>m(h(d,"raw",{value:m(d.slice())})),n,r,s;const k={title:"Components/Modal",component:"eva-modal",tags:["autodocs"],argTypes:{open:{control:"boolean"},size:{control:"select",options:["small","medium","large"]},closeOnBackdrop:{control:"boolean"},closeOnEscape:{control:"boolean"}}},e={render:()=>o(n||(n=l([`
    <eva-button id="open-small" variant="primary">Open Small Modal</eva-button>
    <eva-modal id="modal-small" size="small">
      <h2 slot="header">Small Modal</h2>
      <p>This is a small modal (400px max-width).</p>
      <eva-button slot="footer" variant="primary" id="close-small">Close</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-small').addEventListener('click', () => {
        document.getElementById('modal-small').open = true;
      });
      document.getElementById('close-small').addEventListener('click', () => {
        document.getElementById('modal-small').open = false;
      });
    <\/script>
  `])))},a={render:()=>o(r||(r=l([`
    <eva-button id="open-medium" variant="primary">Open Medium Modal</eva-button>
    <eva-modal id="modal-medium" size="medium">
      <h2 slot="header">Medium Modal</h2>
      <p>This is a medium modal (600px max-width) with more content.</p>
      <p>It includes focus trap, Esc to close, and backdrop click to close.</p>
      <eva-button slot="footer" variant="primary" id="close-medium">Close</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-medium').addEventListener('click', () => {
        document.getElementById('modal-medium').open = true;
      });
      document.getElementById('close-medium').addEventListener('click', () => {
        document.getElementById('modal-medium').open = false;
      });
    <\/script>
  `])))},t={render:()=>o(s||(s=l([`
    <eva-button id="open-large" variant="primary">Open Large Modal</eva-button>
    <eva-modal id="modal-large" size="large">
      <h2 slot="header">Large Modal</h2>
      <p>This is a large modal (900px max-width).</p>
      <p>Perfect for displaying detailed content, forms, or data tables.</p>
      <eva-button slot="footer" variant="secondary" id="cancel">Cancel</eva-button>
      <eva-button slot="footer" variant="primary" id="save">Save</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-large').addEventListener('click', () => {
        document.getElementById('modal-large').open = true;
      });
      document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('modal-large').open = false;
      });
      document.getElementById('save').addEventListener('click', () => {
        document.getElementById('modal-large').open = false;
      });
    <\/script>
  `])))};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => html\`
    <eva-button id="open-small" variant="primary">Open Small Modal</eva-button>
    <eva-modal id="modal-small" size="small">
      <h2 slot="header">Small Modal</h2>
      <p>This is a small modal (400px max-width).</p>
      <eva-button slot="footer" variant="primary" id="close-small">Close</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-small').addEventListener('click', () => {
        document.getElementById('modal-small').open = true;
      });
      document.getElementById('close-small').addEventListener('click', () => {
        document.getElementById('modal-small').open = false;
      });
    <\/script>
  \`
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,v,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => html\`
    <eva-button id="open-medium" variant="primary">Open Medium Modal</eva-button>
    <eva-modal id="modal-medium" size="medium">
      <h2 slot="header">Medium Modal</h2>
      <p>This is a medium modal (600px max-width) with more content.</p>
      <p>It includes focus trap, Esc to close, and backdrop click to close.</p>
      <eva-button slot="footer" variant="primary" id="close-medium">Close</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-medium').addEventListener('click', () => {
        document.getElementById('modal-medium').open = true;
      });
      document.getElementById('close-medium').addEventListener('click', () => {
        document.getElementById('modal-medium').open = false;
      });
    <\/script>
  \`
}`,...(g=(v=a.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,E,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <eva-button id="open-large" variant="primary">Open Large Modal</eva-button>
    <eva-modal id="modal-large" size="large">
      <h2 slot="header">Large Modal</h2>
      <p>This is a large modal (900px max-width).</p>
      <p>Perfect for displaying detailed content, forms, or data tables.</p>
      <eva-button slot="footer" variant="secondary" id="cancel">Cancel</eva-button>
      <eva-button slot="footer" variant="primary" id="save">Save</eva-button>
    </eva-modal>
    <script>
      document.getElementById('open-large').addEventListener('click', () => {
        document.getElementById('modal-large').open = true;
      });
      document.getElementById('cancel').addEventListener('click', () => {
        document.getElementById('modal-large').open = false;
      });
      document.getElementById('save').addEventListener('click', () => {
        document.getElementById('modal-large').open = false;
      });
    <\/script>
  \`
}`,...(b=(E=t.parameters)==null?void 0:E.docs)==null?void 0:b.source}}};const x=["Small","Medium","Large"];export{t as Large,a as Medium,e as Small,x as __namedExportsOrder,k as default};
