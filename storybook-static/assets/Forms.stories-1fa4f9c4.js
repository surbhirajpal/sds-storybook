import{j as r}from"./jsx-runtime-47c18db8.js";import{F as a}from"./Panels-7af4de04.js";import{I as e,C as m,B as l,f as p}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./useMediaQuery-72382657.js";import"./index-15d90ccd.js";import"./index-4af5d0e8.js";const j={component:a,title:"SDS Compositions/Forms",parameters:{layout:"centered"}},o={name:"Forms",render:i=>r.jsxs(a,{...i,onSubmit:()=>{},children:[r.jsx(e,{label:"Email"}),r.jsx(e,{label:"Password"}),r.jsx(m,{label:"Label",description:"Description"}),r.jsx(l,{align:"justify",children:r.jsx(p,{onPress:()=>{},variant:"primary",children:"Register"})})]})};var t,s,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: "Forms",
  render: args => <FormBox {...args} onSubmit={() => {}}>
      <InputField label="Email" />
      <InputField label="Password" />
      <CheckboxField label="Label" description="Description" />
      <ButtonGroup align="justify">
        <Button onPress={() => {}} variant="primary">
          Register
        </Button>
      </ButtonGroup>
    </FormBox>
}`,...(n=(s=o.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const f=["StoryFormBox"];export{o as StoryFormBox,f as __namedExportsOrder,j as default};
