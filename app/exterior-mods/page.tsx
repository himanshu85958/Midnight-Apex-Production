import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    id: "carbon-spoiler-1",
    name: "Carbon Fiber Rear Spoiler",
    description: "Aggressive racing-style wing with adjustable angle mount",
    price: 18999,
    originalPrice: 24999,
    image: "/images/products/spoiler.jpg",
    badge: "Best Seller",
    rating: 4.9,
    reviews: 89
  },
  {
    id: "mirror-covers-1",
    name: "Carbon Mirror Covers",
    description: "Glossy carbon fiber side mirror replacement covers",
    price: 4999,
    image: "/images/products/mirror-covers.jpg",
    rating: 4.5,
    reviews: 143
  },
  {
    id: "rear-diffuser-1",
    name: "Rear Diffuser Kit",
    description: "Aggressive diffuser with red accent lines for sporty look",
    price: 8999,
    originalPrice: 11999,
    image: "/images/products/diffuser.jpg",
    badge: "Hot",
    rating: 4.7,
    reviews: 67
  },
  {
    id: "front-grille-1",
    name: "Sport Front Grille",
    description: "Black honeycomb mesh grille for aggressive front styling",
    price: 6999,
    image: "/images/products/grille.jpg",
    rating: 4.4,
    reviews: 112
  },
  {
    id: "front-lip-1",
    name: "Front Lip Splitter",
    description: "Carbon fiber style front bumper lip for aerodynamic look",
    price: 5499,
    originalPrice: 6999,
    image: "/images/products/lip-kit.jpg",
    rating: 4.6,
    reviews: 98
  },
  {
    id: "fender-vents-1",
    name: "Fender Side Vents",
    description: "Racing-style air intake vents for aggressive styling",
    price: 3499,
    image: "/images/products/fender-vents.jpg",
    rating: 4.2,
    reviews: 76
  },
  {
    id: "exhaust-tips-1",
    name: "Black Chrome Exhaust Tips",
    description: "Premium stainless steel dual exhaust tips with black finish",
    price: 4999,
    originalPrice: 5999,
    image: "/images/products/exhaust-tips.jpg",
    badge: "Popular",
    rating: 4.8,
    reviews: 234
  },
  {
    id: "carbon-hood-1",
    name: "Carbon Fiber Hood",
    description: "Lightweight vented hood for performance and style",
    price: 45999,
    originalPrice: 54999,
    image: "/images/products/carbon-hood.jpg",
    badge: "Premium",
    rating: 4.9,
    reviews: 45
  },
  {
    id: "brake-calipers-1",
    name: "Red Brake Caliper Covers",
    description: "Bold red brake caliper covers for sporty appearance",
    price: 3999,
    image: "/images/products/brake-calipers.jpg",
    rating: 4.3,
    reviews: 187
  },
  {
    id: "alloy-wheels-1",
    name: "Forged Alloy Wheels",
    description: "20-inch premium forged wheels with gloss black finish",
    price: 89999,
    originalPrice: 99999,
    image: "/images/products/luxury-wheels.jpg",
    badge: "Luxury",
    rating: 5.0,
    reviews: 32
  },
  {
    id: "door-projector-ext-1",
    name: "Door Logo Projector",
    description: "LED welcome lights that project your car logo",
    price: 1999,
    image: "/images/door-projector.jpg",
    rating: 4.7,
    reviews: 193
  },
  {
    id: "tail-lights-1",
    name: "Sequential Tail Lights",
    description: "LED tail lights with flowing turn signal animation",
    price: 12999,
    originalPrice: 15999,
    image: "/images/products/tail-lights.jpg",
    rating: 4.8,
    reviews: 156
  }
]

export default function ExteriorModsPage() {
  return (
    <CategoryPageLayout
      title="Exterior Mods"
      subtitle="Make a statement on the streets. Premium body kits, spoilers, and exterior accessories for the ultimate aggressive look."
      bannerImage="/images/exterior-mods.jpg"
      products={products}
    />
  )
}
