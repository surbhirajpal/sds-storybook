import{j as t}from"./jsx-runtime-47c18db8.js";import{p as c}from"./index-15d90ccd.js";import{a8 as a,a9 as e,aa as n,ab as x}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const g={component:a,title:"SDS Primitives/ListBox",parameters:{layout:"centered"}},o={name:"List Box",args:{layout:"stack",orientation:"vertical"},argTypes:{layout:{options:["stack","grid"],control:{type:"select"}},orientation:{options:["vertical","horizontal"],control:{type:"select"}}},render:l=>t.jsxs(a,{...l,children:[t.jsx(e,{children:"Aardvark"}),t.jsx(e,{children:"Cat"}),t.jsx(e,{children:"Dog"}),t.jsx(e,{children:"Kangaroo"}),t.jsx(e,{children:"Koala"}),t.jsx(e,{children:"Penguin"}),t.jsx(e,{children:"Snake"}),t.jsx(e,{textValue:"Turtle",children:t.jsx(n,{children:"Turtle"})}),t.jsxs(e,{textValue:"Admin",children:[t.jsx("img",{slot:"image",src:c}),t.jsx(n,{children:"Admin"}),t.jsx(x,{children:"Full access"})]})]})};var s,r,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "List Box",
  args: {
    layout: "stack",
    orientation: "vertical"
  },
  argTypes: {
    layout: {
      options: ["stack", "grid"],
      control: {
        type: "select"
      }
    },
    orientation: {
      options: ["vertical", "horizontal"],
      control: {
        type: "select"
      }
    }
  },
  render: args => {
    return <ListBox {...args}>
        <ListBoxItem>Aardvark</ListBoxItem>
        <ListBoxItem>Cat</ListBoxItem>
        <ListBoxItem>Dog</ListBoxItem>
        <ListBoxItem>Kangaroo</ListBoxItem>
        <ListBoxItem>Koala</ListBoxItem>
        <ListBoxItem>Penguin</ListBoxItem>
        <ListBoxItem>Snake</ListBoxItem>
        <ListBoxItem textValue="Turtle">
          <Label>Turtle</Label>
        </ListBoxItem>
        <ListBoxItem textValue="Admin">
          <img slot="image" src={placeholder} />
          <Label>Admin</Label>
          <Description>Full access</Description>
        </ListBoxItem>
      </ListBox>;
  }
}`,...(i=(r=o.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const I=["StoryListBox"];export{o as StoryListBox,I as __namedExportsOrder,g as default};
