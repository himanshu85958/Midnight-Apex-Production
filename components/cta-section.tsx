import Image from "next/image"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="relative min-h-[350px] overflow-hidden md:min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/night-beast-car.jpg"
          alt="Black sports car with red underglow"
          fill
          className="object-cover object-center"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex h-full min-h-[350px] flex-col justify-center px-4 py-12 md:min-h-[400px]">
        <div className="max-w-md">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold uppercase italic leading-tight tracking-wide text-foreground md:text-4xl lg:text-5xl">
            TURN YOUR CAR INTO A
            <br />
            <span className="not-italic text-primary">NIGHT BEAST</span>
          </h2>
          <Button
            size="lg"
            className="mt-6 bg-primary px-8 py-6 font-[family-name:var(--font-heading)] text-base font-semibold uppercase tracking-wider text-primary-foreground hover:bg-primary/90"
          >
            UPGRADE NOW
          </Button>
        </div>
      </div>
    </section>
  )
}
