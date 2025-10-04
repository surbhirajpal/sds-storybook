import{j as e}from"./jsx-runtime-47c18db8.js";import{U as n,V as x,W as b,X as h,b as S,Y as F,I as f,Z as g,_ as a,$ as y,a0 as j,w as v,C as r,a1 as w,a2 as o,B as R,f as I}from"./Grid-0facf985.js";import{r as T}from"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const q={component:n,title:"SDS Primitives/Inputs",parameters:{layout:"centered"}},t={name:"Fieldset",args:{disabled:!1},render:c=>{const[s,p]=T.useState("");return e.jsxs(x,{onSubmit:i=>{i.preventDefault();const m=b(i.currentTarget);p(JSON.stringify(m,null,2))},children:[e.jsxs(n,{disabled:c.disabled,children:[e.jsx(h,{children:"Shipping details"}),e.jsx(S,{children:"Without this your odds of getting your order are low."}),e.jsxs(F,{children:[e.jsx(f,{isRequired:!0,name:"address",defaultValue:"123 Example Ln.",label:"Street address",description:"Hello there"}),e.jsxs(g,{isRequired:!0,name:"country",defaultSelectedKey:"us",label:"Country",description:"I am a select description",children:[e.jsx(a,{id:"ca",children:"Canada"}),e.jsx(a,{id:"mx",children:"Mexico"}),e.jsx(a,{id:"us",children:"United States"})]}),e.jsx(y,{name:"range",label:"Slide here",description:"i love this for us",defaultValue:[0,40],showOutput:!0}),e.jsx(j,{isRequired:!0,defaultValue:"Watch out",name:"notes",label:"Delivery notes",isResizable:!1,description:"If you have a tiger, we'd like to know about it."}),e.jsxs(v,{name:"checkboxes",children:[e.jsx(r,{value:"one",label:"One"}),e.jsx(r,{value:"two",label:"Two"})]}),e.jsxs(w,{name:"radios",children:[e.jsx(o,{value:"one",label:"One"}),e.jsx(o,{value:"two",label:"Two"})]}),e.jsx(r,{isRequired:!0,name:"agree",label:"Do you agreee?",description:"We hope you do"})]}),e.jsx(R,{children:e.jsx(I,{type:"submit",children:"Submit"})})]}),s&&e.jsx("pre",{children:s})]})}};var l,d,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Fieldset",
  args: {
    disabled: false
  },
  render: args => {
    const [output, setOutput] = useState("");
    return <Form onSubmit={e => {
      e.preventDefault();
      const data = formEventTargetToFormData(e.currentTarget);
      setOutput(JSON.stringify(data, null, 2));
    }}>
        <Fieldset disabled={args.disabled}>
          <Legend>Shipping details</Legend>
          <Text>Without this your odds of getting your order are low.</Text>
          <FieldGroup>
            <InputField isRequired name="address" defaultValue="123 Example Ln." label="Street address" description="Hello there" />
            <SelectField isRequired name="country" defaultSelectedKey="us" label="Country" description="I am a select description">
              <SelectItem id="ca">Canada</SelectItem>
              <SelectItem id="mx">Mexico</SelectItem>
              <SelectItem id="us">United States</SelectItem>
            </SelectField>
            <SliderField name="range" label="Slide here" description="i love this for us" defaultValue={[0, 40]} showOutput />
            <TextareaField isRequired defaultValue="Watch out" name="notes" label="Delivery notes" isResizable={false} description="If you have a tiger, we'd like to know about it." />
            <CheckboxGroup name="checkboxes">
              <CheckboxField value="one" label="One" />
              <CheckboxField value="two" label="Two" />
            </CheckboxGroup>
            <RadioGroup name="radios">
              <RadioField value="one" label="One" />
              <RadioField value="two" label="Two" />
            </RadioGroup>
            <CheckboxField isRequired name="agree" label="Do you agreee?" description="We hope you do" />
          </FieldGroup>
          <ButtonGroup>
            <Button type="submit">Submit</Button>
          </ButtonGroup>
        </Fieldset>
        {output && <pre>{output}</pre>}
      </Form>;
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const B=["StoryFieldset"];export{t as StoryFieldset,B as __namedExportsOrder,q as default};
