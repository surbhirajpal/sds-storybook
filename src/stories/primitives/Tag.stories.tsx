import type { Meta, StoryObj } from "@storybook/react";
import { IconAirplay, IconCheck } from "icons";
import { Flex } from "layout";
import {
  Label,
  Tag,
  TagButton,
  TagToggle,
  TagToggleGroup,
  TagToggleList,
} from "primitives";

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: "SDS Primitives/Tags",
  parameters: { layout: "centered" },
};
export default meta;

// Interactive Tag Story
type TagPlaygroundProps = {
  children: string;
  scheme: "brand" | "danger" | "positive" | "warning" | "neutral";
  variant: "primary" | "secondary";
  removable: boolean;
};

export const StoryTag: StoryObj<TagPlaygroundProps> = {
  name: "Tag",
  args: { 
    children: "Sample Tag",
    scheme: "brand",
    variant: "primary",
    removable: false,
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Text content of the tag",
    },
    scheme: {
      control: { type: "select" },
      options: ["brand", "danger", "positive", "warning", "neutral"],
      description: "Color scheme of the tag",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Visual variant of the tag",
    },
    removable: {
      control: { type: "boolean" },
      description: "Whether the tag can be removed (shows X button)",
    },
  },
  render: ({ children, scheme, variant, removable }) => (
    <div style={{ padding: "var(--sds-size-space-800)" }}>
      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h3 style={{ 
          font: "var(--sds-font-subheading)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-600)"
        }}>
          Interactive Tag
        </h3>
        <Tag
          scheme={scheme}
          variant={variant}
          onRemove={removable ? () => alert("Tag removed!") : undefined}
        >
          {children}
        </Tag>
      </div>

      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          All Schemes ({variant} variant)
        </h4>
        <Flex wrap gap="300">
          <Tag scheme="brand" variant={variant} onRemove={removable ? () => alert("Brand tag removed!") : undefined}>
            Brand
          </Tag>
          <Tag scheme="danger" variant={variant} onRemove={removable ? () => alert("Danger tag removed!") : undefined}>
            Danger
          </Tag>
          <Tag scheme="positive" variant={variant} onRemove={removable ? () => alert("Positive tag removed!") : undefined}>
            Positive
          </Tag>
          <Tag scheme="warning" variant={variant} onRemove={removable ? () => alert("Warning tag removed!") : undefined}>
            Warning
          </Tag>
          <Tag scheme="neutral" variant={variant} onRemove={removable ? () => alert("Neutral tag removed!") : undefined}>
            Neutral
          </Tag>
        </Flex>
      </div>

      <div>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          Variant Comparison ({scheme} scheme)
        </h4>
        <Flex wrap gap="300">
          <Tag scheme={scheme} variant="primary" onRemove={removable ? () => alert("Primary removed!") : undefined}>
            Primary
          </Tag>
          <Tag scheme={scheme} variant="secondary" onRemove={removable ? () => alert("Secondary removed!") : undefined}>
            Secondary
          </Tag>
        </Flex>
      </div>
    </div>
  ),
};

// Interactive TagButton Story
type TagButtonPlaygroundProps = {
  children: string;
  scheme: "brand" | "danger" | "positive" | "warning" | "neutral";
  variant: "primary" | "secondary";
  isDisabled: boolean;
};

export const StoryTagButton: StoryObj<TagButtonPlaygroundProps> = {
  name: "Tag Button",
  args: {
    children: "Clickable Tag",
    scheme: "brand",
    variant: "primary",
    isDisabled: false,
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Text content of the tag button",
    },
    scheme: {
      control: { type: "select" },
      options: ["brand", "danger", "positive", "warning", "neutral"],
      description: "Color scheme of the tag button",
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Visual variant of the tag button",
    },
    isDisabled: {
      control: { type: "boolean" },
      description: "Whether the tag button is disabled",
    },
  },
  render: ({ children, scheme, variant, isDisabled }) => (
    <div style={{ padding: "var(--sds-size-space-800)" }}>
      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h3 style={{ 
          font: "var(--sds-font-subheading)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-600)"
        }}>
          Interactive Tag Button
        </h3>
        <TagButton
          scheme={scheme}
          variant={variant}
          isDisabled={isDisabled}
          onPress={() => alert(`${children} clicked!`)}
        >
          {children}
        </TagButton>
      </div>

      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          All Schemes ({variant} variant)
        </h4>
        <Flex wrap gap="300">
          <TagButton scheme="brand" variant={variant} isDisabled={isDisabled} onPress={() => alert("Brand clicked!")}>
            Brand
          </TagButton>
          <TagButton scheme="danger" variant={variant} isDisabled={isDisabled} onPress={() => alert("Danger clicked!")}>
            Danger
          </TagButton>
          <TagButton scheme="positive" variant={variant} isDisabled={isDisabled} onPress={() => alert("Positive clicked!")}>
            Positive
          </TagButton>
          <TagButton scheme="warning" variant={variant} isDisabled={isDisabled} onPress={() => alert("Warning clicked!")}>
            Warning
          </TagButton>
          <TagButton scheme="neutral" variant={variant} isDisabled={isDisabled} onPress={() => alert("Neutral clicked!")}>
            Neutral
          </TagButton>
        </Flex>
      </div>

      <div>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          State Examples
        </h4>
        <Flex wrap gap="300">
          <TagButton scheme={scheme} variant={variant} onPress={() => alert("Normal state clicked!")}>
            Normal
          </TagButton>
          <TagButton scheme={scheme} variant={variant} isDisabled onPress={() => alert("This won't fire")}>
            Disabled
          </TagButton>
        </Flex>
      </div>
    </div>
  ),
};

// Interactive TagToggleGroup Story
type TagToggleGroupPlaygroundProps = {
  label: string;
  selectionMode: "single" | "multiple" | "none";
};

export const StoryTagToggleGroup: StoryObj<TagToggleGroupPlaygroundProps> = {
  name: "Tag Toggle Group",
  args: {
    label: "Choose your preferences",
    selectionMode: "single",
  },
  argTypes: {
    label: {
      control: { type: "text" },
      description: "Label for the tag toggle group",
    },
    selectionMode: {
      control: { type: "select" },
      options: ["single", "multiple", "none"],
      description: "Selection behavior of the tag group",
    },
  },
  render: ({ label, selectionMode }) => (
    <div style={{ padding: "var(--sds-size-space-800)" }}>
      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h3 style={{ 
          font: "var(--sds-font-subheading)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-600)"
        }}>
          Interactive Tag Toggle Group
        </h3>
        <TagToggleGroup 
          selectionMode={selectionMode}
          defaultSelectedKeys={selectionMode !== "none" ? ["react"] : []}
          onSelectionChange={(keys) => console.log("Selected:", Array.from(keys))}
        >
          <Label>{label}</Label>
          <TagToggleList>
            <TagToggle id="react" iconStart={<IconCheck />}>
              React
            </TagToggle>
            <TagToggle id="vue" iconStart={<IconAirplay />}>
              Vue
            </TagToggle>
            <TagToggle id="angular">
              Angular
            </TagToggle>
            <TagToggle id="svelte">
              Svelte
            </TagToggle>
            <TagToggle id="solid">
              Solid
            </TagToggle>
          </TagToggleList>
        </TagToggleGroup>
      </div>

      <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          Selection Mode Examples
        </h4>
        <div style={{ display: "grid", gap: "var(--sds-size-space-600)" }}>
          <div>
            <h5 style={{ 
              font: "var(--sds-font-body-small-strong)", 
              color: "var(--sds-color-text-default-secondary)",
              marginBottom: "var(--sds-size-space-300)"
            }}>
              Single Selection
            </h5>
            <TagToggleGroup 
              selectionMode="single"
              defaultSelectedKeys={["option1"]}
            >
              <TagToggleList>
                <TagToggle id="option1">Option 1</TagToggle>
                <TagToggle id="option2">Option 2</TagToggle>
                <TagToggle id="option3">Option 3</TagToggle>
              </TagToggleList>
            </TagToggleGroup>
          </div>

          <div>
            <h5 style={{ 
              font: "var(--sds-font-body-small-strong)", 
              color: "var(--sds-color-text-default-secondary)",
              marginBottom: "var(--sds-size-space-300)"
            }}>
              Multiple Selection
            </h5>
            <TagToggleGroup 
              selectionMode="multiple"
              defaultSelectedKeys={["skill1", "skill3"]}
            >
              <TagToggleList>
                <TagToggle id="skill1">JavaScript</TagToggle>
                <TagToggle id="skill2">TypeScript</TagToggle>
                <TagToggle id="skill3">CSS</TagToggle>
                <TagToggle id="skill4">HTML</TagToggle>
              </TagToggleList>
            </TagToggleGroup>
          </div>

          <div>
            <h5 style={{ 
              font: "var(--sds-font-body-small-strong)", 
              color: "var(--sds-color-text-default-secondary)",
              marginBottom: "var(--sds-size-space-300)"
            }}>
              No Selection (Display Only)
            </h5>
            <TagToggleGroup 
              selectionMode="none"
            >
              <TagToggleList>
                <TagToggle id="tag1">Read Only</TagToggle>
                <TagToggle id="tag2">Display</TagToggle>
                <TagToggle id="tag3">Only</TagToggle>
              </TagToggleList>
            </TagToggleGroup>
          </div>
        </div>
      </div>

      <div>
        <h4 style={{ 
          font: "var(--sds-font-body-strong)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-400)"
        }}>
          With Icons
        </h4>
        <TagToggleGroup 
          selectionMode={selectionMode}
          defaultSelectedKeys={["settings"]}
        >
          <TagToggleList>
            <TagToggle id="settings" iconStart={<IconCheck />}>
              Settings
            </TagToggle>
            <TagToggle id="broadcast" iconStart={<IconAirplay />}>
              Broadcast
            </TagToggle>
            <TagToggle id="profile">
              Profile
            </TagToggle>
          </TagToggleList>
        </TagToggleGroup>
      </div>
    </div>
  ),
};
