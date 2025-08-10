import { Button } from "@/components/ui/button";
import ConicBackground from "../ui/conic-background";
import Navbar from "./navbar";
function NavbarShowCase() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 min-h-screen text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight">
          Design, prototype, and publish it with Framer
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          The website builder loved by designers.
        </p>
        <div className="mt-10 flex gap-4">
          <Button className="rounded" size="lg">
            Start for free
          </Button>
          <Button
            className="rounded bg-secondary transition-colors duration-200"
            size="lg"
          >
            Watch video
          </Button>
        </div>
        <ConicBackground backgroundSpan="medium" />
      </main>
    </div>
  );
}

export default NavbarShowCase;
