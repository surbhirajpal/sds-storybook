import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "layout";
import { Text } from "primitives";
import * as Icons from "icons";

// Extract all icon components from the icons module
const iconComponents = Object.entries(Icons)
  .filter(([name]) => name.startsWith("Icon"))
  .sort(([a], [b]) => a.localeCompare(b));

const meta: Meta = {
  title: "SDS Primitives/Icons",
  parameters: { 
    layout: "fullscreen",
    docs: {
      description: {
        component: "Complete collection of all available icons in the SDS design system. All icons are built using the Icon primitive and support different sizes (14, 16, 20, 24, 32, 40, 48)."
      }
    }
  },
};
export default meta;

// Helper component to display an icon with its name
function IconDisplay({ 
  IconComponent, 
  name, 
  size = "24" 
}: { 
  IconComponent: React.ComponentType<any>;
  name: string;
  size?: "14" | "16" | "20" | "24" | "32" | "40" | "48";
}) {
  return (
    <Flex
      direction="column"
      gap="200"
      alignPrimary="center"
      alignSecondary="center"
      style={{
        padding: "var(--sds-size-space-400)",
        border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
        borderRadius: "var(--sds-size-radius-200)",
        minWidth: "120px",
        textAlign: "center",
      }}
    >
      <IconComponent size={size} />
      <Text style={{ fontSize: "var(--sds-typography-scale-01)", wordBreak: "break-word" }}>
        {name}
      </Text>
    </Flex>
  );
}

// Categorize icons for better organization
const categorizeIcons = () => {
  const categories = {
    "Actions": [] as [string, React.ComponentType<any>][],
    "Arrows & Navigation": [] as [string, React.ComponentType<any>][],
    "Communication": [] as [string, React.ComponentType<any>][],
    "Content & Media": [] as [string, React.ComponentType<any>][],
    "Design & Layout": [] as [string, React.ComponentType<any>][],
    "Device & Hardware": [] as [string, React.ComponentType<any>][],
    "Files & Folders": [] as [string, React.ComponentType<any>][],
    "Interface Elements": [] as [string, React.ComponentType<any>][],
    "Social & Brands": [] as [string, React.ComponentType<any>][],
    "System & Status": [] as [string, React.ComponentType<any>][],
    "User & Account": [] as [string, React.ComponentType<any>][],
    "Weather & Nature": [] as [string, React.ComponentType<any>][],
    "Other": [] as [string, React.ComponentType<any>][],
  };

  iconComponents.forEach(([name, component]) => {
    const lowercaseName = name.toLowerCase();
    
    if (lowercaseName.includes("arrow") || lowercaseName.includes("chevron") || lowercaseName.includes("navigation") || lowercaseName.includes("corner")) {
      categories["Arrows & Navigation"].push([name, component]);
    } else if (lowercaseName.includes("mail") || lowercaseName.includes("message") || lowercaseName.includes("phone") || lowercaseName.includes("mic") || lowercaseName.includes("bell")) {
      categories["Communication"].push([name, component]);
    } else if (lowercaseName.includes("facebook") || lowercaseName.includes("twitter") || lowercaseName.includes("instagram") || lowercaseName.includes("linkedin") || lowercaseName.includes("github") || lowercaseName.includes("gitlab") || lowercaseName.includes("figma") || lowercaseName.includes("slack") || lowercaseName.includes("trello") || lowercaseName.includes("dribbble") || lowercaseName.includes("codepen") || lowercaseName.includes("codesandbox") || lowercaseName.includes("framer") || lowercaseName.includes("chrome") || lowercaseName.includes("twitch") || lowercaseName.includes("youtube")) {
      categories["Social & Brands"].push([name, component]);
    } else if (lowercaseName.includes("file") || lowercaseName.includes("folder") || lowercaseName.includes("save") || lowercaseName.includes("download") || lowercaseName.includes("upload")) {
      categories["Files & Folders"].push([name, component]);
    } else if (lowercaseName.includes("user") || lowercaseName.includes("login") || lowercaseName.includes("logout") || lowercaseName.includes("key") || lowercaseName.includes("lock") || lowercaseName.includes("unlock") || lowercaseName.includes("shield")) {
      categories["User & Account"].push([name, component]);
    } else if (lowercaseName.includes("play") || lowercaseName.includes("pause") || lowercaseName.includes("stop") || lowercaseName.includes("music") || lowercaseName.includes("volume") || lowercaseName.includes("film") || lowercaseName.includes("video") || lowercaseName.includes("image") || lowercaseName.includes("camera")) {
      categories["Content & Media"].push([name, component]);
    } else if (lowercaseName.includes("cloud") || lowercaseName.includes("sun") || lowercaseName.includes("moon") || lowercaseName.includes("wind") || lowercaseName.includes("droplet") || lowercaseName.includes("umbrella") || lowercaseName.includes("thermometer")) {
      categories["Weather & Nature"].push([name, component]);
    } else if (lowercaseName.includes("smartphone") || lowercaseName.includes("tablet") || lowercaseName.includes("monitor") || lowercaseName.includes("tv") || lowercaseName.includes("speaker") || lowercaseName.includes("headphones") || lowercaseName.includes("wifi") || lowercaseName.includes("bluetooth") || lowercaseName.includes("battery") || lowercaseName.includes("cpu") || lowercaseName.includes("harddrive") || lowercaseName.includes("server") || lowercaseName.includes("database")) {
      categories["Device & Hardware"].push([name, component]);
    } else if (lowercaseName.includes("layout") || lowercaseName.includes("grid") || lowercaseName.includes("columns") || lowercaseName.includes("sidebar") || lowercaseName.includes("align") || lowercaseName.includes("layers") || lowercaseName.includes("crop") || lowercaseName.includes("maximize") || lowercaseName.includes("minimize")) {
      categories["Design & Layout"].push([name, component]);
    } else if (lowercaseName.includes("edit") || lowercaseName.includes("copy") || lowercaseName.includes("cut") || lowercaseName.includes("trash") || lowercaseName.includes("delete") || lowercaseName.includes("plus") || lowercaseName.includes("minus") || lowercaseName.includes("check") || lowercaseName.includes("x") || lowercaseName.includes("search") || lowercaseName.includes("filter") || lowercaseName.includes("settings") || lowercaseName.includes("tool")) {
      categories["Actions"].push([name, component]);
    } else if (lowercaseName.includes("menu") || lowercaseName.includes("more") || lowercaseName.includes("toggle") || lowercaseName.includes("slider") || lowercaseName.includes("radio") || lowercaseName.includes("square") || lowercaseName.includes("circle") || lowercaseName.includes("triangle") || lowercaseName.includes("octagon") || lowercaseName.includes("hexagon")) {
      categories["Interface Elements"].push([name, component]);
    } else if (lowercaseName.includes("alert") || lowercaseName.includes("info") || lowercaseName.includes("help") || lowercaseName.includes("loader") || lowercaseName.includes("refresh") || lowercaseName.includes("power") || lowercaseName.includes("wifi") || lowercaseName.includes("command") || lowercaseName.includes("terminal")) {
      categories["System & Status"].push([name, component]);
    } else {
      categories["Other"].push([name, component]);
    }
  });

  return categories;
};

export const AllIcons: StoryObj = {
  name: "All Icons",
  render: () => {
    const categories = categorizeIcons();
    
    return (
      <div style={{ padding: "var(--sds-size-space-800)" }}>
        <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
          <h1 style={{ 
            font: "var(--sds-font-title-page)", 
            color: "var(--sds-color-text-default-default)",
            marginBottom: "var(--sds-size-space-400)"
          }}>
            SDS Icons ({iconComponents.length} total)
          </h1>
          <Text>
            Complete collection of all available icons in the Simple Design System. 
            Icons are organized by category and displayed at 24px size.
          </Text>
        </div>

        {Object.entries(categories).map(([categoryName, icons]) => {
          if (icons.length === 0) return null;
          
          return (
            <div key={categoryName} style={{ marginBottom: "var(--sds-size-space-1600)" }}>
              <h2 style={{ 
                font: "var(--sds-font-heading)", 
                color: "var(--sds-color-text-default-default)",
                marginBottom: "var(--sds-size-space-800)"
              }}>
                {categoryName} ({icons.length})
              </h2>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: "var(--sds-size-space-400)",
              }}>
                {icons.map(([name, IconComponent]) => (
                  <IconDisplay
                    key={name}
                    IconComponent={IconComponent}
                    name={name}
                    size="24"
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
  },
};

type IconPlaygroundProps = {
  icon: string;
  size: "14" | "16" | "20" | "24" | "32" | "40" | "48";
  className: string;
};

export const IconPlayground: StoryObj<IconPlaygroundProps> = {
  name: "Icon Playground",
  args: {
    icon: "IconActivity",
    size: "24",
    className: "",
  },
  argTypes: {
    icon: {
      control: { type: "select" },
      options: iconComponents.map(([name]) => name),
      description: "Choose which icon to display",
    },
    size: {
      control: { type: "select" },
      options: ["14", "16", "20", "24", "32", "40", "48"],
      description: "Icon size in pixels",
    },
    className: {
      control: { type: "text" },
      description: "Additional CSS classes to apply to the icon",
    },
  },
  render: ({ icon, size, className }: IconPlaygroundProps) => {
    // Find the selected icon component
    const selectedIcon = iconComponents.find(([name]) => name === icon);
    const IconComponent = selectedIcon ? selectedIcon[1] : Icons.IconActivity;

    return (
      <div style={{ padding: "var(--sds-size-space-800)" }}>
        <h1 style={{ 
          font: "var(--sds-font-title-page)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-800)"
        }}>
          Icon Playground
        </h1>
        
        <div style={{ marginBottom: "var(--sds-size-space-1200)" }}>
          <Text>
            Use the controls below to experiment with different icon props. 
            All icons support size and className properties.
          </Text>
        </div>

        <Flex direction="column" gap="800" alignPrimary="start">
          {/* Icon Display */}
          <div style={{
            padding: "var(--sds-size-space-1200)",
            border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
            borderRadius: "var(--sds-size-radius-400)",
            backgroundColor: "var(--sds-color-background-default-secondary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "200px",
          }}>
            <IconComponent size={size} className={className} />
          </div>

          {/* Props Information */}
          <div style={{
            padding: "var(--sds-size-space-800)",
            border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
            borderRadius: "var(--sds-size-radius-200)",
            backgroundColor: "var(--sds-color-background-default-default)",
          }}>
            <h3 style={{ 
              font: "var(--sds-font-subheading)", 
              color: "var(--sds-color-text-default-default)",
              marginBottom: "var(--sds-size-space-600)"
            }}>
              Current Props
            </h3>
            <div style={{
              backgroundColor: "var(--sds-color-background-neutral-tertiary)",
              padding: "var(--sds-size-space-600)",
              borderRadius: "var(--sds-size-radius-200)",
              fontFamily: "var(--sds-typography-family-mono)",
              fontSize: "var(--sds-typography-scale-02)",
              color: "var(--sds-color-text-default-default)",
            }}>
              <div>&lt;{icon}</div>
              <div>&nbsp;&nbsp;size="{size}"</div>
              {className && <div>&nbsp;&nbsp;className="{className}"</div>}
              <div>/&gt;</div>
            </div>
          </div>

          {/* Size Comparison */}
          <div>
            <h3 style={{ 
              font: "var(--sds-font-subheading)", 
              color: "var(--sds-color-text-default-default)",
              marginBottom: "var(--sds-size-space-600)"
            }}>
              Size Comparison
            </h3>
            <Flex direction="row" gap="600" alignPrimary="start" alignSecondary="center" wrap>
              {(["14", "16", "20", "24", "32", "40", "48"] as const).map((sizeOption) => (
                <Flex
                  key={sizeOption}
                  direction="column"
                  gap="200"
                  alignPrimary="center"
                  alignSecondary="center"
                  style={{
                    padding: "var(--sds-size-space-400)",
                    border: sizeOption === size 
                      ? `2px solid var(--sds-color-border-brand-default)` 
                      : "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
                    borderRadius: "var(--sds-size-radius-200)",
                    minWidth: "80px",
                    textAlign: "center",
                    backgroundColor: sizeOption === size 
                      ? "var(--sds-color-background-brand-tertiary)" 
                      : "transparent",
                  }}
                >
                  <IconComponent size={sizeOption} className={className} />
                  <Text style={{ 
                    fontSize: "var(--sds-typography-scale-01)",
                    fontWeight: sizeOption === size ? "var(--sds-typography-weight-semibold)" : "normal"
                  }}>
                    {sizeOption}px
                  </Text>
                </Flex>
              ))}
            </Flex>
          </div>

          {/* CSS Custom Properties */}
          <div>
            <h3 style={{ 
              font: "var(--sds-font-subheading)", 
              color: "var(--sds-color-text-default-default)",
              marginBottom: "var(--sds-size-space-600)"
            }}>
              CSS Styling Examples
            </h3>
            <Text style={{ marginBottom: "var(--sds-size-space-600)" }}>
              Try these className values to see different styling effects:
            </Text>
            <Flex direction="column" gap="400">
              {[
                { 
                  className: "custom-red", 
                  description: "Red color",
                  style: ".custom-red { color: var(--sds-color-text-danger-default); }"
                },
                { 
                  className: "custom-blue", 
                  description: "Blue color",
                  style: ".custom-blue { color: var(--sds-color-text-brand-default); }"
                },
                { 
                  className: "custom-rotate", 
                  description: "Rotated 45 degrees",
                  style: ".custom-rotate { transform: rotate(45deg); }"
                },
                { 
                  className: "custom-shadow", 
                  description: "Drop shadow",
                  style: ".custom-shadow { filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2)); }"
                },
              ].map(({ className: exampleClass, description, style }) => (
                <div key={exampleClass} style={{
                  padding: "var(--sds-size-space-400)",
                  border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
                  borderRadius: "var(--sds-size-radius-200)",
                  backgroundColor: "var(--sds-color-background-default-secondary)",
                }}>
                  <Flex direction="row" gap="600" alignPrimary="space-between" alignSecondary="center">
                    <div>
                      <Text style={{ fontWeight: "var(--sds-typography-weight-semibold)" }}>
                        {exampleClass}
                      </Text>
                      <Text style={{ fontSize: "var(--sds-typography-scale-02)", color: "var(--sds-color-text-default-secondary)" }}>
                        {description}
                      </Text>
                    </div>
                    <code style={{
                      fontSize: "var(--sds-typography-scale-01)",
                      fontFamily: "var(--sds-typography-family-mono)",
                      color: "var(--sds-color-text-default-secondary)",
                    }}>
                      {style}
                    </code>
                  </Flex>
                </div>
              ))}
            </Flex>
          </div>
        </Flex>

        {/* Add the custom styles */}
        <style>{`
          .custom-red { color: var(--sds-color-text-danger-default); }
          .custom-blue { color: var(--sds-color-text-brand-default); }
          .custom-rotate { transform: rotate(45deg); }
          .custom-shadow { filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2)); }
        `}</style>
      </div>
    );
  },
};

export const SearchableIcons: StoryObj = {
  name: "Searchable Icons",
  render: () => {
    const [searchTerm, setSearchTerm] = React.useState("");
    
    const filteredIcons = iconComponents.filter(([name]) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div style={{ padding: "var(--sds-size-space-800)" }}>
        <h1 style={{ 
          font: "var(--sds-font-title-page)", 
          color: "var(--sds-color-text-default-default)",
          marginBottom: "var(--sds-size-space-800)"
        }}>
          Icon Search
        </h1>
        
        <div style={{ marginBottom: "var(--sds-size-space-800)" }}>
          <input
            type="text"
            placeholder="Search icons by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: "100%",
              maxWidth: "400px",
              padding: "var(--sds-size-space-400)",
              border: "var(--sds-size-stroke-border) solid var(--sds-color-border-default-default)",
              borderRadius: "var(--sds-size-radius-200)",
              font: "var(--sds-font-body-base)",
              color: "var(--sds-color-text-default-default)",
              backgroundColor: "var(--sds-color-background-default-default)",
            }}
          />
        </div>

        <div style={{ marginBottom: "var(--sds-size-space-600)" }}>
          <Text>
            Found {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''}
            {searchTerm && ` matching "${searchTerm}"`}
          </Text>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "var(--sds-size-space-400)",
        }}>
          {filteredIcons.map(([name, IconComponent]) => (
            <IconDisplay
              key={name}
              IconComponent={IconComponent}
              name={name}
              size="24"
            />
          ))}
        </div>
      </div>
    );
  },
};