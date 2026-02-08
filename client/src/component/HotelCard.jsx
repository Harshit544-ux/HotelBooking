import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

function HotelCard({ room, index }) {
  return (
    <Link
      to={'/rooms/' + room._id}
      onClick={() => window.scrollTo(0, 0)}
      key={room._id}
      className="block max-w-70"
    >
      {/* Image + Badge Wrapper */}
      <div
        className="relative w-full rounded-xl overflow-hidden bg-white
        text-gray-500/90 shadow-[0px_4px_4px_rgb(0,0,0,0.5)]"
      >
        <img
          src={room.images[0]}
          alt={room.hotel.name}
          className="w-full h-48 object-cover"
        />

        {/* Best Seller Badge */}
        {index % 2 === 0 && (
          <p
            className="absolute top-3 left-3 px-3 py-1 text-xs
            bg-white text-gray-800 font-medium rounded-full shadow"
          >
             Best Seller
          </p>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 pt-5">
        <div className="flex items-center justify-between">
          <p className="font-open-sans text-xl font-medium text-gray-800">
            {room.hotel.name}
          </p>
        </div>

        <div className="flex items-center gap-1 mt-1">
          <img src={assets.starIconFilled} alt="star-icon" className="h-4" />
          <span>4.5</span>
        </div>

        <div className="flex items-center gap-1 mt-1 text-sm">
          <img src={assets.locationIcon} alt="location-icon" className="h-4" />
          <span>{room.hotel.address}</span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p>
            <span className="text-xl text-gray-800">
              ${room.pricePerNight}/night
            </span>
          </p>

          <button
            className="px-4 py-2 font-medium border text-sm border-gray-300
            rounded hover:bg-gray-50 transition-all cursor-pointer"
          >
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default HotelCard
