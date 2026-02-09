import React, { useState } from 'react'
import Title from "../component/Title"
import { userBookingsDummyData } from '../assets/assets'

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

                 
                {booking.map((book) => (
        <div
          key={book._id}
          className="grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr]
          w-full border-b border-gray-300 py-6 first:border-t"
        >
          {/* Hotel Details */}
          <div>
            <img
              src={book.room.images[0]}
              alt="hotel"
              className="md:w-44 rounded shadow object-cover"
            />
          </div>

          {/* Date & Timings */}
          <div>
            <p>{book.checkIn}</p>
            <p>{book.checkOut}</p>
          </div>

          {/* Payment Status */}
          <div>
            <p>{book.paymentStatus}</p>
          </div>
        </div>
      ))}

                 
            </div>
        </div>
    )
}

export default MyBookings