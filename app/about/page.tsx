import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Award, Users, Clock, Shield } from "lucide-react"
import QuickInfoBar from "@/components/quick-info-bar"

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-blue-600 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-bold">About FuelMaster</h1>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <QuickInfoBar />

      {/* Main Content */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Our Story Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 1995, FuelMaster has been serving the community with quality fuel and exceptional service
                  for over 25 years. What started as a small family-owned gas station has grown into a trusted name in
                  the fuel industry.
                </p>
                <p className="text-gray-600 mb-4">
                  Our commitment to quality, customer satisfaction, and environmental responsibility has been the
                  cornerstone of our business philosophy. We continuously invest in the latest technology and training
                  to ensure we provide the best service possible.
                </p>
                <p className="text-gray-600">
                  Today, FuelMaster operates multiple locations across the region, each maintaining the same standards
                  of excellence and community involvement that have defined our brand since day one.
                </p>
              </div>
              <div className="order-first lg:order-last">
                <img
                  src="/images/petrol-station-history.jpg"
                  alt="FuelMaster history"
                  className="rounded-lg shadow-lg object-cover h-[400px] w-full"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We provide only the highest quality fuels that meet or exceed industry standards to ensure optimal
                  vehicle performance.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Community</h3>
                <p className="text-gray-600">
                  We are committed to giving back to the communities we serve through various initiatives and support
                  programs.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Our 24/7 operation ensures that you can count on us whenever you need to refuel, day or night.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 text-blue-700 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Safety</h3>
                <p className="text-gray-600">
                  We maintain the highest safety standards in all our operations to protect our customers, staff, and
                  the environment.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/images/team-ceo.jpg"
                  alt="John Smith - CEO"
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold mb-1">John Smith</h3>
                <p className="text-blue-600 mb-3">CEO & Founder</p>
                <p className="text-gray-600">
                  With over 30 years in the fuel industry, John's vision and leadership have been instrumental in
                  FuelMaster's growth and success.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/images/team-operations.jpg"
                  alt="Sarah Johnson - Operations Director"
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                <p className="text-blue-600 mb-3">Operations Director</p>
                <p className="text-gray-600">
                  Sarah ensures that all FuelMaster locations maintain our high standards of service and operational
                  excellence.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <img
                  src="/images/team-technical.jpg"
                  alt="Michael Chen - Technical Director"
                  className="rounded-full w-32 h-32 object-cover mx-auto mb-4"
                  width={200}
                  height={200}
                />
                <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                <p className="text-blue-600 mb-3">Technical Director</p>
                <p className="text-gray-600">
                  Michael leads our technical innovations, ensuring we stay at the forefront of fuel technology and
                  environmental standards.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
}
