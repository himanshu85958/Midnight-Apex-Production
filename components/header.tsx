"use client"

import Link from "next/link"
import { Mountain, ShoppingCart, User } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "HOME", href: "/" },
  { label: "INTERIOR MODS", href: "/interior-mods" },
  { label: "EXTERIOR MODS", href: "/exterior-mods" },
  { label: "LIGHTING", href: "/lighting" },
  { label: "BUDGET PICKS", href: "/budget-picks" },
  { label: "LUXURY PICKS", href: "/luxury-picks" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      {/* Top Bar */}
      <div className="border-b border-border/40">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative">
              <Mountain className="h-8 w-8 text-primary" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-[family-name:var(--font-heading)] text-lg font-bold tracking-wide text-foreground">
                MIDNIGHT APEX
              </span>
              <span className="text-[10px] tracking-[0.3em] text-primary">
                ACCESSORIES
              </span>
            </div>
          </Link>

          {/* Marketplace Badges */}
          <div className="hidden items-center gap-4 text-xs text-muted-foreground md:flex">
            <span className="font-semibold">amazon</span>
            <span className="font-semibold">ebay</span>
            <span className="font-semibold">AutoBuy</span>
            <span className="text-muted-foreground/60">|</span>
            <span>BEST MOBILE SECTION</span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 font-[family-name:var(--font-heading)] font-semibold tracking-wide text-primary-foreground">
              SHOP NOW
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container mx-auto px-4">
        <ul className="flex items-center justify-center gap-1 overflow-x-auto py-3 md:gap-6">
          {navItems.map((item, index) => (
            <li key={item.label} className="flex items-center gap-1 md:gap-6">
              <Link
                href={item.href}
                className="whitespace-nowrap px-2 py-1 text-xs font-medium tracking-wide text-muted-foreground transition-colors hover:text-foreground md:text-sm"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && (
                <span className="hidden text-border md:inline">|</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
