import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "成贤计协指南",
  icons: {
    icon: "/icon.png",
  },
};

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh_CN" className={inter.className} suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://analytics.mcf.ink/script.js"
          data-website-id="96b31d4c-9d01-491b-9afa-fc0591a285ac"
        ></script>
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
