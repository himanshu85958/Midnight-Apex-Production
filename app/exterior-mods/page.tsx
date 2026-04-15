import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    name: "Carbon Fiber Rear Spoiler",
    description: "Aggressive racing-style wing with adjustable angle mount",
    price: 18999,
    originalPrice: 24999,
    image: "/images/products/spoiler.jpg",
    badge: "Best Seller"
  },
  {
    name: "Carbon Mirror Covers",
    description: "Glossy carbon fiber side mirror replacement covers",
    price: 4999,
    image: "/images/products/mirror-covers.jpg"
  },
  {
    name: "Rear Diffuser Kit",
    description: "Aggressive diffuser with red accent lines for sporty look",
    price: 8999,
    originalPrice: 11999,
    image: "/images/products/diffuser.jpg",
    badge: "Hot"
  },
  {
    name: "Sport Front Grille",
    description: "Black honeycomb mesh grille for aggressive front styling",
    price: 6999,
    image: "/images/products/grille.jpg"
  },
  {
    name: "Front Lip Splitter",
    description: "Carbon fiber style front bumper lip for aerodynamic look",
    price: 5499,
    originalPrice: 6999,
    image: "/images/products/lip-kit.jpg"
  },
  {
    name: "Fender Side Vents",
    description: "Racing-style air intake vents for aggressive styling",
    price: 3499,
    image: "/images/products/fender-vents.jpg"
  },
  {
    name: "Black Chrome Exhaust Tips",
    description: "Premium stainless steel dual exhaust tips with black finish",
    price: 4999,
    originalPrice: 5999,
    image: "/images/products/exhaust-tips.jpg",
    badge: "Popular"
  },
  {
    name: "Carbon Fiber Hood",
    description: "Lightweight vented hood for performance and style",
    price: 45999,
    originalPrice: 54999,
    image: "/images/products/carbon-hood.jpg",
    badge: "Premium"
  },
  {
    name: "Red Brake Caliper Covers",
    description: "Bold red brake caliper covers for sporty appearance",
    price: 3999,
    image: "/images/products/brake-calipers.jpg"
  },
  {
    name: "Forged Alloy Wheels",
    description: "20-inch premium forged wheels with gloss black finish",
    price: 89999,
    originalPrice: 99999,
    image: "/images/products/luxury-wheels.jpg",
    badge: "Luxury"
  },
  {
    name: "Door Logo Projector",
    description: "LED welcome lights that project your car logo",
    price: 1999,
    image: "/images/door-projector.jpg"
  },
  {
    name: "Sequential Tail Lights",
    description: "LED tail lights with flowing turn signal animation",
    price: 12999,
    originalPrice: 15999,
    image: "/images/products/tail-lights.jpg"
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
