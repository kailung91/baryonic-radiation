export interface Product {
    id: string;
    title: string;
    slug: string;
    category: 'atlas' | 'map' | 'app' | 'education';
    description: string;
    features: string[];
    image: string;
    price?: string;
    isNew?: boolean;
    link?: string; // External link to store
}

export const products: Product[] = [
    {
        id: '1',
        title: 'Interactive Atlas of Ukraine',
        slug: 'interactive-atlas-ukraine',
        category: 'atlas',
        description: 'A comprehensive digital atlas featuring physical, political, and economic maps of Ukraine. Includes interactive layers for education.',
        features: ['Vector-based zooming', 'Thematic layers', 'Search functionality', 'Bilingual (UA/EN)'],
        image: '/images/atlas-ukraine.jpg',
        price: 'Subscription',
        isNew: true,
        link: 'https://new.osvitanet.com.ua'
    },
    {
        id: '2',
        title: 'General Geography: Grade 6',
        slug: 'geography-grade-6',
        category: 'education',
        description: 'Digital learning materials and interactive map tasks for the 6th-grade geography curriculum.',
        features: ['Curriculum aligned', 'Interactive quizzes', 'Offline mode'],
        image: '/images/geo-6.jpg',
        price: '150 UAH',
        link: 'https://ukrmaps.com'
    },
    {
        id: '3',
        title: 'Kyiv Urban Planning Layer',
        slug: 'kyiv-urban-planning',
        category: 'map',
        description: 'High-precision vector dataset of Kyiv urban infrastructure, zoning, and transport networks.',
        features: ['1:10,000 scale', 'Daily updates', 'GeoJSON export'],
        image: '/images/kyiv-plan.jpg',
        price: 'License'
    },
    {
        id: '4',
        title: 'IAT Map Viewer Mobile',
        slug: 'iat-mobile-app',
        category: 'app',
        description: 'Mobile application for accessing IAT maps and atlases on the go. Available for Android.',
        features: ['GPS tracking', 'Offline maps', 'Augmented Reality mode'],
        image: '/images/mobile-app.jpg',
        price: 'Free',
        link: 'https://play.google.com/store'
    },
    {
        id: '5',
        title: 'History of Ukraine: 1917-1921',
        slug: 'history-1917-1921',
        category: 'atlas',
        description: 'Historical atlas covering the Ukrainian Revolution period with detailed battle maps and timeline.',
        features: ['Timeline view', 'Historical photos', 'Expert commentary'],
        image: '/images/history-atlas.jpg',
        price: '200 UAH',
        link: 'https://ukrmaps.com'
    }
];
