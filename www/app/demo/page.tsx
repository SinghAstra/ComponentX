import { Button } from "@/components/ui/button";
import { ComponentPreviewWithCode } from "./component-preview-with-code";

const buttonCode = `import { Button } from "@/components/ui/button"

export function ButtonDemo() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button disabled>Disabled</Button>
    </div>
  )
}`;

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 w-full">
      <ComponentPreviewWithCode code={buttonCode}>
        <div className="flex gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button disabled>Disabled</Button>
        </div>
      </ComponentPreviewWithCode>
    </main>
  );
}
