"use client"

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import ProductFilters from "@/components/product-filters"
import { ProductCard } from "@/components/product-card"
import type { FilterState } from "@/components/product-filters"
import { useState, useMemo } from "react"

interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: string
  inStock?: boolean
}

interface CategoryPageLayoutProps {
  title: string
  subtitle: string
  bannerImage: string
  products: Product[]
}

export function CategoryPageLayout({
  title,
  subtitle,
  bannerImage,
  products,
}: CategoryPageLayoutProps) {
  const [filters, setFilters] = useState<FilterState | null>(null)

  const filteredProducts = useMemo(() => {
    if (!filters) return products

    return products.filter(product => {
      // Price filter
      if (product.price < filters.priceRange[0] || product.price > filters.priceRange[1]) {
        return false
      }

      // Rating filter
      if (filters.rating !== null && product.rating < filters.rating) {
        return false
      }

      // Availability filter
      if (filters.availability.length > 0) {
        const isInStock = product.inStock !== false
        if (filters.availability.includes("in-stock") && !isInStock) {
          return false
        }
      }

      return true
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "newest":
          return 0
        default:
          return 0
      }
    })
  }, [products, filters])

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section */}
      <section className="relative h-[300px] md:h-[400px] overflow-hidden">
        <Image
          src={bannerImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Red glow effects */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-32 bg-gradient-to-t from-primary/20 to-transparent blur-2xl" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-12">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-xl">
              {subtitle}
            </p>
            {filters?.brand && filters.brand !== "All Brands" && (
              <p className="mt-3 text-primary font-medium">
                Showing products for {filters.brand} {filters.model !== "All Models" ? filters.model : ""}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-72 lg:w-80 shrink-0">
              <div className="md:sticky md:top-24">
                <ProductFilters onFilterChange={setFilters} />
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="text-muted-foreground">
                  Showing <span className="text-foreground font-medium">{filteredProducts.length}</span> products
                </p>
              </div>

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mb-4">
                    <svg
                      className="w-10 h-10 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-2">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground max-w-sm">
                    Try adjusting your filters or search criteria to find what you&apos;re looking for.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
