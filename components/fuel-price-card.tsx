import { Fuel } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface FuelPriceCardProps {
  type: string
  price: string
  icon: string
  color: string
}

export default function FuelPriceCard({ type, price, icon, color }: FuelPriceCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className={`p-4 ${color}`}>
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-lg">{type}</h3>
          <Fuel className="h-6 w-6" />
        </div>
      </div>
      <CardContent className="p-6 text-center">
        <div className="text-3xl font-bold">${price}</div>
        <p className="text-gray-500 text-sm mt-2">per gallon</p>
      </CardContent>
    </Card>
  )
}
