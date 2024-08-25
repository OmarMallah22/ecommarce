import React from 'react'
import firstImg from '../../assets/firstImg.jpeg'
import secondImg from '../../assets/secondImg.jpeg'
import thirdImg from '../../assets/thirdImg.jpeg'
import Slider from 'react-slick'
import { Link } from 'react-router-dom'

export default function HeroSection() {
    var settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <>
       {/* Hero Section */}
   <div className="relative w-full h-screen overflow-hidden">
    <Slider {...settings} className="w-full h-full">
      <div className="relative w-full h-full">
        <img
          src={firstImg}
          className="w-full h-full object-cover"
          alt="Featured product 1"
        />
        <div className="absolute bottom-1/2 inset-0 flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Discover Our Latest Collection
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-xl mx-auto transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">
              Explore the trendiest items of the season with exclusive styles and limited editions.
            </p>
            <Link
              to="/shop"
              className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-gray-500 transition-colors duration-300 transform hover:scale-105"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <img
          src={secondImg}
          className="w-full h-full object-cover"
          alt="Featured product 2"
        />
        <div className="absolute bottom-1/2 inset-0 flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
              Exclusive Offers Just for You
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-xl mx-auto transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">
              Don't miss out on our special discounts and limited-time offers.
            </p>
            <Link
              to="/offers"
              className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              View Offers
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-full h-full">
        <img
          src={thirdImg}
          className="w-full h-full object-cover"
          alt="Featured product 3"
        />
        <div className="absolute bottom-1/2 inset-0 flex items-center justify-center">
          <div className="text-center bg-black bg-opacity-60 p-10 rounded-lg shadow-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
              New Arrivals Are Here
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 max-w-xl mx-auto transition-opacity duration-300 ease-in-out opacity-80 hover:opacity-100">
              Be the first to get your hands on the latest trends and hottest styles.
            </p>
            <Link
              to="/new-arrivals"
              className="bg-gray-800 text-white py-3 px-8 rounded-full text-lg font-semibold shadow-md hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105"
            >
              See New Arrivals
            </Link>
          </div>
        </div>
      </div>
    </Slider>
   </div>
    </>
  )
}
