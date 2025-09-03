import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Products from "./Products"

const Home = () => {
  const products = useSelector((state) => state.productsReducer.products) || [];

  // Take only first 4 products as "Featured"
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="px-6">
      {/* Hero Section */}
      <section className="relative bg-[#918DA9]  text-white rounded-2xl shadow-lg overflow-hidden mb-12">
        <div className="p-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-lg mb-6 max-w-xl mx-auto">
            Discover the best products at unbeatable prices. Shop now and enjoy a
            world of variety!
          </p>
          <Link
            to="/products"
            className="inline-block bg-[#1F1C2C] text-[#918DA9] text-xl font-semibold px-6 py-3 rounded-xl shadow transform hover:scale-105 transition duration-300"
          >
            Browse All Products
          </Link>

        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-12 ">
        <h2 className="text-4xl text-center font-semibold mb-8">
          Featured Products
        </h2>
        <Products />
      </section>

      {/* Categories Section */}
      <section className="mb-12 ">
        <h2 className="text-4xl text-center font-semibold mb-8">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {["Electronics", "Clothing", "Accessories", "Home"].map((cat) => (
            <div
              key={cat}
              className="bg-[#918DA9] text-[#1F1C2C] rounded-2xl p-4 text-center font-bold text-2xl shadow-lg hover:scale-105 transition cursor-pointer"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Button */}
      <div className="text-center pb-4">
        <Link
          to="/products"
          className="inline-block bg-indigo-600 text-white px-8 py-4 text-xl rounded-2xl shadow-lg hover:bg-indigo-700 hover:scale-105 transition "
        >
          Browse All Products
        </Link>
      </div>
    </div>
  );
};

export default Home;
