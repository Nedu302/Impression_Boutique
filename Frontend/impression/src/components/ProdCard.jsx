import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import { MdOutlineShoppingCart } from "react-icons/md";

const ProductCard = ({ imgSrc, productName, price }) => {
  return (
    <div className="m-10  font-custom-serif transition-transform duration-500 transform hover:-translate-y-2 hover:scale-105">
      <Link to={`/components/HomeClick/${encodeURIComponent(imgSrc)}/${encodeURIComponent(productName)}/${encodeURIComponent(price)}`} style={{width:"300px"}} className="flex flex-col items-start justify-center rounded-md shadow-md p-3">
        <img src={imgSrc} className='rounded-md' alt={productName} />
        <h1 className="pb-2 pt-4 text-base">{productName}</h1>
        <div className='flex items-center w-full justify-between'>
          <div>
            <Rating />
            <h1 className='text-xl text-red-600'>Rs.{price}</h1>
          </div>
          <MdOutlineShoppingCart className='bg-slate-200 rounded-full p-3 text-5xl' />
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
