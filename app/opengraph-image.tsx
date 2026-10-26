import { ImageResponse } from "next/og";

export const alt = "Elijah Opeyemi, UI/UX Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0b0b0c",
          color: "#f2f0eb",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: E mark + label */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 14,
              background: "#151516",
              border: "2px solid #2a2a2c",
              color: "#ff4d1f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 40,
              fontWeight: 700,
            }}
          >
            E
          </div>
          <div
            style={{
              marginLeft: 24,
              fontSize: 24,
              letterSpacing: 4,
              color: "#9a9893",
            }}
          >
            PORTFOLIO
          </div>
        </div>

        {/* Middle: name */}
        <div
          style={{
            display: "flex",
            fontSize: 132,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: -4,
          }}
        >
          ELIJAH OPEYEMI
        </div>

        {/* Bottom: role (PLACEHOLDER, change when you decide your label) */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: 16,
              height: 16,
              background: "#ff4d1f",
              borderRadius: 8,
            }}
          />
          <div style={{ marginLeft: 20, fontSize: 36, color: "#f2f0eb" }}>
            UI/UX Designer
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}