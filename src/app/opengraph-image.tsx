// src/app/opengraph-image.tsx
import { ImageResponse } from "next/og";
import { SITE } from "@/config/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const { width, height } = size;

  return new ImageResponse(
    (
      <div
        style={{
          width,
          height,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 50%, #EC4899 100%)",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(255,255,255,0.1) 10px,
                rgba(255,255,255,0.1) 20px
              )
            `,
          }}
        />

        {/* Animal Emojis */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            fontSize: 72,
            marginBottom: 32,
          }}
        >
          <span>🦉</span>
          <span>🦊</span>
          <span>🐺</span>
          <span>🐬</span>
        </div>

        {/* Main Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            letterSpacing: "-0.03em",
            marginBottom: 16,
            textAlign: "center",
            textShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          Find By Type
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 28,
            opacity: 0.95,
            textAlign: "center",
            maxWidth: "80%",
            lineHeight: 1.3,
            marginBottom: 24,
          }}
        >
          Discover Your Productivity Animal
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 20,
            opacity: 0.85,
            textAlign: "center",
            padding: "12px 24px",
            background: "rgba(255,255,255,0.15)",
            borderRadius: "24px",
            backdropFilter: "blur(10px)",
          }}
        >
          Personalized Desk Setups for Australian Remote Workers
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            fontSize: 18,
            opacity: 0.7,
            letterSpacing: "0.05em",
          }}
        >
          findbytype.com.au
        </div>
      </div>
    ),
    { ...size }
  );
}

export const dynamic = "force-dynamic";