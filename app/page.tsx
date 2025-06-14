import Link from "next/link"
import { Fuel, Car, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuickInfoBar from "@/components/quick-info-bar"
import FuelPriceCard from "@/components/fuel-price-card"
import ServiceCard from "@/components/service-card"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">FuelMaster Petrol Station</h1>
              <p className="text-xl mb-6">Quality fuel and exceptional service for your journey</p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-800 hover:bg-gray-100">
                  <Link href="/fuel-prices">View Fuel Prices</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="/contact">Find Us</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/images/petrol-station-hero.jpg"
                alt="FuelMaster Petrol Station"
                className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                width={600}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <QuickInfoBar />

      {/* Fuel Prices Preview */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Today's Fuel Prices</h2>
            <p className="text-gray-600">Updated daily at 6:00 AM</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FuelPriceCard type="Regular" price="3.45" icon="regular" color="bg-green-100 text-green-700" />
            <FuelPriceCard type="Premium" price="3.89" icon="premium" color="bg-blue-100 text-blue-700" />
            <FuelPriceCard type="Diesel" price="3.65" icon="diesel" color="bg-yellow-100 text-yellow-700" />
            <FuelPriceCard type="E85" price="2.99" icon="e85" color="bg-purple-100 text-purple-700" />
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/fuel-prices">View All Fuel Options</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Services</h2>
            <p className="text-gray-600">More than just a petrol station</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Car Wash"
              description="Automatic and hand wash options available to keep your vehicle clean."
              icon={<Car className="h-8 w-8" />}
            />
            <ServiceCard
              title="Convenience Store"
              description="Grab snacks, drinks, and essentials 24/7 at our well-stocked store."
              icon={<ShoppingBag className="h-8 w-8" />}
            />
            <ServiceCard
              title="EV Charging"
              description="Fast charging stations for electric vehicles."
              icon={<Fuel className="h-8 w-8" />}
            />
          </div>
          <div className="text-center mt-8">
            <Button asChild>
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-blue-600 text-white rounded-lg p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Join Our Membership Program</h2>
                <p className="text-lg mb-6">
                  Get exclusive discounts on fuel, free car washes, and special promotions when you join our membership
                  program.
                </p>
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link href="/services">Learn More</Link>
                </Button>
              </div>
              <div className="hidden md:block">
                <img
                  src="/images/membership-card.jpg"
                  alt="FuelMaster Membership Card"
                  className="rounded-lg shadow-lg object-cover h-[300px] w-full"
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
