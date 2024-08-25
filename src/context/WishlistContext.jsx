import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {

    fetchWishlist();
  }, []);

  async function fetchWishlist() {
    try {
      const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      setWishlist(data.data);
      console.log(data.data);
      
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  }

  const addProductToWishlist = async (productId) => {
    try {
      const { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', { productId }, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      fetchWishlist()
      console.log(data.data);
      
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const removeProductFromWishlist = async (productId) => {
    try {
      const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      });
      fetchWishlist()
      console.log(data.data); 
      
    } catch (error) {
      console.error('Error removing from wishlist:', error);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addProductToWishlist, removeProductFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}


