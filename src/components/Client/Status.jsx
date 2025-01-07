import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Status() {
  // Slider settings for a responsive and permanent sliding effect
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000, // Increase speed for a smoother effect
    slidesToShow: 5, // Show more slides on large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Continuous scrolling
    cssEase: 'linear', // For a smooth, continuous sliding effect
    arrows: false, // Removed side navigation arrows
    responsive: [
      {
        breakpoint: 1024, // For medium screens (tablets)
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768, // For small screens (mobiles)
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  // Updated array of text content to slide
  const content = [
    "Organic Product",
    "100% Natural Ingredients",
    "Cruelty-Free",
    "Plant-Based Power",
    "Preservative-Free Health",
    "Traditional & Authentic",
  ];
  
  return (
    <div className="py-2 px-4 md:px-20 -mt-[150px] bg-green-100"> {/* Tailwind class for light green background */}
      <Slider {...settings} className="mx-4">
        {content.map((item, index) => (
          <div key={index} className="flex justify-center items-center rounded-lg p-4 mx-2"> {/* Removed bg-white */}
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-center text-gray-800">
              {item}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
