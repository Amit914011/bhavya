import React from "react";
import { motion } from "framer-motion";
import img from "../../assets/bhavya/immunity.png";
import img1 from "../../assets/bhavya/healthy.png";
import img2 from "../../assets/bhavya/freshjuice.png";
import img3 from "../../assets/bhavya/naturalherbs.jpeg";
import img4 from "../../assets/bhavya/organicoil.png";
import img5 from "../../assets/bhavya/organic oil.jpeg";
import img6 from "../../assets/bhavya/specialpowder.png";
import img7 from "../../assets/bhavya/specialtablets.png";

const Collage = () => {
  const items = [
    { name: "Immunity Medicine", imageUrl: img },
    { name: "Organic Food", imageUrl: img1 },
    { name: "Fresh Juices", imageUrl: img2 },
    { name: "Natural Herbs", imageUrl: img3 },
    { name: "Natural Skin Care", imageUrl: img4 },
    { name: "Organic Oil", imageUrl: img5 },
    { name: "Special Powders", imageUrl: img6 },
    { name: "Special Tablets", imageUrl: img7 },
  ];

  return (
    <div className="flex items-center justify-center min-h-screen mt-32 px-4">
      <motion.div
        className="w-full max-w-4xl md:max-w-6xl p-8 rounded-lg"
        style={{
          background: "linear-gradient(135deg, #A8E6CF, #56B870)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #A8E6CF, #56B870)",
            "linear-gradient(135deg, #4CAF50, #2E7D32)",
            "linear-gradient(135deg, #A8E6CF, #56B870)",
          ],
        }}
        transition={{
          duration: 5,
          ease: "easeIn",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <h2 className="text-center text-white text-xl md:text-2xl font-semibold mb-2">
          Your Healthy Food, Your Health Matters
        </h2>
        <p className="text-center text-white text-lg md:text-xl italic mb-6">
          “A Perfect Way To Wellness”
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <ZoomCard key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const ZoomCard = ({ item }) => {
  return (
    <motion.div
      className="flex flex-col items-center" // Remove the transition-transform here
    >
      <motion.div
        className="w-36 h-36 sm:w-40 sm:h-40 md:w-52 md:h-52 bg-cover bg-center rounded-md overflow-hidden" // Image container
        style={{
          backgroundImage: `url(${item.imageUrl})`,
        }}
        whileHover={{ scale: 1.1 }} // Apply zoom on hover
        transition={{ duration: 0.3 }} // Smooth transition on zoom
      ></motion.div>
      <p className="text-center text-white mt-2 text-base sm:text-lg md:text-xl font-semibold">
        {item.name}
      </p>
    </motion.div>
  );
};

export default Collage;
