import React from 'react'
import CategorySlider from "../CategorySlider/CategorySlider";

export default function CategorySection() {
  return (
    <>
    <section className="py-16 bg-gray-50 dark:bg-slate-950 ">
  <div className="container mx-auto px-6 md:px-12">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">
        Browse By Category
      </h2>
      <p className="text-lg text-gray-600 dark:text-white">
        Discover our diverse range of products organized into categories to help you find exactly what you need.
      </p>
    </div>
    <div className="relative">
      <CategorySlider />
    </div>
    <div className="text-center mt-8">
      <a
        href="/shop"
        className="inline-block bg-gray-800 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-gray-600 transition-transform transform hover:scale-105"
      >
        Explore All Categories
      </a>
    </div>
  </div>
</section>
    </>
  )
}
