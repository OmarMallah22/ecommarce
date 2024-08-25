import React from 'react';
import { Link } from 'react-router-dom';

export default function WishlistProduct({ WishlistProduct, removeProductFromWishlist }) {
  console.log(WishlistProduct[0]._id);
  
  return (
    <>
      {WishlistProduct?.map((product, index) => (
        <div key={index} className="border-b py-2 flex items-center space-x-2">
          <Link to={'/productDetails/' + product._id}>
            <img
              src={product.imageCover}
              className="w-24 h-24 object-cover mx-auto"
              alt={product.title}
            />
          </Link>
          <div className="flex flex-col">
            <p className="line-clamp-1 dark:text-white">{product.title}</p>
            <p className='dark:text-white'>${product.price}</p>
            <svg
            onClick={()=> removeProductFromWishlist(product._id)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5 cursor-pointer duration-150 dark:text-white hover:text-red-800"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      ))}
    </>
  );
}

