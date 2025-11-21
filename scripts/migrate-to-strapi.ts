import { products } from "../src/lib/data";

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

async function uploadProduct(product: any) {
    console.log(`Uploading ${product.title}...`);

    try {
        const res = await fetch(`${STRAPI_URL}/api/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${STRAPI_TOKEN}`,
            },
            body: JSON.stringify({
                data: {
                    title: product.title,
                    slug: product.slug,
                    category: product.category,
                    description: product.description,
                    features: product.features.map((f: string) => ({ text: f })), // Map to component structure
                    price: product.price,
                    isNew: product.isNew,
                    link: product.link,
                    // Note: Image upload is complex and usually requires a separate upload step.
                    // For this script, we assume images are already hosted or we skip image upload.
                },
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            throw new Error(JSON.stringify(error));
        }

        console.log(`✅ Uploaded ${product.title}`);
    } catch (error) {
        console.error(`❌ Failed to upload ${product.title}:`, error);
    }
}

async function migrate() {
    if (!STRAPI_TOKEN) {
        console.error("❌ STRAPI_API_TOKEN is missing");
        process.exit(1);
    }

    console.log("🚀 Starting migration...");

    for (const product of products) {
        await uploadProduct(product);
    }

    console.log("✨ Migration complete!");
}

migrate();
