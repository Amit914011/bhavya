import React from 'react';
import article1 from '../../assets/bhavya/articlebhavy.png'; // adjust the path based on your file structure
import article2 from '../../assets/bhavya/desease.jpeg';
import article3 from '../../assets/bhavya/therapy.jpeg';
import article4 from '../../assets/bhavya/diet.jpeg';
import article5 from '../../assets/bhavya/nutrition.jpeg';

const Article = () => {
  return (
    <div className="p-4 -mt-[50px]">
      <h2 className="relative top-28 text-[80px] font-bold text-green-800 mb-4">Article Section</h2>
      <div className="flex overflow-x-auto gap-4">
        {/* Article 1 - Doctors Articles */}
        <div 
          className="relative top-24 h-76 w-[calc(100%-60%)] bg-cover bg-center transition-transform transform hover:scale-105 hover:opacity-80"
          style={{ backgroundImage: `url(${article1})` }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
            <p className="text-lg font-semibold">Doctors Articles</p>
          </div>
        </div>

        {/* Article 2 - Diseases Structure */}
        <div 
          className="relative top-24 h-76 w-[calc(100%-60%)] bg-cover bg-center transition-transform transform hover:scale-105 hover:opacity-80"
          style={{ backgroundImage: `url(${article2})` }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
            <p className="text-lg font-semibold">Diseases Structure</p>
          </div>
        </div>

        {/* Article 3 - Therapy Of Nature Cure */}
        <div 
          className="h-96 w-[calc(100%-60%)] bg-cover bg-center transition-transform transform hover:scale-105 hover:opacity-80"
          style={{ backgroundImage: `url(${article3})` }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
            <p className="text-lg font-semibold">Therapy Of Nature Cure</p>
          </div>
        </div>

        {/* Article 4 - Diet Talks */}
        <div 
          className="h-96 w-[calc(100%-60%)] bg-cover bg-center transition-transform transform hover:scale-105 hover:opacity-80"
          style={{ backgroundImage: `url(${article4})` }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
            <p className="text-lg font-semibold">Diet Talks</p>
          </div>
        </div>

        {/* Article 5 - Nutrition Ideas */}
        <div 
          className="h-96 w-[calc(100%-60%)] bg-cover bg-center transition-transform transform hover:scale-105 hover:opacity-80"
          style={{ backgroundImage: `url(${article5})` }}
        >
          <div className="flex justify-center items-center h-full bg-black bg-opacity-50 text-white">
            <p className="text-lg font-semibold">Nutrition Ideas</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
