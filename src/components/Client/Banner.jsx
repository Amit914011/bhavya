import React from 'react';
import bannerVideo from '../../assets/bhavya/bhavyabanner3.mp4'; // Path to your video file

export default function Banner() {
  return (
    <div className="flex justify-center items-center w-full">
      {/* Video Container */}
      <div className="relative w-full h-64 sm:h-[400px] md:h-[400px] lg:h-[700px] xl:h-[700px] overflow-hidden"> 
        {/* Adjust height for different screen sizes */}
        <video
          src={bannerVideo}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
