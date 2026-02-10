import React from 'react'
import { assets, cities } from '../assets/assets'

function HotelReg() {
  return (
    <div className='fixed inset-0 z-100 flex items-center justify-center bg-black/70'>
      <form className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        
        {/* Left Image */}
        <img
          src={assets.regImage}
          alt='hotel-reg'
          className='w-1/2 rounded-xl hidden md:block'
        />

        {/* Right Form */}
        <div className='relative flex flex-col items-start md:w-1/2 p-8 md:p-10'>
          
          {/* Close */}
          <img
            src={assets.closeIcon}
            alt='close-icon'
            className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
          />

          <p className='text-2xl font-semibold mt-6 mb-2'>
            Register Your Hotel
          </p>

          {/* Hotel Name */}
          <div className='w-full mt-4'>
            <label htmlFor='hotelName' className='font-medium text-gray-500'>
              Hotel Name
            </label>
            <input
              type='text'
              id='hotelName'
              placeholder='Type here'
              className='w-full rounded border border-gray-300 px-3 py-2.5 mt-1 outline-indigo-500'
              required
            />
          </div>

          {/* Phone */}
          <div className='w-full mt-4'>
            <label htmlFor='contact' className='font-medium text-gray-500'>
              Phone
            </label>
            <input
              type='text'
              id='contact'
              placeholder='Type here'
              className='w-full rounded border border-gray-300 px-3 py-2.5 mt-1 outline-indigo-500'
              required
            />
          </div>

          {/* Address */}
          <div className='w-full mt-4'>
            <label htmlFor='address' className='font-medium text-gray-500'>
              Address
            </label>
            <input
              type='text'
              id='address'
              placeholder='Type here'
              className='w-full rounded border border-gray-300 px-3 py-2.5 mt-1 outline-indigo-500'
              required
            />
          </div>

          {/* City Select */}
          <div className='w-full mt-4 max-w-60'>
            <label htmlFor='city' className='font-medium text-gray-500'>
              City
            </label>
            <select
              id='city'
              className='w-full rounded border border-gray-300 px-3 py-2.5 mt-1 outline-indigo-500 font-light'
              required
            >
              <option value=''>Select City</option>
              {cities.map((city, index) => (
                <option value={city} key={index}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* Button */}
          <button
            type='button'
            className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2 cursor-pointer rounded-md mt-6'
          >
            Register
          </button>

        </div>
      </form>
    </div>
  )
}

export default HotelReg
