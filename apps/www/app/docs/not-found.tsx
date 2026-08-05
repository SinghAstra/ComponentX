import { Home, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full overflow-y-auto px-4 text-center bg-muted/20 border">
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-3">
        404
      </h2>

      <p className="text-muted-foreground max-w-md mx-auto mb-8 leading-relaxed">
        We couldn't find the documentation page you were looking for. It might
        have been moved, deleted, or never existed.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          href="/docs"
          className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Docs
        </Link>

        <Link
          href="/"
          className="inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary border bg-transparent hover:bg-muted/50 text-foreground px-4 py-2"
        >
          <Home className="mr-2 h-4 w-4 text-muted-foreground" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
