import { Fuel } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import QuickInfoBar from "@/components/quick-info-bar"

export default function FuelPricesPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl md:text-4xl font-bold">Fuel Prices</h1>
          <p className="mt-2">Current prices for all fuel types at FuelMaster</p>
        </div>
      </section>

      <QuickInfoBar />

      {/* Main Fuel Prices Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-2">Today's Fuel Prices</h2>
            <p className="text-gray-600">Updated daily at 6:00 AM | Last updated: June 14, 2025</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="text-xl font-bold mb-4">Gasoline</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="p-4 bg-green-100 text-green-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Regular</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.45</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Octane Rating:</span> 87
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Contains:</span> Up to 10% ethanol
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-blue-100 text-blue-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Mid-Grade</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.65</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Octane Rating:</span> 89
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Contains:</span> Up to 10% ethanol
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-blue-100 text-blue-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Premium</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.89</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Octane Rating:</span> 91-93
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Contains:</span> Up to 10% ethanol
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-purple-100 text-purple-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">E85 Flex Fuel</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$2.99</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Ethanol Content:</span> 51-83%
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">For:</span> Flex-fuel vehicles only
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Diesel & Alternative Fuels</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="overflow-hidden">
                  <div className="p-4 bg-yellow-100 text-yellow-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Diesel</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.65</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Type:</span> Ultra-Low Sulfur Diesel
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Biodiesel Blend:</span> Up to B5
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-green-100 text-green-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Biodiesel B20</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.55</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Biodiesel Content:</span> 20%
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">For:</span> Compatible diesel engines
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-blue-100 text-blue-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">DEF</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$3.99</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Type:</span> Diesel Exhaust Fluid
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">For:</span> SCR-equipped diesel vehicles
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="overflow-hidden">
                  <div className="p-4 bg-green-100 text-green-700">
                    <div className="flex justify-between items-center">
                      <h4 className="font-bold text-lg">Propane</h4>
                      <Fuel className="h-6 w-6" />
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-center">$2.75</div>
                    <p className="text-gray-500 text-sm mt-2 text-center">per gallon</p>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Type:</span> HD-5 Propane
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">For:</span> Propane vehicles & tanks
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Fuel Station Image */}
          <div className="mb-16">
            <img
              src="/images/fuel-station-pumps.jpg"
              alt="FuelMaster Fuel Pumps"
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </div>

          {/* EV Charging Rates */}
          <div className="mb-16">
            <h3 className="text-xl font-bold mb-4">EV Charging Rates</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="border-b md:border-b-0 md:border-r pb-4 md:pb-0 md:pr-6">
                  <h4 className="font-bold text-lg mb-2">Level 2 Charging</h4>
                  <div className="text-2xl font-bold">$0.20/kWh</div>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Power:</span> 7.2 kW
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Connectors:</span> J1772
                  </p>
                </div>
                <div className="border-b md:border-b-0 md:border-r py-4 md:py-0 md:px-6">
                  <h4 className="font-bold text-lg mb-2">DC Fast Charging</h4>
                  <div className="text-2xl font-bold">$0.30/kWh</div>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Power:</span> Up to 50 kW
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Connectors:</span> CCS, CHAdeMO
                  </p>
                </div>
                <div className="pt-4 md:pt-0 md:pl-6">
                  <h4 className="font-bold text-lg mb-2">Ultra-Fast Charging</h4>
                  <div className="text-2xl font-bold">$0.40/kWh</div>
                  <p className="text-gray-600 mt-2">
                    <span className="font-medium">Power:</span> Up to 150 kW
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Connectors:</span> CCS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
