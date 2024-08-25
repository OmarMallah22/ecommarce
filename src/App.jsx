import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Import QueryClientProvider

import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import WishlistItems from './pages/WishlistItems/WishlistItems';
import CartItems from './pages/cartItems/cartItems';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Layout from './Components/Layout/Layout';
import AuthContextProvider from './context/authinticationContext';
import ProtectedROUTE from './Components/Protected Route/ProtectedROUTE';
import ProductDetails from './Components/productDetails/productDetails';
import { CartProvider } from './context/cartContext'; // Import CartProvider
import { WishlistProvider } from './context/WishlistContext';
import CheckOutSession from './Components/CheckOutSession/CheckOutSession';
import Orders from './pages/Orders/Orders';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import VerifyPassword from './Components/VerifyPassword/verifyPassword';
import UpdatePassword from './Components/UpdatePassword/UpdatePassword';

// Create a QueryClient instance
const queryClient = new QueryClient();

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <ProtectedROUTE><Home /></ProtectedROUTE> },
        { path: 'products', element: <ProtectedROUTE><Products /></ProtectedROUTE> },
        { path: 'login', element: <Login /> },
        { path: 'register', element: <Register /> },
        { path: 'forgetPassword', element: <ForgetPassword /> },
        { path: 'verifyPassword', element: <VerifyPassword /> },
        { path: 'updatePassword', element: <ProtectedROUTE><UpdatePassword /></ProtectedROUTE> },
        { path: 'productDetails/:id', element: <ProtectedROUTE><ProductDetails /></ProtectedROUTE> },
        { path: 'cart', element: <ProtectedROUTE><CartItems /></ProtectedROUTE> },
        { path: 'wishlistItems', element: <ProtectedROUTE><WishlistItems /></ProtectedROUTE> },
        { path: 'about', element: <ProtectedROUTE><About /></ProtectedROUTE> },
        { path: 'contact', element: <ProtectedROUTE><Contact /></ProtectedROUTE> },
        { path: 'allorders', element: <ProtectedROUTE><Orders /></ProtectedROUTE> },
        { path: 'checkout/:cartId', element: <ProtectedROUTE><CheckOutSession /></ProtectedROUTE> },
        { path: '*', element: <NotFound /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <WishlistProvider>
          <CartProvider>
            <RouterProvider router={router} />
            <ToastContainer />
          </CartProvider>
        </WishlistProvider>
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default App;
