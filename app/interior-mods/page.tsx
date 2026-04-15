import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    name: "Carbon Fiber Steering Wheel",
    description: "Premium racing-style steering wheel with red stitching and carbon fiber finish",
    price: 12999,
    originalPrice: 15999,
    image: "/images/products/steering-wheel.jpg",
    badge: "Best Seller"
  },
  {
    name: "Sport Shift Knob",
    description: "Weighted carbon fiber shift knob for precise gear changes",
    price: 2499,
    originalPrice: 2999,
    image: "/images/products/shift-knob.jpg",
    badge: "Hot"
  },
  {
    name: "Premium Floor Mats",
    description: "All-weather rubber floor mats with custom red trim and logo",
    price: 3999,
    image: "/images/products/floor-mats.jpg"
  },
  {
    name: "Racing Seat Covers",
    description: "Black leather seat covers with red stitching, fits most vehicles",
    price: 7999,
    originalPrice: 9999,
    image: "/images/products/seat-covers.jpg",
    badge: "Popular"
  },
  {
    name: "4K Dash Camera",
    description: "Ultra HD dash cam with night vision and parking mode",
    price: 5999,
    originalPrice: 7499,
    image: "/images/products/dash-cam.jpg"
  },
  {
    name: "Magnetic Phone Mount",
    description: "Strong magnetic mount with 360° rotation for any smartphone",
    price: 1299,
    image: "/images/products/phone-mount.jpg"
  },
  {
    name: "Wireless CarPlay Adapter",
    description: "Convert your wired CarPlay to wireless connectivity",
    price: 4999,
    originalPrice: 6499,
    image: "/images/carplay-adapter.jpg",
    badge: "New"
  },
  {
    name: "LED Interior Strip Lights",
    description: "RGB ambient lighting kit with app control and music sync",
    price: 1999,
    image: "/images/led-strips.jpg"
  },
  {
    name: "Aluminum Pedal Set",
    description: "Premium racing pedal covers with anti-slip rubber grip",
    price: 2999,
    image: "/images/products/pedal-set.jpg"
  },
  {
    name: "Seatbelt Shoulder Pads",
    description: "Comfortable leather pads with red stitching accent",
    price: 799,
    image: "/images/products/seatbelt-pad.jpg"
  },
  {
    name: "Car Air Freshener",
    description: "Premium vent clip air freshener with long-lasting scent",
    price: 499,
    image: "/images/products/air-freshener.jpg"
  },
  {
    name: "Trunk Organizer",
    description: "Foldable storage box with multiple compartments",
    price: 1499,
    image: "/images/products/trunk-organizer.jpg"
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
