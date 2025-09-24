import { Card, Cards } from "fumadocs-ui/components/card";
import { HammerIcon, HomeIcon } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center px-4">
      <Image
        src="/icon.png"
        alt="sithra-rs icon"
        width={100}
        height={100}
        className="rounded-full my-4 mt-8 md:mt-4"
      />
      <h1 className="mb-2 text-2xl font-bold">Hello World!</h1>
      <h2 className="mb-10 font-bold">欢迎来到东大成贤计算机协会指南</h2>
      <Cards className="max-w-200 w-full">
        <Card icon={<HomeIcon />} title={"成贤计协总览"} href={"/docs/global"}>
          东大成贤计算机协会总览
        </Card>
        <Card icon={<HammerIcon />} title={"C/C++ 基础指南"} href={"/docs/cpp"}>
          学习 C/C++ 的基础知识
        </Card>
        <Card icon={<HammerIcon />} title={"其他"} href={"/docs/others"}>
          其他乱七八糟的教程
        </Card>
      </Cards>
    </main>
  );
}
