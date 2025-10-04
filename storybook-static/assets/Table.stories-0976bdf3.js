import{j as e}from"./jsx-runtime-47c18db8.js";import{M as c,N as T,P as r,Q as b,O as o,R as n,aE as R,F as D,f as F,a3 as H,aF as B}from"./Grid-0facf985.js";import"./index-d806aa85.js";import"./index-4af5d0e8.js";import"./useMediaQuery-72382657.js";const{useState:P}=__STORYBOOK_MODULE_PREVIEW_API__,z={component:c,title:"SDS Primitives/Table",parameters:{layout:"centered"}},i={name:"Table",args:{selectionMode:"none",sortDescriptor:{column:"one",direction:"ascending"}},argTypes:{selectionMode:{control:"select",options:["none","single","multiple"]}},render:({...s})=>e.jsxs(c,{"aria-label":"Files",...s,children:[e.jsxs(T,{children:[e.jsx(r,{isRowHeader:!0,children:"Name"}),e.jsx(r,{children:"Type"}),e.jsx(r,{children:"Date Modified"})]}),e.jsxs(b,{children:[e.jsxs(o,{children:[e.jsx(n,{children:"Games"}),e.jsx(n,{children:"File folder"}),e.jsx(n,{children:"6/7/2020"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"Program Files"}),e.jsx(n,{children:"File folder"}),e.jsx(n,{children:"4/7/2021"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"bootmgr"}),e.jsx(n,{children:"System file"}),e.jsx(n,{children:"11/20/2010"})]})]})]})},t={name:"Table Complex",args:{bleed:!1,grid:!1,striped:!1,dense:!1},render:({...s})=>{const m=[{handle:"@porkyp",name:"Porky Pig",access:"admin"},{handle:"@bugzy",name:"Bugs Bunny",access:"admin"},{handle:"@realdaffyduck",name:"Daffy Duck",access:"user"}];return e.jsxs(c,{...s,children:[e.jsxs(T,{children:[e.jsx(r,{isRowHeader:!0,children:"Name"}),e.jsx(r,{children:"Handle"}),e.jsx(r,{children:"Role"}),e.jsx(r,{children:"Actions"})]}),e.jsx(b,{children:m.map(l=>e.jsxs(o,{href:"#",children:[e.jsx(n,{children:l.name}),e.jsx(n,{children:l.handle}),e.jsx(n,{children:e.jsx(R,{color:l.access==="user"?"warning":"danger",children:l.access})}),e.jsx(n,{children:e.jsxs(D,{alignPrimary:"end",gap:"200",alignSecondary:"center",children:[e.jsx(F,{size:"small",variant:"neutral",children:"View"}),e.jsx(H,{size:"small","aria-label":"Trash icon",children:e.jsx(B,{})})]})})]},l.handle))})]})}},d={name:"Table Sorting",args:{},render:()=>{const[s,m]=P({column:"date",direction:"ascending"}),l=[{name:"Name",id:"name",isRowHeader:!0,allowsSorting:!0},{name:"Type",id:"type",allowsSorting:!0},{name:"Date Modified",id:"date",allowsSorting:!0}],w=[{id:1,name:"Games",date:"6/7/2020",type:"File folder"},{id:2,name:"Program Files",date:"4/7/2021",type:"File folder"},{id:3,name:"bootmgr",date:"11/20/2010",type:"System file"},{id:4,name:"log.txt",date:"1/18/2016",type:"Text Document"}];return e.jsxs(c,{"aria-label":"Files",onSortChange:a=>console.log(a,m(a)),sortDescriptor:s,children:[e.jsx(T,{columns:l,children:a=>e.jsx(r,{isRowHeader:a.isRowHeader,allowsSorting:a.allowsSorting,children:a.name})}),e.jsx(b,{items:w,children:a=>e.jsx(o,{columns:l,children:u=>e.jsx(n,{id:u.id,children:a[u.id]})})})]})}};var p,g,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: "Table",
  args: {
    selectionMode: "none",
    sortDescriptor: {
      column: "one",
      direction: "ascending"
    }
  },
  argTypes: {
    selectionMode: {
      control: "select",
      options: ["none", "single", "multiple"]
    }
  },
  render: ({
    ...args
  }) => {
    return <Table aria-label="Files" {...args}>
        <TableHead>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Type</TableColumn>
          <TableColumn>Date Modified</TableColumn>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Games</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>6/7/2020</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Program Files</TableCell>
            <TableCell>File folder</TableCell>
            <TableCell>4/7/2021</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>bootmgr</TableCell>
            <TableCell>System file</TableCell>
            <TableCell>11/20/2010</TableCell>
          </TableRow>
        </TableBody>
      </Table>;
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,y,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: "Table Complex",
  args: {
    bleed: false,
    grid: false,
    striped: false,
    dense: false
  },
  render: ({
    ...props
  }) => {
    const users = [{
      handle: "@porkyp",
      name: "Porky Pig",
      access: "admin"
    }, {
      handle: "@bugzy",
      name: "Bugs Bunny",
      access: "admin"
    }, {
      handle: "@realdaffyduck",
      name: "Daffy Duck",
      access: "user"
    }];
    return <Table {...props}>
        <TableHead>
          <TableColumn isRowHeader>Name</TableColumn>
          <TableColumn>Handle</TableColumn>
          <TableColumn>Role</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHead>
        <TableBody>
          {users.map(user => <TableRow key={user.handle} href="#">
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.handle}</TableCell>
              <TableCell>
                <Tag color={user.access === "user" ? "warning" : "danger"}>
                  {user.access}
                </Tag>
              </TableCell>
              <TableCell>
                <Flex alignPrimary="end" gap="200" alignSecondary="center">
                  <Button size="small" variant="neutral">
                    View
                  </Button>
                  <IconButton size="small" aria-label="Trash icon">
                    <IconTrash />
                  </IconButton>
                </Flex>
              </TableCell>
            </TableRow>)}
        </TableBody>
      </Table>;
  }
}`,...(C=(y=t.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,S,f;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: "Table Sorting",
  args: {},
  render: () => {
    const [sortDescriptor, updateSortDescriptor] = useState<SortDescriptor>({
      column: "date",
      direction: "ascending"
    });
    type Key = "name" | "type" | "date";
    const columns: ({
      name: string;
      id: Key;
    } & TableColumnProps)[] = [{
      name: "Name",
      id: "name",
      isRowHeader: true,
      allowsSorting: true
    }, {
      name: "Type",
      id: "type",
      allowsSorting: true
    }, {
      name: "Date Modified",
      id: "date",
      allowsSorting: true
    }];
    const rows: ({
      id: number;
    } & { [K in Key]: string })[] = [{
      id: 1,
      name: "Games",
      date: "6/7/2020",
      type: "File folder"
    }, {
      id: 2,
      name: "Program Files",
      date: "4/7/2021",
      type: "File folder"
    }, {
      id: 3,
      name: "bootmgr",
      date: "11/20/2010",
      type: "System file"
    }, {
      id: 4,
      name: "log.txt",
      date: "1/18/2016",
      type: "Text Document"
    }];
    return <Table aria-label="Files" onSortChange={a => console.log(a, updateSortDescriptor(a))} sortDescriptor={sortDescriptor}>
        <TableHead columns={columns}>
          {column => <TableColumn isRowHeader={column.isRowHeader} allowsSorting={column.allowsSorting}>
              {column.name}
            </TableColumn>}
        </TableHead>
        <TableBody items={rows}>
          {item => <TableRow columns={columns}>
              {column => <TableCell id={column.id}>{item[column.id]}</TableCell>}
            </TableRow>}
        </TableBody>
      </Table>;
  }
}`,...(f=(S=d.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};const E=["StoryTable","StoryTableComplex","StoryTableSorting"];export{i as StoryTable,t as StoryTableComplex,d as StoryTableSorting,E as __namedExportsOrder,z as default};
