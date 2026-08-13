import type { MetadataRoute } from "next";

const BASE = "https://feliperamosroque.vercel.app";

// Two routes, listed by hand. A generated sitemap would be more machinery than
// this site earns; if a third route appears, add it here.
//
// Next 13.4's MetadataRoute.Sitemap accepts only url and lastModified —
// changeFrequency and priority arrived in a later release and are a type error
// here. They are advisory to crawlers anyway.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: BASE }, { url: `${BASE}/feroq` }];
}
