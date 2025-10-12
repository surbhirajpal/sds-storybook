import type { Meta, StoryObj } from "@storybook/react";
import { Flex, Section } from "layout";
import {
  Text,
  TextCode,
  TextEmphasis,
  TextHeading,
  TextLink,
  TextLinkList,
  TextList,
  TextListItem,
  TextPrice,
  TextSmall,
  TextSmallStrong,
  TextStrong,
  TextSubheading,
  TextSubtitle,
  TextTitleHero,
  TextTitlePage,
} from "primitives";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "SDS Primitives/Text",
};
export default meta;
type Story = StoryObj<typeof Text>;

export const StoryText: Story = {
  name: "Text",
  args: {},
  render: () => {
    return (
      <Section padding="1600">
        <Flex container direction="column" gap="400">
          <TextTitleHero>Text Title Hero</TextTitleHero>
          <TextTitlePage>Text Title Page</TextTitlePage>
          <TextSubtitle>Text Subtitle</TextSubtitle>
          <TextHeading>Text Heading</TextHeading>
          <TextSubheading>Text Subheading</TextSubheading>
          <Text>Text</Text>
          <TextEmphasis>Text Emphasis</TextEmphasis>
          <TextLink href="#">Text Link</TextLink>
          <TextStrong>Text Strong</TextStrong>
          <TextSmall>Text Small</TextSmall>
          <TextSmallStrong>Text Small Strong</TextSmallStrong>
          <TextCode>Text Code</TextCode>
          <TextList>
            <TextListItem>Text List Item 1</TextListItem>
            <TextListItem>Text List Item 2</TextListItem>
            <TextListItem>Text List Item 3</TextListItem>
          </TextList>
          <TextLinkList>
            <TextListItem>
              <TextLink href="#">Text Link List Item 1</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Text Link List Item 2</TextLink>
            </TextListItem>
            <TextListItem>
              <TextLink href="#">Text Link List Item 3</TextLink>
            </TextListItem>
          </TextLinkList>
          <TextPrice currency="$" price="50.99" label="/ mo" />
          <TextPrice currency="$" price="50.99" label="/ mo" size="small" />
          <Text>
            This feature is only available to users on the{" "}
            <TextStrong>Business Plan</TextStrong>. To upgrade, visit your{" "}
            <TextLink href="#">billing settings</TextLink>. Your api key is{" "}
            <TextCode>fig_123456789</TextCode>.
          </Text>
        </Flex>
      </Section>
    );
  },
};

// Text Playground Story
type TextPlaygroundProps = {
  children: string;
  textType: "Text" | "TextSmall" | "TextStrong" | "TextSmallStrong" | "TextEmphasis" | "TextCode" | "TextHeading" | "TextSubheading" | "TextSubtitle" | "TextTitlePage" | "TextTitleHero";
  elementType: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "small" | "strong" | "em" | "code";
  lineHeight: "body" | "single";
  className: string;
};

export const StoryTextPlayground: StoryObj<TextPlaygroundProps> = {
  name: "Text Playground",
  args: {
    children: "This is sample text content",
    textType: "Text",
    elementType: "p",
    lineHeight: "body",
    className: "",
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Text content to display",
    },
    textType: {
      control: { type: "select" },
      options: [
        "Text",
        "TextSmall", 
        "TextStrong",
        "TextSmallStrong",
        "TextEmphasis",
        "TextCode",
        "TextHeading",
        "TextSubheading", 
        "TextSubtitle",
        "TextTitlePage",
        "TextTitleHero"
      ],
      description: "Type of text component to use",
    },
    elementType: {
      control: { type: "select" },
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6", "small", "strong", "em", "code"],
      description: "HTML element type to render",
    },
    lineHeight: {
      control: { type: "select" },
      options: ["body", "single"],
      description: "Line height style (available for some text types)",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes",
    },
  },
  render: ({ children, textType, elementType, lineHeight, className }) => {
    // Component mapping
    const TextComponents = {
      Text,
      TextSmall,
      TextStrong,
      TextSmallStrong,
      TextEmphasis,
      TextCode,
      TextHeading,
      TextSubheading,
      TextSubtitle,
      TextTitlePage,
      TextTitleHero,
    };

    const SelectedComponent = TextComponents[textType];
    
    // Check if component supports lineHeight prop
    const supportsLineHeight = ["Text", "TextSmall", "TextSmallStrong"].includes(textType);
    
    // Prepare props based on component type
    const componentProps: any = {
      className,
      elementType,
      children,
    };
    
    if (supportsLineHeight) {
      componentProps.lineHeight = lineHeight;
    }

    return (
      <div style={{ padding: "var(--sds-size-space-800)" }}>
        <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
          <h3 style={{ 
            font: "var(--sds-font-subheading)", 
            color: "var(--sds-color-text-default-default)",
            marginBottom: "var(--sds-size-space-600)"
          }}>
            Interactive Text Preview
          </h3>
          
          <div style={{
            padding: "var(--sds-size-space-800)",
            border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
            borderRadius: "var(--sds-size-radius-400)",
            backgroundColor: "var(--sds-color-background-default-secondary)",
            minHeight: "100px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <SelectedComponent {...componentProps} />
          </div>
        </div>
      </div>
    );
  },
};
