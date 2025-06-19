import{j as B}from"./jsx-runtime-D_zvdyIk.js";import{t as L}from"./bundle-mjs-CLJs87Zn.js";const f=({children:y,onClick:k,disabled:o,className:x="",isLoading:a})=>B.jsx("button",{onClick:k,disabled:o||a,className:L("px-4 py-2 text-sm rounded-md shadow-sm focus:outline-none transition-colors",`${o||a?"bg-primary-disabled text-primary-contrast cursor-not-allowed":"bg-primary-active text-primary-contrast hover:bg-primary-10"}`,x),children:a?"Loading...":y});f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const D={title:"Components/Button",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{onClick:{action:"clicked"},disabled:{control:"boolean",description:"Whether the button is disabled"},isLoading:{control:"boolean",description:"Whether the button is in loading state"},className:{control:"text",description:"Additional CSS classes"},children:{control:"text",description:"Button content"}}},e={args:{children:"Click me",onClick:()=>{},disabled:!1,isLoading:!1}},s={args:{children:"Disabled Button",onClick:()=>{},disabled:!0}},t={args:{children:"Loading Button",onClick:()=>{},isLoading:!0}},r={args:{children:"Custom Styled Button",onClick:()=>{},className:"some-class underline"}};var n,i,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    children: 'Click me',
    onClick: () => {},
    disabled: false,
    isLoading: false
  }
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,l,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    onClick: () => {},
    disabled: true
  }
}`,...(u=(l=s.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var m,p,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Loading Button',
    onClick: () => {},
    isLoading: true
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,h,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: 'Custom Styled Button',
    onClick: () => {},
    className: 'some-class underline'
  }
}`,...(C=(h=r.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};const T=["Default","Disabled","Loading","WithCustomClass"];export{e as Default,s as Disabled,t as Loading,r as WithCustomClass,T as __namedExportsOrder,D as default};
