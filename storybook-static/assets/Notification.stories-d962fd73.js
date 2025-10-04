import{j as e}from"./jsx-runtime-47c18db8.js";import{am as i,an as m,ao as c,b as p,f as g,u}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const N={component:i,title:"SDS Primitives/Notification",parameters:{layout:"centered"}},t={name:"Notification",args:{isDismissible:!0,"[type]":"message"},argTypes:{"[type]":{control:{type:"select"},options:["message","alert"]}},render:({"[type]":s,...r})=>{const l=s==="message"?"message":"alert";return e.jsxs(i,{...r,variant:l,icon:e.jsx(m,{size:"20"}),children:[e.jsx(c,{children:"Notification Title"}),e.jsx(p,{children:"Hello there! This is a message"}),s==="message"?e.jsx(g,{size:"small",children:"Hello"}):e.jsx(u,{size:"small",children:"Hello"})]})}};var n,a,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: "Notification",
  args: {
    isDismissible: true,
    "[type]": "message"
  },
  argTypes: {
    "[type]": {
      control: {
        type: "select"
      },
      options: ["message", "alert"]
    }
  },
  render: ({
    "[type]": _type,
    ...args
  }) => {
    const variant = _type === "message" ? "message" : "alert";
    return <Notification {...args} variant={variant} icon={<IconInfo size="20" />}>
        <TextStrong>Notification Title</TextStrong>
        <Text>Hello there! This is a message</Text>
        {_type === "message" ? <Button size="small">Hello</Button> : <ButtonDanger size="small">Hello</ButtonDanger>}
      </Notification>;
  }
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const h=["StoryNotification"];export{t as StoryNotification,h as __namedExportsOrder,N as default};
