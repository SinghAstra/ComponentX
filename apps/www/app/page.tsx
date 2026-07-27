import React from "react";
import registryData from "@component-x/registry/dist/registry.json";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-zinc-950 text-zinc-100">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          ComponentX Showcase
        </h1>
        <p className="text-zinc-400 mb-8">
          Monorepo workspace active. Registry compiled successfully.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {registryData.map((item: any) => (
            <div
              key={item.name}
              className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/50 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                  {item.type}
                </span>
                <h2 className="text-2xl font-bold mt-1 mb-2 capitalize">
                  {item.name}
                </h2>
                <div className="flex flex-wrap gap-2 my-3">
                  {item.dependencies?.map((dep: string) => (
                    <span
                      key={dep}
                      className="text-xs bg-zinc-800 text-zinc-300 px-2.5 py-1 rounded-md"
                    >
                      {dep}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-400 flex justify-between items-center">
                <span>Files: {item.files.length}</span>
                <code className="bg-zinc-950 px-2 py-1 rounded text-zinc-300">
                  componentx add {item.name}
                </code>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
