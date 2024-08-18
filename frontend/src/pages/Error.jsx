import React from 'react'

const Error = ({error}) => {
  return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center p-6 bg-white shadow-md rounded-md">
              <svg
                  className="h-8 w-8 text-red-500 mx-auto mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
              >
                  <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 10V3l-1.55 1.55M3 12l7-7 3 3 7-7m0 0l-7 7m-4 2v5h-4v-4l-5-5"
                  />
              </svg>
              <p className="text-lg font-medium text-gray-700">Error: {error}</p>
          </div>
      </div>
  )
}

export default Error