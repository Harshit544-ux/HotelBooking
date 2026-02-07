
import React from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/StarRating';

function AllRooms() {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/rooms/${id}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className='mt-2 flex flex-col-reverse lg:flex-row items-start
    justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      
      <div>
        {/* Heading */}
        <div className='flex flex-col items-start text-left'>
          <h1 className='font-open-sans text-4xl md:text-[40px]'>Hotel Rooms</h1>
          <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>
            Take advantage of our limited-time offers and special packages to enhance
            your stay and create unforgettable memories
          </p>
        </div>

        {/* Rooms List */}
        {roomsDummyData.map((room) => (
          <div key={room._id} className='flex flex-col md:flex-row gap-6 mt-10 mb-10'>
            
            <img
              onClick={() => handleNavigate(room._id)}
              src={room.images[0]}
              alt='hotel'
              title='View Room Details'
              className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'
            />

            <div className='md:w-1/2 flex flex-col gap-2'>
              <p className='text-gray-500'>{room.hotel.city}</p>
              <p
                onClick={() => handleNavigate(room._id)}
                className='text-gray-800 text-3xl font-open-sans cursor-pointer'
              >
                {room.hotel.name}
              </p>

              <div className='flex items-center'>
                <StarRating rating={room.rating} />
                <p className='ml-2'>200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                 <img src={assets.locationIcon} alt='location-icon'/>
                 <span>{room.hotel.address}</span>
              </div>
              {/* Room Amenties */}
              <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                  {room.amenities.map((item,index)=>{
                    return(
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                        <img src={facilityIcons[item]} alt={item}
                        className='w-5 h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                    )
                  })}
              </div>

              {/* Room Price per Night */}
              <p className='text-xl font-medium text-gray-700'>${room.pricePerNight} /night</p>
            </div>

          </div>
        ))}
      </div>

     
    </div>
  )
}

export default AllRooms;
