import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{t as C}from"./bundle-mjs-CLJs87Zn.js";import{C as v}from"./CardHeader-ewwzXgN5.js";import{C as x}from"./CardDescription-Bz_wrPID.js";const p=({className:h="",children:g})=>e.jsx("div",{className:C(h,"tw"),children:e.jsx("div",{className:"m-6 p-6 border text-text-primary bg-surface border-border rounded-lg shadow-sm",children:g})});p.__docgenInfo={description:"",methods:[],displayName:"Card",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I={title:"Components/Card",component:p,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS classes"},children:{description:"The content of the card"}}},r={args:{children:e.jsx("div",{children:"I'm a card."})}},a={args:{className:"some-class underline",children:e.jsx("div",{children:"I'm a card."})}},f="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id felis in tellus porttitor auctor. Donec mauris arcu, rhoncus ac erat et, sodales vestibulum ipsum. Donec semper ornare mauris vitae pretium. In lorem orci, vehicula et lacinia ac, tincidunt eget est. Suspendisse ut odio lorem. In vulputate, dolor vel convallis accumsan, lacus arcu cursus lacus, eu dignissim mi erat et ex. Sed non metus nec elit ultricies maximus vitae porta neque. Donec venenatis venenatis elit ut auctor. Sed dui lectus, porttitor eu viverra eget, accumsan at tortor.",s={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(v,{children:"Card Header"}),e.jsx(x,{children:f})]})}};var t,o,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: <div>I'm a card.</div>
  }
}`,...(i=(o=r.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var c,n,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    className: 'some-class underline',
    children: <div>I'm a card.</div>
  }
}`,...(d=(n=a.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var m,l,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: <>
        <CardHeader>Card Header</CardHeader>
        <CardDescription>{mockDesription}</CardDescription>
      </>
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};const y=["Default","WithCustomClass","WithContent"];export{r as Default,s as WithContent,a as WithCustomClass,y as __namedExportsOrder,I as default};
