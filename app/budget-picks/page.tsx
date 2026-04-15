import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    id: "led-valve-caps-1",
    name: "LED Valve Stem Caps",
    description: "Glowing tire valve caps with motion-activated LED",
    price: 699,
    originalPrice: 999,
    image: "/images/products/valve-caps.jpg",
    badge: "Under ₹999",
    rating: 4.3,
    reviews: 128
  },
  {
    id: "car-air-freshener-1",
    name: "Car Air Freshener",
    description: "Premium vent clip air freshener with metallic design",
    price: 499,
    image: "/images/products/air-freshener.jpg",
    badge: "Under ₹999",
    rating: 4.5,
    reviews: 312
  },
  {
    id: "seatbelt-pads-1",
    name: "Seatbelt Shoulder Pads",
    description: "Comfortable leather pads with red stitching",
    price: 799,
    image: "/images/products/seatbelt-pad.jpg",
    badge: "Under ₹999",
    rating: 4.2,
    reviews: 87
  },
  {
    id: "key-fob-cover-1",
    name: "Carbon Key Fob Cover",
    description: "Carbon fiber style key cover with red accents",
    price: 599,
    originalPrice: 799,
    image: "/images/products/key-cover.jpg",
    badge: "Under ₹999",
    rating: 4.4,
    reviews: 201
  },
  {
    id: "usb-charger-1",
    name: "Fast USB Car Charger",
    description: "Dual port fast charging adapter with LED indicator",
    price: 799,
    image: "/images/products/usb-charger.jpg",
    badge: "Under ₹999",
    rating: 4.6,
    reviews: 445
  },
  {
    id: "phone-mount-1",
    name: "Magnetic Phone Mount",
    description: "Strong magnetic mount with 360° rotation",
    price: 1299,
    originalPrice: 1599,
    image: "/images/products/phone-mount.jpg",
    rating: 4.5,
    reviews: 389
  },
  {
    id: "trunk-organizer-1",
    name: "Trunk Organizer",
    description: "Foldable storage box with multiple compartments",
    price: 1499,
    image: "/images/products/trunk-organizer.jpg",
    rating: 4.3,
    reviews: 156
  },
  {
    id: "led-interior-strips-1",
    name: "LED Interior Strips",
    description: "Basic RGB strip lights with remote control",
    price: 999,
    originalPrice: 1499,
    image: "/images/led-strips.jpg",
    badge: "Under ₹999",
    rating: 4.4,
    reviews: 278
  },
  {
    id: "door-projector-1",
    name: "Door Logo Projector",
    description: "LED welcome lights with custom logo projection",
    price: 1999,
    originalPrice: 2499,
    image: "/images/door-projector.jpg",
    rating: 4.7,
    reviews: 193
  },
  {
    id: "steering-cover-1",
    name: "Steering Wheel Cover",
    description: "Breathable leather cover with anti-slip grip",
    price: 899,
    image: "/images/products/steering-wheel.jpg",
    badge: "Under ₹999",
    rating: 4.1,
    reviews: 234
  },
  {
    id: "cup-coasters-1",
    name: "Cup Holder Coasters",
    description: "LED illuminated cup holder inserts with logo",
    price: 599,
    image: "/images/products/air-freshener.jpg",
    rating: 4.0,
    reviews: 67
  },
  {
    id: "gear-shift-cover-1",
    name: "Gear Shift Cover",
    description: "Universal shift knob cover with carbon look",
    price: 799,
    image: "/images/products/shift-knob.jpg",
    badge: "Under ₹999",
    rating: 4.2,
    reviews: 112
  }
]

export default function BudgetPicksPage() {
  return (
    <CategoryPageLayout
      title="Budget Picks"
      subtitle="Upgrade your ride without breaking the bank. Quality accessories under ₹999 that make a real difference."
      bannerImage="/images/budget-picks.jpg"
      products={products}
    />
  )
}
