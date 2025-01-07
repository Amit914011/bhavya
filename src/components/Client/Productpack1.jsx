import React from "react";
import productImage from "../../assets/productpack1.jpeg"; // Import the image from assets
import productImage1 from "../../assets/productpack2.jpeg";
import productImage2 from "../../assets/productpack3.jpeg";
import backgroundImage from "../../assets/bhavyabanner.jpg";
export default function Productpack1() {
  return (
    <>
    {/* product 1 */}
    <div className="min-h-[550px] flex justify-center items-center py-8 sm:py-0 -mt-8 bg-cover bg-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center top",
  }}
>
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2 items-center">
      {/* Image section */}
      <div data-aos="zoom-in">
        <img
          src={productImage} 
          alt="Weight Loss Pack"
          className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
        />
      </div>

      {/* Text details section */}
      <div className="flex flex-col justify-center gap-2 sm:pt-0">
  <h1 data-aos="fade-up" className="text-5xl sm:text-6xl font-bold">
    Weight Loss Pack
  </h1>
  <p
    data-aos="fade-up"
    className="text-lg sm:text-xl text-green-800 tracking-wide leading-7 sm:leading-8"
  >
    Lose up to 10kg within 2 months with our natural medicine and 
    proper organic food diet.
  </p>

  {/* Single Button Section */}
  <div className="mt-4">
    <button
      data-aos="fade-up"
      className="px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-950 transition"
    >
      Meet Your Doctor / Order Today
    </button>
  </div>
</div>

    </div>
  </div>
</div>



{/* product pack2 */}
<div className="min-h-[550px] flex justify-center items-center py-8 sm:py-0 -mt-8">
  <div className="container ml-14 -mt-56">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 items-center">
      
      {/* Text details section (on the left side) */}
      <div className="flex flex-col justify-center gap-3 sm:pt-0 order-2 sm:order-1 ml-44">
        <h1 data-aos="fade-up" className="text-5xl sm:text-5xl font-bold">
          PCOS/PCOD Pack
        </h1>
        <p
          data-aos="fade-up"
          className="text-lg sm:text-xl text-green-800 tracking-wide leading-6 sm:leading-7"
        >
          Control The Issue With Saffron PCOS/PCOD Pack & Discuss With Your Doctor Today
          (Online & Offline Consultancy Available)
        </p>

        {/* Single Button Section */}
        <div className="mt-4">
          <button
            data-aos="fade-up"
            className="px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-950 transition"
          >
            Meet Your Doctor / Order Today
          </button>
        </div>
      </div>

      {/* Image section (on the right side) */}
      <div data-aos="zoom-in" className="order-1 sm:order-2">
        <img
          src={productImage1} // Path to the image
          alt="PCOS/PCOD Pack"
          className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</div>


    {/* product 3 */}
    <div className="min-h-[550px] flex justify-center items-center py-8 sm:py-0 -mt-56">
  <div className="container">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-center">
      
      {/* Image section */}
      <div data-aos="zoom-in">
        <img
          src={productImage2} // Path to the image
          alt="Diabetes Reversal Pack"
          className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-md"
        />
      </div>

      {/* Text details section */}
      <div className="flex flex-col justify-center gap-2 sm:pt-0">
        <h1 data-aos="fade-up" className="text-5xl sm:text-5xl font-bold">
          Diabetes Reversal Pack
        </h1>
        <p
          data-aos="fade-up"
          className="text-lg sm:text-xl text-green-800 tracking-wide leading-6 sm:leading-7"
        >
          Type 1 or Type 2, both can be managed & reversed by naturopathy & organic food.
        </p>

        {/* Single Button Section */}
        <div className="mt-2">
          <button
            data-aos="fade-up"
            className="px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
          >
            Meet Your Doctor / Order Today
          </button>
        </div>
      </div>
    </div>
  </div>
</div>




    {/* product 4 */}
    <div className="min-h-[550px] flex justify-center items-center py-8 sm:py-0 -mt-8">
  <div className="container -mt-56">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-center">
      
      {/* Text details section (now on the left side) */}
      <div className="flex flex-col justify-center gap-2 sm:pt-0 order-2 sm:order-1 ml-36"> 
        <h1 data-aos="fade-up" className="text-5xl sm:text-5xl font-bold">
          Blood Pressure Pack
        </h1>
        <p
          data-aos="fade-up"
          className="text-lg sm:text-xl text-green-800 tracking-wide leading-6 sm:leading-7"
        >
          Manage Your Pressure with Saffron & Worry Not About Your Health, We Will Guard It ...
        </p>

        {/* Single Button Section */}
        <div className="mt-2">
          <button
            data-aos="fade-up"
            className="px-8 py-3 bg-blue-800 text-white rounded hover:bg-blue-900 transition"
          >
            Meet Your Doctor / Order Today
          </button>
        </div>
      </div>

      {/* Image section (now on the right side) */}
      <div data-aos="zoom-in" className="order-1 sm:order-2">
        <img
          src={productImage1} // Path to the image
          alt="Blood Pressure Pack"
          className="max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover rounded-md"
        />
      </div>
    </div>
  </div>
</div>

    </>
  );
}
