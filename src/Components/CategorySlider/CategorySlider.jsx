import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import Slider from 'react-slick';

export default function HomeSlider() {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        getCategories();
    }, []);

    async function getCategories() {
        try {
            const { data } = await axios('https://ecommerce.routemisr.com/api/v1/categories');
            setCategories(data.data);
            console.log(data.data[0].name);
            console.log(data.data[0].image);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    }

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "green" }}
          onClick={onClick}
        />
      );
    }
    const settings = {
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />}

    return (
      <div className="slider-container">
        <Slider {...settings}>
          {categories?.map((categorie, index) => (
            <div
              key={index}
              className="flex mt-5 py-5 bg-gray-900 dark:bg-transparent items-center"
            >
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto p-4">
                <figure className="relative">
                  <img
                    className="w-full h-48 md:h-60 object-contain rounded-lg shadow-lg"
                    src={categorie.image}
                    alt={categorie.name}
                  />
                </figure>
                <figcaption className="mt-2">
                  <p className="text-center text-base sm:text-lg font-medium dark:text-white text-gray-800 truncate">
                    {categorie.name}
                  </p>
                </figcaption>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
}

