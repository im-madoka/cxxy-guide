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
      <h2 className="mb-2 font-bold">欢迎来到东大成贤计算机协会指南</h2>
    </main>
  );
}
