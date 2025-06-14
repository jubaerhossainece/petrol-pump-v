import { Clock, MapPin, Phone, CreditCard } from "lucide-react"

export default function QuickInfoBar() {
  return (
    <section className="bg-gray-100 py-4 px-4 md:px-6 lg:px-8 border-b">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Open 24/7</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-blue-600" />
            <span>123 Fuel Street, Cityville</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-blue-600" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="h-5 w-5 text-blue-600" />
            <span>All payment methods accepted</span>
          </div>
        </div>
      </div>
    </section>
  )
}
