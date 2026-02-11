import React, { useState } from 'react'
import { assets, dashboardDummyData } from '../../assets/assets'
import Title from '../../component/Title'

const Dashboard = () => {
  const [dashboardData] = useState(dashboardDummyData)

  return (
    <div className="p-6 max-w-7xl">
     
      {/* Page Title */}
      <Title 
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle="Monitor your room listings, track bookings and analyze revenue — all in one place. Stay updated with real-time insights to ensure smooth operations."
      />

      {/* Stats Cards */}
      <div className="flex flex-wrap gap-5 my-8">

        {/* Total Bookings */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4 p-6 min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <img src={assets.totalBookingIcon} alt="" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Bookings</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-blue-50 border border-blue-100 rounded-2xl flex items-center gap-4 p-6 min-w-[240px] shadow-sm hover:shadow-md transition-shadow">
          <div className="bg-white p-3 rounded-xl shadow-sm">
            <img src={assets.totalRevenueIcon} alt="" className="w-8 h-8" />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium">Total Revenue</p>
            <p className="text-3xl font-bold text-gray-800 mt-1">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>

      </div>

      {/* Recent Bookings Section with Y-axis Scroll */}
      <div className="bg-white shadow-md rounded-2xl border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Recent Bookings</h2>

        {/* Table Container with Y-axis Scroll */}
        <div className="overflow-y-auto max-h-[500px] rounded-lg border border-gray-200">
          <table className="w-full text-sm">
            
            {/* Table Head - Sticky */}
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  User Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Room Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Payment Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-gray-200 bg-white">
              {dashboardData?.bookings?.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50 transition-colors">

                  <td className="px-6 py-5 align-middle font-medium text-gray-900">
                    {booking.user?.username}
                  </td>

                  <td className="px-6 py-5 align-middle text-gray-600">
                    {booking.room?.roomType}
                  </td>

                  <td className="px-6 py-5 align-middle font-semibold text-gray-900">
                    ${booking.totalPrice}
                  </td>

                  <td className="px-6 py-5 align-middle">
                    <span
                      className={`px-4 py-2 text-xs rounded-full font-semibold inline-flex items-center justify-center
                        ${
                          booking.isPaid
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                    >
                      {booking.isPaid ? "Completed" : "Pending"}
                    </span>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard