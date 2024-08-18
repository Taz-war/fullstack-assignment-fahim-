import React from 'react'

const Card = ({ title, description }) => {
  return (
      <div className=" mx-auto bg-[#F4F6F8] border border-gray-200 rounded-xl shadow-sm w-full h-40">
          <div className=' pt-1 px-3 mb-2'>
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          </div>
          <hr />
          {/* <div className="w-full border-t border-gray-300 mb-4"></div> Divider */}
          <div className=' p-3'>
          <p className="text-gray-600">
              {description}
          </p>
          </div>
      </div>
  )
}

export default Card