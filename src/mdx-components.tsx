import { ImageZoom, type ImageZoomProps } from "fumadocs-ui/components/image-zoom";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import type { ComponentProps } from "react";

type MdxImageProps = Omit<ComponentProps<"img">, "src"> & {
  sizes?: string;
  src?: unknown;
};

function isStaticImport(value: unknown): value is StaticImport {
  if (!value || typeof value !== "object") return false;

  if ("src" in value && typeof value.src === "string" && value.src.length > 0) {
    return true;
  }

  if (
    "default" in value &&
    value.default &&
    typeof value.default === "object" &&
    "src" in value.default &&
    typeof value.default.src === "string" &&
    value.default.src.length > 0
  ) {
    return true;
  }

  return false;
}

export function getZoomableImageSrc(src: unknown): ImageZoomProps["src"] | null {
  if (typeof src === "string") {
    return src.length > 0 ? src : null;
  }

  if (isStaticImport(src)) {
    return src;
  }

  return null;
}

export function toImageZoomProps({
  src,
  ...props
}: MdxImageProps): ImageZoomProps | null {
  const zoomableSrc = getZoomableImageSrc(src);

  if (!zoomableSrc) return null;

  return {
    ...props,
    src: zoomableSrc,
  };
}

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  const DefaultImage = defaultMdxComponents.img;

  return {
    ...defaultMdxComponents,
    img: (props) => {
      const zoomProps = toImageZoomProps(props as MdxImageProps);
      if (zoomProps) return <ImageZoom {...zoomProps} />;

      const { src, ...rest } = props;
      if (typeof src !== "string" || src.length === 0) return null;

      return <DefaultImage {...rest} src={src} />;
    },
    ...components,
  };
}
