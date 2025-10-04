import{j as n}from"./jsx-runtime-47c18db8.js";import{f as a,t as B,g as h,u as x,B as v}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const G={component:a,title:"SDS Primitives/Buttons",parameters:{layout:"centered"}},r={name:"Button",args:{children:"Hello world",variant:"primary"},argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"}},variant:{control:{type:"select"},options:["primary","neutral","subtle"]}},render:({children:t,...s})=>n.jsxs(a,{...s,children:[n.jsx(B,{}),t,n.jsx(h,{})]})},e={name:"Button Danger",args:{children:"Hello world",variant:"danger-primary"},argTypes:{children:{control:{type:"text"}},size:{control:{type:"select"}},variant:{control:{type:"select"},options:["danger-primary","danger-subtle"]}},render:({children:t,...s})=>n.jsxs(x,{...s,children:[n.jsx(B,{}),t,n.jsx(h,{})]})},o={name:"Button Group",args:{align:"center"},argTypes:{align:{control:{type:"select"},options:["center","start","end","justify","stack"]}},render:({...t})=>n.jsxs(v,{...t,style:{width:300},children:[n.jsx(a,{variant:"neutral",children:"Cancel"}),n.jsx(a,{variant:"primary",children:"Submit"})]})};var c,i,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Button",
  args: {
    children: "Hello world",
    variant: "primary"
  },
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      control: {
        type: "select"
      }
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["primary", "neutral", "subtle"]
    }
  },
  render: ({
    children,
    ...props
  }) => <Button {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </Button>
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Button Danger",
  args: {
    children: "Hello world",
    variant: "danger-primary"
  },
  argTypes: {
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      control: {
        type: "select"
      }
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["danger-primary", "danger-subtle"]
    }
  },
  render: ({
    children,
    ...props
  }) => <ButtonDanger {...props}>
      <IconArrowLeft />
      {children}
      <IconActivity />
    </ButtonDanger>
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var y,m,g;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: "Button Group",
  args: {
    align: "center"
  },
  argTypes: {
    align: {
      control: {
        type: "select"
      },
      options: ["center", "start", "end", "justify", "stack"]
    }
  },
  render: ({
    ...props
  }) => <ButtonGroup {...props} style={{
    width: 300
  }}>
      <Button variant="neutral">Cancel</Button>
      <Button variant="primary">Submit</Button>
    </ButtonGroup>
}`,...(g=(m=o.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};const b=["StoryButton","StoryButtonDanger","StoryButtonGroup"];export{r as StoryButton,e as StoryButtonDanger,o as StoryButtonGroup,b as __namedExportsOrder,G as default};
