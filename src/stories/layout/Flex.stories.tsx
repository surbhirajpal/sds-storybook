import type { Meta, StoryObj } from "@storybook/react";
import { Flex, FlexItem } from "layout";

const meta: Meta<typeof Flex> = {
  component: Flex,
  title: "SDS Layout/Flex",
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
    }}
  >
    {text}
  </div>
);

type FlexPlaygroundProps = {
  direction: "row" | "column";
  gap: "100" | "200" | "300" | "400" | "600" | "800" | "1200" | "1600";
  wrap: boolean;
  alignPrimary: "start" | "center" | "end" | "space-between" | "stretch";
  alignSecondary: "start" | "center" | "end" | "stretch";
  containerType: "half" | "third" | "quarter" | "auto";
};

export const FlexPlayground: StoryObj<FlexPlaygroundProps> = {
  name: "Flex Playground",
  args: {
    direction: "row",
    gap: "400",
    wrap: true,
    alignPrimary: "start",
    alignSecondary: "stretch",
    containerType: "third",
  },
  argTypes: {
    direction: {
      control: { type: "select" },
      options: ["row", "column"],
      description: "Direction of flex items",
    },
    gap: {
      control: { type: "select" },
      options: ["100", "200", "300", "400", "600", "800", "1200", "1600"],
      description: "Space between flex items",
    },
    wrap: {
      control: { type: "boolean" },
      description: "Whether items should wrap to new lines",
    },
    alignPrimary: {
      control: { type: "select" },
      options: ["start", "center", "end", "space-between", "stretch"],
      description: "Alignment along main axis (justify-content)",
    },
    alignSecondary: {
      control: { type: "select" },
      options: ["start", "center", "end", "stretch"],
      description: "Alignment along cross axis (align-items)",
    },
    containerType: {
      control: { type: "select" },
      options: ["half", "third", "quarter", "auto" ],
      description: "Container grid type for FlexItem sizing",
    },
  },
  render: ({ direction, gap, wrap, alignPrimary, alignSecondary, containerType }) => (
    <div style={{ width: "100%", maxWidth: "1200px" }}>
      <Flex
        direction={direction}
        gap={gap}
        wrap={wrap}
        alignPrimary={alignPrimary}
        alignSecondary={alignSecondary}
        container
        type={containerType}
      >
        {renderChild("Item 1")}
        {renderChild("Item 2")}
        {renderChild("Item 3")}
        {renderChild("Item 4")}
        {renderChild("Item 5")}
        {renderChild("Item 6")}
      </Flex>
    </div>
  ),
};

export const FlexItemSizes: StoryObj = {
  name: "FlexItem Sizes",
  render: () => (
    <Flex direction="column" gap="1200">
      <div>
        <h3 style={{ marginBottom: "var(--sds-size-space-400)" }}>Quarter Container</h3>
        <Flex container type="quarter" gap="200" wrap>
          <FlexItem size="full">{renderChild("full (100%)")}</FlexItem>
          <FlexItem size="major">{renderChild("major (75%)")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor (25%)")}</FlexItem>
          <FlexItem size="half">{renderChild("half (50%)")}</FlexItem>
          <FlexItem size="half">{renderChild("half (50%)")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: "var(--sds-size-space-400)" }}>Third Container</h3>
        <Flex container type="third" gap="200" wrap>
          <FlexItem size="full">{renderChild("full (100%)")}</FlexItem>
          <FlexItem size="major">{renderChild("major (66.66%)")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor (33.33%)")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
          <FlexItem size="minor">{renderChild("minor")}</FlexItem>
        </Flex>
      </div>

      <div>
        <h3 style={{ marginBottom: "var(--sds-size-space-400)" }}>Half Container</h3>
        <Flex container type="half" gap="200" wrap>
          <FlexItem size="full">{renderChild("full (100%)")}</FlexItem>
          <FlexItem size="half">{renderChild("half (50%)")}</FlexItem>
          <FlexItem size="half">{renderChild("half (50%)")}</FlexItem>
        </Flex>
      </div>
    </Flex>
  ),
};

export const FlexGapSpacing: StoryObj = {
  name: "Flex Gap Spacing",
  render: () => (
    <Flex direction="column" gap="800">
      {(["100", "200", "300", "400", "600", "800", "1200", "1600"] as const).map((gapValue) => (
        <div key={gapValue}>
          <p style={{ marginBottom: "var(--sds-size-space-200)", color: "var(--sds-color-text-default-secondary)" }}>
            gap="{gapValue}"
          </p>
          <Flex direction="row" gap={gapValue}>
            {renderChild("Item 1")}
            {renderChild("Item 2")}
            {renderChild("Item 3")}
          </Flex>
        </div>
      ))}
    </Flex>
  ),
};
