import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogHighlights() {
  return (
    <>
    
    {/* Blog Highlights Section */}
    <section className="py-16 bg-gray-100 dark:bg-slate-950 dark:text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">From Our Blog</h2>
        {/* Implement a grid for blog posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Blog Post */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <img src="/path/to/blog-image.jpg" alt="Blog Post Title" className="w-full h-40 object-cover rounded-t-lg"/>
            <h3 className="text-xl font-semibold mt-4">Blog Post Title</h3>
            <p className="text-gray-600 mt-2">A brief description of the blog post. It highlights the key points or takeaways.</p>
            <Link to="/blog" className="mt-4 bg-gray-800 text-white py-2 px-4 rounded-full text-sm font-semibold hover:bg-gray-800">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
