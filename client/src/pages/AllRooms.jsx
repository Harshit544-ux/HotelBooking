import React, { useState } from 'react'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../component/StarRating';

// checkbox
const CheckBox = ({ label, selected = false, onchange = () => { } }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">

            <input
                type="checkbox"
                checked={selected}
                onChange={(e) => onchange(e.target.checked, label)}
            />

            <span className="font-light select-none">{label}</span>
        </label>
    )
}

// RadioButton
const RadioButton = ({ label, selected = false, onchange = () => { } }) => {
    return (
        <label className="flex items-center gap-3 cursor-pointer mt-2 text-sm">

            <input
                type="radio" name='sortOption'
                checked={selected}
                onChange={() => onchange(label)}
            />

            <span className="font-light select-none">{label}</span>
        </label>
    )
}


//AllRooms
function AllRooms() {
    const navigate = useNavigate();
    const [openFilters, setOpenFilters] = useState(false);
    const roomTypes = [
        "Single Bed",
        "Double Bed",
        "Luxury Room",
        "Family Suite",
    ];

    const priceRanges = [
        "0 to 500",
        "500 to 1000",
        "1000 to 2000",
        "2000 to 3000",
    ];

    const sortOptions = [
        "Price Low to High",
        "Price High to Low",
        "Newest First",
    ];

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
                                <img src={assets.locationIcon} alt='location-icon' />
                                <span>{room.hotel.address}</span>
                            </div>
                            {/* Room Amenties */}
                            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                                {room.amenities.map((item, index) => {
                                    return (
                                        <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'>
                                            <img src={facilityIcons[item]} alt={item}
                                                className='w-5 h-5' />
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

            {/* Filters */}
            <div className='bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16'>
                <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300
                    ${openFilters && "border-b"}`}>
                    <p className='text-base font-medium text-gray-800'>FILTERS</p>
                    <div className='cursor-pointer text-xs'>
                        <span onClick={() => setOpenFilters(!openFilters)} className='lg:hidden'>
                            {openFilters ? 'HIDE' : 'SHOW'}
                        </span>
                        <span className='hidden lg:black'>CLEAR</span>
                    </div>
                </div>

                <div className={`${openFilters ? "h-auto" : "h-0 lg:h-auto overflow-hidden transition-all duration-700"}`}>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Popular filters</p>
                        {/* Room Types */}
                        <p className='font-medium text-gray-800 pb-2'>Room Type</p>
                        {roomTypes.map((room, index) => (
                            <CheckBox
                                key={index}
                                label={room}
                            />
                        ))}

                        {/* Price Range */}
                        <p className='font-medium text-gray-800 pt-5 pb-2'>Price Range</p>
                        {priceRanges.map((range, index) => (
                            <CheckBox
                                key={index}
                                label={`$ ${range}`}
                            />
                        ))}

                        {/* Sort */}
                        <p className='font-medium text-gray-800 pt-5 pb-2'>Sort By</p>
                        {sortOptions.map((option, index) => (
                            <RadioButton
                                key={index}
                                label={option}
                            />
                        ))}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default AllRooms;
