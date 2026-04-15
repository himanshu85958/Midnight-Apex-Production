import Image from "next/image"
import { Button } from "@/components/ui/button"

const products = [
  {
    name: "Wireless CarPlay Adapter",
    description: "Upgrade to Wireless Apple CarPlay",
    image: "/images/carplay-adapter.jpg",
    href: "/products/carplay-adapter",
  },
  {
    name: "LED Interior Strip Lights",
    description: "Transform Your Night Drive",
    image: "/images/led-strips.jpg",
    href: "/products/led-strips",
  },
  {
    name: "Logo Door Projector",
    description: "Project Your Car's Logo",
    image: "/images/door-projector.jpg",
    href: "/products/door-projector",
  },
]

export function FeaturedProducts() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <h2 className="font-[family-name:var(--font-heading)] text-lg font-semibold uppercase tracking-[0.2em] text-muted-foreground md:text-xl">
            FEATURED PRODUCTS
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-primary/50"
            >
              {/* Product Image */}
              <div className="relative aspect-[16/10]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Product Info */}
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold italic text-foreground md:text-lg">
                  {product.name}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground md:text-sm">
                  {product.description}
                </p>
                <Button
                  className="mt-4 w-full bg-primary font-[family-name:var(--font-heading)] text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                >
                  BUY NOW
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
