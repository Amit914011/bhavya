import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Testimonial() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalVideo, setModalVideo] = useState(null); // State to store the video URL for the modal

  const cards = [
    {
      id: 1,
      videoUrl: "https://www.youtube.com/embed/hwW3VzZq9kI", // YouTube video URL
      data: "Men's Collection",
      content: {
        title: "Stylish Men's Shoes for Every Occasion",
        description: "Explore our wide range of men’s shoes, offering comfort, style, and durability for every occasion. From casual wear to formal events, find your perfect fit.",
        link: "/products/mens-shoes",
      },
    },
    {
      id: 5,
      videoUrl: "https://www.youtube.com/embed/n8xRc_em6kU", // YouTube video URL
      data: "Men's Collection",
      content: {
        title: "Stylish Men's Shoes for Every Occasion",
        description: "Explore our wide range of men’s shoes, offering comfort, style, and durability for every occasion. From casual wear to formal events, find your perfect fit.",
        link: "/products/mens-shoes",
      },
    },
    {
      id: 6,
      videoUrl:"https://www.youtube.com/embed/s3H-gfQpCdM", // YouTube video URL
      data: "Men's Collection",
      content: {
        title: "Stylish Men's Shoes for Every Occasion",
        description: "Explore our wide range of men’s shoes, offering comfort, style, and durability for every occasion. From casual wear to formal events, find your perfect fit.",
        link: "/products/mens-shoes",
      },
    },
    {
      id: 2,
      videoUrl: "https://www.youtube.com/embed/GfWMoh9Jpkk?si=cU1_3L11Q-4C5tFn", // YouTube video URL
      data: "Women's Collection",
      content: {
        title: "Elegant Women's Dresses for Every Season",
        description: "Discover our collection of women’s dresses, designed to bring elegance to any occasion. Whether it’s a casual outing or a special event, find your perfect style.",
        link: "/products/womens-dresses",
      },
    },
    {
      id: 3,
      videoUrl: "https://www.youtube.com/embed/x12KbYRhNx4?si=O5uGPUPxzHtA8HM_", // YouTube video URL
      data: "Men's Accessories",
      content: {
        title: "Premium Women's Watches for a Timeless Look",
        description: "Accessorize with our collection of premium men’s watches, perfect for adding a touch of sophistication to any outfit. Find the right piece for you.",
        link: "/products/mens-watches",
      },
    },
    {
      id: 4,
      videoUrl: "https://www.youtube.com/embed/_bNftYMF4yY?si=VQISLgJ-SioIYh1q", // YouTube video URL
      data: "Women's Accessories",
      content: {
        title: "Exclusive Women's Handbags for Every Occasion",
        description: "Shop our selection of women’s handbags that combine style and functionality. Perfect for both everyday use and special occasions.",
        link: "/products/womens-handbags",
      },
      
    },
  ];

  const getVisibleCards = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % (cards.length - visibleCards + 1)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const openModal = (videoUrl) => {
    setModalVideo(videoUrl);
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  return (
    <div className="relative top-16">
      <div className="min-h-[550px] flex flex-col justify-center items-center py-12 sm:py-0">
        {/* Blogs Heading */}
        <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-black">
          Our Patients Reviews
        </h1>

        <div className="w-full md:w-3/5 mb-8 md:mb-0 overflow-hidden py-3 mt-12">
          {/* Sliding cards */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCards)}%)` }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative w-full h-[450px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out ${index !== cards.length - 1 ? 'mr-4' : ''}`}
                style={{ flex: `0 0 ${100 / visibleCards}%` }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Link wraps the whole card */}
                <div
                  className="block w-full h-full cursor-pointer"
                  onClick={() => openModal(card.videoUrl)} // Open modal on card click
                >
                  {/* Video Embed */}
                  <iframe
                    src={card.videoUrl} // YouTube video URL
                    title={`Video ${card.id}`}
                    className="w-full h-full object-cover"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

                  {/* Data shown when hovered */}
                  {hoveredCard === card.id && (
                    <div className="absolute inset-0 bg-black/60 flex items-end justify-center text-white p-4 text-center z-10 fade-in">
                      {card.data}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Dots for Navigation */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.max(cards.length - visibleCards + 1, 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${currentIndex === index ? 'bg-white' : 'bg-gray-400'}`}
              />
            ))}
          </div>
        </div>

        {/* Modal for Video */}
        {modalVideo && (
          <div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50"
            onClick={closeModal}
          >
            <div className="relative w-full md:w-3/5 lg:w-2/5 bg-white p-4 rounded-lg">
              <iframe
                src={modalVideo} // Play the clicked video
                className="w-full h-[400px] object-cover"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
              <button
                className="absolute top-2 right-2 text-white text-3xl"
                onClick={closeModal}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
