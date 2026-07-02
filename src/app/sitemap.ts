import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    return [
        { url: 'https://devlucas.website', priority: 1.0 },
        { url: 'https://devlucas.website/products/notehub', priority: 0.9 },
        { url: 'https://devlucas.website/products/livechat', priority: 0.8 },
    ]

}