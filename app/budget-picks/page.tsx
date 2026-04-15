import { CategoryPageLayout } from "@/components/category-page-layout"

const products = [
  {
    name: "LED Valve Stem Caps",
    description: "Glowing tire valve caps with motion-activated LED",
    price: 699,
    originalPrice: 999,
    image: "/images/products/valve-caps.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Car Air Freshener",
    description: "Premium vent clip air freshener with metallic design",
    price: 499,
    image: "/images/products/air-freshener.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Seatbelt Shoulder Pads",
    description: "Comfortable leather pads with red stitching",
    price: 799,
    image: "/images/products/seatbelt-pad.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Carbon Key Fob Cover",
    description: "Carbon fiber style key cover with red accents",
    price: 599,
    originalPrice: 799,
    image: "/images/products/key-cover.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Fast USB Car Charger",
    description: "Dual port fast charging adapter with LED indicator",
    price: 799,
    image: "/images/products/usb-charger.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Magnetic Phone Mount",
    description: "Strong magnetic mount with 360° rotation",
    price: 1299,
    originalPrice: 1599,
    image: "/images/products/phone-mount.jpg"
  },
  {
    name: "Trunk Organizer",
    description: "Foldable storage box with multiple compartments",
    price: 1499,
    image: "/images/products/trunk-organizer.jpg"
  },
  {
    name: "LED Interior Strips",
    description: "Basic RGB strip lights with remote control",
    price: 999,
    originalPrice: 1499,
    image: "/images/led-strips.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Door Logo Projector",
    description: "LED welcome lights with custom logo projection",
    price: 1999,
    originalPrice: 2499,
    image: "/images/door-projector.jpg"
  },
  {
    name: "Steering Wheel Cover",
    description: "Breathable leather cover with anti-slip grip",
    price: 899,
    image: "/images/products/steering-wheel.jpg",
    badge: "Under ₹999"
  },
  {
    name: "Cup Holder Coasters",
    description: "LED illuminated cup holder inserts with logo",
    price: 599,
    image: "/images/products/air-freshener.jpg"
  },
  {
    name: "Gear Shift Cover",
    description: "Universal shift knob cover with carbon look",
    price: 799,
    image: "/images/products/shift-knob.jpg",
    badge: "Under ₹999"
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
