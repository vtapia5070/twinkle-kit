import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as k}from"./iframe-Fy5-yxST.js";import{t as M}from"./bundle-mjs-CLJs87Zn.js";import{c as O}from"./clsx-B-dksMZM.js";var s=(e=>(e.Info="info",e.Error="error",e.Success="success",e.Warning="warning",e))(s||{});const v=({className:e="",type:r="info",message:j,onClose:l})=>{const[q,V]=k.useState(!0);let _=O({"bg-primary-3 text-primary-11":r==="info","bg-error text-primary-contrast":r==="error","bg-success text-primary-contrast":r==="success","bg-warning text-primary-contrast":r==="warning"});const D=()=>{V(!1),l&&l()};return q&&m.jsxs("div",{className:M("w-full rounded-lg p-4 flex justify-between",_,e),children:[m.jsx("p",{className:"",children:j}),m.jsx("div",{className:"close",onClick:D,children:"x"})]})};v.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},type:{required:!1,tsType:{name:"AlertType"},description:"",defaultValue:{value:"AlertType.Info",computed:!0}},message:{required:!0,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const G={title:"Components/Alert",component:v,tags:["autodocs"],argTypes:{type:{control:"select",options:["info","error","success","warning"]},className:{control:"text",description:"Additional CSS classes"},message:{control:"text",description:"Alert message"}}},a={args:{message:"A default alert."}},t={args:{type:s.Info,message:"An info alert."}},n={args:{type:s.Success,message:"A success alert."}},o={args:{type:s.Error,message:"An error alert."}},c={args:{type:s.Warning,message:"A warning alert."}},i={args:{className:"some-class underline",message:"A custom alert."}};var p,u,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    message: 'A default alert.'
  }
}`,...(g=(u=a.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,f,y;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: AlertType.Info,
    message: 'An info alert.'
  }
}`,...(y=(f=t.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var A,x,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: AlertType.Success,
    message: 'A success alert.'
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var h,W,S;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: AlertType.Error,
    message: 'An error alert.'
  }
}`,...(S=(W=o.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};var w,C,E;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: AlertType.Warning,
    message: 'A warning alert.'
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,N,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    className: 'some-class underline',
    message: 'A custom alert.'
  }
}`,...(b=(N=i.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const H=["Default","WithTypeInfo","WithTypeSuccess","WithTypeError","WithTypeWarning","WithCustomClass"];export{a as Default,i as WithCustomClass,o as WithTypeError,t as WithTypeInfo,n as WithTypeSuccess,c as WithTypeWarning,H as __namedExportsOrder,G as default};
