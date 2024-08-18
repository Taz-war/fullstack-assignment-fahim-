import React from 'react'

const Loader = () => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center p-6 bg-white shadow-md rounded-md">
              <svg
                  className="animate-spin h-8 w-8 text-blue-500 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v4m0 4v4m-8-8h4m4 0h4"
                  />
              </svg>
              <p className="text-lg font-medium text-gray-700">Loading...</p>
          </div>
      </div>
  )
}

export default Loader