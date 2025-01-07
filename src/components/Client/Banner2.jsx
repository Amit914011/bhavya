import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import vegetableImage from '../../assets/bhavya/Amla Juice.png'; // Replace with actual image path
import fruitImage from '../../assets/bhavya/black mud.png'; // Replace with actual image path

const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

export default function Banner() {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full h-screen px-4 -mt-44">
      {/* Vegetable Section with Tilt Effect (Shifted Right) */}
      <TiltCard>
        <div className="bg-[#f9f4ec] rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] mr-[-10%]"> {/* Shifted right using mr-[-value] */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-black mb-2">Doctor's Consultancy</h2>
            <p className="text-gray-600 mb-4">
              To have Best health Advise For Your Health Meet Your Doctor Today
            </p>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition">
              Know More
            </button>
          </div>
          <div className="flex-shrink-0">
            <img src={vegetableImage} alt="Vegetables" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </TiltCard>

      {/* Fruit Section with Tilt Effect */}
      <TiltCard>
        <div className="bg-[#ebf5ff] rounded-lg p-6 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-[90%] md:w-[80%] lg:w-[70%]">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold text-black mb-2">Be Your Own Doctor</h2>
            <p className="text-gray-600 mb-4">
              Learn About Naturopathy & Become A Consultant/Doctor Of Naturopathy (Distance learning Available)
            </p>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Join Us
            </button>
          </div>
          <div className="flex-shrink-0">
            <img src={fruitImage} alt="Fruits" className="w-32 h-32 object-contain" />
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

// TiltCard Component without 3D effect
const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;
    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `rotateX(${xSpring}deg) rotateY(${ySpring}deg)`, // Apply only 2D rotation
      }}
      className="relative w-full md:w-auto"
    >
      {children}
    </motion.div>
  );
};
