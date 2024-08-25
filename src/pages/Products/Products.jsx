import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScrean from "../../Components/loadingScrean/loadingScrean";
import { Helmet } from "react-helmet";
import Product from "../../Components/Product/Product";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
        setProducts(data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const userToken = localStorage.getItem('token');
  
  return (
    <>
      <Helmet>
        <title>Products</title>
      </Helmet>
      {isLoading ? <LoadingScrean /> : <div className="dark:bg-gray-950 py-10">
        <div className="container mx-auto px-6 md:px-12 xl:px-6 ">

        <div>
      <p className="text-sm leading-4 text-gray-600 dark:text-white">Home</p>
    </div>
    <div className="mt-3">
      <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold leading-8 lg:leading-9 text-gray-800 dark:text-white">Shop</h1>
    </div>
        <Product products={products} userToken={userToken} />
        </div>
        </div>}
    </>
  );
}
