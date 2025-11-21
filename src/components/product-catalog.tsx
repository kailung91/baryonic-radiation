"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Search, Map, Globe, Smartphone, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

interface ProductCatalogProps {
    products: Product[];
}

export function ProductCatalog({ products }: ProductCatalogProps) {
    const [filter, setFilter] = useState<'all' | 'atlas' | 'map' | 'app' | 'education'>('all');
    const [search, setSearch] = useState('');

    const filteredProducts = products.filter(product => {
        const matchesFilter = filter === 'all' || product.category === filter;
        const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const categories = [
        { id: 'all', label: 'All Products', icon: Globe },
        { id: 'atlas', label: 'Atlases', icon: Map },
        { id: 'map', label: 'Maps', icon: Globe },
        { id: 'education', label: 'Education', icon: BookOpen },
        { id: 'app', label: 'Mobile Apps', icon: Smartphone },
    ];

    return (
        <>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="font-heading text-4xl font-bold mb-2 text-foreground">Cartographic Catalog</h1>
                    <p className="text-muted-foreground">Professional maps and atlases for specialists.</p>
                </div>
                <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-gray-300 dark:border-white/10" onClick={() => alert("Sort functionality coming soon!")}>Sort By</Button>
                    <Button size="sm" className="bg-primary text-white" onClick={() => alert("Advanced filters coming soon!")}>Filter</Button>
                </div>
            </div>

            {/* Search */}
            <div className="relative w-full md:w-72">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <Search className="h-4 w-4 text-muted-foreground" />
                </div>
                <input
                    type="text"
                    placeholder="Search catalog..."
                    className="w-full h-12 pl-10 pr-4 rounded-xl bg-gray-100 dark:bg-surface border border-gray-300 dark:border-white/10 text-foreground placeholder:text-gray-500 dark:placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id as any)}
                        className={`px-6 py-2.5 rounded-full border transition-all flex items-center gap-2 ${filter === cat.id
                                ? 'bg-primary text-white border-primary shadow-lg'
                                : 'bg-surface border-gray-300 dark:border-white/10 text-foreground hover:bg-gray-100 dark:hover:bg-white/5'
                            }`}
                    >
                        <cat.icon className="h-4 w-4" />
                        <span className="text-sm font-medium">{cat.label}</span>
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredProducts.map((product) => (
                    <div
                        key={product.id}
                        className="group relative bg-surface border border-gray-300 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="aspect-video bg-gradient-to-br from-gray-200 dark:from-neutral-900 to-gray-100 dark:to-neutral-800 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <span className="text-6xl font-bold text-gray-300 dark:text-white/5 group-hover:text-primary/20 transition-all duration-700">
                                IAT
                            </span>
                            {product.isNew && (
                                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wider">
                                    New
                                </div>
                            )}
                        </div>

                        <div className="p-6 space-y-4">
                            <div>
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {product.title}
                                    </h3>
                                    <div className="flex gap-2">
                                        {product.link && (
                                            <Link href={product.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit external link for ${product.title}`}>
                                                <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-primary">
                                                    <ExternalLink className="h-4 w-4" />
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {product.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5">
                                <span className="text-sm font-bold text-primary">{product.price || 'Contact'}</span>
                                <Link href={`/products/${product.slug}`} aria-label={`View details for ${product.title}`}>
                                    <Button size="sm" className="h-8 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white border border-gray-300 dark:border-white/10 transition-all">
                                        Details <ArrowRight className="ml-1.5 h-3 w-3" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                </div>
            )}
        </>
    );
}
