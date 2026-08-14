import Script from "next/script";

export default function UmamiScript() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptUrl = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL;
  if (!websiteId || !scriptUrl) return null;

  const domains = process.env.NEXT_PUBLIC_UMAMI_DOMAINS;

  return (
    <Script
      defer
      src={scriptUrl}
      data-website-id={websiteId}
      {...(domains ? { "data-domains": domains } : {})}
    />
  );
}
