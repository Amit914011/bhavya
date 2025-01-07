import React from 'react';
import img from "../../assets/doctor.jpg";
import img1 from "../../assets/doctor1.jpg";

export default function OurDoctors() {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 py-8 bg-gradient-to-r from-green-100 to-green-50">
      {/* Left side: Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src={img} // Replace with the actual path or URL of your image
          alt="Doctor"
          className="w-1/2 md:w-3/4 lg:w-2/3 rounded-lg" // Adjusted image width
        />
      </div>

      {/* Right side: Text content */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl md:text-[100px] font-semibold text-gray-800 mb-3">Dr. Mona Patel</h2>
        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mt-[50px]">
          (NDDY, BNYS, M.D., Diet Consultant)
        </h3>
      </div>
    </div>

    {/* Second Section */}
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4 md:px-16 py-8 bg-gradient-to-r from-green-100 to-green-50">
      {/* Left side: Image */}
      <div className="flex justify-center md:w-1/2">
        <img
          src={img1} // Replace with the actual path or URL of your image
          alt="Doctor"
          className="w-1/2 md:w-3/4 lg:w-2/3 rounded-lg" // Adjusted image width
        />
      </div>

      {/* Right side: Text content */}
      <div className="md:w-1/2 mt-6 md:mt-0 text-center md:text-left">
        <h2 className="text-4xl md:text-[100px] font-semibold text-gray-800 mb-3">Dr Yash</h2>
        <h3 className="text-2xl md:text-3xl text-gray-700 font-medium mt-[50px]">
          ((BNYS, M.D., Nutrition Consultant, N.D.))
        </h3>
      </div>
    </div>
    </>
  );
}
