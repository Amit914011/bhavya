import React, { useState, useEffect } from "react";
import BannerImg1 from "../../assets/bhavya/sd1.png";
import BannerImg2 from "../../assets/bhavya/Weight Loss Tablets.png";
import BannerImg3 from "../../assets/bhavya/Alfa Alfa Powder.png";
import BannerImg4 from "../../assets/bhavya/ALovera gel bhrami big.jpeg";
import BannerImg5 from "../../assets/bhavya/wheatgrass.png";
import BannerImg6 from "../../assets/bhavya/aloveragel.jpeg";
import { Link } from "react-router-dom";

export default function Banner() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, image: BannerImg1, data: "Men's Collection", content: { title: "SD Powder" } },
    { id: 2, image: BannerImg2, data: "Women's Collection", content: { title: "Weight loss Tablets" } },
    { id: 3, image: BannerImg3, data: "Men's Accessories", content: { title: "Alfa Alfa Tablets" } },
    { id: 4, image: BannerImg4, data: "Women's Accessories", content: { title: "Aloe hair gel" } },
    { id: 5, image: BannerImg5, data: "Women's Accessories", content: { title: "Wheatgrass Powder" } },
    { id: 6, image: BannerImg6, data: "Women's Accessories", content: { title: "Aloe skin gel" } },
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (cards.length - visibleCards + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [visibleCards, cards.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative -mt-64">
      <div className="min-h-[550px] flex flex-col justify-center items-center py-12 sm:py-0">
        <div className="w-full mb-8 md:mb-0 overflow-hidden py-3 mt-12">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`relative w-full h-[450px] lg:h-[500px] rounded-lg shadow-lg overflow-hidden flex-shrink-0 transform hover:scale-105 transition-transform duration-300 ease-in-out`}
                style={{
                  flex: `0 0 ${90 / visibleCards}%`, // Decrease card width
                  maxWidth: '100%',
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Link to="/blogmore" className="block w-full h-full">
                  <div className="relative w-full h-full">
                    <img
                      src={card.image}
                      alt={`Card ${card.id}`}
                      className="w-[300px] h-[300px] object-cover rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    />
                    <div className="absolute top-4 left-4 text-black p-4 text-left z-10">
                      <h2 className="text-2xl font-semibold">{card.content.title}</h2>
                    </div>
                  </div>

                  {hoveredCard === card.id && (
                    <div className="absolute inset-0 flex items-end justify-center text-white p-4 text-center z-10 fade-in">
                      {card.data}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.max(cards.length - visibleCards + 1, 1) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-3 w-3 rounded-full transition-colors duration-300 ease-in-out ${
                    currentIndex === index ? "bg-white" : "bg-gray-400"
                  }`}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
