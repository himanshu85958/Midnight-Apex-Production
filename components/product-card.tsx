"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart, Star } from "lucide-react"
import { useState } from "react"

interface ProductCardProps {
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

export function ProductCard({ 
  id, 
  name, 
  description, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  badge,
  inStock = true 
}: ProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0

  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
      {badge && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-primary-foreground text-xs font-semibold px-2 py-1 rounded">
          {badge}
        </div>
      )}

      {discount > 0 && !badge && (
        <div className="absolute top-3 left-3 z-10 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
          {discount}% OFF
        </div>
      )}
      
      <button
        onClick={(e) => {
          e.preventDefault()
          setIsWishlisted(!isWishlisted)
        }}
        className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm transition-colors hover:bg-primary/20"
      >
        <Heart 
          className={`w-4 h-4 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
        />
      </button>

      <Link href={`/product/${id}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {!inStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="bg-destructive text-destructive-foreground px-3 py-1 rounded text-sm font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>

        <div className="p-4">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`}
              />
            ))}
            <span className="text-xs text-muted-foreground ml-1">({reviews})</span>
          </div>

          <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground mb-1 line-clamp-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{description}</p>
          
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">&#8377;{price.toLocaleString()}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">&#8377;{originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>
      </Link>

      <div className="px-4 pb-4">
        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 disabled:opacity-50"
          disabled={!inStock}
        >
          <ShoppingCart className="w-4 h-4" />
          {inStock ? "Add to Cart" : "Notify Me"}
        </Button>
      </div>
    </div>
  )
}
