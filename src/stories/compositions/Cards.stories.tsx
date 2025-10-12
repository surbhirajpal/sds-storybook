import type { Meta, StoryObj } from "@storybook/react";
import { IconHeart, IconStar, IconTrendingUp, IconUsers } from "icons";
import { Flex } from "layout";
import {
  Card,
  PricingCard,
  ProductInfoCard,
  ReviewCard,
  StatsCard,
  TestimonialCard,
} from "compositions";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "SDS Compositions/Cards",
  parameters: { layout: "centered" },
};
export default meta;

// Basic Card Playground
type CardPlaygroundProps = {
  children: string;
  align: "start" | "center" | "end";
  direction: "horizontal" | "vertical";
  padding: "600" | "800";
  variant: "default" | "stroke" | "brand";
  hasAsset: boolean;
  hasInteraction: boolean;
};

export const StoryCard: StoryObj<CardPlaygroundProps> = {
  name: "Card",
  args: {
    children: "This is card content that can be customized using the controls below.",
    align: "start",
    direction: "vertical",
    padding: "600",
    variant: "stroke",
    hasAsset: false,
    hasInteraction: false,
  },
  argTypes: {
    children: {
      control: { type: "text" },
      description: "Content inside the card",
    },
    align: {
      control: { type: "select" },
      options: ["start", "center", "end"],
      description: "Content alignment within the card",
    },
    direction: {
      control: { type: "select" },
      options: ["horizontal", "vertical"],
      description: "Layout direction (becomes vertical on mobile)",
    },
    padding: {
      control: { type: "select" },
      options: ["600", "800"],
      description: "Internal padding of the card",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "stroke", "brand"],
      description: "Visual style variant",
    },
    hasAsset: {
      control: { type: "boolean" },
      description: "Whether to show an asset (icon/image)",
    },
    hasInteraction: {
      control: { type: "boolean" },
      description: "Whether the card is clickable",
    },
  },
  render: ({ children, align, direction, padding, variant, hasAsset, hasInteraction }) => (
    <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "600px" }}>
      <Card
        align={align}
        direction={direction}
        padding={padding}
        variant={variant}
        asset={hasAsset ? <IconStar size="32" /> : undefined}
        interactionProps={hasInteraction ? {
          "aria-label": "Click this card",
          onPress: () => alert("Card clicked!"),
        } : undefined}
      >
        <div style={{ padding: "var(--sds-size-space-400)" }}>
          {children}
        </div>
      </Card>
    </div>
  ),
};

// Pricing Card Playground
type PricingCardPlaygroundProps = {
  heading: string;
  price: string;
  priceCurrency: string;
  priceLabel: string;
  action: string;
  variant: "default" | "stroke" | "brand";
  size: "small" | "large";
  listItems: string;
};

export const StoryPricingCard: StoryObj<PricingCardPlaygroundProps> = {
  name: "Pricing Card",
  args: {
    heading: "Professional",
    price: "29.99",
    priceCurrency: "$",
    priceLabel: "/ month",
    action: "Choose Plan",
    variant: "stroke",
    size: "large",
    listItems: "Unlimited projects\n24/7 support\nAdvanced analytics\nTeam collaboration",
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      description: "Plan name or heading",
    },
    price: {
      control: { type: "text" },
      description: "Price amount (without currency)",
    },
    priceCurrency: {
      control: { type: "text" },
      description: "Currency symbol",
    },
    priceLabel: {
      control: { type: "text" },
      description: "Price frequency label",
    },
    action: {
      control: { type: "text" },
      description: "Action button text",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "stroke", "brand"],
      description: "Card variant style",
    },
    size: {
      control: { type: "select" },
      options: ["small", "large"],
      description: "Card size variation",
    },
    listItems: {
      control: { type: "text" },
      description: "Features list (one per line)",
    },
  },
  render: ({ heading, price, priceCurrency, priceLabel, action, variant, size, listItems }) => (
    <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "400px" }}>
      <PricingCard
        heading={heading}
        price={price}
        priceCurrency={priceCurrency}
        priceLabel={priceLabel}
        action={action}
        variant={variant}
        size={size}
        list={listItems.split('\n').filter(item => item.trim())}
        onAction={() => alert(`${action} clicked!`)}
      />
    </div>
  ),
};

// Product Info Card Playground
type ProductInfoCardPlaygroundProps = {
  heading: string;
  price: string;
  description: string;
  hasAsset: boolean;
};

export const StoryProductInfoCard: StoryObj<ProductInfoCardPlaygroundProps> = {
  name: "Product Info Card",
  args: {
    heading: "Wireless Headphones",
    price: "199.99",
    description: "Premium quality wireless headphones with noise cancellation and 30-hour battery life.",
    hasAsset: true,
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      description: "Product name",
    },
    price: {
      control: { type: "text" },
      description: "Product price (without currency)",
    },
    description: {
      control: { type: "text" },
      description: "Product description",
    },
    hasAsset: {
      control: { type: "boolean" },
      description: "Whether to show product image",
    },
  },
  render: ({ heading, price, description, hasAsset }) => (
    <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "300px" }}>
      <ProductInfoCard
        heading={heading}
        price={price}
        description={description}
        asset={hasAsset ? <IconHeart size="40" /> : undefined}
      />
    </div>
  ),
};

// Review Card Playground
type ReviewCardPlaygroundProps = {
  stars: number;
  title: string;
  body: string;
  name: string;
  date: string;
  hasAvatar: boolean;
};

export const StoryReviewCard: StoryObj<ReviewCardPlaygroundProps> = {
  name: "Review Card",
  args: {
    stars: 5,
    title: "Amazing experience!",
    body: "This product exceeded my expectations. The quality is outstanding and customer service was fantastic.",
    name: "Sarah Johnson",
    date: "2 days ago",
    hasAvatar: true,
  },
  argTypes: {
    stars: {
      control: { type: "range", min: 1, max: 5, step: 1 },
      description: "Number of stars (1-5)",
    },
    title: {
      control: { type: "text" },
      description: "Review title",
    },
    body: {
      control: { type: "text" },
      description: "Review content",
    },
    name: {
      control: { type: "text" },
      description: "Reviewer name",
    },
    date: {
      control: { type: "text" },
      description: "Review date",
    },
    hasAvatar: {
      control: { type: "boolean" },
      description: "Whether to show reviewer avatar",
    },
  },
  render: ({ stars, title, body, name, date, hasAvatar }) => (
    <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "400px" }}>
      <ReviewCard
        stars={stars}
        title={title}
        body={body}
        name={name}
        date={date}
        src={hasAvatar ? undefined : undefined}
      />
    </div>
  ),
};

// Stats Card Playground
type StatsCardPlaygroundProps = {
  stat: string;
  description: string;
  iconType: "none" | "trending" | "users" | "heart";
};

export const StoryStatsCard: StoryObj<StatsCardPlaygroundProps> = {
  name: "Stats Card",
  args: {
    stat: "1,234",
    description: "Active Users",
    iconType: "users",
  },
  argTypes: {
    stat: {
      control: { type: "text" },
      description: "The statistic number or value",
    },
    description: {
      control: { type: "text" },
      description: "Description of the statistic",
    },
    iconType: {
      control: { type: "select" },
      options: ["none", "trending", "users", "heart"],
      description: "Icon to display",
    },
  },
  render: ({ stat, description, iconType }) => {
    const iconMap = {
      none: undefined,
      trending: <IconTrendingUp size="32" />,
      users: <IconUsers size="32" />,
      heart: <IconHeart size="32" />,
    };

    return (
      <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "250px" }}>
        <StatsCard
          stat={stat}
          description={description}
          icon={iconMap[iconType]}
        />
      </div>
    );
  },
};

// Testimonial Card Playground
type TestimonialCardPlaygroundProps = {
  heading: string;
  name: string;
  username: string;
  hasAvatar: boolean;
};

export const StoryTestimonialCard: StoryObj<TestimonialCardPlaygroundProps> = {
  name: "Testimonial Card",
  args: {
    heading: "This design system has transformed our workflow completely. The components are intuitive and well-designed.",
    name: "Alex Chen",
    username: "alexdesigns",
    hasAvatar: true,
  },
  argTypes: {
    heading: {
      control: { type: "text" },
      description: "Testimonial quote",
    },
    name: {
      control: { type: "text" },
      description: "Person's name",
    },
    username: {
      control: { type: "text" },
      description: "Username or handle",
    },
    hasAvatar: {
      control: { type: "boolean" },
      description: "Whether to show avatar",
    },
  },
  render: ({ heading, name, username, hasAvatar }) => (
    <div style={{ padding: "var(--sds-size-space-800)", maxWidth: "400px" }}>
      <TestimonialCard
        heading={heading}
        name={name}
        username={username}
        initials={hasAvatar ? name.split(' ').map(n => n[0]).join('') : undefined}
      />
    </div>
  ),
};

// All Cards Overview
export const StoryAllCards: StoryObj = {
  name: "All Cards Overview",
  render: () => (
    <div style={{ padding: "var(--sds-size-space-800)" }}>
      <h2 style={{ 
        font: "var(--sds-font-title-page)", 
        color: "var(--sds-color-text-default-default)",
        marginBottom: "var(--sds-size-space-800)"
      }}>
        Card Components Overview
      </h2>
      
      <div style={{ display: "grid", gap: "var(--sds-size-space-1200)" }}>
        {/* Basic Cards */}
        <div>
          <h3 style={{ 
            font: "var(--sds-font-heading)", 
            color: "var(--sds-color-text-default-default)",
            marginBottom: "var(--sds-size-space-600)"
          }}>
            Basic Card Variants
          </h3>
          <Flex gap="600" wrap>
            <Card variant="default" padding="600">
              <div style={{ padding: "var(--sds-size-space-400)" }}>Default Card</div>
            </Card>
            <Card variant="stroke" padding="600">
              <div style={{ padding: "var(--sds-size-space-400)" }}>Stroke Card</div>
            </Card>
            <Card variant="brand" padding="600">
              <div style={{ padding: "var(--sds-size-space-400)" }}>Brand Card</div>
            </Card>
          </Flex>
        </div>

        {/* Pricing Cards */}
        <div>
          <h3 style={{ 
            font: "var(--sds-font-heading)", 
            color: "var(--sds-color-text-default-default)",
            marginBottom: "var(--sds-size-space-600)"
          }}>
            Pricing Cards
          </h3>
          <Flex gap="600" wrap>
            <PricingCard
              heading="Basic"
              price="9.99"
              priceCurrency="$"
              priceLabel="/ month"
              action="Choose Basic"
              variant="stroke"
              size="small"
              list={["5 projects", "Email support", "Basic analytics"]}
              onAction={() => alert("Basic plan selected")}
            />
            <PricingCard
              heading="Pro"
              price="29.99"
              priceCurrency="$"
              priceLabel="/ month"
              action="Choose Pro"
              variant="brand"
              size="large"
              list={["Unlimited projects", "Priority support", "Advanced analytics", "Team features"]}
              onAction={() => alert("Pro plan selected")}
            />
          </Flex>
        </div>

        {/* Specialized Cards */}
        <div>
          <h3 style={{ 
            font: "var(--sds-font-heading)", 
            color: "var(--sds-color-text-default-default)",
            marginBottom: "var(--sds-size-space-600)"
          }}>
            Specialized Cards
          </h3>
          <Flex gap="600" wrap>
            <StatsCard
              stat="2,543"
              description="Total Users"
              icon={<IconUsers size="32" />}
            />
            <TestimonialCard
              heading="Amazing product! Highly recommend."
              name="Jane Doe"
              username="janedesign"
              initials="JD"
            />
            <ReviewCard
              stars={5}
              title="Excellent service"
              body="Outstanding quality and fast delivery."
              name="John Smith"
              date="1 day ago"
            />
          </Flex>
        </div>
      </div>
    </div>
  ),
};