export function resolveDocOgImage(customImage: string | undefined, fallbackImage: string) {
  if (typeof customImage === "string" && customImage.length > 0) {
    return customImage;
  }

  return fallbackImage;
}
