import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import OtherHeader from "../Components/OtherHeader";
import heroImage from "../assets/offer_banner_1.jpg";
import { MainFoodMenu } from "../assets/data";
import Product from "../Components/Product";
import { FaRegHeart } from "react-icons/fa6";
import { MenuContext } from "../Context/MenuContext";

const categories = ["All", "Pizza", "Salads", "Burgers", "Appetizers", "Desserts", "Drinks", "Main Course"];

const Menu = () => {

  const [filterItems, setFilterItems] = useState(MainFoodMenu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null); // Store the selected product

  // const { addToCart, cartItems } = useContext(MenuContext)
  // const cartItemAmount = cartItems[selectedProduct.id]

  const filterCategorySection = (category) => {
    if (category === "All") {
      setFilterItems(MainFoodMenu);
    } else {
      setFilterItems(MainFoodMenu.filter((item) => item.category === category));
    }
    setActiveCategory(category);
  };

  // Show modal with selected product
  const displayModal = (product) => {
    setSelectedProduct(product);
  };

  // Close modal
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <section className="relative">
      <OtherHeader title="Menu" subTitle="" backgroundImage={heroImage} />

      <div className="mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-4 gap-8">
        {/* 🔍 Filter Section */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:col-span-1">
          <h2 className="text-base font-semibold mb-4">Filter Products</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterCategorySection(category)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 w-full
                ${activeCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-primary hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 🍔 Menu List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:col-span-3">
          {filterItems.map((product, index) => (
            <div key={index} className="hover:scale-105 transition-transform duration-300">
              <Product data={product} displayModal={() => displayModal(product)} />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ MODAL for Selected Product */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={closeModal} // Close modal when clicking outside
          >
            <motion.div
              initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
              animate={{ y: "0%", opacity: 1, scale: 1 }}
              exit={{ y: "-50%", opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-white w-96 rounded-xl shadow-2xl p-6 relative"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
            >
              {/* Close Button */}
              <button className="absolute top-3 right-3 text-gray-600 hover:text-red-500" onClick={closeModal}>
                ✖
              </button>

              {/* ✅ Render only the selected product */}
              <img src={selectedProduct.image} alt={selectedProduct.name} className="w-[12rem] my-5 mx-auto object-cover rounded-lg" />
              <h2 className="text-xl font-bold mt-2 text-gray-800">{selectedProduct.name}</h2>

              <p className="text-gray-600 mt-1 text-sm">Category: {selectedProduct.category}</p>

              <hr className="my-2 h-1" />
              <p className="text-gray-600 mt-2">{selectedProduct.description}</p>
              <h2 className="text-primary font-bold mt-2">${selectedProduct.price}</h2>
              <p className="mt-2 text-secondary">In Store: <span>{selectedProduct.amountInStore}</span></p>

              <div className="flex gap-4 mt-4">
                <button onClick={() => addToCart(selectedProduct.id)} className="bg-primary text-white px-4 py-2 rounded-md">Add to Cart</button>
                <button className="bg-secondary text-white px-4 py-2 rounded-md"><FaRegHeart /></button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
