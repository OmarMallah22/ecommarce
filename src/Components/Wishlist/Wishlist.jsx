import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { Link } from "react-router-dom";
import WishlistProduct from "../WishlistProduct/WishlistProduct";

export default function Wishlist({ isOpen, toggleWishlist }) {
  const { wishlist , removeProductFromWishlist } = useContext(WishlistContext);
  const isWishlistEmpty = wishlist?.length === 0;
console.log(wishlist);

  return (
    <div>
      <div
        className={`fixed top-13 lg:top-0 right-0 w-80 h-full p-2 bg-white dark:bg-gray-800 shadow-lg transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <div className="border-b">
          <button
            onClick={toggleWishlist}
            className="absolute top-4 right-4 text-gray-600 dark:text-white"
          >
            Close
          </button>
          <h2 className="text-xl font-bold p-4 dark:text-white">Your Wishlist</h2>
        </div>
        {isWishlistEmpty ? (
          <div className="flex flex-col justify-center items-center">
            <p className="dark:text-white">Your Wishlist is empty.</p>
            <button
              onClick={toggleWishlist}
              className="bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded px-3 py-2 mt-5 hover:bg-gray-600 dark:hover:bg-slate-400"
            >
              <Link to={'/products'}>Start Shopping</Link>
            </button>
          </div>
        ) : (
          <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
              <WishlistProduct WishlistProduct={wishlist} removeProductFromWishlist={removeProductFromWishlist}/>
            <div className="flex items-center justify-center gap-3">
              <button className="bg-white border-2 border-gray-800 p-2 text-gray-800 dark:bg-gray-800 dark:border-white dark:text-white text-center rounded mt-5 hover:text-white hover:bg-gray-800 dark:hover:text-gray-800 dark:hover:bg-white transition-all duration-700">
                <Link to={'/wishlistItems'}>View Wishlist</Link>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

