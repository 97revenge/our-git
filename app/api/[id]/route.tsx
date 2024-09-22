import type { NextApiRequest } from "next";
import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: NextApiRequest) {
  const id = request.headers.id;

  const instance = await fetch(`https//:www.api.github.com/users/${id}`);

  const data = await instance.json();

  const interRegular = await fetch(
    new URL("https://fonts.googleapis.com/css2?family=Inter&display=swap")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Inter",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            backgroundColor: "#1a1a1a",
            borderRadius: 24,
            padding: "20px 40px",
            boxShadow:
              "0 0 0 1px rgba(255,255,255,0.1), 0 8px 32px rgba(0,0,0,0.5)",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #8a2be2, #4169e1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginRight: 24,
            }}
          >
            <img
              src="https://github.com/vercel.png"
              alt="Avatar"
              width={64}
              height={64}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <div
              style={{
                fontSize: 48,
                fontWeight: "bold",
                background: "linear-gradient(135deg, #8a2be2, #4169e1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              #49
            </div>
            <div style={{ color: "white", fontSize: 24, marginTop: 8 }}>
              creator on uiverse.io
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
      fonts: [
        {
          name: "Inter",
          data: interRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
