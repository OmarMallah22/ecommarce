import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export default function Cart({ isOpen, toggleCart }) {
  const { cartProducts, deleteProductFromCart } = useContext(CartContext);

  // Ensure cartProducts is not null or undefined
  const products = cartProducts?.products || [];
  const isCartEmpty = products.length === 0;
  // console.log(products?.product._id);
  console.log(cartProducts?._id);
  
  
  console.log(isCartEmpty);

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
            onClick={toggleCart}
            className="absolute top-4 right-4 text-gray-600 dark:text-white"
          >
            Close
          </button>
          <h2 className="text-xl font-bold p-4 dark:text-white">Your Cart</h2>
        </div>
        {isCartEmpty ? (
          <div className="flex flex-col justify-center items-center">
            <p className="dark:text-white">Your cart is empty.</p>
            <button
              onClick={toggleCart}
              className="bg-gray-800 dark:bg-white dark:text-gray-800 text-white rounded px-3 py-2 mt-5 hover:bg-gray-600 dark:hover:bg-slate-700 dark:hover:text-white"
            >
              <Link to={'/products'}>Start Shopping</Link>
            </button>
          </div>
        ) : (
          <div className="overflow-y-auto h-[calc(100%-4rem)] p-4">
            {products.map((product, index) => {
              console.log(product.product._id);
              
              return(
              <div key={index} className="border-b py-2 flex items-center space-x-2">
                <Link to={'/productDetails/' + product.product._id}>
                  <img
                    src={product.product.imageCover}
                    className="w-24 h-24 object-cover mx-auto"
                    alt={product.product.title}
                  />
                </Link>
                <div className="flex flex-col">
                  <p className="line-clamp-1 dark:text-white">{product.product.title}</p>
                  <p className="dark:text-white">${product.price}</p>
                  <svg
                    onClick={() => deleteProductFromCart(product.product._id)}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-5 cursor-pointer dark:text-white duration-150 hover:text-red-800"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
              </div>
              )
            }
            )}
            <div className="flex items-center justify-center gap-3">
              <button className="bg-white border-2 border-gray-800 p-2 text-gray-800 dark:bg-gray-800 dark:border-white dark:text-white text-center rounded mt-5 hover:text-white hover:bg-gray-800 dark:hover:text-gray-800 dark:hover:bg-white transition-all duration-700">
                <Link to={'/cart'}>View Cart</Link>
              </button>
              <button className="bg-gray-800 p-2 text-white dark:bg-white dark:text-gray-800 text-center rounded mt-5 hover:text-gray-800 hover:border-2 hover:border-gray-800 hover:bg-white dark:hover:text-white dark:hover:border-white dark:hover:bg-gray-800 transition-all duration-700">
                <Link to={'checkout/'+cartProducts?._id}>Check Out</Link>  
              </button>
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
}

