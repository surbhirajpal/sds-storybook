import type { Meta, StoryObj } from "@storybook/react";
import { Card, PricingCard, ProductInfoCard, ReviewCard, StatsCard, TestimonialCard} from "compositions";
import { Flex } from "layout";
import { Button, ButtonGroup, Image, Text, TextHeading } from "primitives";
import { IconActivity, IconClock, IconCode, IconCompass, IconSmile } from "icons";
import { placeholder } from "images";
import { ComponentProps, ReactNode } from "react";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "SDS Compositions/Cards",
  parameters: { layout: "centered" },
};
export default meta;

/**
 * Base Card component
 * - Flexible layout (vertical/horizontal)
 * - Optional asset: Icon or Image
 * - Optional interaction: clickable
 * - Variants: default, stroke, brand
 * - Configurable padding
 */
export const StoryCard: StoryObj<ComponentProps<typeof Card> & { "[asset]": "none" | "icon" | "image"; "[interaction]": boolean; }> = {
  name: "Card",
  args: {
    direction: "vertical",
    variant: "default",
    "[asset]": "none",
    "[interaction]": false,
  },
  argTypes: {
    direction: { control: { type: "select" }, options: ["vertical", "horizontal"] },
    variant: { control: { type: "select" }, options: ["default", "stroke", "brand"] },
    "[asset]": { control: { type: "select" }, options: ["none", "icon", "image"] },
  },
  render: ({ "[asset]": _asset, "[interaction]": _interaction, ...args }) => (
    <Card
      {...args}
      asset={
        _asset === "icon" ? (
          <IconActivity size="32" />
        ) : _asset === "image" ? (
          <Image alt="A nice image" aspectRatio="1-1" size="small" src={placeholder} />
        ) : undefined
      }
      interactionProps={
        _interaction
          ? { "aria-label": "Visit something nice about this card", href: "https://google.com" }
          : undefined
      }
    >
      <TextHeading>This is a card</TextHeading>
      <Text>Answer the frequently asked question in a simple sentence, a paragraph, or a list.</Text>
      <ButtonGroup align="start">
        <Button variant="neutral">Hello there!</Button>
      </ButtonGroup>
    </Card>
  ),
};

/**
 * PricingCard: Displays price points, features, and CTA buttons
 */
export const StoryPricingCard: StoryObj<typeof PricingCard> = {
  name: "Pricing Card",
  render: () => (
    <Flex container wrap gap="400" type="third" alignPrimary="center">
      {[1, 2, 3].map((i) => (
        <PricingCard
          key={i}
          variant={i === 2 ? "brand" : "stroke"}
          heading={`Tier ${i}`}
          action="Buy this"
          price={(5 * (5 - i)).toString()}
          priceCurrency="$"
          size="large"
          onAction={() => {}}
          list={["Feature 1", "Feature 2", "Feature 3"]}
          actionVariant={i === 2 ? "neutral" : "primary"}
        />
      ))}
    </Flex>
  ),
};

/**
 * ProductInfoCard: Displays product information with asset, description, price, rating
 */
export const StoryProductInfoCard: StoryObj<typeof ProductInfoCard> = {
  name: "Product Info Card",
  render: () => (
    <Flex container wrap type="quarter" gap="400">
      {[1, 2, 3, 4].map((i) => (
        <ProductInfoCard
          key={i}
          asset={<Image alt="Product" src={placeholder} />}
          heading={`Product ${i}`}
          price="5"
          description="Amazing product description."
        />
      ))}
    </Flex>
  ),
};

/**
 * ReviewCard: Shows user review with stars, body, and author
 */
export const StoryReviewCard: StoryObj<typeof ReviewCard> = {
  name: "Review Card",
  render: () => (
    <Flex container wrap type="quarter" gap="400">
      {[1, 2, 3, 4].map((i) => (
        <ReviewCard
          key={i}
          stars={5}
          title="Amazing!"
          body="This experience exceeded expectations."
          name="Jane Doe"
          date="Aug 2025"
          src={placeholder}
        />
      ))}
    </Flex>
  ),
};

/**
 * StatsCard: Displays numeric statistics with optional icon
 */
export const StoryStatsCard: StoryObj<typeof StatsCard> = {
  name: "Stats Card",
  render: () => (
    <Flex container wrap type="quarter" gap="400">
      <StatsCard icon={<IconCode size="40" />} stat="15.3k" description="Lines of Code" />
      <StatsCard icon={<IconClock size="40" />} stat="400" description="SDS Hours" />
      <StatsCard icon={<IconSmile size="40" />} stat="8M" description="Smiles" />
      <StatsCard icon={<IconCompass size="40" />} stat="120.4k" description="Directions" />
    </Flex>
  ),
};

/**
 * TestimonialCard: Highlights a testimonial with author info
 */
export const StoryTestimonialCard: StoryObj<typeof TestimonialCard> = {
  name: "Testimonial Card",
  render: () => (
    <Flex container wrap type="third" gap="400">
      {[1, 2, 3].map((i) => (
        <TestimonialCard
          key={i}
          heading="“Something splendid”"
          src={placeholder}
          username={`user${i}`}
          name={`Full Name ${i}`}
        />
      ))}
    </Flex>
  ),
};
