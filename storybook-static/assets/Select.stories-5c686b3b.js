import{j as e}from"./jsx-runtime-47c18db8.js";import{Z as c,_ as t}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const y={component:c,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},l={name:"Select Field",args:{},render:n=>e.jsxs(c,{...n,label:"Hello there...",description:"Wowie!",defaultSelectedKey:"monday",placeholder:"Select a day",children:[e.jsx(t,{textValue:"monday",children:"Monday"}),e.jsx(t,{children:"Tuesday"}),e.jsx(t,{children:"Wednesday"}),e.jsx(t,{children:"Thursday"}),e.jsx(t,{children:"Friday"}),e.jsx(t,{children:"Saturday"}),e.jsx(t,{children:"Sunday"})]})};var r,a,d;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: "Select Field",
  args: {},
  render: args => <SelectField {...args} label="Hello there..." description="Wowie!" defaultSelectedKey="monday" placeholder="Select a day">
      <SelectItem textValue="monday">Monday</SelectItem>
      <SelectItem>Tuesday</SelectItem>
      <SelectItem>Wednesday</SelectItem>
      <SelectItem>Thursday</SelectItem>
      <SelectItem>Friday</SelectItem>
      <SelectItem>Saturday</SelectItem>
      <SelectItem>Sunday</SelectItem>
    </SelectField>
}`,...(d=(a=l.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const p=["StorySelectField"];export{l as StorySelectField,p as __namedExportsOrder,y as default};
