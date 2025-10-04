import{j as a}from"./jsx-runtime-47c18db8.js";import{ap as g,aq as o,ar as s,as as n,at as P,au as p}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const x={component:g,title:"SDS Primitives/Pagination",parameters:{layout:"centered"}},e={name:"Pagination",args:{},render:()=>a.jsxs(g,{children:[a.jsx(o,{}),a.jsxs(s,{children:[a.jsx(n,{href:"?page=1",children:"1"}),a.jsx(n,{href:"?page=2",children:"2"}),a.jsx(n,{href:"?page=3",current:!0,children:"3"}),a.jsx(n,{href:"?page=4",children:"4"}),a.jsx(P,{}),a.jsx(n,{href:"?page=65",children:"65"}),a.jsx(n,{href:"?page=66",children:"66"})]}),a.jsx(p,{href:"?page=4"})]})};var i,r,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: "Pagination",
  args: {},
  render: () => <Pagination>
      <PaginationPrevious />
      <PaginationList>
        <PaginationPage href="?page=1">1</PaginationPage>
        <PaginationPage href="?page=2">2</PaginationPage>
        <PaginationPage href="?page=3" current>
          3
        </PaginationPage>
        <PaginationPage href="?page=4">4</PaginationPage>
        <PaginationGap />
        <PaginationPage href="?page=65">65</PaginationPage>
        <PaginationPage href="?page=66">66</PaginationPage>
      </PaginationList>
      <PaginationNext href="?page=4" />
    </Pagination>
}`,...(t=(r=e.parameters)==null?void 0:r.docs)==null?void 0:t.source}}};const j=["StoryPagination"];export{e as StoryPagination,j as __namedExportsOrder,x as default};
