import { ConicAngleSpans } from "@/app/docs/components/conic-background/conic-angle-spans";
import { ConicBackgroundPositions } from "@/app/docs/components/conic-background/conic-background-positions";
import { ConicBackgroundPreview } from "@/app/docs/components/conic-background/conic-background-preview";
import { ConicBackgroundSpans } from "@/app/docs/components/conic-background/conic-background-spans";
import { AuthDialog } from "@/app/docs/components/dialog/auth-dialog";
import { BasicDialog } from "@/app/docs/components/dialog/basic-dialog";
import { DialogCustomSize } from "@/app/docs/components/dialog/dialog-custom-size";
import { DialogPreview } from "@/app/docs/components/dialog/dialog-preview";
import { DialogWithShortcut } from "@/app/docs/components/dialog/dialog-with-shortcut";
import { DialogWrapper } from "@/app/docs/components/dialog/dialog-wrapper";
import { SearchDialog } from "@/app/docs/components/dialog/search-dialog";
import { EllipseBackgroundAnimated } from "@/app/docs/components/ellipse-background/ellipse-background-animated";
import { EllipseBackgroundDimensions } from "@/app/docs/components/ellipse-background/ellipse-background-dimensions";
import { EllipseBackgroundPositions } from "@/app/docs/components/ellipse-background/ellipse-background-positions";
import { EllipseBackgroundPreview } from "@/app/docs/components/ellipse-background/ellipse-background-preview";
import { EllipseBackgroundTransition } from "@/app/docs/components/ellipse-background/ellipse-background-transition";
import { EllipseBackgroundVariants } from "@/app/docs/components/ellipse-background/ellipse-background-variants";
import { FloatingNavbarPreview } from "@/app/docs/components/floating-navbar/floating-navbar-preview";
import { GridBackgroundDimensions } from "@/app/docs/components/grid-background/grid-background-dimensions";
import { GridBackgroundLineWidths } from "@/app/docs/components/grid-background/grid-background-line-widths";
import { GridBackgroundOpacity } from "@/app/docs/components/grid-background/grid-background-opacity";
import { GridBackgroundPreview } from "@/app/docs/components/grid-background/grid-background-preview";
import { LampBackgroundAngleSpan } from "@/app/docs/components/lamp-background/lamp-background-angle-span";
import { LampBackgroundColors } from "@/app/docs/components/lamp-background/lamp-background-colors";
import { LampBackgroundMultiPosition } from "@/app/docs/components/lamp-background/lamp-background-multi-positions";
import { LampBackgroundPositions } from "@/app/docs/components/lamp-background/lamp-background-positions";
import { LampBackgroundPreview } from "@/app/docs/components/lamp-background/lamp-background-preview";
import { MaskedGridBackgroundMaskOpacity } from "@/app/docs/components/masked-grid-background/masked-grid-background-mask-opacity";
import { MaskedGridBackgroundMaskSizes } from "@/app/docs/components/masked-grid-background/masked-grid-background-mask-sizes";
import { MaskedGridBackgroundPositions } from "@/app/docs/components/masked-grid-background/masked-grid-background-positions";
import { MaskedGridBackgroundPreview } from "@/app/docs/components/masked-grid-background/masked-grid-background-preview";
import { MaskedGridBackgroundSizes } from "@/app/docs/components/masked-grid-background/masked-grid-background-sizes";
import { MovingBackgroundAngles } from "@/app/docs/components/moving-background/moving-background-angles";
import { MovingBackgroundControl } from "@/app/docs/components/moving-background/moving-background-control";
import { MovingBackgroundDurations } from "@/app/docs/components/moving-background/moving-background-durations";
import { MovingBackgroundPreview } from "@/app/docs/components/moving-background/moving-background-preview";
import { MovingBackgroundShineWidth } from "@/app/docs/components/moving-background/moving-background-shine-width";
import { MovingBorderColors } from "@/app/docs/components/moving-border/moving-border-colors";
import { MovingBorderDirections } from "@/app/docs/components/moving-border/moving-border-directions";
import { MovingBorderDuration } from "@/app/docs/components/moving-border/moving-border-duration";
import { MovingBorderEffects } from "@/app/docs/components/moving-border/moving-border-effects";
import { MovingBorderPreview } from "@/app/docs/components/moving-border/moving-border-preview";
import { MovingBorderSpeeds } from "@/app/docs/components/moving-border/moving-border-speeds";
import { RadialBackgroundAnimated } from "@/app/docs/components/radial-background/radial-animated-background";
import { RadialBackgroundPositions } from "@/app/docs/components/radial-background/radial-background-positions";
import { RadialBackgroundPreview } from "@/app/docs/components/radial-background/radial-background-preview";
import { RadialBackgroundRadius } from "@/app/docs/components/radial-background/radial-background-radius";
import { RadialBackgroundVariants } from "@/app/docs/components/radial-background/radial-background-variants";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./components/component-x/table";
import { CodeBlock } from "./components/mdx/codeblock";
import { ComponentPreviewWithCode } from "./components/mdx/component-preview-with-code";
import { Installation } from "./components/mdx/installation";

const generateId = (text: string) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Installation,
    ComponentPreviewWithCode,
    FloatingNavbarPreview,
    ConicBackgroundSpans,
    ConicBackgroundPreview,
    ConicBackgroundPositions,
    ConicAngleSpans,
    RadialBackgroundAnimated,
    RadialBackgroundPositions,
    RadialBackgroundPreview,
    RadialBackgroundRadius,
    RadialBackgroundVariants,
    MovingBackgroundPreview,
    MovingBackgroundAngles,
    MovingBackgroundControl,
    MovingBackgroundDurations,
    MovingBackgroundShineWidth,
    DialogPreview,
    AuthDialog,
    BasicDialog,
    DialogCustomSize,
    DialogWithShortcut,
    DialogWrapper,
    SearchDialog,
    EllipseBackgroundAnimated,
    EllipseBackgroundDimensions,
    EllipseBackgroundPositions,
    EllipseBackgroundPreview,
    EllipseBackgroundTransition,
    EllipseBackgroundVariants,
    LampBackgroundMultiPosition,
    LampBackgroundAngleSpan,
    LampBackgroundColors,
    LampBackgroundPositions,
    LampBackgroundPreview,
    MovingBorderColors,
    MovingBorderDirections,
    MovingBorderPreview,
    MovingBorderSpeeds,
    MovingBorderDuration,
    MovingBorderEffects,
    GridBackgroundDimensions,
    GridBackgroundLineWidths,
    GridBackgroundOpacity,
    GridBackgroundPreview,
    MaskedGridBackgroundMaskOpacity,
    MaskedGridBackgroundMaskSizes,
    MaskedGridBackgroundPositions,
    MaskedGridBackgroundPreview,
    MaskedGridBackgroundSizes,
    h1: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h1 id={id} data-heading="1" className="text-4xl my-4" {...props}>
          {children}
        </h1>
      );
    },
    h2: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h2 id={id} data-heading="2" className="text-3xl my-4" {...props}>
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }: React.HTMLProps<HTMLHeadingElement>) => {
      const id = generateId(children?.toString() || "");
      return (
        <h2 id={id} data-heading="3" className="text-2xl my-4" {...props}>
          {children}
        </h2>
      );
    },
    p: ({ className, ...props }) => (
      <p className={cn("leading-9 tracking-wider", className)} {...props} />
    ),
    Link: ({ className, href, children, ...props }) => {
      const baseClasses = "text-primary";
      const combinedClassName = cn(baseClasses, className);

      const isInternal =
        href &&
        (href.startsWith("/") || href.startsWith("#") || !href.includes("://"));

      if (isInternal) {
        return (
          <Link href={href} className={combinedClassName}>
            {children}
          </Link>
        );
      }

      return (
        <a
          href={href}
          className={combinedClassName}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    },
    ul: ({ className, ...props }) => (
      <ul
        className={cn(
          "my-2 ml-6 list-disc marker:text-primary [&>li]:mt-1",
          className
        )}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn(
          "my-2 ml-6 list-decimal marker:text-primary [&>li]:mt-1",
          className
        )}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn("leading-9 tracking-wider", className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          "my-4 border-l-4 border-primary pl-6 text-muted-foreground bg-muted/40 pr-2 py-2",
          className
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          "relative rounded px-[0.3rem] py-[0.2rem] text-sm border z-1 bg-primary",
          className
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <CodeBlock className={className} {...props} />
    ),
    table: ({ className, ...props }) => (
      <Table className={className} {...props} />
    ),
    thead: ({ className, ...props }) => (
      <TableHeader className={className} {...props} />
    ),
    tbody: ({ className, ...props }) => (
      <TableBody className={className} {...props} />
    ),
    tfoot: ({ className, ...props }) => (
      <TableFooter className={className} {...props} />
    ),
    tr: ({ className, ...props }) => (
      <TableRow className={className} {...props} />
    ),
    th: ({ className, ...props }) => (
      <TableHead className={className} {...props} />
    ),
    td: ({ className, ...props }) => (
      <TableCell className={className} {...props} />
    ),
    hr: ({ ...props }) => <hr className="my-2" {...props} />,
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold", className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),
  };
}
