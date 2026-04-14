type MetadataEnv = {
  NEXT_PUBLIC_SITE_URL?: string;
  NODE_ENV?: string;
};

export function resolveMetadataBase(env: MetadataEnv = process.env): URL {
  const siteUrl = env.NEXT_PUBLIC_SITE_URL?.trim();

  if (siteUrl) {
    return new URL(siteUrl);
  }

  if (env.NODE_ENV === "production") {
    return new URL("https://guide.cxcs.dev");
  }

  return new URL("http://localhost:3000");
}
