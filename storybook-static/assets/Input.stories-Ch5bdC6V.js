import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{t as u}from"./bundle-mjs-CLJs87Zn.js";import{r as L}from"./iframe-Fy5-yxST.js";import{c as k}from"./clsx-B-dksMZM.js";const I=({className:_="",onChange:w,isDisabled:d=!1,placeholder:D="",error:e="",label:c,inputId:t=L.useId(),required:W=!1})=>{const j="mt-1 block w-full rounded-md border shadow-sm text-text-primary text-sm p-2 ",O=k({"border-border focus:border-primary-8 focus:outline-primary-8":!e&&!d,"border-error focus:border-error":e,"bg-neutral-3 cursor-not-allowed border-text-disabled":d});return a.jsxs("div",{className:u(_,"tw"),children:[c&&a.jsxs("label",{htmlFor:t,className:"block text-sm font-medium text-text-primary",children:[c,W&&a.jsx("span",{className:"text-error ml-1",children:"*"})]}),a.jsx("input",{id:t,type:"text",disabled:d,placeholder:D,onChange:V=>w(V.target.value),className:u(j,O),"aria-invalid":!!e,"aria-describedby":e?`${t}-error`:void 0}),e&&a.jsx("p",{id:`${t}-error`,role:"alert",className:"mt-1 text-sm text-error",children:e})]})};I.__docgenInfo={description:"",methods:[],displayName:"Input",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},error:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},inputId:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"useId()",computed:!0}}}};const{action:r}=__STORYBOOK_MODULE_ACTIONS__,R={title:"Components/Input",component:I,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{className:{control:"text",description:"Additional CSS classes"},onChange:{action:"changed",description:"Function called when input value changes"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},label:{control:"text",description:"The label of the input"},placeholder:{control:"text",description:"The placeholder of the input"},error:{control:"text",description:"The error message of the input"},required:{control:"boolean",description:"Whether the input is required"},inputId:{control:"text",description:"The id of the input for accessibility"}}},s={args:{placeholder:"Enter text...",onChange:r("onChange")}},n={args:{label:"Email",placeholder:"Enter your email",required:!0,onChange:r("onChange")}},o={args:{label:"Email",placeholder:"Enter your email",error:"Please enter a valid email address",onChange:r("onChange")}},l={args:{label:"Disabled Input",placeholder:"Cannot edit this field",isDisabled:!0,onChange:r("onChange")}},i={args:{label:"Custom Styled Input",className:"max-w-md",onChange:r("onChange")}};var p,m,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    onChange: action('onChange')
  }
}`,...(h=(m=s.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    required: true,
    onChange: action('onChange')
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var C,x,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Please enter a valid email address',
    onChange: action('onChange')
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var v,E,T;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit this field',
    isDisabled: true,
    onChange: action('onChange')
  }
}`,...(T=(E=l.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var q,N,S;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Input',
    className: 'max-w-md',
    onChange: action('onChange')
  }
}`,...(S=(N=i.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const $=["Default","WithLabel","WithError","Disabled","WithCustomClass"];export{s as Default,l as Disabled,i as WithCustomClass,o as WithError,n as WithLabel,$ as __namedExportsOrder,R as default};
