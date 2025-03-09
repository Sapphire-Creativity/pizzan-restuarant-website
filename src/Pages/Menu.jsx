import React, { useState } from "react";
import OtherHeader from "../Components/OtherHeader";
import heroImage from "../assets/offer_banner_1.jpg";
import { MainFoodMenu } from "../assets/data";
import Product from "../Components/Product";

const categories = ["All", "Pizza", "Salads", "Burgers", "Appetizers", "Desserts", "Drinks", "Main Course"];

const Menu = () => {
  const [filterItems, setFilterItems] = useState(MainFoodMenu);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterCategorySection = (category) => {
    if (category === "All") {
      setFilterItems(MainFoodMenu);
    } else {
      setFilterItems(MainFoodMenu.filter((item) => item.category === category));
    }
    setActiveCategory(category);
  };

  return (
    <>
      <OtherHeader title="Menu" subTitle="" backgroundImage={heroImage} />

      <div className="mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-4 gap-8">

        {/* 🔍 Filter Section */}
        <div className="bg-white shadow-md rounded-lg p-5 sm:col-span-1">
          <h2 className="text-xl font-semibold mb-4">Filter Products</h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterCategorySection(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 
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
              <Product data={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Menu;
