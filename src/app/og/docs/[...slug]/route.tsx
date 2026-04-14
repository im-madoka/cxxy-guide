import { getPageImage, source } from "@/lib/source";
import {
  DocsOgImage,
  getOgFonts,
  getOgLogoSrc,
  ogImageSize,
  ogSiteName,
} from "@/lib/og-image";
import { ImageResponse } from "@takumi-rs/image-response";
import { notFound } from "next/navigation";

export const revalidate = false;

export async function GET(
  _req: Request,
  { params }: RouteContext<"/og/docs/[...slug]">,
) {
  const { slug } = await params;
  const page = source.getPage(slug.slice(0, -1));
  if (!page) notFound();
  const logoSrc = await getOgLogoSrc();

  return new ImageResponse(
    <DocsOgImage
      title={page.data.title}
      description={page.data.description}
      logoSrc={logoSrc}
      site={ogSiteName}
    />,
    {
      ...ogImageSize,
      format: "webp",
      fonts: getOgFonts(),
    },
  );
}

export function generateStaticParams() {
  return source.getPages().map((page) => ({
    slug: getPageImage(page).segments,
  }));
}
