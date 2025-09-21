import Image from "next/image";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <Image src="/icon.png" alt="Logo" width={24} height={24} />
        <span className="font-medium [.uwu_&]:hidden [header_&]:text-[15px]">
          成贤计协指南
        </span>
      </>
    ),
    transparentMode: "top",
  },
  links: [
    {
      type: "main",
      text: "首页",
      url: "/",
    },
    {
      type: "main",
      text: "关于",
      url: "/docs/global",
    },
    {
      type: "menu",
      text: "文档",
      url: "/docs/cpp",
      items: [
        {
          text: "C/C++ 基础",
          url: "/docs/cpp",
          description: "学习 C/C++ 的基础知识",
        },
        {
          text: "杂项",
          url: "/docs/others",
          description: "其他乱七八糟的教程",
        },
      ],
    },
  ],
};
