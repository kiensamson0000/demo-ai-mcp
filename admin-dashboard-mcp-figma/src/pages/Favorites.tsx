import React from "react";
import { FaHeart, FaStar, FaRegStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import watchImage from "../assets/images/products/apple-watch-seri4.png";
import chairImage from "../assets/images/products/apple-watch-seri4.png";
import shoeImage from "../assets/images/products/apple-watch-seri4.png";
import amazfitImage from "../assets/images/products/apple-watch-seri4.png";
import mouseImage from "../assets/images/products/apple-watch-seri4.png";
import tripodImage from "../assets/images/products/apple-watch-seri4.png";

// Product card interface
interface Product {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  editMode?: boolean;
}

const Favorites: React.FC = () => {
  // Sample product data
  const products: Product[] = [
    {
      id: 1,
      name: "Minimal Chair Tool",
      price: "$24.59",
      rating: 5,
      reviews: 63,
      image: chairImage,
      editMode: true,
    },
    {
      id: 2,
      name: "Air-Max-270",
      price: "$60.00",
      rating: 4,
      reviews: 64,
      image: shoeImage,
      editMode: true,
    },
    {
      id: 3,
      name: "Apple Watch Series 4",
      price: "$120.00",
      rating: 4,
      reviews: 131,
      image: watchImage,
      editMode: true,
    },
    {
      id: 4,
      name: "Amazfit Vip",
      price: "$78.35",
      rating: 5,
      reviews: 154,
      image: amazfitImage,
    },
    {
      id: 5,
      name: "Gumbo Mouse",
      price: "$32.42",
      rating: 5,
      reviews: 35,
      image: mouseImage,
    },
    {
      id: 6,
      name: "Camera Tripod",
      price: "$50.00",
      rating: 5,
      reviews: 535,
      image: tripodImage,
    },
  ];

  return (
    <div className="bg-[#F5F6FA] min-h-screen">
      <main className="px-4 md:px-8 py-8">
        {/* Header */}
        <h1 className="text-[28px] md:text-[32px] font-bold text-[#202224] tracking-[-0.35px] mb-8">
          Favorites
        </h1>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Product Card Component
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= product.rating) {
        stars.push(<FaStar key={i} className="text-[#FF9500] w-4 h-4" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-black/20 w-4 h-4" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-white rounded-[14px] overflow-hidden shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)]">
      {/* Product Image */}
      <div className="relative h-[220px] bg-[#F9F9F9] rounded-t-[14px] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain p-4"
        />

        {/* Navigation Arrows */}
        <button className="absolute left-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#E2EAF8]/50 flex items-center justify-center">
          <IoChevronBack className="text-[#626262] w-5 h-5" />
        </button>
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-[#E2EAF8]/50 flex items-center justify-center">
          <IoChevronForward className="text-[#626262] w-5 h-5" />
        </button>

        {/* Favorite Button */}
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#F9F9F9] flex items-center justify-center">
          <FaHeart className="text-[#F93C65] w-4 h-4" />
        </button>
      </div>

      {/* Product Details */}
      <div className="p-6">
        <h3 className="font-bold text-[18px] text-[#202224] mb-1 leading-tight">
          {product.name}
        </h3>
        <h4 className="font-bold text-[16px] text-[#4880FF] mb-3">
          {product.price}
        </h4>

        {/* Star Rating */}
        <div className="flex items-center mb-5">
          <div className="flex gap-1 mr-2">{renderStars()}</div>
          <span className="text-[14px] text-black/40 font-semibold -tracking-[1.2%]">
            ({product.reviews})
          </span>
        </div>

        {/* Action Button */}
        <button
          className={`w-full bg-[#E2EAF8]/70 hover:bg-[#E2EAF8] text-[#202224] font-bold py-3 px-4 ${
            product.editMode ? "rounded-[12px]" : "rounded-[22px]"
          } transition-colors duration-200`}
        >
          {product.editMode ? "Edit Product" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default Favorites;
