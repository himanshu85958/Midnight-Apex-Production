import Link from "next/link"
import { Instagram, Youtube, CreditCard, Truck } from "lucide-react"

const paymentMethods = [
  { name: "Visa", icon: CreditCard },
  { name: "MasterCard", icon: CreditCard },
  { name: "Cash on Delivery", icon: Truck },
  { name: "Paytm", label: "Paytm" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      {/* Trust Badges */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              TRUSTED AFFILIATE PARTNERS
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {paymentMethods.map((method, index) => (
                <div key={method.name} className="flex items-center gap-2">
                  {method.icon ? (
                    <method.icon className="h-6 w-6 text-muted-foreground" />
                  ) : null}
                  <span className="text-sm font-semibold text-muted-foreground">
                    {method.label || method.name}
                  </span>
                  {index < paymentMethods.length - 1 && (
                    <span className="ml-4 hidden text-border md:inline">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Links */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-xs text-muted-foreground">
            © 2024 Midnight Apex Accessories. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link
              href="/disclaimer"
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              Disclaimer
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://instagram.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="YouTube"
            >
              <Youtube className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
