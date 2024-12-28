import { siteConfig } from "@/config/site";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#09090b",
            background: "linear-gradient(to bottom right, #09090b, #18181b)",
            padding: "48px",
          }}
        >
          {/* Main Content Container */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            {/* Header Section */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                color: "#ffffff",
              }}
            >
              <h1
                style={{
                  fontSize: "72px",
                  fontWeight: "bold",
                  margin: "0",
                  lineHeight: 1.1,
                  background: "linear-gradient(to right, #ffffff, #a855f7)",
                  backgroundClip: "text",
                  color: "transparent",
                }}
              >
                {siteConfig.name}
              </h1>
              <p
                style={{
                  fontSize: "32px",
                  margin: "0",
                  marginTop: "16px",
                  color: "#a1a1aa",
                }}
              >
                {siteConfig.description}
              </p>
            </div>

            {/* Features Section */}
            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "32px",
              }}
            >
              {["Reusbale UI"].map((feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    padding: "12px 24px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    color: "#ffffff",
                    fontSize: "24px",
                  }}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* Footer Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                color: "#ffffff",
                marginTop: "auto",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="white"
                  style={{ marginRight: "8px" }}
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a
                  href={siteConfig.links.github}
                  style={{
                    display: "flex",
                    fontSize: "24px",
                    textDecoration: "none",
                    color: "#ffffff",
                  }}
                >
                  SinghAstra
                </a>
              </div>

              <div
                style={{
                  display: "flex",
                  padding: "8px 16px",
                  borderRadius: "6px",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "#a1a1aa",
                  fontSize: "20px",
                }}
              >
                v1.0.0
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (error) {
    console.log("error --/api/og is ", error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
