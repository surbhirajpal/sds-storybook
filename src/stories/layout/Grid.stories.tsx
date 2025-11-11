import type { Meta, StoryObj } from "@storybook/react";
import { Grid, GridItem } from "layout";

const meta: Meta<typeof Grid> = {
  component: Grid,
  title: "SDS Layout/Grid",
  parameters: { layout: "padded" },
};
export default meta;

const renderChild = (text: string) => (
  <div
    style={{
      display: "grid",
      placeItems: "center",
      padding: "var(--sds-size-space-200) var(--sds-size-space-400)",
      background: "var(--sds-color-background-brand-default)",
      color: "var(--sds-color-text-brand-on-brand)",
      borderRadius: "var(--sds-size-radius-100)",
      height: "100%",
      minHeight: "40px",
    }}
  >
    {text}
  </div>
);

type GridPlaygroundProps = {
  columns: string;
  rows: string;
  gap: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  itemCount: number;
  flow: "row" | "column" | "row dense" | "column dense";
  justifyItems: "start" | "end" | "center" | "stretch";
  alignItems: "start" | "end" | "center" | "stretch";
};

export const GridPlayground: StoryObj<GridPlaygroundProps> = {
  name: "Grid Playground",
  args: {
    columns: "repeat(3, 1fr)",
    rows: "auto",
    gap: "400",
    itemCount: 9,
    flow: "row",
    justifyItems: "stretch",
    alignItems: "stretch",
  },
  argTypes: {
    columns: {
      control: { type: "text" },
      description: "CSS grid-template-columns value (e.g., 'repeat(3, 1fr)', '1fr 2fr 1fr')",
    },
    rows: {
      control: { type: "text" },
      description: "CSS grid-template-rows value (e.g., 'auto', 'repeat(2, 100px)')",
    },
    gap: {
      control: { type: "select" },
      options: ["100", "200", "300", "400", "600", "800", "1200", "1600"],
      description: "Space between grid items",
    },
    itemCount: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of grid items to display",
    },
    flow: {
      control: { type: "select" },
      options: ["row", "column", "row dense", "column dense"],
      description: "Grid auto flow direction",
    },
    justifyItems: {
      control: { type: "select" },
      options: ["start", "end", "center", "stretch"],
      description: "Alignment of items along inline axis (horizontal)",
    },
    alignItems: {
      control: { type: "select" },
      options: ["start", "end", "center", "stretch"],
      description: "Alignment of items along block axis (vertical)",
    },
  },
  render: ({ columns, rows, gap, itemCount, flow, justifyItems, alignItems }) => (
    <Grid 
      columns={columns} 
      rows={rows} 
      gap={gap} 
      flow={flow}
      justifyItems={justifyItems}
      alignItems={alignItems}
      container 
      style={{ width: "100%", maxWidth: "1200px" }}
    >
      {[...Array(itemCount)].map((_, i) => (
        <div key={i}>{renderChild(`Item ${i + 1}`)}</div>
      ))}
    </Grid>
  ),
};

export const GridSpanningItems: StoryObj<{
  columns: string;
  gap: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
}> = {
  name: "Grid Spanning Items",
  args: {
    columns: "repeat(4, 1fr)",
    gap: "200",
  },
  argTypes: {
    columns: {
      control: { type: "text" },
      description: "CSS grid-template-columns value",
    },
    gap: {
      control: { type: "select" },
      options: ["100", "200", "300", "400", "600", "800", "1200", "1600"],
      description: "Space between grid items",
    },
  },
  render: ({ columns, gap }) => (
    <Grid columns={columns} rows="auto auto auto" gap={gap} container style={{ width: "100%", maxWidth: "1200px" }}>
      <GridItem column="1 / span 2" row="1">
        {renderChild("Spans 2 columns")}
      </GridItem>
      <GridItem column="3 / span 2" row="1">
        {renderChild("Spans 2 columns")}
      </GridItem>
      <GridItem column="1" row="2 / span 2">
        {renderChild("Spans 2 rows")}
      </GridItem>
      <GridItem column="2 / span 3" row="2">
        {renderChild("Spans 3 columns")}
      </GridItem>
      <GridItem column="2 / span 2" row="3">
        {renderChild("Spans 2 columns")}
      </GridItem>
      <GridItem column="4" row="2 / span 2">
        {renderChild("Spans 2 rows")}
      </GridItem>
    </Grid>
  ),
};

export const GridTemplateAreas: StoryObj<{
  gap: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  columnLayout: "1-2-1" | "1-1-1" | "1-3-1";
}> = {
  name: "Grid Template Areas",
  args: {
    gap: "200",
    columnLayout: "1-2-1",
  },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: ["100", "200", "300", "400", "600", "800", "1200", "1600"],
      description: "Space between grid items",
    },
    columnLayout: {
      control: { type: "select" },
      options: ["1-2-1", "1-1-1", "1-3-1"],
      description: "Column proportions for sidebar, main, and aside",
    },
  },
  render: ({ gap, columnLayout }) => {
    const columnLayouts = {
      "1-2-1": "1fr 2fr 1fr",
      "1-1-1": "1fr 1fr 1fr",
      "1-3-1": "1fr 3fr 1fr",
    };

    return (
      <Grid
        container
        gap={gap}
        style={{
          width: "100%",
          maxWidth: "1200px",
          gridTemplateAreas: `
            "header header header"
            "sidebar main aside"
            "footer footer footer"
          `,
          gridTemplateColumns: columnLayouts[columnLayout],
          gridTemplateRows: "auto 1fr auto",
          minHeight: "400px",
        }}
      >
        <GridItem area="header">{renderChild("Header")}</GridItem>
        <GridItem area="sidebar">{renderChild("Sidebar")}</GridItem>
        <GridItem area="main">{renderChild("Main Content")}</GridItem>
        <GridItem area="aside">{renderChild("Aside")}</GridItem>
        <GridItem area="footer">{renderChild("Footer")}</GridItem>
      </Grid>
    );
  },
};

export const GridGapSpacing: StoryObj = {
  name: "Grid Gap Spacing",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "var(--sds-size-space-800)", width: "100%" }}>
      {(["100", "200", "300", "400", "600", "800", "1200", "1600"] as const).map((gapValue) => (
        <div key={gapValue}>
          <p style={{ marginBottom: "var(--sds-size-space-200)", color: "var(--sds-color-text-default-secondary)" }}>
            gap="{gapValue}"
          </p>
          <Grid columns="repeat(3, 1fr)" gap={gapValue} container style={{ maxWidth: "600px" }}>
            {[...Array(6)].map((_, i) => (
              <div key={i}>{renderChild(`Item ${i + 1}`)}</div>
            ))}
          </Grid>
        </div>
      ))}
    </div>
  ),
};