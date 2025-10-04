import{j as e}from"./jsx-runtime-47c18db8.js";import{v as p,C as n,w as b}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,F={component:p,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},r={name:"Checkbox Field",args:{isSelected:!0,isIndeterminate:!1,isDisabled:!1},render:s=>{const[{isSelected:a},u]=m();return e.jsx(n,{isDisabled:s.isDisabled,isSelected:a,isIndeterminate:s.isIndeterminate,onChange:()=>u({isSelected:!a}),label:"This is a checkbox",description:"This is a checkbox description"})}},o={name:"Checkbox Group",args:{},render:s=>e.jsxs(b,{label:"Hello",description:"I am a description",...s,onChange:console.log,children:[e.jsx(n,{value:"one",children:"Value one"}),e.jsx(n,{value:"two",children:"Value two"}),e.jsx(n,{value:"three",children:"Value three"})]})};var i,t,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Checkbox Field",
  args: {
    isSelected: true,
    isIndeterminate: false,
    isDisabled: false
  },
  render: args => {
    const [{
      isSelected
    }, updateArgs] = useArgs();
    return <CheckboxField isDisabled={args.isDisabled} isSelected={isSelected} isIndeterminate={args.isIndeterminate} onChange={() => updateArgs({
      isSelected: !isSelected
    })} label="This is a checkbox" description="This is a checkbox description" />;
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};var l,d,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Checkbox Group",
  args: {},
  render: args => {
    return <CheckboxGroup label="Hello" description="I am a description" {...args} onChange={console.log}>
        <CheckboxField value="one">Value one</CheckboxField>
        <CheckboxField value="two">Value two</CheckboxField>
        <CheckboxField value="three">Value three</CheckboxField>
      </CheckboxGroup>;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const I=["StoryCheckboxField","StoryCheckboxGruop"];export{r as StoryCheckboxField,o as StoryCheckboxGruop,I as __namedExportsOrder,F as default};
