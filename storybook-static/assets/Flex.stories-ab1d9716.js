import{j as n}from"./jsx-runtime-47c18db8.js";import{F as l,a as r}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const p={component:l,title:"SDS Layout/Flex",parameters:{layout:"centered"}},e=i=>n.jsx("div",{style:{display:"grid",placeItems:"center",padding:"0.5rem 1rem",background:"var(--sds-color-background-brand-default)",color:"var(--sds-color-text-brand-on-brand)"},children:i}),s={name:"Flex",args:{gap:"200",wrap:!0},argTypes:{gap:{control:{type:"select"},options:[void 0,"100","200","300","400","600","800"]}},render:i=>n.jsxs(l,{direction:"column",gap:"600",children:[n.jsxs(l,{...i,container:!0,type:"quarter",children:[n.jsx(r,{size:"full",children:e("full")}),n.jsx(r,{size:"major",children:e("major")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"major",children:e("major")}),n.jsx(r,{size:"half",children:e("half")}),n.jsx(r,{size:"half",children:e("half")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"half",children:e("half")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"half",children:e("half")})]}),n.jsxs(l,{...i,container:!0,type:"third",children:[n.jsx(r,{size:"full",children:e("full")}),n.jsx(r,{size:"major",children:e("major")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"major",children:e("major")}),n.jsx(r,{size:"half",children:e("half")}),n.jsx(r,{size:"half",children:e("half")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")}),n.jsx(r,{size:"minor",children:e("minor")})]}),n.jsxs(l,{...i,container:!0,type:"quarter",children:[e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span"),e("span")]})]})};var m,d,o;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: "Flex",
  args: {
    gap: "200",
    wrap: true
  },
  argTypes: {
    gap: {
      control: {
        type: "select"
      },
      options: [undefined, "100", "200", "300", "400", "600", "800"]
    }
  },
  render: args => <Flex direction="column" gap="600">
      <Flex {...args} container type="quarter">
        <FlexItem size="full">{renderChild("full")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
      </Flex>
      <Flex {...args} container type="third">
        <FlexItem size="full">{renderChild("full")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="major">{renderChild("major")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="half">{renderChild("half")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        <FlexItem size="minor">{renderChild("minor")}</FlexItem>
      </Flex>
      <Flex {...args} container type="quarter">
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
        {renderChild("span")}
      </Flex>
    </Flex>
}`,...(o=(d=s.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};const c=["StoryFlex"];export{s as StoryFlex,c as __namedExportsOrder,p as default};
