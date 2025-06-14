"use client"

import { useEffect, useRef } from "react"

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // This is a placeholder for an actual map implementation
    // In a real application, you would integrate with Google Maps, Mapbox, etc.
    if (mapRef.current) {
      const canvas = document.createElement("canvas")
      canvas.width = mapRef.current.clientWidth
      canvas.height = 400
      mapRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      if (ctx) {
        // Draw a placeholder map
        ctx.fillStyle = "#e5e7eb"
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw some roads
        ctx.strokeStyle = "#9ca3af"
        ctx.lineWidth = 6

        // Main road
        ctx.beginPath()
        ctx.moveTo(0, canvas.height / 2)
        ctx.lineTo(canvas.width, canvas.height / 2)
        ctx.stroke()

        // Cross road
        ctx.beginPath()
        ctx.moveTo(canvas.width / 2, 0)
        ctx.lineTo(canvas.width / 2, canvas.height)
        ctx.stroke()

        // Petrol station marker
        ctx.fillStyle = "#2563eb"
        ctx.beginPath()
        ctx.arc(canvas.width / 2, canvas.height / 2, 15, 0, 2 * Math.PI)
        ctx.fill()

        // Label
        ctx.fillStyle = "#000000"
        ctx.font = "14px Arial"
        ctx.textAlign = "center"
        ctx.fillText("FuelMaster", canvas.width / 2, canvas.height / 2 - 25)
      }
    }

    return () => {
      if (mapRef.current) {
        while (mapRef.current.firstChild) {
          mapRef.current.removeChild(mapRef.current.firstChild)
        }
      }
    }
  }, [])

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] bg-gray-100 rounded-lg shadow-md overflow-hidden"
      aria-label="Map showing the location of FuelMaster Petrol Station"
    ></div>
  )
}
