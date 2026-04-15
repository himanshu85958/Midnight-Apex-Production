"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { 
  ShoppingCart, 
  Heart, 
  Star, 
  Truck, 
  Shield, 
  RotateCcw, 
  Check,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Minus,
  Plus,
  Share2,
  Package
} from "lucide-react"

// Sample product data - in real app this would come from API/database
const allProducts = {
  "steering-wheel-1": {
    id: "steering-wheel-1",
    name: "Carbon Fiber Racing Steering Wheel",
    description: "Premium carbon fiber steering wheel with Alcantara grip and red stitching. Transform your driving experience with this lightweight, race-inspired upgrade.",
    longDescription: `Experience the thrill of professional racing with our Carbon Fiber Racing Steering Wheel. Crafted from genuine 3K carbon fiber weave, this steering wheel combines lightweight performance with stunning aesthetics.

Key Features:
• Genuine 3K carbon fiber construction
• Premium Alcantara grip with red contrast stitching
• Flat bottom design for sporty feel
• Compatible with most aftermarket hub adapters
• Includes horn button ring
• Weight: 850g (40% lighter than stock)

Perfect for enthusiasts who demand the best in both form and function. The ergonomic design reduces fatigue during spirited driving while the premium materials ensure a confident grip in all conditions.`,
    price: 12999,
    originalPrice: 18999,
    images: [
      "/images/products/steering-wheel.jpg",
      "/images/products/luxury-steering.jpg",
      "/images/interior-upgrades.jpg",
    ],
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Interior Mods",
    rating: 4.8,
    reviews: 234,
    inStock: true,
    stockCount: 15,
    sku: "SW-CF-001",
    brand: "Apex Racing",
    compatibility: ["Universal", "BMW", "Mercedes-Benz", "Audi", "Porsche"],
    features: [
      "Genuine Carbon Fiber",
      "Alcantara Grip",
      "Red Stitching",
      "Flat Bottom Design",
      "Lightweight Construction"
    ],
    specifications: {
      "Material": "Carbon Fiber + Alcantara",
      "Diameter": "350mm",
      "Weight": "850g",
      "Bolt Pattern": "6x70mm / 6x74mm",
      "Grip Thickness": "28mm",
      "Horn Button": "Included"
    }
  },
  "led-strips-1": {
    id: "led-strips-1",
    name: "RGB LED Interior Strip Lights Kit",
    description: "Transform your car interior with app-controlled RGB LED strips. Music sync, 16 million colors, easy installation.",
    longDescription: `Elevate your driving experience with our premium RGB LED Interior Strip Lights Kit. Create the perfect ambiance for any mood with 16 million color options and multiple lighting modes.

Key Features:
• App & remote control options
• Music sync reactive mode
• 16 million color options
• Easy plug & play installation
• Waterproof design (IP65)
• Low power consumption

The perfect upgrade for night drives, car shows, or simply adding personality to your ride. Installation takes less than 30 minutes with included adhesive backing.`,
    price: 1499,
    originalPrice: 2499,
    images: [
      "/images/products/led-strips.jpg",
      "/images/ambient-lighting.jpg",
      "/images/products/underglow-kit.jpg",
    ],
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    category: "Lighting",
    rating: 4.6,
    reviews: 567,
    inStock: true,
    stockCount: 89,
    sku: "LED-RGB-001",
    brand: "GlowTech",
    compatibility: ["Universal"],
    features: [
      "App Control",
      "Music Sync",
      "16M Colors",
      "Waterproof IP65",
      "Easy Install"
    ],
    specifications: {
      "LED Count": "48 LEDs (4 strips)",
      "Strip Length": "4 x 25cm",
      "Voltage": "12V DC",
      "Power": "8W",
      "Control": "App + Remote",
      "Waterproof": "IP65"
    }
  },
  "spoiler-1": {
    id: "spoiler-1",
    name: "Carbon Fiber Rear Spoiler Wing",
    description: "Aggressive racing-style rear spoiler with genuine carbon fiber construction. Adds downforce and style.",
    longDescription: `Dominate the streets with our Carbon Fiber Rear Spoiler Wing. Engineered for both aesthetics and aerodynamic performance, this spoiler adds genuine downforce while making your car stand out.

Key Features:
• Genuine 3K carbon fiber weave
• UV-resistant clear coat finish
• Adjustable angle brackets
• Professional-grade mounting hardware
• Wind tunnel tested design

Each spoiler is handcrafted and inspected to ensure perfect fitment and finish. The aggressive design is perfect for sports cars, sedans, and hatchbacks looking for that race-inspired look.`,
    price: 24999,
    originalPrice: 34999,
    images: [
      "/images/products/spoiler.jpg",
      "/images/exterior-mods.jpg",
      "/images/hero-car.jpg",
    ],
    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Exterior Mods",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    stockCount: 7,
    sku: "SP-CF-001",
    brand: "AeroMax",
    compatibility: ["Universal", "BMW", "Audi", "Honda", "Toyota"],
    features: [
      "Real Carbon Fiber",
      "UV Protected",
      "Adjustable Angle",
      "Hardware Included",
      "Wind Tunnel Tested"
    ],
    specifications: {
      "Material": "3K Carbon Fiber",
      "Width": "135cm",
      "Height": "12cm",
      "Weight": "2.8kg",
      "Finish": "Gloss Clear Coat",
      "Mount Type": "Trunk Lip / Bolt-on"
    }
  }
}

// Default product for unknown IDs
const defaultProduct = allProducts["steering-wheel-1"]

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  
  const product = allProducts[productId as keyof typeof allProducts] || defaultProduct

  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedCompatibility, setSelectedCompatibility] = useState(product.compatibility[0])
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [isMuted, setIsMuted] = useState(true)
  const [showVideo, setShowVideo] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }, [isVideoPlaying])

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length)
    setShowVideo(false)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length)
    setShowVideo(false)
  }

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : 0

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cinematic Hero Section with Video Background */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={product.video} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        {/* Red glow effects */}
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-48 bg-gradient-to-t from-primary/30 to-transparent blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />

        {/* Video Controls */}
        <div className="absolute bottom-6 right-6 flex items-center gap-2 z-20">
          <Button
            variant="outline"
            size="icon"
            className="bg-background/50 backdrop-blur-sm border-border hover:bg-primary/20"
            onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          >
            {isVideoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="bg-background/50 backdrop-blur-sm border-border hover:bg-primary/20"
            onClick={() => setIsMuted(!isMuted)}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </Button>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href={`/${product.category.toLowerCase().replace(" ", "-")}`} className="hover:text-primary transition-colors">
                {product.category}
              </Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
            
            <Badge className="bg-primary/20 text-primary border-primary/30 mb-4">
              {product.category}
            </Badge>
            
            <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight max-w-3xl">
              {product.name}
            </h1>
            
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              {product.description}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-6">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>
              <span className="text-foreground font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Product Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Gallery */}
            <div className="space-y-4">
              {/* Main Image/Video */}
              <div className="relative aspect-square rounded-lg overflow-hidden bg-card border border-border group">
                {showVideo ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src={product.video} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}

                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary/20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                {/* Discount Badge */}
                {discount > 0 && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">
                    {discount}% OFF
                  </div>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedImage(index)
                      setShowVideo(false)
                    }}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index && !showVideo
                        ? "border-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <Image src={img} alt={`View ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
                {/* Video Thumbnail */}
                <button
                  onClick={() => setShowVideo(true)}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden border-2 transition-all flex items-center justify-center bg-card ${
                    showVideo ? "border-primary" : "border-border hover:border-primary/50"
                  }`}
                >
                  <Play className="w-6 h-6 text-primary" />
                  <span className="absolute bottom-1 text-[10px] text-muted-foreground">VIDEO</span>
                </button>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Price */}
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">&#8377;{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    &#8377;{product.originalPrice.toLocaleString()}
                  </span>
                )}
                {discount > 0 && (
                  <Badge className="bg-green-600/20 text-green-500 border-green-600/30">
                    Save &#8377;{(product.originalPrice! - product.price).toLocaleString()}
                  </Badge>
                )}
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                {product.inStock ? (
                  <>
                    <Check className="w-5 h-5 text-green-500" />
                    <span className="text-green-500 font-medium">In Stock</span>
                    <span className="text-muted-foreground">({product.stockCount} available)</span>
                  </>
                ) : (
                  <span className="text-destructive font-medium">Out of Stock</span>
                )}
              </div>

              {/* SKU & Brand */}
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span>SKU: <span className="text-foreground">{product.sku}</span></span>
                <span>Brand: <span className="text-foreground">{product.brand}</span></span>
              </div>

              {/* Compatibility Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Compatibility</label>
                <Select value={selectedCompatibility} onValueChange={setSelectedCompatibility}>
                  <SelectTrigger className="w-full bg-card border-border">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {product.compatibility.map((option) => (
                      <SelectItem key={option} value={option} className="hover:bg-secondary">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Quantity */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Quantity</label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stockCount, quantity + 1))}
                      className="p-3 hover:bg-secondary transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Total: <span className="text-primary font-bold">&#8377;{(product.price * quantity).toLocaleString()}</span>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2 h-14 text-lg"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className={`h-14 px-5 border-border ${isWishlisted ? "border-primary bg-primary/10" : ""}`}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-primary text-primary" : ""}`} />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-14 px-5 border-border"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Buy Now */}
              <Button 
                size="lg" 
                variant="outline"
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold h-14 text-lg"
              >
                Buy Now
              </Button>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3 pt-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">Free Shipping<br />Over &#8377;2000</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">1 Year<br />Warranty</span>
                </div>
                <div className="flex flex-col items-center text-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <RotateCcw className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs text-muted-foreground">7 Day<br />Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-card/30 border-t border-border">
        <div className="container mx-auto px-4 md:px-12">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="w-full justify-start bg-transparent border-b border-border rounded-none h-auto p-0 gap-8">
              <TabsTrigger 
                value="description" 
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0 font-[family-name:var(--font-heading)] uppercase tracking-wider"
              >
                Description
              </TabsTrigger>
              <TabsTrigger 
                value="specifications"
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0 font-[family-name:var(--font-heading)] uppercase tracking-wider"
              >
                Specifications
              </TabsTrigger>
              <TabsTrigger 
                value="reviews"
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0 font-[family-name:var(--font-heading)] uppercase tracking-wider"
              >
                Reviews ({product.reviews})
              </TabsTrigger>
              <TabsTrigger 
                value="shipping"
                className="bg-transparent data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none pb-4 px-0 font-[family-name:var(--font-heading)] uppercase tracking-wider"
              >
                Shipping
              </TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="pt-8">
              <div className="prose prose-invert max-w-none">
                <p className="text-muted-foreground whitespace-pre-line leading-relaxed">
                  {product.longDescription}
                </p>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-card rounded-lg border border-border">
                    <span className="text-muted-foreground">{key}</span>
                    <span className="text-foreground font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="pt-8">
              <div className="space-y-6">
                {/* Review Summary */}
                <div className="flex items-center gap-8 p-6 bg-card rounded-lg border border-border">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-primary">{product.rating}</div>
                    <div className="flex items-center gap-1 mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`}
                        />
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">{product.reviews} reviews</div>
                  </div>
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                      <div key={stars} className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground w-3">{stars}</span>
                        <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-yellow-500" 
                            style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : stars === 3 ? 7 : 3}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Reviews */}
                <div className="space-y-4">
                  {[
                    { name: "Rahul K.", rating: 5, date: "2 weeks ago", comment: "Absolutely stunning quality! The carbon fiber is genuine and the Alcantara feels premium. Installation was straightforward with the included adapter." },
                    { name: "Amit S.", rating: 5, date: "1 month ago", comment: "Best upgrade I've done to my BMW. The flat bottom design gives it a real sporty feel. Highly recommend!" },
                    { name: "Priya M.", rating: 4, date: "1 month ago", comment: "Great product, looks amazing. Took off one star because shipping took a bit longer than expected, but the product itself is perfect." },
                  ].map((review, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                            {review.name[0]}
                          </div>
                          <div>
                            <div className="font-medium text-foreground">{review.name}</div>
                            <div className="text-xs text-muted-foreground">{review.date}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < review.rating ? 'fill-yellow-500 text-yellow-500' : 'text-muted-foreground'}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="shipping" className="pt-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <Package className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Standard Shipping</h4>
                    <p className="text-muted-foreground text-sm">5-7 business days | Free on orders over &#8377;2000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <Truck className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Express Shipping</h4>
                    <p className="text-muted-foreground text-sm">2-3 business days | &#8377;199 flat rate</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border">
                  <RotateCcw className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Easy Returns</h4>
                    <p className="text-muted-foreground text-sm">7-day return policy. Items must be unused and in original packaging.</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  )
}
