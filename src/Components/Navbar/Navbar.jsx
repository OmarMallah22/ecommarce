import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authinticationContext";
import Cart from "../Cart/Cart"; // Make sure this path is correct
import Wishlist from "../Wishlist/Wishlist";

export default function Navbar() {
  const { userToken, setUserToken } = useContext(AuthContext);
  const [isCartOpen, setIsCartOpen] = useState(false); // State for Cart Drawer
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); // State for Cart Drawer
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for Mobile Menu
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");
  const navigate = useNavigate();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    // Toggle the 'dark' class on the root element (html)
    document.documentElement.classList.toggle("dark", darkMode);
    // Persist dark mode setting to localStorage
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);


  function logout() {
    localStorage.removeItem('token');
    setUserToken(null);
    navigate('/login'); 
  }

  return (
    <header className="bg-blue-100 dark:bg-gray-800 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-gray-800 dark:text-white font-bold text-xl">
              <Link to={'/'}><i className="fa-solid fa-cart-plus"></i> FreshCart</Link>
            </div>
            {userToken && (
              <ul className="hidden md:flex items-center space-x-8 ms-32">
                <li><NavLink to={'/'} className="text-gray-800 dark:text-white">Home</NavLink></li>
                <li><NavLink to={'/products'} className="text-gray-800 dark:text-white">Shop</NavLink></li>
                <li><NavLink to={'/contact'} className="text-gray-800 dark:text-white">Contact</NavLink></li>
                <li><NavLink to={'/about'} className="text-gray-800 dark:text-white">About</NavLink></li>
              </ul>
            )}
          </div>
          {!userToken && (
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li><Link to={'/login'} className="text-gray-800 dark:text-white">Login</Link></li>
                <li><Link to={'/register'} className="text-gray-800 dark:text-white">Register</Link></li>
              </ul>
            </div>
          )}
          {userToken && (
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <button onClick={toggleCart} className="text-gray-800 dark:text-white">
                    <i className="fas fa-cart-shopping"></i>
                  </button>
                </li>
                <li>
                <button onClick={toggleWishlist} className="text-gray-800 dark:text-white">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </li>
                <li><button onClick={logout} className="text-gray-800 dark:text-white">Logout</button></li>
                <li>
                <button onClick={toggleDarkMode} className="text-gray-800 dark:text-white">
                  {darkMode ? (
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                      <path fillRule="evenodd" clipRule="evenodd" d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z" className="fill-transparent"></path>
                      <path d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z" className="fill-slate-400 dark:fill-slate-500"></path>
                      <path fillRule="evenodd" clipRule="evenodd" d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z" className="fill-slate-400 dark:fill-slate-500"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" className="fill-yellow-400/20 stroke-yellow-500"></path>
                      <path d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836" className="stroke-yellow-500"></path>
                    </svg>
                  )}
                </button>
                </li>
              </ul>
            </div>
          )}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <ul className="mt-4 space-y-4">
              <li><NavLink to={'/'} className="text-gray-800 dark:text-white">Home</NavLink></li>
              <li><NavLink to={'/cart'} className="text-gray-800 dark:text-white">Cart</NavLink></li>
              <li><NavLink to={'/contact'} className="text-gray-800 dark:text-white">Contact</NavLink></li>
              <li><NavLink to={'/about'} className="text-gray-800 dark:text-white">About</NavLink></li>
              {!userToken && (
                <>
                  <li><Link to={'/login'} className="text-gray-800 dark:text-white">Login</Link></li>
                  <li><Link to={'/register'} className="text-gray-800 dark:text-white">Register</Link></li>
                </>
              )}
              {userToken && (
                <>
                <div className="flex items-center gap-3">
                <li>
                  <button onClick={toggleCart} className="text-gray-800 dark:text-white">
                    <i className="fas fa-cart-shopping"></i>
                  </button>
                </li>
                <li>
                <button onClick={toggleWishlist} className="text-gray-800 dark:text-white">
                    <i className="fa-regular fa-heart"></i>
                  </button>
                </li>
                <li><button onClick={logout} className="text-gray-800 dark:text-white">Logout</button></li> 
                </div>
                </>) }
            </ul>
          </div>
        )}
      </nav>
      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} toggleCart={toggleCart} />
      <Wishlist isOpen={isWishlistOpen} toggleWishlist={toggleWishlist} />
    </header>
  );
}