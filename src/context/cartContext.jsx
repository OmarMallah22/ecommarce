import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Slide, toast } from 'react-toastify';

export const CartContext = createContext();

export function CartProvider({ children }) {
  console.log(localStorage.getItem('token'));
  const userToken = localStorage.getItem('token');
  const [cartProducts, setCartProducts] = useState({ products: [] });

  useEffect(() => {
    getUserCart();
  }, []);

  async function getUserCart() {
    const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: {
        token: localStorage.getItem('token')
      }
    });
    setCartProducts(data.data);  
  }
  async function addProductToCart(productId) {
    try {
      const { data } = await axios.post(
        'https://ecommerce.routemisr.com/api/v1/cart',
        { productId },
        {
          headers: {
            token: userToken
          }
        }
      );

      // Fetch updated cart data
      await getUserCart();

      toast.success(data.message, {
        position: "bottom-right",
        autoClose: 2000,
        transition: Slide,
        theme: "colored"
      });
    } catch (error) {
      toast.error("Failed to add product to cart", {
        position: "bottom-right",
        autoClose: 2000,
        transition: Slide,
        theme: "colored"
      });
      console.error("Error adding to cart:", error);
    }
  }

  async function deleteProductFromCart(id) {
    try {
        const { data } = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            headers: {
                token: localStorage.getItem('token')
            }
        });
        
        // Show success message
        toast.success('Product has been successfully deleted from your cart', {
            position: "bottom-right",
            autoClose: 2000,
            transition: Slide,
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });

        // Refresh cart products after deletion
        await getUserCart();
    } catch (error) {
        // Handle errors, if any
        toast.error("Failed to delete product from cart", {
            position: "bottom-right",
            autoClose: 2000,
            transition: Slide,
            theme: "colored"
        });
        console.error("Error deleting product from cart:", error);
    }
}

async function clearCart() {
  const userToken = localStorage.getItem('token');
  
  try {
    await axios.delete('https://ecommerce.routemisr.com/api/v1/cart', {
      headers: { token: userToken }
    });

    toast.success('Cart has been successfully cleared', {
      position: "bottom-right",
      autoClose: 2000,
      transition: Slide,
      style: {
        border: '1px solid #713200',
        padding: '16px',
        color: '#713200',
      },
      iconTheme: {
        primary: '#713200',
        secondary: '#FFFAEE',
      },
    });
    setCartProducts(null)


  } catch (error) {
    toast.error("Failed to clear the cart", {
      position: "bottom-right",
      autoClose: 2000,
      transition: Slide,
      theme: "colored"
    });
    console.error("Error clearing cart:", error);
  }

}




  return (
    <CartContext.Provider value={{ cartProducts, addProductToCart,  deleteProductFromCart, getUserCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
