# Hover Edge

An animated edge effect component that draws a smooth line along any side of its content on hover or focus. Perfect for navigation links, active states, and subtle interactive accents.

---

## Installation

Run the following command in your terminal to download and add the component to your project:

```bash
npx @singhastra/componentx-cli add hover-edge
```

## Usage

Wrap any text or inline element with the `<HoverEdge>` component. By default, it behaves as a `<span>` and dynamically inherits the size of its children.

```tsx
import { HoverEdge } from "@/components/ui/hover-edge"

export function HoverEdgeDemo() {
  return (
    <HoverEdge side="bottom" thickness="{2}">
      Hover over me
    </HoverEdge>
  )
}
```

## Props

The `HoverEdge` component accepts all standard `HTMLAttributes<HTMLSpanElement>`, plus the following custom properties:

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `side` | `"top" | "bottom" | "left" | "right"` | `"bottom"` | Which side of the component the animated line appears on. |
| `origin` | `"start" | "end"` | `"start"` | The direction from which the animation originates. |
| `thickness` | `number | string` | `1` | The thickness of the line (height for top/bottom, width for left/right). |
| `color` | `string` | `"var(--primary)"` | The background color of the animated line. |
| `duration` | `number` | `300` | The animation transition duration in milliseconds. |
| `active` | `boolean` | `false` | If `true`, the line is persistently visible without hovering. |

## Examples

### Active Route State

Use the `active` prop to keep the line permanently expanded. This is highly useful for indicating the current active page in a sidebar or top navigation bar.

```tsx
<HoverEdge "/docs"} active="{pathname">
  Documentation
</HoverEdge>
```

### Different Sides & Origins

You can place the line on any edge of the container and control whether the animation draws from the start (left/top) or the end (right/bottom).

```tsx
<div className="flex gap-4">
  <HoverEdge origin="end" side="top">Top (From Right)</HoverEdge>
  <HoverEdge side="left" thickness="{3}">Left Edge</HoverEdge>
</div>
```

### Custom Styling

Easily override the default primary color, adjust the line thickness, or change the animation speed by modifying the props.

```tsx
<HoverEdge color="#ef4444" duration="{500}" thickness="4px">
  Thick Red Edge
</HoverEdge>
```
