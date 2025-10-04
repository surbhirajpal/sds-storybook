import{j as e}from"./jsx-runtime-47c18db8.js";import{ac as m,y as c,ad as n,ae as r,af as u,ag as a,ah as l}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const I={component:m,title:"SDS Primitives/Menu",parameters:{layout:"centered"}},t={name:"Menu",args:{placement:"bottom left"},render:M=>e.jsxs(m,{...M,label:"Open menu",icon:e.jsx(c,{}),children:[e.jsx(n,{children:"New…"}),e.jsx(n,{isDisabled:!0,children:"Open…"}),e.jsx(r,{}),e.jsxs(n,{children:[e.jsx(u,{children:"Save"}),e.jsx(a,{children:"⌘S"})]}),e.jsxs(n,{children:[e.jsx(u,{children:"Delete"}),e.jsx(l,{children:"Delete this thing forever"}),e.jsx(a,{children:"⇧⌘⌫"})]}),e.jsx(n,{children:"Save as…"}),e.jsx(n,{children:"Rename…"}),e.jsx(r,{}),e.jsx(n,{children:"Page setup…"}),e.jsx(n,{children:"Print…"})]})};var s,o,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: "Menu",
  args: {
    placement: "bottom left"
  },
  render: args => {
    return <MenuButton {...args} label="Open menu" icon={<IconMenu />}>
        <MenuItem>New…</MenuItem>
        <MenuItem isDisabled>Open…</MenuItem>
        <MenuSeparator />
        <MenuItem>
          <MenuLabel>Save</MenuLabel>
          <MenuShortcut>⌘S</MenuShortcut>
        </MenuItem>
        <MenuItem>
          <MenuLabel>Delete</MenuLabel>
          <MenuDescription>Delete this thing forever</MenuDescription>
          <MenuShortcut>⇧⌘⌫</MenuShortcut>
        </MenuItem>
        <MenuItem>Save as…</MenuItem>
        <MenuItem>Rename…</MenuItem>
        <MenuSeparator />
        <MenuItem>Page setup…</MenuItem>
        <MenuItem>Print…</MenuItem>
      </MenuButton>;
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const S=["StoryMenu"];export{t as StoryMenu,S as __namedExportsOrder,I as default};
