"use client"

import { useState, useEffect } from "react"
import { ChevronDown, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"

// Car brands and their models
const carData: Record<string, string[]> = {
  "All Brands": ["All Models"],
  "BMW": ["All Models", "3 Series", "5 Series", "7 Series", "M3", "M4", "M5", "X3", "X5", "X6", "X7"],
  "Mercedes-Benz": ["All Models", "A-Class", "C-Class", "E-Class", "S-Class", "AMG GT", "GLA", "GLC", "GLE", "GLS"],
  "Audi": ["All Models", "A3", "A4", "A6", "A8", "Q3", "Q5", "Q7", "Q8", "RS3", "RS5", "RS7"],
  "Toyota": ["All Models", "Camry", "Corolla", "Supra", "GR86", "RAV4", "Highlander", "Land Cruiser", "Fortuner"],
  "Honda": ["All Models", "Civic", "Accord", "City", "CR-V", "HR-V", "Pilot", "NSX"],
  "Ford": ["All Models", "Mustang", "F-150", "Bronco", "Explorer", "Edge", "Ranger", "EcoSport"],
  "Chevrolet": ["All Models", "Camaro", "Corvette", "Silverado", "Tahoe", "Suburban", "Equinox", "Blazer"],
  "Nissan": ["All Models", "GT-R", "370Z", "Altima", "Maxima", "Patrol", "X-Trail", "Qashqai"],
  "Volkswagen": ["All Models", "Golf", "GTI", "Passat", "Arteon", "Tiguan", "Atlas", "ID.4"],
  "Hyundai": ["All Models", "Elantra", "Sonata", "Tucson", "Santa Fe", "Palisade", "Kona", "Ioniq"],
  "Kia": ["All Models", "Seltos", "Sportage", "Sorento", "Telluride", "Stinger", "K5", "EV6"],
  "Mazda": ["All Models", "Mazda3", "Mazda6", "MX-5", "CX-30", "CX-5", "CX-9", "CX-50"],
  "Porsche": ["All Models", "911", "Cayenne", "Macan", "Panamera", "Taycan", "718 Cayman", "718 Boxster"],
  "Lamborghini": ["All Models", "Huracán", "Urus", "Revuelto", "Aventador"],
  "Ferrari": ["All Models", "488", "F8", "SF90", "Roma", "Portofino", "812", "Purosangue"],
  "Tesla": ["All Models", "Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
  "Jeep": ["All Models", "Wrangler", "Grand Cherokee", "Cherokee", "Compass", "Gladiator"],
  "Land Rover": ["All Models", "Range Rover", "Range Rover Sport", "Defender", "Discovery", "Evoque"],
  "Dodge": ["All Models", "Challenger", "Charger", "Durango", "Ram 1500"],
  "Subaru": ["All Models", "WRX", "BRZ", "Impreza", "Legacy", "Outback", "Forester", "Crosstrek"],
  "Lexus": ["All Models", "IS", "ES", "LS", "RC", "LC", "NX", "RX", "GX", "LX"],
  "Infiniti": ["All Models", "Q50", "Q60", "QX50", "QX60", "QX80"],
  "Acura": ["All Models", "ILX", "TLX", "RDX", "MDX", "NSX"],
  "Cadillac": ["All Models", "CT4", "CT5", "Escalade", "XT4", "XT5", "XT6"],
  "Jaguar": ["All Models", "XE", "XF", "F-Type", "E-Pace", "F-Pace", "I-Pace"],
  "Maserati": ["All Models", "Ghibli", "Quattroporte", "Levante", "MC20", "GranTurismo"],
  "Aston Martin": ["All Models", "Vantage", "DB11", "DBS", "DBX"],
  "McLaren": ["All Models", "720S", "765LT", "Artura", "GT"],
  "Bentley": ["All Models", "Continental GT", "Flying Spur", "Bentayga"],
  "Rolls-Royce": ["All Models", "Ghost", "Phantom", "Cullinan", "Spectre", "Wraith"],
  "Bugatti": ["All Models", "Chiron", "Veyron", "Divo", "Bolide"],
  "Maruti Suzuki": ["All Models", "Swift", "Baleno", "Dzire", "Ertiga", "Brezza", "Grand Vitara", "Jimny", "XL6"],
  "Tata": ["All Models", "Nexon", "Harrier", "Safari", "Punch", "Altroz", "Tiago", "Tigor"],
  "Mahindra": ["All Models", "Thar", "Scorpio", "XUV700", "XUV300", "Bolero", "XUV400"],
}

const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "bestselling", label: "Best Selling" },
]

const ratingOptions = [5, 4, 3, 2, 1]

const availabilityOptions = [
  { value: "in-stock", label: "In Stock" },
  { value: "pre-order", label: "Pre-Order" },
  { value: "coming-soon", label: "Coming Soon" },
]

const compatibilityOptions = [
  { value: "universal", label: "Universal Fit" },
  { value: "custom", label: "Custom Fit" },
  { value: "oem", label: "OEM Replacement" },
]

interface ProductFiltersProps {
  onFilterChange?: (filters: FilterState) => void
  showMobileToggle?: boolean
}

interface FilterState {
  brand: string
  model: string
  priceRange: [number, number]
  rating: number | null
  availability: string[]
  compatibility: string[]
  sortBy: string
}

function FilterContent({
  filters,
  setFilters,
  availableModels,
  activeFiltersCount,
  clearFilters,
}: {
  filters: FilterState
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>
  availableModels: string[]
  activeFiltersCount: number
  clearFilters: () => void
}) {
  const [openSections, setOpenSections] = useState({
    vehicle: true,
    price: true,
    rating: false,
    availability: false,
    compatibility: false,
  })

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <div className="space-y-4">
      {/* Clear Filters */}
      {activeFiltersCount > 0 && (
        <div className="flex items-center justify-between pb-3 border-b border-border">
          <span className="text-sm text-muted-foreground">
            {activeFiltersCount} filter{activeFiltersCount > 1 ? "s" : ""} applied
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-primary hover:text-primary/80 h-auto p-0"
          >
            Clear All
          </Button>
        </div>
      )}

      {/* Vehicle Selection */}
      <Collapsible open={openSections.vehicle} onOpenChange={() => toggleSection("vehicle")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 group">
          <span className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider text-foreground">
            Select Vehicle
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.vehicle ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 pt-2">
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground uppercase tracking-wide">Brand</Label>
            <Select
              value={filters.brand}
              onValueChange={(value) => {
                setFilters(prev => ({
                  ...prev,
                  brand: value,
                  model: "All Models"
                }))
              }}
            >
              <SelectTrigger className="bg-secondary border-border text-foreground">
                <SelectValue placeholder="Select Brand" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-[300px]">
                {Object.keys(carData).map((brand) => (
                  <SelectItem key={brand} value={brand} className="text-foreground hover:bg-secondary">
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground uppercase tracking-wide">Model</Label>
            <Select
              value={filters.model}
              onValueChange={(value) => setFilters(prev => ({ ...prev, model: value }))}
              disabled={filters.brand === "All Brands"}
            >
              <SelectTrigger className="bg-secondary border-border text-foreground disabled:opacity-50">
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border max-h-[300px]">
                {availableModels.map((model) => (
                  <SelectItem key={model} value={model} className="text-foreground hover:bg-secondary">
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Price Range */}
      <Collapsible open={openSections.price} onOpenChange={() => toggleSection("price")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t border-border group">
          <span className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider text-foreground">
            Price Range
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.price ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-4 pb-2">
          <div className="px-1">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value as [number, number] }))}
              max={50000}
              min={0}
              step={500}
              className="w-full"
            />
            <div className="flex items-center justify-between mt-3">
              <span className="text-sm text-muted-foreground">&#8377;{filters.priceRange[0].toLocaleString()}</span>
              <span className="text-sm text-muted-foreground">&#8377;{filters.priceRange[1].toLocaleString()}</span>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Rating */}
      <Collapsible open={openSections.rating} onOpenChange={() => toggleSection("rating")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t border-border group">
          <span className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider text-foreground">
            Rating
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.rating ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {ratingOptions.map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <Checkbox
                id={`rating-${rating}`}
                checked={filters.rating === rating}
                onCheckedChange={(checked) => 
                  setFilters(prev => ({ ...prev, rating: checked ? rating : null }))
                }
                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor={`rating-${rating}`} className="flex items-center gap-1 cursor-pointer text-sm text-foreground">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
                <span className="text-muted-foreground ml-1">& Up</span>
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Availability */}
      <Collapsible open={openSections.availability} onOpenChange={() => toggleSection("availability")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t border-border group">
          <span className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider text-foreground">
            Availability
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.availability ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {availabilityOptions.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Checkbox
                id={`avail-${option.value}`}
                checked={filters.availability.includes(option.value)}
                onCheckedChange={(checked) =>
                  setFilters(prev => ({
                    ...prev,
                    availability: checked
                      ? [...prev.availability, option.value]
                      : prev.availability.filter(v => v !== option.value)
                  }))
                }
                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor={`avail-${option.value}`} className="cursor-pointer text-sm text-foreground">
                {option.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      {/* Compatibility */}
      <Collapsible open={openSections.compatibility} onOpenChange={() => toggleSection("compatibility")}>
        <CollapsibleTrigger className="flex items-center justify-between w-full py-2 border-t border-border group">
          <span className="font-[family-name:var(--font-heading)] text-sm uppercase tracking-wider text-foreground">
            Compatibility
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.compatibility ? "rotate-180" : ""}`} />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-2 pt-2">
          {compatibilityOptions.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <Checkbox
                id={`compat-${option.value}`}
                checked={filters.compatibility.includes(option.value)}
                onCheckedChange={(checked) =>
                  setFilters(prev => ({
                    ...prev,
                    compatibility: checked
                      ? [...prev.compatibility, option.value]
                      : prev.compatibility.filter(v => v !== option.value)
                  }))
                }
                className="border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <Label htmlFor={`compat-${option.value}`} className="cursor-pointer text-sm text-foreground">
                {option.label}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}

export default function ProductFilters({ onFilterChange, showMobileToggle = true }: ProductFiltersProps) {
  const [filters, setFilters] = useState<FilterState>({
    brand: "All Brands",
    model: "All Models",
    priceRange: [0, 50000],
    rating: null,
    availability: [],
    compatibility: [],
    sortBy: "featured",
  })

  const [isOpen, setIsOpen] = useState(false)

  const availableModels = carData[filters.brand] || ["All Models"]

  const activeFiltersCount = [
    filters.brand !== "All Brands",
    filters.model !== "All Models",
    filters.priceRange[0] > 0 || filters.priceRange[1] < 50000,
    filters.rating !== null,
    filters.availability.length > 0,
    filters.compatibility.length > 0,
  ].filter(Boolean).length

  const clearFilters = () => {
    setFilters({
      brand: "All Brands",
      model: "All Models",
      priceRange: [0, 50000],
      rating: null,
      availability: [],
      compatibility: [],
      sortBy: filters.sortBy,
    })
  }

  useEffect(() => {
    onFilterChange?.(filters)
  }, [filters, onFilterChange])

  return (
    <div className="w-full">
      {/* Top Bar with Sort and Mobile Filter Toggle */}
      <div className="flex items-center justify-between gap-4 mb-6 p-4 bg-card/50 border border-border rounded-lg">
        {/* Active Filter Tags */}
        <div className="hidden md:flex items-center gap-2 flex-wrap flex-1">
          {filters.brand !== "All Brands" && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 gap-1">
              {filters.brand}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setFilters(prev => ({ ...prev, brand: "All Brands", model: "All Models" }))}
              />
            </Badge>
          )}
          {filters.model !== "All Models" && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 gap-1">
              {filters.model}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setFilters(prev => ({ ...prev, model: "All Models" }))}
              />
            </Badge>
          )}
          {(filters.priceRange[0] > 0 || filters.priceRange[1] < 50000) && (
            <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 gap-1">
              &#8377;{filters.priceRange[0].toLocaleString()} - &#8377;{filters.priceRange[1].toLocaleString()}
              <X
                className="w-3 h-3 cursor-pointer"
                onClick={() => setFilters(prev => ({ ...prev, priceRange: [0, 50000] }))}
              />
            </Badge>
          )}
        </div>

        {/* Mobile Filter Button */}
        {showMobileToggle && (
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="md:hidden border-border text-foreground gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filters
                {activeFiltersCount > 0 && (
                  <Badge className="bg-primary text-primary-foreground ml-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background border-border w-[300px] overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-[family-name:var(--font-heading)] text-foreground uppercase tracking-wider">
                  Filters
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6">
                <FilterContent
                  filters={filters}
                  setFilters={setFilters}
                  availableModels={availableModels}
                  activeFiltersCount={activeFiltersCount}
                  clearFilters={clearFilters}
                />
              </div>
            </SheetContent>
          </Sheet>
        )}

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
          <Select
            value={filters.sortBy}
            onValueChange={(value) => setFilters(prev => ({ ...prev, sortBy: value }))}
          >
            <SelectTrigger className="w-[160px] bg-secondary border-border text-foreground">
              <SelectValue />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value} className="text-foreground hover:bg-secondary">
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Desktop Sidebar Filters */}
      <div className="hidden md:block">
        <FilterContent
          filters={filters}
          setFilters={setFilters}
          availableModels={availableModels}
          activeFiltersCount={activeFiltersCount}
          clearFilters={clearFilters}
        />
      </div>
    </div>
  )
}

export { carData, sortOptions }
export type { FilterState }
