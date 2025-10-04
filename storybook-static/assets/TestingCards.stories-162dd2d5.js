import{j as e}from"./jsx-runtime-47c18db8.js";import{C as O,P as M,a as N,R as K,S as d,T as Q}from"./Panels-7af4de04.js";import{g as U,h as E,T as W,b as X,B as Y,f as Z,F as c,i as ee,j as re,k as ae,l as te}from"./Grid-0facf985.js";import{p}from"./index-15d90ccd.js";import"./index-d806aa85.js";import"./useMediaQuery-72382657.js";import"./index-4af5d0e8.js";const le={component:O,title:"SDS Compositions/Cards",parameters:{layout:"centered"}},a={name:"Card",args:{direction:"vertical",variant:"default","[asset]":"none","[interaction]":!1},argTypes:{direction:{control:{type:"select"},options:["vertical","horizontal"]},variant:{control:{type:"select"},options:["default","stroke","brand"]},"[asset]":{control:{type:"select"},options:["none","icon","image"]}},render:({"[asset]":r,"[interaction]":J,...L})=>e.jsxs(O,{...L,asset:r==="icon"?e.jsx(U,{size:"32"}):r==="image"?e.jsx(E,{alt:"A nice image",aspectRatio:"1-1",size:"small",src:p}):void 0,interactionProps:J?{"aria-label":"Visit something nice about this card",href:"https://google.com"}:void 0,children:[e.jsx(W,{children:"This is a card"}),e.jsx(X,{children:"Answer the frequently asked question in a simple sentence, a paragraph, or a list."}),e.jsx(Y,{align:"start",children:e.jsx(Z,{variant:"neutral",children:"Hello there!"})})]})},t={name:"Pricing Card",render:()=>e.jsx(c,{container:!0,wrap:!0,gap:"400",type:"third",alignPrimary:"center",children:[1,2,3].map(r=>e.jsx(M,{variant:r===2?"brand":"stroke",heading:`Tier ${r}`,action:"Buy this",price:(5*(5-r)).toString(),priceCurrency:"$",size:"large",onAction:()=>{},list:["Feature 1","Feature 2","Feature 3"],actionVariant:r===2?"neutral":"primary"},r))})},n={name:"Product Info Card",render:()=>e.jsx(c,{container:!0,wrap:!0,type:"quarter",gap:"400",children:[1,2,3,4].map(r=>e.jsx(N,{asset:e.jsx(E,{alt:"Product",src:p}),heading:`Product ${r}`,price:"5",description:"Amazing product description."},r))})},i={name:"Review Card",render:()=>e.jsx(c,{container:!0,wrap:!0,type:"quarter",gap:"400",children:[1,2,3,4].map(r=>e.jsx(K,{stars:5,title:"Amazing!",body:"This experience exceeded expectations.",name:"Jane Doe",date:"Aug 2025",src:p},r))})},s={name:"Stats Card",render:()=>e.jsxs(c,{container:!0,wrap:!0,type:"quarter",gap:"400",children:[e.jsx(d,{icon:e.jsx(ee,{size:"40"}),stat:"15.3k",description:"Lines of Code"}),e.jsx(d,{icon:e.jsx(re,{size:"40"}),stat:"400",description:"SDS Hours"}),e.jsx(d,{icon:e.jsx(ae,{size:"40"}),stat:"8M",description:"Smiles"}),e.jsx(d,{icon:e.jsx(te,{size:"40"}),stat:"120.4k",description:"Directions"})]})},o={name:"Testimonial Card",render:()=>e.jsx(c,{container:!0,wrap:!0,type:"third",gap:"400",children:[1,2,3].map(r=>e.jsx(Q,{heading:"“Something splendid”",src:p,username:`user${r}`,name:`Full Name ${r}`},r))})};var l,m,u,g,C;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: "Card",
  args: {
    direction: "vertical",
    variant: "default",
    "[asset]": "none",
    "[interaction]": false
  },
  argTypes: {
    direction: {
      control: {
        type: "select"
      },
      options: ["vertical", "horizontal"]
    },
    variant: {
      control: {
        type: "select"
      },
      options: ["default", "stroke", "brand"]
    },
    "[asset]": {
      control: {
        type: "select"
      },
      options: ["none", "icon", "image"]
    }
  },
  render: ({
    "[asset]": _asset,
    "[interaction]": _interaction,
    ...args
  }) => <Card {...args} asset={_asset === "icon" ? <IconActivity size="32" /> : _asset === "image" ? <Image alt="A nice image" aspectRatio="1-1" size="small" src={placeholder} /> : undefined} interactionProps={_interaction ? {
    "aria-label": "Visit something nice about this card",
    href: "https://google.com"
  } : undefined}>
      <TextHeading>This is a card</TextHeading>
      <Text>Answer the frequently asked question in a simple sentence, a paragraph, or a list.</Text>
      <ButtonGroup align="start">
        <Button variant="neutral">Hello there!</Button>
      </ButtonGroup>
    </Card>
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:`Base Card component
- Flexible layout (vertical/horizontal)
- Optional asset: Icon or Image
- Optional interaction: clickable
- Variants: default, stroke, brand
- Configurable padding`,...(C=(g=a.parameters)==null?void 0:g.docs)==null?void 0:C.description}}};var h,y,x,S,f;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: "Pricing Card",
  render: () => <Flex container wrap gap="400" type="third" alignPrimary="center">
      {[1, 2, 3].map(i => <PricingCard key={i} variant={i === 2 ? "brand" : "stroke"} heading={\`Tier \${i}\`} action="Buy this" price={(5 * (5 - i)).toString()} priceCurrency="$" size="large" onAction={() => {}} list={["Feature 1", "Feature 2", "Feature 3"]} actionVariant={i === 2 ? "neutral" : "primary"} />)}
    </Flex>
}`,...(x=(y=t.parameters)==null?void 0:y.docs)==null?void 0:x.source},description:{story:"PricingCard: Displays price points, features, and CTA buttons",...(f=(S=t.parameters)==null?void 0:S.docs)==null?void 0:f.description}}};var j,v,w,T,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Product Info Card",
  render: () => <Flex container wrap type="quarter" gap="400">
      {[1, 2, 3, 4].map(i => <ProductInfoCard key={i} asset={<Image alt="Product" src={placeholder} />} heading={\`Product \${i}\`} price="5" description="Amazing product description." />)}
    </Flex>
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"ProductInfoCard: Displays product information with asset, description, price, rating",...(P=(T=n.parameters)==null?void 0:T.docs)==null?void 0:P.description}}};var I,z,F,k,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: "Review Card",
  render: () => <Flex container wrap type="quarter" gap="400">
      {[1, 2, 3, 4].map(i => <ReviewCard key={i} stars={5} title="Amazing!" body="This experience exceeded expectations." name="Jane Doe" date="Aug 2025" src={placeholder} />)}
    </Flex>
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"ReviewCard: Shows user review with stars, body, and author",...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.description}}};var A,R,q,B,D;s.parameters={...s.parameters,docs:{...(A=s.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: "Stats Card",
  render: () => <Flex container wrap type="quarter" gap="400">
      <StatsCard icon={<IconCode size="40" />} stat="15.3k" description="Lines of Code" />
      <StatsCard icon={<IconClock size="40" />} stat="400" description="SDS Hours" />
      <StatsCard icon={<IconSmile size="40" />} stat="8M" description="Smiles" />
      <StatsCard icon={<IconCompass size="40" />} stat="120.4k" description="Directions" />
    </Flex>
}`,...(q=(R=s.parameters)==null?void 0:R.docs)==null?void 0:q.source},description:{story:"StatsCard: Displays numeric statistics with optional icon",...(D=(B=s.parameters)==null?void 0:B.docs)==null?void 0:D.description}}};var $,H,_,V,G;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:'{\n  name: "Testimonial Card",\n  render: () => <Flex container wrap type="third" gap="400">\n      {[1, 2, 3].map(i => <TestimonialCard key={i} heading="“Something splendid”" src={placeholder} username={`user${i}`} name={`Full Name ${i}`} />)}\n    </Flex>\n}',...(_=(H=o.parameters)==null?void 0:H.docs)==null?void 0:_.source},description:{story:"TestimonialCard: Highlights a testimonial with author info",...(G=(V=o.parameters)==null?void 0:V.docs)==null?void 0:G.description}}};const me=["StoryCard","StoryPricingCard","StoryProductInfoCard","StoryReviewCard","StoryStatsCard","StoryTestimonialCard"];export{a as StoryCard,t as StoryPricingCard,n as StoryProductInfoCard,i as StoryReviewCard,s as StoryStatsCard,o as StoryTestimonialCard,me as __namedExportsOrder,le as default};
