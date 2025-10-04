import{j as e}from"./jsx-runtime-47c18db8.js";import{a3 as p,g as l,a4 as u}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const B={component:p,title:"SDS Primitives/Buttons",parameters:{layout:"centered"}},n={name:"Icon Button",args:{variant:"primary",size:"medium",isDisabled:!1},argTypes:{size:{control:{type:"select"},options:["small","medium"]},variant:{control:{type:"select"},options:["primary","neutral","subtle"]}},render:({...r})=>e.jsx(p,{...r,children:e.jsx(l,{})})},t={name:"Destructive Icon Button",args:{variant:"danger-primary",size:"medium",isDisabled:!1},argTypes:{size:{control:{type:"select"},options:["small","medium"]},variant:{control:{type:"select"},options:["danger-primary","danger-subtle"]}},render:({...r})=>e.jsx(u,{...r,children:e.jsx(l,{})})};var s,o,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Icon Button",
  args: {
    variant: "primary",
    size: "medium",
    isDisabled: false
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "neutral", "subtle"]
    }
  },
  render: ({
    ...args
  }) => <IconButton {...args}>
      <IconActivity />
    </IconButton>
}`,...(a=(o=n.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var i,c,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Destructive Icon Button",
  args: {
    variant: "danger-primary",
    size: "medium",
    isDisabled: false
  },
  argTypes: {
    size: {
      control: {
        type: "select"
      },
      options: ["small", "medium"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["danger-primary", "danger-subtle"]
    }
  },
  render: ({
    ...args
  }) => <DestructiveIconButton {...args}>
      <IconActivity />
    </DestructiveIconButton>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["StoryIconButton","StoryDestructiveIconButton"];export{t as StoryDestructiveIconButton,n as StoryIconButton,D as __namedExportsOrder,B as default};
