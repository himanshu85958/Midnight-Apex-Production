import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    id: "luxury-wheels-1",
    name: "Forged Alloy Wheels Set",
    description: "20-inch premium forged wheels with gloss black finish, set of 4",
    price: 89999,
    originalPrice: 109999,
    image: "/images/products/luxury-wheels.jpg",
    badge: "Premium",
    rating: 5.0,
    reviews: 32
  },
  {
    id: "carbon-hood-lux-1",
    name: "Carbon Fiber Hood",
    description: "Lightweight vented hood for performance and aggressive styling",
    price: 45999,
    originalPrice: 54999,
    image: "/images/products/carbon-hood.jpg",
    badge: "Premium",
    rating: 4.9,
    reviews: 45
  },
  {
    id: "alcantara-wheel-1",
    name: "Alcantara Steering Wheel",
    description: "Premium Alcantara wrapped wheel with carbon fiber accents",
    price: 24999,
    originalPrice: 29999,
    image: "/images/products/luxury-steering.jpg",
    badge: "Luxury",
    rating: 4.9,
    reviews: 67
  },
  {
    id: "body-kit-1",
    name: "Carbon Fiber Body Kit",
    description: "Complete body kit with front lip, side skirts, and rear diffuser",
    price: 75999,
    originalPrice: 89999,
    image: "/images/products/lip-kit.jpg",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 53
  },
  {
    id: "exhaust-system-1",
    name: "Premium Exhaust System",
    description: "Performance exhaust with black chrome tips and deep tone",
    price: 35999,
    originalPrice: 42999,
    image: "/images/products/exhaust-tips.jpg",
    rating: 4.8,
    reviews: 78
  },
  {
    id: "carbon-wing-1",
    name: "Carbon Rear Wing",
    description: "Full carbon fiber adjustable wing with GT styling",
    price: 28999,
    originalPrice: 34999,
    image: "/images/products/spoiler.jpg",
    badge: "Hot",
    rating: 4.9,
    reviews: 41
  },
  {
    id: "brembo-kit-1",
    name: "Brembo Brake Kit",
    description: "6-piston front brake kit with drilled rotors",
    price: 125999,
    originalPrice: 149999,
    image: "/images/products/brake-calipers.jpg",
    badge: "Performance",
    rating: 5.0,
    reviews: 19
  },
  {
    id: "led-headlights-lux-1",
    name: "Full LED Headlight Assembly",
    description: "Complete LED headlight units with sequential DRL",
    price: 45999,
    originalPrice: 52999,
    image: "/images/products/led-headlights.jpg",
    rating: 4.8,
    reviews: 56
  },
  {
    id: "racing-seats-1",
    name: "Racing Bucket Seats",
    description: "Full leather racing seats with carbon shell, pair",
    price: 89999,
    originalPrice: 99999,
    image: "/images/products/seat-covers.jpg",
    badge: "Luxury",
    rating: 4.9,
    reviews: 38
  },
  {
    id: "digital-dash-1",
    name: "Digital Dash Display",
    description: "12.3-inch digital instrument cluster with customizable layouts",
    price: 35999,
    image: "/images/products/dash-cam.jpg",
    rating: 4.7,
    reviews: 62
  },
  {
    id: "starlight-lux-1",
    name: "Starlight Headliner",
    description: "Fiber optic starlight ceiling with shooting star effects",
    price: 45999,
    originalPrice: 54999,
    image: "/images/ambient-lighting.jpg",
    badge: "Premium",
    rating: 4.9,
    reviews: 87
  },
  {
    id: "wide-body-1",
    name: "Wide Body Fender Kit",
    description: "Aggressive wide body fender flares in carbon fiber",
    price: 65999,
    originalPrice: 79999,
    image: "/images/products/fender-vents.jpg",
    rating: 4.8,
    reviews: 29
  }
]

export default function LuxuryPicksPage() {
  return (
    <CategoryPageLayout
      title="Luxury Picks"
      subtitle="For those who demand the best. Premium materials, exclusive designs, and uncompromising quality for the ultimate build."
      bannerImage="/images/night-beast-car.jpg"
      products={products}
    />
  )
}
