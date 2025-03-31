"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Toggle } from "@/components/ui/toggle";
import { Star, ChevronDown, ShoppingCart, Play, Filter } from "lucide-react";
import Image from "next/image";

// Mock data
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    sale: true,
    salePrice: 249.99,
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 399.99,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    sale: false,
  },
];

const videos = [
  {
    id: 1,
    thumbnail:
      "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80",
    likes: "12.4k",
    comments: "1.2k",
    title: "Unboxing the Latest Tech",
  },
  {
    id: 2,
    thumbnail:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    likes: "8.7k",
    comments: "956",
    title: "Product Review",
  },
];

export default function Home() {
  const [showSaleOnly, setShowSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = showSaleOnly
    ? products.filter((p) => p.sale)
    : products;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section - Mobile Optimized */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
          poster="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&q=80"
        >
          <source src="/videos/her.mp4" type="video/mp4" />
        </video>
        <div className="relative z-20 text-center px-4 max-w-md mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Explore the Collection
          </h1>
          <p className="text-lg md:text-2xl mb-6 md:mb-8 text-gray-300">
            Discover premium products curated just for you
          </p>
          <Button
            size="lg"
            className="w-full md:w-auto bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Products Section - Mobile Optimized */}
      <section className="max-w-7xl mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:justify-between md:items-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>

          {/* Mobile Filter Button */}
          <Button
            variant="outline"
            className="md:hidden w-full bg-transparent border-gray-700 flex items-center justify-center gap-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="w-4 h-4" />
            Filters
          </Button>

          {/* Filter Controls - Responsive */}
          <div
            className={`flex flex-col md:flex-row gap-3 ${
              showFilters ? "block" : "hidden md:flex"
            }`}
          >
            <Toggle
              pressed={showSaleOnly}
              onPressedChange={setShowSaleOnly}
              className="bg-red-600/20 data-[state=on]:bg-red-600 w-full md:w-auto justify-center"
            >
              Hot Deals
            </Toggle>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-transparent border-gray-700 w-full md:w-auto justify-center"
                >
                  Sort by: {sortBy} <ChevronDown className="ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border-gray-700 w-[calc(100vw-2rem)] md:w-auto">
                <DropdownMenuItem onClick={() => setSortBy("featured")}>
                  Featured
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price-low")}>
                  Price: Low to High
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("price-high")}>
                  Price: High to Low
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy("rating")}>
                  Top Rated
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        {/* Product Grid - Mobile Optimized */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
          {filteredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-gray-900 border-gray-800 overflow-hidden group py-0"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                  width={800}
                  height={800}
                />
                {product.sale && (
                  <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded-md text-xs md:text-sm font-medium">
                    SALE
                  </div>
                )}
              </div>
              <div className="p-2 md:p-4">
                <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-1 md:mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-2 md:mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 md:w-4 md:h-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-500"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    {product.sale ? (
                      <>
                        <span className="text-red-500 font-bold text-sm md:text-base">
                          ${product.salePrice}
                        </span>
                        <span className="text-xs md:text-sm text-gray-500 line-through">
                          ${product.price}
                        </span>
                      </>
                    ) : (
                      <span className="font-bold text-sm md:text-base">
                        ${product.price}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-white text-black hover:bg-white/90 px-2 md:px-3"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span className="hidden md:inline ml-2">Add</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Instagram-style Video Section - Mobile Optimized */}
      <section className="py-8 md:py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            See Them in Action
          </h2>
          <div className="grid grid-cols-1 md:flex md:gap-4 gap-6 md:overflow-x-auto md:pb-6 md:scrollbar-hide">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative md:flex-none md:w-[300px] aspect-[9/16] rounded-xl overflow-hidden group"
              >
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={400}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                      {video.title}
                    </h3>
                    <Button
                      variant="outline"
                      className="w-full bg-white/10 backdrop-blur-sm border-white/20 mb-3"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </Button>
                    <div className="flex justify-between text-sm">
                      <span>{video.likes} likes</span>
                      <span>{video.comments} comments</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
