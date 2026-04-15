import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const categories = [
  {
    title: "INTERIOR UPGRADES",
    image: "/images/interior-upgrades.jpg",
    href: "/interior",
    cta: "Shop Now",
  },
  {
    title: "EXTERIOR MODS",
    image: "/images/exterior-mods.jpg",
    href: "/exterior",
    cta: "Shop Now",
  },
  {
    title: "AMBIENT LIGHTING",
    image: "/images/ambient-lighting.jpg",
    href: "/lighting",
    cta: "Shop Now",
  },
  {
    title: "BUDGET PICKS",
    image: "/images/budget-picks.jpg",
    href: "/budget",
    cta: "Under ₹999",
  },
]

export function CategoryGrid() {
  return (
    <section className="bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative aspect-[4/5] overflow-hidden rounded-lg border border-border/50 bg-card transition-all hover:border-primary/50"
            >
              {/* Image */}
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-center p-4">
                <h3 className="text-center font-[family-name:var(--font-heading)] text-sm font-semibold uppercase italic tracking-wide text-foreground md:text-base">
                  {category.title}
                </h3>
                <Button
                  size="sm"
                  className="mt-3 bg-primary px-4 font-[family-name:var(--font-heading)] text-xs font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
                >
                  {category.cta}
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
