import React from 'react'
import Slider from 'react-slick'

export default function Testimonial() {
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
    
    {/* Testimonials Section */}
    <section className="py-16 bg-white dark:bg-slate-950 overflow-hidden">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 text-center"> Our Clients </h2>
      <Slider {...settings}>
      <div className="flex items-center justify-center px-12 bg-white dark:bg-slate-950">
  <div className="max-w-md mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 "> 
    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
      <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

      <div className="mt-8 flex gap-4 items-center">
        <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
          <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex items-center justify-center px-12 bg-white dark:bg-slate-950">
  <div className="max-w-md mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
      <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

      <div className="mt-8 flex gap-4 items-center">
        <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
          <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="flex items-center justify-center px-12 bg-white dark:bg-slate-950">
  <div className="max-w-md mx-auto rounded-3xl p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
    <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
      <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

      <div className="mt-8 flex gap-4 items-center">
        <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
        <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
          <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
        </div>
      </div>
    </div>
  </div>
</div>
      </Slider>

    </section>
    </>
  )
}
