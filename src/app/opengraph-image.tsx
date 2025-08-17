/* eslint-disable @next/next/no-img-element */
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
          background:
            "linear-gradient(135deg, #0b1220 0%, #121826 40%, #0b1220 100%)",
          color: "white",
          fontSize: 56,
          fontWeight: 800,
          letterSpacing: "-0.02em",
        }}
      >
        <div style={{ fontSize: 24, opacity: 0.85, marginBottom: 16 }}>
          {SITE.name}
        </div>
        <div style={{ textAlign: "center", lineHeight: 1.1, padding: "0 40px" }}>
          Discover your productivity animal
        </div>
        <div style={{ fontSize: 24, opacity: 0.8, marginTop: 16 }}>
          {SITE.url.replace(/^https?:\/\//, "")}
        </div>
      </div>
    ),
    { ...size }
  );
}
export const dynamic = "force-dynamic"; // Ensure this route is always dynamic