import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    id: "underglow-kit-1",
    name: "RGB Underglow Kit",
    description: "Multicolor LED underglow with app control and music sync",
    price: 4999,
    originalPrice: 6999,
    image: "/images/products/underglow-kit.jpg",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 312
  },
  {
    id: "led-strips-light-1",
    name: "LED Interior Strip Lights",
    description: "RGB ambient lighting kit for interior with 16M colors",
    price: 1999,
    image: "/images/led-strips.jpg",
    badge: "Popular",
    rating: 4.6,
    reviews: 567
  },
  {
    id: "led-headlights-1",
    name: "LED Headlight Bulbs",
    description: "Ultra bright 6000K white LED headlight conversion kit",
    price: 3499,
    originalPrice: 4499,
    image: "/images/products/led-headlights.jpg",
    rating: 4.7,
    reviews: 234
  },
  {
    id: "fog-lights-1",
    name: "Amber Fog Light Kit",
    description: "Yellow LED fog lights for improved visibility",
    price: 2999,
    image: "/images/products/fog-lights.jpg",
    rating: 4.4,
    reviews: 145
  },
  {
    id: "rock-lights-1",
    name: "RGB Rock Lights",
    description: "Wheel well rock lights with Bluetooth app control",
    price: 3999,
    originalPrice: 4999,
    image: "/images/products/rock-lights.jpg",
    badge: "Hot",
    rating: 4.7,
    reviews: 189
  },
  {
    id: "tail-lights-light-1",
    name: "Sequential Tail Lights",
    description: "LED tail lights with flowing turn signal animation",
    price: 12999,
    originalPrice: 15999,
    image: "/images/products/tail-lights.jpg",
    rating: 4.8,
    reviews: 156
  },
  {
    id: "light-bar-1",
    name: "LED Light Bar",
    description: "42-inch curved LED light bar for off-road driving",
    price: 8999,
    image: "/images/products/light-bar.jpg",
    rating: 4.6,
    reviews: 98
  },
  {
    id: "door-projector-light-1",
    name: "Door Logo Projector",
    description: "LED welcome lights that project your car logo on ground",
    price: 1999,
    image: "/images/door-projector.jpg",
    rating: 4.7,
    reviews: 193
  },
  {
    id: "valve-caps-light-1",
    name: "LED Valve Stem Caps",
    description: "Tire valve caps with red LED glow effect",
    price: 699,
    image: "/images/products/valve-caps.jpg",
    rating: 4.3,
    reviews: 128
  },
  {
    id: "starlight-headliner-1",
    name: "Starlight Headliner Kit",
    description: "Fiber optic star ceiling kit for interior roof",
    price: 7999,
    originalPrice: 9999,
    image: "/images/ambient-lighting.jpg",
    badge: "Premium",
    rating: 4.9,
    reviews: 87
  },
  {
    id: "drl-lights-1",
    name: "DRL Daytime Running Lights",
    description: "Sequential LED DRL strips for modern front look",
    price: 2499,
    image: "/images/products/led-headlights.jpg",
    rating: 4.5,
    reviews: 167
  },
  {
    id: "brake-light-led-1",
    name: "Third Brake Light LED",
    description: "High-mount stop light with sequential animation",
    price: 1499,
    image: "/images/products/tail-lights.jpg",
    rating: 4.4,
    reviews: 112
  }
]

export default function LightingPage() {
  return (
    <CategoryPageLayout
      title="Lighting"
      subtitle="Light up the night with premium LED lighting solutions. From underglow to interior ambient, create your perfect atmosphere."
      bannerImage="/images/ambient-lighting.jpg"
      products={products}
    />
  )
}
