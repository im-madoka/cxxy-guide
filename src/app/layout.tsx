import "@/app/global.css";
import { resolveMetadataBase } from "@/lib/metadata";
import { RootProvider } from "fumadocs-ui/provider/next";
import { Metadata } from "next";
import { Inter, Geist } from "next/font/google";

import "katex/dist/katex.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "成贤计协指南",
  metadataBase: resolveMetadataBase(),
  icons: {
    icon: "/icon.png",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh_CN" className={cn(inter.className, "font-sans", geist.variable)} suppressHydrationWarning>
      <head>
        {process.env.NODE_ENV === "production" ? (
          <script
            defer
            src="https://analytics.mcf.ink/script.js"
            data-website-id="96b31d4c-9d01-491b-9afa-fc0591a285ac"
          ></script>
        ) : null}
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
