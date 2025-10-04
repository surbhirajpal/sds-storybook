import{j as e}from"./jsx-runtime-47c18db8.js";import{p as r}from"./index-15d90ccd.js";import{h as c,a5 as x,a6 as i}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const f={component:c,title:"SDS Primitives/Image",parameters:{layout:"centered"}},a={name:"Image",args:{size:"medium"},render:m=>e.jsx("div",{style:{height:"calc(100vh - 2rem)",display:"grid",placeItems:"center",width:"100%"},children:e.jsx(c,{src:r,...m})})},s={name:"Image srcSet",render:m=>e.jsx(c,{src:r,srcSet:`${r} 500w, ${r} 1001w`,sizes:"(max-width: 700px) 500w, 1000w",...m})},t={name:"Picture",args:{},argTypes:{},render:()=>e.jsxs(x,{children:[e.jsx(i,{media:"(max-width: 499px)",srcSet:r}),e.jsx(i,{media:"(min-width: 500px)",srcSet:r}),e.jsx(c,{src:r,alt:"Magical thing"})]})};var n,o,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Image",
  args: {
    size: "medium"
  },
  render: args => <div style={{
    height: "calc(100vh - 2rem)",
    display: "grid",
    placeItems: "center",
    width: "100%"
  }}>
      <Image src={placeholder} {...args} />
    </div>
}`,...(d=(o=a.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};var p,l,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:'{\n  name: "Image srcSet",\n  render: args => <Image src={placeholder} srcSet={`${placeholder} 500w, ${placeholder} 1001w`} sizes="(max-width: 700px) 500w, 1000w" {...args} />\n}',...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var h,u,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Picture",
  args: {},
  argTypes: {},
  render: () => <Picture>
      <PictureSource media="(max-width: 499px)" srcSet={placeholder} />
      <PictureSource media="(min-width: 500px)" srcSet={placeholder} />
      <Image src={placeholder} alt="Magical thing" />
    </Picture>
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};const z=["StoryImage","StoryImageSrcSet","StoryPicture"];export{a as StoryImage,s as StoryImageSrcSet,t as StoryPicture,z as __namedExportsOrder,f as default};
