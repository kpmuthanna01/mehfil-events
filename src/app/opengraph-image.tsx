import { ImageResponse } from "next/og";

export const alt = "Mehfil Coorg — Events & Escapes";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #064e3b 0%, #0a3d30 60%, #0a1611 100%)",
          color: "#fbf7ef",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 108,
            height: 108,
            borderRadius: 26,
            border: "4px solid #d6a419",
            marginBottom: 36,
            fontSize: 60,
            fontWeight: 800,
            color: "#d6a419",
          }}
        >
          M
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 800 }}>
          <span>Mehfil&nbsp;</span>
          <span style={{ color: "#e8c15a" }}>Coorg</span>
        </div>
        <div style={{ display: "flex", fontSize: 36, color: "#cbb98f", marginTop: 14 }}>
          Events &amp; Escapes in Coorg
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#9db0a6", marginTop: 42 }}>
          Weddings / Catering / Decor / Gifts / Travel Guide
        </div>
      </div>
    ),
    { ...size },
  );
}
