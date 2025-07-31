import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaStore, FaShoppingBag, FaTruck, FaStar } from 'react-icons/fa';

const HomePage = () => {
  const [featuredShops, setFeaturedShops] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch featured shops
        const shopsResponse = await axios.get('http://localhost:12000/api/shops?limit=4');
        setFeaturedShops(shopsResponse.data.data);
        
        // Fetch featured products
        const productsResponse = await axios.get('http://localhost:12000/api/products?limit=8&isFeatured=true');
        setFeaturedProducts(productsResponse.data.data);
        
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white rounded-lg p-8 mb-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to SuperShop</h1>
          <p className="text-xl mb-6">
            The ultimate multi-vendor supermarket platform for all your shopping needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shops"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
            >
              Browse Shops
            </Link>
            <Link
              to="/register"
              className="bg-blue-700 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800"
            >
              Sign Up Now
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Why Choose SuperShop?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              <FaStore size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Multiple Vendors
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Shop from a variety of local supermarkets all in one place.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              <FaShoppingBag size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Wide Selection
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Find everything you need from groceries to household items.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              <FaTruck size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Fast Delivery
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Get your orders delivered quickly to your doorstep.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
              <FaStar size={40} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              Quality Assurance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              All vendors are verified to ensure quality products and service.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Shops Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Featured Shops
          </h2>
          <Link
            to="/shops"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>
        
        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading shops...</p>
          </div>
        ) : featuredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredShops.map((shop) => (
              <Link
                to={`/shops/${shop._id}`}
                key={shop._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 bg-gray-200 dark:bg-gray-700">
                  {shop.coverImage ? (
                    <img
                      src={shop.coverImage}
                      alt={shop.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                      <FaStore size={40} className="text-gray-400 dark:text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-700 mr-3">
                      {shop.logo ? (
                        <img
                          src={shop.logo}
                          alt={shop.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <FaStore size={20} className="text-gray-400 dark:text-gray-500" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {shop.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 line-clamp-2">
                    {shop.description}
                  </p>
                  <div className="flex items-center text-yellow-500">
                    <FaStar />
                    <span className="ml-1 text-gray-700 dark:text-gray-300">
                      {shop.rating.toFixed(1)} ({shop.totalReviews} reviews)
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">No shops available yet.</p>
          </div>
        )}
      </section>
      
      {/* Featured Products Section */}
      <section className="mb-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View All
          </Link>
        </div>
        
        {isLoading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Loading products...</p>
          </div>
        ) : featuredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Link
                to={`/products/${product._id}`}
                key={product._id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700">
                  {product.images && product.images.length > 0 ? (
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300 dark:bg-gray-700">
                      <FaShoppingBag size={40} className="text-gray-400 dark:text-gray-500" />
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {product.shop && product.shop.name}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-gray-800 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.comparePrice && (
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">
                          ${product.comparePrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center text-yellow-500">
                      <FaStar />
                      <span className="ml-1 text-gray-700 dark:text-gray-300">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-white dark:bg-gray-800 rounded-lg">
            <p className="text-gray-600 dark:text-gray-300">No products available yet.</p>
          </div>
        )}
      </section>
      
      {/* Call to Action */}
      <section className="bg-blue-600 text-white rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Start Shopping?</h2>
        <p className="text-lg mb-6">
          Join thousands of satisfied customers who shop with SuperShop every day.
        </p>
        <Link
          to="/register"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 inline-block"
        >
          Create an Account
        </Link>
      </section>
    </div>
  );
};

export default HomePage;