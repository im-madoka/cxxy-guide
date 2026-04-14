import { readFile } from "node:fs/promises";
import { join } from "node:path";
import type { ReactNode } from "react";

export const ogFontFamily = "Source Han Sans SC";
export const ogSiteName = "成贤计协指南";
export const ogImageSize = {
  height: 630,
  width: 1200,
} as const;

const ogFontPath = join(
  process.cwd(),
  "public/fonts/SourceHanSansSC-Medium.otf",
);
const ogLogoPath = join(process.cwd(), "src/app/icon.png");

let ogFontDataPromise: Promise<Buffer> | undefined;
let ogLogoDataUrlPromise: Promise<string> | undefined;

function loadOgFontData() {
  ogFontDataPromise ??= readFile(ogFontPath);
  return ogFontDataPromise;
}

async function loadOgLogoDataUrl() {
  const data = await readFile(ogLogoPath);
  return `data:image/png;base64,${data.toString("base64")}`;
}

export function getOgFonts() {
  return [
    {
      name: ogFontFamily,
      data: loadOgFontData,
      style: "normal" as const,
      weight: 400,
    },
    {
      name: ogFontFamily,
      data: loadOgFontData,
      style: "normal" as const,
      weight: 500,
    },
  ];
}

export function getOgLogoSrc() {
  ogLogoDataUrlPromise ??= loadOgLogoDataUrl();
  return ogLogoDataUrlPromise;
}

type DocsOgImageProps = {
  description?: ReactNode;
  logoSrc?: string;
  site?: ReactNode;
  title: ReactNode;
};

export function DocsOgImage({
  title,
  description,
  logoSrc,
  site = ogSiteName,
}: DocsOgImageProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        padding: "56px 64px",
        backgroundColor: "#020617",
        backgroundImage:
          "radial-gradient(circle at top right, rgba(56, 189, 248, 0.28), transparent 36%), linear-gradient(135deg, rgba(15, 23, 42, 0.98), rgba(2, 6, 23, 1))",
        color: "#f8fafc",
        fontFamily: ogFontFamily,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "28px",
          color: "#7dd3fc",
        }}
      >
        {logoSrc ? (
          <img
            src={logoSrc}
            alt=""
            style={{
              width: "40px",
              height: "40px",
              objectFit: "contain",
              flexShrink: 0,
            }}
          />
        ) : null}
        <p
          style={{
            display: "flex",
            margin: 0,
            fontSize: "40px",
            lineHeight: 1.2,
          }}
        >
          {site}
        </p>
      </div>
      <p
        style={{
          display: "flex",
          margin: 0,
          fontSize: "84px",
          fontWeight: 500,
          lineHeight: 1.14,
          letterSpacing: "-0.04em",
          color: "#ffffff",
        }}
      >
        {title}
      </p>
      {description ? (
        <p
          style={{
            display: "flex",
            margin: "22px 0 0",
            maxWidth: "1040px",
            fontSize: "42px",
            lineHeight: 1.35,
            color: "rgba(226, 232, 240, 0.88)",
          }}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
