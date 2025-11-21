import { Product } from "@/lib/data";

export interface TeamMember {
    id: string;
    name: string;
    position: string;
    bio: string;
    photo: string;
    socialLinks: {
        platform: string;
        url: string;
    }[];
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    content: string;
    coverImage: string;
    publishedAt: string;
    author: TeamMember;
}

export interface CMSClient {
    getProducts(): Promise<Product[]>;
    getProductBySlug(slug: string): Promise<Product | null>;
    getTeamMembers(): Promise<TeamMember[]>;
    getLatestBlogPosts(limit?: number): Promise<BlogPost[]>;
}
