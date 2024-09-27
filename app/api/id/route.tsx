import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);

  const content = searchParams.get("content");

  const username = searchParams.get("username");

  const interRegular = await fetch(
    new URL("https://fonts.googleapis.com/css2?family=Inter&display=swap")
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundImage: "linear-gradient(to bottom, #ffff, #ffffff)",
          fontFamily: "Inter",
          padding: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              fontSize: 60,
              letterSpacing: -1,

              fontWeight: 700,
              backgroundImage: "linear-gradient(#b893c7, #b893c7, #b893c7)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            {content}
          </div>

          <div
            style={{
              fontSize: 80,
              letterSpacing: -2,
              fontWeight: 700,
              backgroundImage: "linear-gradient(#b792c6, #876c93, #403346)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              padding: "0px 0px 0px 200px",
            }}
          >
            - #{username}
          </div>
        </div>
        <div
          style={{
            width: "40%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
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
};
