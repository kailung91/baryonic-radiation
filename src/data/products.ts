import { Product } from '@/types/product';

export const products: Product[] = [
    // ==================== ATLASES ====================
    {
        id: 'atlas-geo-6',
        category: 'atlases',
        title: {
            uk: 'Атлас і контурні карти. Географія 6 клас',
            en: 'Atlas and Outline Maps. Geography Grade 6'
        },
        tags: ['НУШ', '6 клас', 'Географія'],
        link: 'https://ukrmaps.com/atlas-heohrafiya-6-klas'
    },
    {
        id: 'atlas-history-ua-7',
        category: 'atlases',
        title: {
            uk: 'Атлас. Історія України 7 клас',
            en: 'Atlas. History of Ukraine Grade 7'
        },
        tags: ['7 клас', 'Історія України'],
        link: 'https://ukrmaps.com'
    },
    {
        id: 'atlas-world-history-10-11',
        category: 'atlases',
        title: {
            uk: 'Атлас. Всесвітня історія 10-11 класи',
            en: 'Atlas. World History Grades 10-11'
        },
        tags: ['Старша школа', '10-11 клас', 'Всесвітня історія'],
        link: 'https://ukrmaps.com'
    },

    // ==================== GLOBES ====================
    {
        id: 'globe-physical-26',
        category: 'globes',
        title: {
            uk: 'Глобус фізичний 26 см',
            en: 'Physical Globe 26 cm'
        },
        tags: ['Без підсвітки', '26 см', 'Фізичний'],
        link: 'https://ukrmaps.com'
    },
    {
        id: 'globe-political-32',
        category: 'globes',
        title: {
            uk: 'Глобус політичний 32 см',
            en: 'Political Globe 32 cm'
        },
        tags: ['З підсвіткою', '32 см', 'Політичний'],
        link: 'https://ukrmaps.com'
    },

    // ==================== WALL MAPS ====================
    {
        id: 'map-ukraine-admin',
        category: 'maps',
        title: {
            uk: 'Карта України (Адміністративна)',
            en: 'Map of Ukraine (Administrative)'
        },
        tags: ['Кабінетна', 'Україна', 'Адміністративна'],
        link: 'https://ukrmaps.com'
    },
    {
        id: 'map-world-political',
        category: 'maps',
        title: {
            uk: 'Карта Світу (Політична)',
            en: 'World Map (Political)'
        },
        tags: ['Великий формат', 'Світова', 'Політична'],
        link: 'https://ukrmaps.com'
    },

    // ==================== DIGITAL ====================
    {
        id: 'osvitanet-platform',
        category: 'digital',
        title: {
            uk: 'Освітня платформа OsvitaNet',
            en: 'OsvitaNet Educational Platform'
        },
        tags: ['Платформа', 'Онлайн', 'Освіта'],
        link: 'https://new.osvitanet.com.ua',
        secondaryLink: {
            url: 'https://play.google.com/store/apps/dev?id=6654204595471297975',
            label: { uk: 'Google Play', en: 'Google Play' }
        }
    }
];

// Helper function to get products by category
export function getProductsByCategory(category: Product['category']): Product[] {
    return products.filter(product => product.category === category);
}

// Helper function to get all categories
export function getAllCategories(): Product['category'][] {
    return ['atlases', 'globes', 'maps', 'digital'];
}

// Get category display name
export function getCategoryName(category: Product['category'], locale: 'uk' | 'en'): string {
    const names = {
        atlases: { uk: 'Атласи та Контурні Карти', en: 'Atlases and Outline Maps' },
        globes: { uk: 'Глобуси', en: 'Globes' },
        maps: { uk: 'Настінні Карти', en: 'Wall Maps' },
        digital: { uk: 'Цифрові Рішення', en: 'Digital Solutions' }
    };
    return names[category][locale];
}
