export type Category = 'atlases' | 'maps' | 'globes' | 'digital';

export interface Product {
    id: string;
    category: Category;
    image?: string; // Placeholder for future
    title: { uk: string; en: string };
    description?: { uk: string; en: string }; // Optional detail
    tags: string[]; // e.g. "6-11 клас", "НУШ"
    link: string; // Primary buy link
    secondaryLink?: { url: string; label: { uk: string; en: string } }; // For Digital apps
}
