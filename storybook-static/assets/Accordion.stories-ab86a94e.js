import{j as e}from"./jsx-runtime-47c18db8.js";import{A as o,o as t,T as m,b as p}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const x={component:o,title:"SDS Primitives/Accordion",parameters:{layout:"centered"}},n={name:"Accordion",args:{},render:()=>e.jsxs(o,{children:[e.jsx(t,{title:"Item 1",children:"Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."}),e.jsx(t,{title:"Item 2",children:"Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."}),e.jsx(t,{title:"Item 3",children:"Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."})]})},r={name:"Accordion Item",args:{},render:()=>e.jsx(o,{children:e.jsxs(t,{title:"Complex Content",hasChildItems:!1,children:[e.jsx(m,{children:"Heading"}),e.jsx(p,{children:"Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."})]})})};var s,i,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Accordion",
  args: {},
  render: () => <Accordion>
      <AccordionItem title="Item 1">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Item 2">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
      <AccordionItem title="Item 3">
        Answer the frequently asked question in a simple sentence, a longish
        paragraph, or even in a list.
      </AccordionItem>
    </Accordion>
}`,...(a=(i=n.parameters)==null?void 0:i.docs)==null?void 0:a.source}}};var c,d,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: "Accordion Item",
  args: {},
  render: () => <Accordion>
      <AccordionItem title="Complex Content" hasChildItems={false}>
        <TextHeading>Heading</TextHeading>
        <Text>
          Answer the frequently asked question in a simple sentence, a longish
          paragraph, or even in a list.
        </Text>
      </AccordionItem>
    </Accordion>
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const q=["StoryAccordion","StoryAccordionItem"];export{n as StoryAccordion,r as StoryAccordionItem,q as __namedExportsOrder,x as default};
