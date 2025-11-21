import { CMSClient, TeamMember, BlogPost } from "./client";
import { Product } from "@/lib/data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

export class StrapiClient implements CMSClient {
    private async fetchAPI(endpoint: string, params: Record<string, string> = {}) {
        const url = new URL(`/api/${endpoint}`, STRAPI_URL);
        Object.keys(params).forEach((key) => url.searchParams.append(key, params[key]));

        const res = await fetch(url.toString(), {
            headers: {
                Authorization: `Bearer ${STRAPI_TOKEN}`,
                "Content-Type": "application/json",
            },
            next: { revalidate: 60 }, // ISR
        });

        if (!res.ok) {
            throw new Error(`Strapi API error: ${res.statusText}`);
        }

        const data = await res.json();
        return data.data;
    }

    async getProducts(): Promise<Product[]> {
        try {
            const data = await this.fetchAPI("products", { populate: "*" });
            return data.map(this.mapProduct);
        } catch (error) {
            console.error("Failed to fetch products from Strapi:", error);
            return [];
        }
    }

    async getProductBySlug(slug: string): Promise<Product | null> {
        try {
            const data = await this.fetchAPI("products", {
                "filters[slug][$eq]": slug,
                populate: "*",
            });
            return data.length > 0 ? this.mapProduct(data[0]) : null;
        } catch (error) {
            console.error(`Failed to fetch product ${slug}:`, error);
            return null;
        }
    }

    async getTeamMembers(): Promise<TeamMember[]> {
        try {
            const data = await this.fetchAPI("team-members", { populate: "*" });
            return data.map(this.mapTeamMember);
        } catch (error) {
            console.error("Failed to fetch team members:", error);
            return [];
        }
    }

    async getLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
        try {
            const data = await this.fetchAPI("blog-posts", {
                populate: "*",
                "pagination[limit]": limit.toString(),
                sort: "publishedAt:desc",
            });
            return data.map(this.mapBlogPost);
        } catch (error) {
            console.error("Failed to fetch blog posts:", error);
            return [];
        }
    }

    // Mappers to transform Strapi response to our interfaces
    private mapProduct(item: any): Product {
        return {
            id: item.id.toString(),
            title: item.attributes.title,
            slug: item.attributes.slug,
            category: item.attributes.category,
            description: item.attributes.description,
            features: item.attributes.features?.map((f: any) => f.text) || [],
            image: item.attributes.image?.data?.attributes?.url || "/images/placeholder.jpg",
            price: item.attributes.price,
            isNew: item.attributes.isNew,
            link: item.attributes.link,
        };
    }

    private mapTeamMember(item: any): TeamMember {
        return {
            id: item.id.toString(),
            name: item.attributes.name,
            position: item.attributes.position,
            bio: item.attributes.bio,
            photo: item.attributes.photo?.data?.attributes?.url || "/images/placeholder-user.jpg",
            socialLinks: item.attributes.socialLinks || [],
        };
    }

    private mapBlogPost(item: any): BlogPost {
        return {
            id: item.id.toString(),
            title: item.attributes.title,
            slug: item.attributes.slug,
            content: item.attributes.content,
            coverImage: item.attributes.coverImage?.data?.attributes?.url || "/images/placeholder-blog.jpg",
            publishedAt: item.attributes.publishedAt,
            author: item.attributes.author?.data ? {
                id: item.attributes.author.data.id.toString(),
                name: item.attributes.author.data.attributes.name,
                position: item.attributes.author.data.attributes.position,
                bio: "",
                photo: "",
                socialLinks: []
            } : { id: "0", name: "Unknown", position: "", bio: "", photo: "", socialLinks: [] },
        };
    }
}
