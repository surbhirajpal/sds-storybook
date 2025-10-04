import{j as e}from"./jsx-runtime-47c18db8.js";import{av as c,a1 as u,a2 as r}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const v={component:c,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},a={name:"Radio Field",args:{},render:i=>e.jsx(u,{children:e.jsx(r,{...i,value:"hello",label:"This is a radio",description:"This is a radio description"})})},o={name:"Radio Group",args:{},render:i=>e.jsxs(u,{label:"Hello",description:"I am a description",...i,onChange:console.log,children:[e.jsx(r,{value:"one",children:"Value one"}),e.jsx(r,{value:"two",children:"Value two"}),e.jsx(r,{value:"three",children:"Value three"})]})};var s,d,n;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Radio Field",
  args: {},
  render: args => {
    return <RadioGroup>
        <RadioField {...args} value="hello" label="This is a radio" description="This is a radio description" />
      </RadioGroup>;
  }
}`,...(n=(d=a.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var l,t,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Radio Group",
  args: {},
  render: args => <RadioGroup label="Hello" description="I am a description" {...args} onChange={console.log}>
      <RadioField value="one">Value one</RadioField>
      <RadioField value="two">Value two</RadioField>
      <RadioField value="three">Value three</RadioField>
    </RadioGroup>
}`,...(p=(t=o.parameters)==null?void 0:t.docs)==null?void 0:p.source}}};const x=["StoryRadioField","StoryRadioGroup"];export{a as StoryRadioField,o as StoryRadioGroup,x as __namedExportsOrder,v as default};
