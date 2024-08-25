import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { CartContext } from '../../context/cartContext';
import { Link } from 'react-router-dom';

export default function CartItems() {
    const { cartProducts, deleteProductFromCart, clearCart } = useContext(CartContext);
    const products = cartProducts?.products || [];
    console.log(products);

    return (
        <>
            <Helmet>
                <title>Cart</title>
            </Helmet>
            {products.length === 0 ? (
                <section className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-slate-950">
                    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-10 w-full max-w-md mx-auto text-center">
                        <h1 className="text-2xl font-semibold text-gray-700 dark:text-white mb-6">Your Cart is empty</h1>
                        <Link to={'/products'} className="inline-block px-6 py-3 bg-gray-600 text-white dark:bg-white dark:text-gray-800 rounded-full shadow-lg hover:bg-gray-700 dark:hover:bg-slate-600 dark:hover:text-white transition duration-300">Shop now</Link>
                    </div>
                </section>
            ) : (
                <div className="bg-gray-100 dark:bg-gray-950 dark:text-white pt-20">
                    <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                    <div className="mx-auto max-w-5xl px-6 md:flex md:space-x-6 xl:px-0">
                        <div className="rounded-lg md:w-2/3">
                            {products.map((product) => (
                                product?.product ? (
                                    <div key={product._id} className="justify-between mb-6 rounded-lg bg-white dark:bg-gray-900 p-6 shadow-md sm:flex sm:justify-start">
                                        <img src={product.product.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                            <div className="mt-5 sm:mt-0">
                                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">{product.product.title}</h2>
                                                <p className="mt-1 text-xs text-gray-700 dark:text-white">{product.product.size}</p>
                                            </div>
                                            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                <div className="flex items-center border-gray-100 dark:bg-gray-950">
                                                    <span className="cursor-pointer rounded-l bg-gray-100 dark:bg-gray-950 py-1 px-3.5 duration-100 hover:bg-gray-800 hover:text-gray-50"> - </span>
                                                    <input className="h-8 w-8 border bg-white text-center dark:bg-gray-950 text-xs outline-none" type="number" value={product.count} min="1" />
                                                    <span className="cursor-pointer rounded-r bg-gray-100 dark:bg-gray-950 py-1 px-3 duration-100 hover:bg-gray-800 hover:text-gray-50"> + </span>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    <p className="text-sm">${product.price}</p>
                                                    <svg onClick={() => deleteProductFromCart(product.product._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-800">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : null
                            ))}
                        </div>
                        <div className="sticky top-12 mt-6 h-full rounded-lg border bg-white dark:bg-gray-800 dark:border-gray-800 p-6 shadow-md md:mt-0 md:w-1/3">
                            <div className="mb-2 flex justify-between">
                                <p className="text-gray-700 dark:text-white">Subtotal</p>
                                <p className="text-gray-700 dark:text-white">$129.99</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-gray-700 dark:text-white">Shipping</p>
                                <p className="text-gray-700 dark:text-white">$4.99</p>
                            </div>
                            <hr className="my-4" />
                            <div className="flex justify-between">
                                <p className="text-lg font-bold dark:text-white">Total</p>
                                <div>
                                    <p className="mb-1 text-lg font-bold">${cartProducts?.totalCartPrice || '0.00'} USD</p>
                                    <p className="text-sm text-gray-700 dark:text-white">including VAT</p>
                                </div>
                            </div>
                            <button className="mt-6 w-full rounded-md dark:bg-gray-950 bg-gray-300 py-1.5 font-medium text-gray-950 dark:text-white hover:bg-gray-600 hover:text-white "><Link to={`/checkout/${cartProducts?._id}`}>Check Out</Link></button>
                            <button onClick={clearCart} className="mt-6 w-full rounded-md bg-rose-800 py-1.5 font-medium text-rose-50 hover:bg-rose-600">Clear Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}


