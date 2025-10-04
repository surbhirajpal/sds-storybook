import{j as n}from"./jsx-runtime-47c18db8.js";import{aW as e,F as p,aX as t,a3 as o,aY as g,ao as r,aR as a,aZ as x,t as m,a_ as h}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const I={component:e,title:"SDS Primitives/Tooltip",parameters:{layout:"centered"}},i={name:"Tooltip",render:()=>n.jsxs(p,{type:"half",gap:"200",alignPrimary:"center",children:[n.jsxs(t,{children:[n.jsx(o,{"aria-label":"Up",children:n.jsx(g,{})}),n.jsxs(e,{placement:"top",children:[n.jsx(r,{children:"Something interesting"}),n.jsx(a,{children:"For help accessing your account, please contact support."})]})]}),n.jsxs(t,{children:[n.jsx(o,{"aria-label":"Down",children:n.jsx(x,{})}),n.jsxs(e,{placement:"bottom",children:[n.jsx(r,{children:"Something interesting"}),n.jsx(a,{children:"For help accessing your account, please contact support."})]})]}),n.jsxs(t,{children:[n.jsx(o,{"aria-label":"Left",children:n.jsx(m,{})}),n.jsxs(e,{placement:"left",children:[n.jsx(r,{children:"Something interesting"}),n.jsx(a,{children:"For help accessing your account, please contact support."})]})]}),n.jsxs(t,{children:[n.jsx(o,{"aria-label":"Right",children:n.jsx(h,{})}),n.jsxs(e,{placement:"right",children:[n.jsx(r,{children:"Something interesting"}),n.jsx(a,{children:"For help accessing your account, please contact support."})]})]})]})};var l,c,s;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Tooltip",
  render: () => <Flex type="half" gap="200" alignPrimary="center">
      <DialogTrigger>
        <IconButton aria-label="Up">
          <IconArrowUp />
        </IconButton>
        <Tooltip placement="top">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Down">
          <IconArrowDown />
        </IconButton>
        <Tooltip placement="bottom">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Left">
          <IconArrowLeft />
        </IconButton>
        <Tooltip placement="left">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
      <DialogTrigger>
        <IconButton aria-label="Right">
          <IconArrowRight />
        </IconButton>
        <Tooltip placement="right">
          <TextStrong>Something interesting</TextStrong>
          <TextSmall>
            For help accessing your account, please contact support.
          </TextSmall>
        </Tooltip>
      </DialogTrigger>
    </Flex>
}`,...(s=(c=i.parameters)==null?void 0:c.docs)==null?void 0:s.source}}};const y=["StoryTooltip"];export{i as StoryTooltip,y as __namedExportsOrder,I as default};
