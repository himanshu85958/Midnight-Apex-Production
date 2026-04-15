import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    id: "steering-wheel-1",
    name: "Carbon Fiber Steering Wheel",
    description: "Premium racing-style steering wheel with red stitching and carbon fiber finish",
    price: 12999,
    originalPrice: 15999,
    image: "/images/products/steering-wheel.jpg",
    badge: "Best Seller",
    rating: 4.8,
    reviews: 234
  },
  {
    id: "shift-knob-1",
    name: "Sport Shift Knob",
    description: "Weighted carbon fiber shift knob for precise gear changes",
    price: 2499,
    originalPrice: 2999,
    image: "/images/products/shift-knob.jpg",
    badge: "Hot",
    rating: 4.6,
    reviews: 178
  },
  {
    id: "floor-mats-1",
    name: "Premium Floor Mats",
    description: "All-weather rubber floor mats with custom red trim and logo",
    price: 3999,
    image: "/images/products/floor-mats.jpg",
    rating: 4.5,
    reviews: 312
  },
  {
    id: "seat-covers-1",
    name: "Racing Seat Covers",
    description: "Black leather seat covers with red stitching, fits most vehicles",
    price: 7999,
    originalPrice: 9999,
    image: "/images/products/seat-covers.jpg",
    badge: "Popular",
    rating: 4.7,
    reviews: 189
  },
  {
    id: "dash-cam-1",
    name: "4K Dash Camera",
    description: "Ultra HD dash cam with night vision and parking mode",
    price: 5999,
    originalPrice: 7499,
    image: "/images/products/dash-cam.jpg",
    rating: 4.6,
    reviews: 423
  },
  {
    id: "phone-mount-int-1",
    name: "Magnetic Phone Mount",
    description: "Strong magnetic mount with 360° rotation for any smartphone",
    price: 1299,
    image: "/images/products/phone-mount.jpg",
    rating: 4.5,
    reviews: 389
  },
  {
    id: "carplay-adapter-1",
    name: "Wireless CarPlay Adapter",
    description: "Convert your wired CarPlay to wireless connectivity",
    price: 4999,
    originalPrice: 6499,
    image: "/images/carplay-adapter.jpg",
    badge: "New",
    rating: 4.8,
    reviews: 267
  },
  {
    id: "led-strips-int-1",
    name: "LED Interior Strip Lights",
    description: "RGB ambient lighting kit with app control and music sync",
    price: 1999,
    image: "/images/led-strips.jpg",
    rating: 4.6,
    reviews: 567
  },
  {
    id: "pedal-set-1",
    name: "Aluminum Pedal Set",
    description: "Premium racing pedal covers with anti-slip rubber grip",
    price: 2999,
    image: "/images/products/pedal-set.jpg",
    rating: 4.4,
    reviews: 145
  },
  {
    id: "seatbelt-pads-int-1",
    name: "Seatbelt Shoulder Pads",
    description: "Comfortable leather pads with red stitching accent",
    price: 799,
    image: "/images/products/seatbelt-pad.jpg",
    rating: 4.2,
    reviews: 87
  },
  {
    id: "air-freshener-int-1",
    name: "Car Air Freshener",
    description: "Premium vent clip air freshener with long-lasting scent",
    price: 499,
    image: "/images/products/air-freshener.jpg",
    rating: 4.5,
    reviews: 312
  },
  {
    id: "trunk-organizer-int-1",
    name: "Trunk Organizer",
    description: "Foldable storage box with multiple compartments",
    price: 1499,
    image: "/images/products/trunk-organizer.jpg",
    rating: 4.3,
    reviews: 156
  }
]

export default function InteriorModsPage() {
  return (
    <CategoryPageLayout
      title="Interior Mods"
      subtitle="Transform your cabin with premium interior upgrades. From racing seats to ambient lighting, elevate your driving experience."
      bannerImage="/images/interior-upgrades.jpg"
      products={products}
    />
  )
}
