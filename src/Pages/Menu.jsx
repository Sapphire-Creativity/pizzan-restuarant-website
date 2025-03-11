import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ReactPaginate from "react-paginate";
import OtherHeader from "../Components/OtherHeader";
import heroImage from "../assets/offer_banner_1.jpg";
import { MainFoodMenu } from "../assets/data";
import Product from "../Components/Product";
import { FaRegHeart } from "react-icons/fa6";

const categories = ["All", "Pizza", "Salads", "Burgers", "Appetizers", "Desserts", "Drinks", "Main Course"];

const Menu = () => {
  const [filterItems, setFilterItems] = useState(MainFoodMenu);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  // **1️⃣ Filtered & Paginated Data**
  const offset = currentPage * itemsPerPage;
  const paginatedItems = filterItems.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filterItems.length / itemsPerPage);

  // **2️⃣ Handle Pagination Change**
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  // **3️⃣ Filter Products & Reset to Page 1**
  const filterCategorySection = (category) => {
    let filtered = category === "All" ? MainFoodMenu : MainFoodMenu.filter((item) => item.category === category);
    setFilterItems(filtered);
    setActiveCategory(category);
    setCurrentPage(0); // Reset to first page after filter change
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
          <h2 className="text-base font-semibold mb-4 text-center">Filter Products</h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterCategorySection(category)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 sm:w-full mx-auto
                ${activeCategory === category ? "bg-primary text-white" : "bg-gray-200 text-gray-800 hover:bg-primary hover:text-white"}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* 🍔 Paginated Menu List Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:col-span-3">
          {paginatedItems.map((product, index) => (
            <div key={index} className="hover:scale-105 transition-transform duration-300">
              <Product data={product} displayModal={() => displayModal(product)} />
            </div>
          ))}
        </div>
      </div>

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


        {/* ✅ Pagination */}
        <div className="text-white">
          <ReactPaginate
            previousLabel={"←"}
            nextLabel={"→"}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={
              "pagination flex justify-center mt-6 space-x-2 sm:space-x-4"
            }
            pageClassName={
              "inline-flex items-center px-3 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 hover:text-primary transition-all duration-300"
            }
            activeClassName={
              "bg-primary text-neutral-50 border-primary px-3 py-2 rounded-md"
            }
            previousClassName={
              "inline-flex items-center px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-all duration-300"
            }
            nextClassName={
              "inline-flex items-center px-3 py-2 rounded-md bg-gray-200 hover:bg-gray-300 transition-all duration-300"
            }
          />
        </div>


      </AnimatePresence>
    </section>
  );
};

export default Menu;
