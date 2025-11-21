import { cms } from "@/lib/cms";
import { ProductCatalog } from "@/components/product-catalog";

export const revalidate = 60; // ISR: Revalidate every 60 seconds

export default async function ProductsPage() {
    const products = await cms.getProducts();

    return (
        <div className="min-h-screen px-4 md:px-8 pt-24 pb-16">
            <div className="container py-24">
                <div className="flex flex-col gap-8">
                    <ProductCatalog products={products} />
                </div>
            </div>
        </div>
    );
}
