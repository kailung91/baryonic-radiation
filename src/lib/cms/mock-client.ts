import { CMSClient, TeamMember, BlogPost } from "./client";
import { products, Product } from "@/lib/data";

export class MockCMSClient implements CMSClient {
    async getProducts(): Promise<Product[]> {
        return products;
    }

    async getProductBySlug(slug: string): Promise<Product | null> {
        return products.find((p) => p.slug === slug) || null;
    }

    async getTeamMembers(): Promise<TeamMember[]> {
        return [
            {
                id: "1",
                name: "Dr. Olena Kovalenko",
                position: "Chief Cartographer",
                bio: "PhD in Geography, 15 years of experience in digital mapping.",
                photo: "/images/team/olena.jpg",
                socialLinks: [
                    { platform: "linkedin", url: "https://linkedin.com" }
                ]
            },
            {
                id: "2",
                name: "Andrii Shevchenko",
                position: "Lead Developer",
                bio: "Full-stack developer specializing in WebGL and map rendering.",
                photo: "/images/team/andrii.jpg",
                socialLinks: [
                    { platform: "github", url: "https://github.com" }
                ]
            }
        ];
    }

    async getLatestBlogPosts(limit: number = 3): Promise<BlogPost[]> {
        return [
            {
                id: "1",
                title: "The Future of Digital Atlases",
                slug: "future-digital-atlases",
                content: "Digital atlases are transforming education...",
                coverImage: "/images/blog/atlases.jpg",
                publishedAt: "2024-03-15",
                author: {
                    id: "1",
                    name: "Dr. Olena Kovalenko",
                    position: "Chief Cartographer",
                    bio: "",
                    photo: "",
                    socialLinks: []
                }
            }
        ].slice(0, limit);
    }
}
