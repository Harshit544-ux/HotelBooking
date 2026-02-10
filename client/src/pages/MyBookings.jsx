import React, { useState } from 'react'
import Title from "../component/Title"
import { assets, userBookingsDummyData } from '../assets/assets'

function MyBookings() {

    const [booking, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-25 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Bookings' subTitle='Easily manage your past , current and 
             upcoming hotel reservations in one place. Place your trips seamlessly with
             just a few clicks ' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b
                  border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Hotel</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {/* rendering the list of my booking */}
                {booking.map((book) => (
                    <div
                        key={book._id}
                        className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr]
                        w-full border-b border-gray-300 py-6 first:border-t"
                    >
                        {/* Hotel Details */}
                        <div className="flex flex-col md:flex-row gap-4">
                            {/* Hotel Image */}
                            <img
                                src={book.room.images[0]}
                                alt="hotel"
                                className="md:w-44 w-full rounded shadow object-cover"
                            />

                            {/* Hotel Info (VERTICAL STACK) */}
                            <div className="flex flex-col gap-2">
                                <p className="font-open-sans text-2xl">
                                    {book.hotel.name}
                                    <span className="font-inter text-sm">
                                        ({book.room.roomType})
                                    </span>
                                </p>

                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <img
                                        src={assets.locationIcon}
                                        alt="location-icon"
                                        className="w-4 h-4"
                                    />
                                    <span>{book.hotel.address}</span>
                                </div>

                                <div className="flex items-center gap-1 text-sm text-gray-500">
                                    <img
                                        src={assets.guestsIcon}
                                        alt="guests-icon"
                                        className="w-4 h-4"
                                    />
                                    <span>Guests: {book.guests}</span>
                                </div>

                                <p className="text-base font-medium">
                                    Total: ${book.totalPrice}
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-8 mt-3">

                            {/* Check-in */}
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium">Check-in</p>
                                <p className="text-gray-500 text-sm">
                                    {new Date(book.checkInDate).toLocaleDateString()}
                                </p>
                            </div>

                            {/* Check-out */}
                            <div className="flex flex-col gap-1">
                                <p className="text-sm font-medium">Check-out</p>
                                <p className="text-gray-500 text-sm">
                                    {new Date(book.checkOutDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className="flex flex-col items-start justify-center pt-3">
                            <div className="flex items-center gap-2">

                                {/* Status Dot */}
                                <div
                                    className={`h-3 w-3 rounded-full ${book.isPaid ? "bg-green-500" : "bg-red-500"
                                        }`}
                                />

                                {/* Paymen Status */}
                                <p
                                    className={`text-sm font-medium ${book.isPaid ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {book.isPaid ? "Paid" : "Unpaid"}
                                </p>

                            </div>
                            {!book.isPaid && (
                                <button className="px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full 
                                 hover:bg-gray-50 transition-all cursor-pointer">
                                    Pay Now
                                </button>
                            )}
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default MyBookings