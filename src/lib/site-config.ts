export const SITE_URL =
  ((import.meta.env.VITE_SITE_URL as string | undefined) ?? "").replace(/\/$/, "");

export const SITE_NAME = "Global Bridge Learning Initiative";
export const OG_IMAGE = `${SITE_URL}/og-image.png`;
