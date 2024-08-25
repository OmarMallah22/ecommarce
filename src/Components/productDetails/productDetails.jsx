import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import StarRating from '../starRating/StarRating';
import ImgSlider from '../imgSlider/imgSlider';
import LoadingScreen from '../loadingScrean/loadingScrean';
import { Slide, toast } from 'react-toastify';
import { CartContext } from '../../context/cartContext';

export default function ProductDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const [relatedProduct, setRelatedProduct] = useState(null);
  const { id } = useParams();
  const { getUserCart } = useContext(CartContext);
  const userToken = localStorage.getItem('token');

  useEffect(() => {
    let isMounted = true; // flag to check if component is mounted

    const fetchProductDetails = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        if (isMounted) {
          setProduct(data.data);
          await getRelatedProducts(data.data.category._id); // Pass the category ID
        }
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    const getRelatedProducts = async (categoryId) => {
      try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products', {
          params: { category: categoryId },
        });
        if (isMounted) {
          setRelatedProduct(data.data);
        }
      } catch (error) {
        console.error("Error fetching related products:", error);
      }
    };

    fetchProductDetails();

    return () => {
      isMounted = false; // cleanup function to set flag to false on unmount
    };
  }, [id]);

  const addProductToCart = async (productId) => {
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/cart',
        { productId },
        {
          headers: {
            token: userToken,
          },
        }
      );
      await getUserCart(); // Fetch updated cart data
      toast.success(data.message, {
        position: "bottom-right",
        autoClose: 2000,
        transition: Slide,
        theme: "colored",
      });
    } catch (error) {
      toast.error("Failed to add product to cart", {
        position: "bottom-right",
        autoClose: 2000,
        transition: Slide,
        theme: "colored",
      });
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <>
      {isLoading ? <LoadingScreen /> : (
        <main className="py-8 dark:bg-gray-950">
          <div className="container mx-auto px-6">
            <div className="md:flex md:items-center">
              <div className="w-full h-64 md:w-3/12 lg:h-96">
                <ImgSlider imgs={product?.images} answer={true} />
              </div>
              <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-9/12">
                <h3 className="dark:text-white text-gray-700 uppercase text-lg">{product?.title}</h3>
                <span className="dark:text-white text-gray-500 mt-3">${product?.price}</span>
                <hr className="my-3" />
                <div className="mt-2">
                  <h3>Rating:</h3>
                  <StarRating ratingAverage={product?.ratingsAverage} />
                </div>
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 uppercase text-lg">Description:</h3>
                  <p className="dark:text-white text-gray-500">{product?.description}</p>
                </div>
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 uppercase text-lg">Category:</h3>
                  <p className="dark:text-white text-gray-500">{product?.category.name}</p>
                </div>
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 uppercase text-lg">SubCategory:</h3>
                  <p className="dark:text-white text-gray-500">{product?.subcategory.name}</p>
                </div>
                <div className="mt-3">
                  <h3 className="dark:text-white text-gray-700 uppercase text-lg">Brand:</h3>
                  <p className="dark:text-white text-gray-500">{product?.brand.name}</p>
                </div>
                <div className="flex items-center mt-6">
                  <button onClick={() => addProductToCart(product?._id)} className="px-8 py-2 bg-gray-600 text-white dark:text-white text-sm font-medium rounded hover:bg-gray-500 focus:outline-none focus:bg-gray-500">Order Now</button>
                </div>
              </div>
            </div>
            {/* Related products */}
            <div className="mt-16">
              <h3 className="dark:text-white text-gray-600 text-2xl font-medium">Related Products</h3>
              <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {relatedProduct?.map((relatedProduct, index) => (
                  <div key={index} className="w-full dark:bg-gray-800 max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                    <div className="h-86 w-full">
                      <div className="w-full object-contain mx-auto">
                        <ImgSlider imgs={relatedProduct?.images} answer={false} />
                      </div>
                      <button onClick={() => addProductToCart(relatedProduct?._id)} className="p-2 rounded bg-gray-600 dark:text-white text-white mx-5 float-end mt-4 hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
                        <i className='fas fa-cart-shopping'></i>
                      </button>
                    </div>
                    <div className="px-5 py-3">
                      <h3 className="dark:text-white text-gray-700 uppercase line-clamp-1">{relatedProduct?.title}</h3>
                      <span className="dark:text-white text-gray-500 mt-2">${relatedProduct?.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
