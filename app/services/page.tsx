import { Car, ShoppingBag, Fuel, CreditCard, Wrench, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import QuickInfoBar from "@/components/quick-info-bar"

export default function ServicesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold">Our Services</h1>
          <p className="mt-2">More than just a petrol station</p>
        </div>
      </section>

      <QuickInfoBar />

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Service Station</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              At FuelMaster, we offer more than just fuel. Our comprehensive services are designed to meet all your
              vehicle and convenience needs in one stop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Wash */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <Car className="h-6 w-6" />
                  </div>
                  <CardTitle>Car Wash</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-carwash.jpeg"
                  alt="Car Wash Service"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">
                  Keep your vehicle looking its best with our state-of-the-art car wash services.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Automatic Wash
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Hand Wash & Detailing
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Interior Cleaning
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Waxing & Polishing
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="font-medium">Starting at $8.99</p>
                </div>
              </CardContent>
            </Card>

            {/* Convenience Store */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <CardTitle>Convenience Store</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-store.jpg"
                  alt="Convenience Store"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">
                  Our well-stocked store offers everything you need, from snacks to essentials.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Fresh Coffee & Beverages
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Snacks & Groceries
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Automotive Supplies
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Personal Care Items
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="font-medium">Open 24/7</p>
                </div>
              </CardContent>
            </Card>

            {/* EV Charging */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <Fuel className="h-6 w-6" />
                  </div>
                  <CardTitle>EV Charging</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-ev-charging.jpg"
                  alt="EV Charging Station"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">
                  Fast charging stations for all types of electric vehicles.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Level 2 Charging
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    DC Fast Charging
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Multiple Connector Types
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Mobile App Payment
                  </li>
                </ul>
                <div className="mt-6">
                  <p className="font-medium">From $0.30/kWh</p>
                </div>
              </CardContent>
            </Card>

            {/* Additional services */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <CardTitle>ATM Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-atm.jpg"
                  alt="ATM Service"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">24/7 access to cash with our on-site ATM.</CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Cash Withdrawals
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Balance Inquiries
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Multiple Networks Supported
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <Wrench className="h-6 w-6" />
                  </div>
                  <CardTitle>Auto Maintenance</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-maintenance.jpeg"
                  alt="Auto Maintenance"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">
                  Basic maintenance services to keep your vehicle running smoothly.
                </CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Tire Pressure Check
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Fluid Top-ups
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Windshield Cleaning
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                    <Coffee className="h-6 w-6" />
                  </div>
                  <CardTitle>Café</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/service-cafe.jpeg"
                  alt="Café"
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <CardDescription className="mb-4">Enjoy fresh coffee and food at our on-site café.</CardDescription>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Specialty Coffee
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Fresh Sandwiches
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Pastries & Snacks
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Car Wash Packages */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Car Wash Packages</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Choose the perfect wash package for your vehicle's needs.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Wash */}
            <Card className="border-blue-200">
              <img
                src="/images/carwash-basic.jpeg"
                alt="Basic Car Wash"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center">Basic Wash</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$8.99</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Exterior Wash
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Spot-Free Rinse
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Air Dry
                  </li>
                  <li className="flex items-center text-gray-400">
                    <span className="bg-gray-100 p-1 rounded-full mr-2">✗</span>
                    Wheel Cleaning
                  </li>
                </ul>
                <Button className="w-full mt-6">Select Package</Button>
              </CardContent>
            </Card>

            {/* Premium Wash */}
            <Card className="border-blue-400 shadow-lg">
              <div className="bg-blue-600 text-white text-center py-2 text-sm font-medium">MOST POPULAR</div>
              <img
                src="/images/carwash-premium.jpg"
                alt="Premium Car Wash"
                className="w-full h-48 object-cover"
              />
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center">Premium Wash</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$12.99</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Exterior Wash
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Spot-Free Rinse
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Air Dry
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Wheel Cleaning
                  </li>
                </ul>
                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">Select Package</Button>
              </CardContent>
            </Card>

            {/* Deluxe Wash */}
            <Card className="border-blue-200">
              <img
                src="/images/carwash-deluxe.jpeg"
                alt="Deluxe Car Wash"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-center">Deluxe Wash</CardTitle>
                <div className="text-center">
                  <span className="text-3xl font-bold">$16.99</span>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Exterior Wash
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Hand Dry
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Triple-Coat Wax
                  </li>
                  <li className="flex items-center">
                    <span className="bg-blue-100 text-blue-700 p-1 rounded-full mr-2">✓</span>
                    Interior Vacuum
                  </li>
                </ul>
                <Button className="w-full mt-6">Select Package</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
