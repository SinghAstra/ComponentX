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
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Component Preview</h1>
          <p className="text-muted-foreground">
            A shadcn-style component preview system
          </p>
        </div>

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
      </div>
    </main>
  );
}
