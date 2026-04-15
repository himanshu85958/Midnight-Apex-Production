import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] overflow-hidden md:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-car.jpg"
          alt="Black sports car with red underglow"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex h-full min-h-[500px] flex-col justify-center px-4 py-16 md:min-h-[600px]">
        <div className="max-w-xl">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl font-bold uppercase leading-tight tracking-wide text-foreground md:text-5xl lg:text-6xl">
            PUSH YOUR RIDE
            <br />
            <span className="italic text-primary">TO THE EDGE</span>
          </h1>
          <p className="mt-4 font-[family-name:var(--font-heading)] text-sm uppercase tracking-[0.2em] text-muted-foreground md:text-base">
            PREMIUM CAR MODS & ACCESSORIES
          </p>
          <Button
            size="lg"
            className="mt-8 bg-primary px-8 py-6 font-[family-name:var(--font-heading)] text-base font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            BROWSE NOW
          </Button>
        </div>
      </div>
    </section>
  )
}
