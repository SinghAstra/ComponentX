import {
  BorderHoverColors,
  BorderHoverDirections,
  BorderHoverDurations,
  BorderHoverLinkPreview,
  BorderHoverPositions,
} from "@/app/docs/components/border-hover-link";
import {
  ColorPickerCustomPresets,
  ColorPickerNoLabel,
  ColorPickerPreview,
} from "@/app/docs/components/color-picker";
import {
  ConicAngleSpans,
  ConicBackgroundPositions,
  ConicBackgroundPreview,
  ConicBackgroundSpans,
} from "@/app/docs/components/conic-background";
import {
  AuthDialog,
  BasicDialog,
  DialogCustomSize,
  DialogPreview,
  DialogWithShortcut,
  DialogWrapper,
  SearchDialog,
} from "@/app/docs/components/dialog";
import {
  EllipseBackgroundAnimated,
  EllipseBackgroundDimensions,
  EllipseBackgroundPositions,
  EllipseBackgroundPreview,
  EllipseBackgroundTransition,
  EllipseBackgroundVariants,
} from "@/app/docs/components/ellipse-background";
import { FileUploaderPreview } from "@/app/docs/components/file-uploader";
import { FloatingNavbarPreview } from "@/app/docs/components/floating-navbar";
import {
  GridBackgroundDimensions,
  GridBackgroundLineWidths,
  GridBackgroundOpacity,
  GridBackgroundPreview,
} from "@/app/docs/components/grid-background";
import {
  LampBackgroundAngleSpan,
  LampBackgroundColors,
  LampBackgroundMultiPosition,
  LampBackgroundPositions,
  LampBackgroundPreview,
} from "@/app/docs/components/lamp-background";
import {
  MaskedGridBackgroundMaskOpacity,
  MaskedGridBackgroundMaskSizes,
  MaskedGridBackgroundPositions,
  MaskedGridBackgroundPreview,
  MaskedGridBackgroundSizes,
} from "@/app/docs/components/masked-grid-background";
import {
  MenuTogglePreview,
  MenuToggleSizes,
} from "@/app/docs/components/menu-toggle";
import {
  MovingBackgroundAngles,
  MovingBackgroundControl,
  MovingBackgroundDurations,
  MovingBackgroundPreview,
  MovingBackgroundShineWidth,
} from "@/app/docs/components/moving-background";
import {
  MovingBorderColors,
  MovingBorderDirections,
  MovingBorderDuration,
  MovingBorderEffects,
  MovingBorderPreview,
  MovingBorderSpeeds,
} from "@/app/docs/components/moving-border";
import {
  RadialBackgroundAnimated,
  RadialBackgroundPositions,
  RadialBackgroundPreview,
  RadialBackgroundRadius,
  RadialBackgroundVariants,
} from "@/app/docs/components/radial-background";
import {
  SliderLabelIndicators,
  SliderPreview,
  SliderWithButtons,
  SliderWithTab,
} from "@/app/docs/components/slider";
import {
  TableAlignment,
  TableInteractive,
  TablePreview,
  TableSizes,
} from "@/app/docs/components/table";
import {
  TagInputBasic,
  TagInputDefaults,
  TagInputMultiple,
  TagInputNoLabel,
  TagInputPreview,
  TagInputRequired,
} from "@/app/docs/components/tag-input";
import {
  TextShineColors,
  TextShineDuration,
  TextShinePreview,
} from "@/app/docs/components/text-shine";
import { VideoUploadPreview } from "@/app/docs/components/video-upload";
import { cn } from "@/lib/utils";
import type { MDXComponents } from "mdx/types";
import Link from "next/link";
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
    BorderHoverColors,
    BorderHoverDirections,
    BorderHoverLinkPreview,
    BorderHoverPositions,
    BorderHoverDurations,
    TextShineDuration,
    TextShinePreview,
    TextShineColors,
    SliderLabelIndicators,
    SliderPreview,
    SliderWithButtons,
    SliderWithTab,
    ColorPickerCustomPresets,
    ColorPickerNoLabel,
    ColorPickerPreview,
    TagInputBasic,
    TagInputDefaults,
    TagInputMultiple,
    TagInputNoLabel,
    TagInputPreview,
    TagInputRequired,
    FileUploaderPreview,
    VideoUploadPreview,
    MenuTogglePreview,
    MenuToggleSizes,
    TableAlignment,
    TableInteractive,
    TablePreview,
    TableSizes,
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
    hr: ({ ...props }) => <hr className="my-2" {...props} />,
    strong: ({ className, ...props }) => (
      <strong className={cn("font-semibold", className)} {...props} />
    ),
    em: ({ className, ...props }) => (
      <em className={cn("italic", className)} {...props} />
    ),
  };
}
