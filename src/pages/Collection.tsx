"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import ProductCard from "@/components/shared/ProductCard";
import type { IProduct } from "@/interfaces";
import useCategories from "@/hooks/useCategories";
import ProductListSkeleton from "@/components/shared/ProductListSkeleton";
import useCollectionData from "@/hooks/useCollectionsData";
import { Button } from "@/components/ui/button";
import { PackageSearch } from "lucide-react";

const sortOptions = [
    { label: "Best Rating", sortBy: "rating", sortValue: "desc" },
    { label: "Newest", sortBy: "created_at", sortValue: "desc" },
    { label: "Oldest", sortBy: "created_at", sortValue: "asc" },
    { label: "Price: Low to High", sortBy: "price", sortValue: "asc" },
    { label: "Price: High to Low", sortBy: "price", sortValue: "desc" },
];

export default function Collection() {
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<{
        label: string;
        sortBy: string;
        sortValue: string;
    }>(sortOptions[0]);

    const { data: categories } = useCategories();

    const { isLoading, data } = useCollectionData({
        categories: [...selectedCategories],
        searchValue: search,
        sort,
    });

return (
    <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6 py-6">
        {/* 🔹 Sidebar */}
        <aside
            data-aos="fade-right"
            className="border rounded-2xl p-4 space-y-6 h-fit"
        >
            {/* Search */}
            <div>
            <h3 className="text-sm font-semibold mb-2">Search</h3>
            <Input
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            </div>

            {/* Categories */}
            <div>
            <h3 className="text-sm font-semibold mb-2">Categories</h3>

            <div className="space-y-3">
                {categories?.map((cat: { id: number; name: string }) => (
                <div key={cat.id} className="flex items-center space-x-2">
                    <Checkbox
                    value={cat.name}
                    id={cat.name}
                    // onClick={(e)=>{setSelectedCategories((prev)=> [...prev, e.target.value])}}
                    checked={selectedCategories.includes(cat.name)}
                    onCheckedChange={() =>
                        setSelectedCategories((prev) =>
                        prev.includes(cat.name)
                            ? prev.filter((c) => c !== cat.name)
                            : [...prev, cat.name],
                        )
                    }
                    className="cursor-pointer"
                    />
                    <label htmlFor={cat.name} className="text-sm cursor-pointer">
                    {cat.name}
                    </label>
                </div>
                ))}
            </div>
            </div>
        </aside>

        {/* 🔹 Content */}
        <div className="space-y-6">
            {/* Top Bar */}
            <div data-aos="fade-down" className="flex justify-end">
            <Select
                value={sort.label}
                onValueChange={(value) => {
                const selected = sortOptions.find((opt) => opt.label === value);
                if (selected) setSort(selected);
                }}
            >
                <SelectTrigger className="w-50 cursor-pointer py-4.5">
                <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                {sortOptions.map((option) => (
                    <SelectItem
                    key={option.label}
                    value={option.label}
                    className="cursor-pointer"
                    >
                    {option.label}
                    </SelectItem>
                ))}
                </SelectContent>
            </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
                {/* هنا المنتجات */}
                {isLoading && <ProductListSkeleton />}
                
                {data?.length === 0 && (
                    <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
                    <div className="bg-muted p-4 rounded-full mb-4">
                        <PackageSearch className="h-10 w-10 text-muted-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No products found</h3>
                    <p className="text-sm text-muted-foreground mb-4 max-w-sm">
                        Try changing your search or filters to find what you're looking
                        for.
                    </p>
                    <Button variant="outline" onClick={()=> { setSelectedCategories([]); setSearch("");}}>
                        Reset Filters
                    </Button>
                    </div>
                )}

                {data?.map((product: IProduct, i: number) => (
                    <div
                    data-aos="zoom-in-up"
                    data-aos-delay={Math.min(i * 100, 1000)}
                    key={product.id}
                    >
                    <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
}
