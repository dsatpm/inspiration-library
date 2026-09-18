You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
pricing-9.tsx
"use client";

import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { FancyButton } from "@/components/ui/pricing-9-utils/fancy-button";
import {
  ArrowUpRightIcon,
  ChartLineIcon,
  CheckIcon,
  CodeIcon,
  DatabaseIcon,
  LockIcon,
  RepeatIcon,
  SettingsIcon,
} from "lucide-react";

const animVariant: Variants = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)", scale: 0.98 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      delay: i * 0.03,
      type: "spring",
      damping: 22,
      stiffness: 280,
    },
  }),
  exit: {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    scale: 0.98,
    transition: { duration: 0.14 },
  },
};

type FeatureToggle = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  price: number;
  enabled: boolean;
};

const defaultFeatures: FeatureToggle[] = [
  {
    id: "analytics",
    label: "Analytics engine",
    icon: <ChartLineIcon className="size-4" />,
    price: 15,
    enabled: true,
  },
  {
    id: "api",
    label: "API gateway",
    icon: <CodeIcon className="size-4" />,
    price: 20,
    enabled: true,
  },
  {
    id: "storage",
    label: "Cloud storage (100 GB)",
    icon: <DatabaseIcon className="size-4" />,
    price: 10,
    enabled: false,
  },
  {
    id: "automation",
    label: "Workflow automation",
    icon: <RepeatIcon className="size-4" />,
    price: 25,
    enabled: false,
  },
  {
    id: "security",
    label: "Advanced security",
    icon: <LockIcon className="size-4" />,
    price: 30,
    enabled: false,
  },
  {
    id: "custom",
    label: "Custom integrations",
    icon: <SettingsIcon className="size-4" />,
    price: 20,
    enabled: false,
  },
];

const includedFeatures = [
  "Unlimited team members",
  "Core dashboard access",
  "Email support",
  "5 GB base storage",
];

const basePrice = 29;

export function Pricing() {
  const [features, setFeatures] = useState<FeatureToggle[]>(defaultFeatures);

  const totalPrice =
    basePrice +
    features.filter((f) => f.enabled).reduce((sum, f) => sum + f.price, 0);

  const priceChars = totalPrice.toString().split("");

  const toggleFeature = (id: string) => {
    setFeatures((prev) =>
      prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f)),
    );
  };

  return (
    <section aria-label="Pricing" className="mx-auto w-full max-w-4xl">
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge variant="secondary" className="w-fit">
            Build your plan
          </Badge>
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Only pay for what you need
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Start with a base plan and add modules as your infrastructure grows.
            Full flexibility, zero waste.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-4xl bg-card p-8 shadow-elevated-lg">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-medium text-foreground">
                Add-on modules
              </h3>
              <p className="text-sm text-muted-foreground">
                Toggle the features you need. Price updates in real-time.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-center justify-between gap-4 rounded-lg p-2"
                >
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => toggleFeature(feature.id)}
                    className="h-auto flex-1 justify-start rounded-lg px-0 py-0 hover:bg-transparent"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <div
                        className={`flex size-9 items-center justify-center rounded-full transition-colors ${
                          feature.enabled
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          {feature.label}
                        </span>
                        <span className="text-start text-xs text-muted-foreground">
                          +${feature.price}/mo
                        </span>
                      </div>
                    </div>
                  </Button>
                  <Switch
                    checked={feature.enabled}
                    onCheckedChange={() => toggleFeature(feature.id)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-4xl bg-muted p-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium text-foreground">Your plan</h3>
              <p className="text-sm text-muted-foreground">
                Base plan + {features.filter((f) => f.enabled).length} add-ons
                selected
              </p>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-1">
                <span className="text-7xl font-semibold tracking-tight text-foreground">
                  $
                </span>
                <AnimatePresence mode="popLayout">
                  {priceChars.map((char, idx) => (
                    <motion.span
                      key={`${totalPrice}-${char}-${idx}`}
                      variants={animVariant}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      custom={idx}
                      className="inline-block text-7xl font-semibold tracking-tight text-foreground"
                    >
                      {char}
                    </motion.span>
                  ))}
                </AnimatePresence>
                <span key="period" className="text-xl text-muted-foreground">
                  /month
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Base: ${basePrice} + Add-ons: ${totalPrice - basePrice}
              </p>
            </div>

            <FancyButton size="lg" className="w-full">
              Start free trial
              <ArrowUpRightIcon />
            </FancyButton>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-medium text-foreground">
                Always included
              </p>
              <ul className="flex flex-col gap-3">
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
                      <CheckIcon className="size-3 text-primary-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Pricing;


demo.tsx
import Pricing from "@/components/ui/pricing-9";

export default function PricingDemo() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-8">
      <Pricing />
    </div>
  );
}

```

Copy-paste these files for dependencies:
```tsx
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```
```tsx
shadcn/switch
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className,
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0",
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }

```
```tsx
shadcn/label
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

```

Install NPM dependencies:
```bash
motion, lucide-react, class-variance-authority, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-label
```
