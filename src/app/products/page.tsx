"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Search, Map, Globe, Smartphone, BookOpen, ArrowRight, ExternalLink } from "lucide-react";

export default function ProductsPage() {
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
        <div className="min-h-screen px-4 md:px-8 pt-24 pb-16">
            <div className="container py-24">
                <div className="flex flex-col gap-8">
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

                    {/* Filters */}
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            const isActive = filter === cat.id;
                            return (
                                <button
                                    key={cat.id}
                                    onClick={() => setFilter(cat.id as any)}
                                    className={`
                                        flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                                        ${isActive
                                            ? 'bg-primary text-white shadow-[0_0_20px_-5px_rgba(0,87,183,0.5)]'
                                            : 'bg-gray-100 dark:bg-surface border border-gray-300 dark:border-white/5 text-gray-700 dark:text-muted-foreground hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-foreground'
                                        }
                                    `}
                                >
                                    <Icon className="h-4 w-4" />
                                    {cat.label}
                                </button>
                            );
                        })}
                    </div>

                    {/* Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="group relative flex flex-col rounded-2xl bg-white dark:bg-surface border border-gray-200 dark:border-white/5 overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-primary/30 hover:shadow-[0_0_30px_-15px_rgba(0,87,183,0.3)]"
                            >
                                {/* Image Placeholder */}
                                <div
                                    className="aspect-[4/3] w-full bg-gray-200 dark:bg-surface-highlight relative overflow-hidden"
                                    role="img"
                                    aria-label={`Product image for ${product.title}`}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 dark:from-black/80 via-gray-900/10 dark:via-black/20 to-transparent z-10" />

                                    {/* Mock Image Content */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-gray-300 dark:bg-neutral-900">
                                        <span className="font-heading text-6xl font-bold text-gray-400/30 dark:text-white/5 group-hover:text-primary/10 transition-colors duration-500">
                                            IAT
                                        </span>
                                    </div>

                                    {product.isNew && (
                                        <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-lg border border-primary/20">
                                            NEW
                                        </div>
                                    )}

                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="inline-block px-2 py-1 rounded bg-gray-900/70 dark:bg-black/50 backdrop-blur-md border border-gray-700/50 dark:border-white/10 text-[10px] font-medium text-white uppercase tracking-wider mb-2">
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col flex-1 p-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="font-heading text-xl font-bold text-gray-900 dark:text-foreground leading-tight group-hover:text-primary transition-colors">
                                            {product.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-gray-600 dark:text-muted-foreground line-clamp-2 mb-6 flex-1">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-white/5">
                                        <span className="text-sm font-medium text-gray-900 dark:text-foreground">
                                            {product.price}
                                        </span>

                                        <div className="flex gap-2">
                                            {product.link && (
                                                <Link href={product.link} target="_blank" rel="noopener noreferrer" aria-label={`Visit external link for ${product.title}`}>
                                                    <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full hover:bg-white/10 hover:text-primary">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </Link>
                                            )}
                                            <Link href={`/products/${product.slug}`} aria-label={`View details for ${product.title}`}>
                                                <Button size="sm" className="h-8 rounded-full bg-gray-100 dark:bg-white/5 hover:bg-primary hover:text-white border border-gray-300 dark:border-white/10 transition-all">
                                                    Details <ArrowRight className="ml-1.5 h-3 w-3" />
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredProducts.length === 0 && (
                        <div className="py-24 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface border border-white/5 mb-4">
                                <Search className="h-8 w-8 text-muted-foreground" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground mb-2">No products found</h3>
                            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
