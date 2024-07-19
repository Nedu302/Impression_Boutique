import React from 'react';
import { useParams } from 'react-router-dom';
import { CiHeart } from "react-icons/ci";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from 'react';
import axios from 'axios';

const HomeClick = () => {
  const { imgSrc, productName, price } = useParams();
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    console.log(data);
    let newQuantity = parseInt(e.target.value);
    if (newQuantity < 1) {
      newQuantity = 1;
    } else if (newQuantity > 5) {
      newQuantity = 5;
    }
    setQuantity(newQuantity);
  };
  

  return (
    <>
      <div className='mt-36 ml-36 flex text-xl font-custom-serif'>
        <h1>Home / Shop / </h1>
        <span className=' text-gray-300 pl-1'> Item</span>
      </div>
      <div className=' flex flex-wrap justify-center text-xl font-custom-serif text-gray-400 mb-16'>
        <div className='Clicked_product mt-10 w-full flex flex-wrap justify-center font-custom-serif'>
          <div className='w-full md:w-1/2 p-2 flex justify-center items-center'>
            <img src={decodeURIComponent(imgSrc)} className='w-4/5 md:w-full h-auto object-cover' alt="Product" />
          </div>
          <div className="flex flex-col w-full md:w-1/3 items-start p-4 text-gray-700">
            <h1 className='text-2xl w-full md:w-96'>{decodeURIComponent(productName)}</h1>
            <h2 className="text-xl mb-2 text-gray-300">SKU: 0001</h2>
            <p className="text-xl mb-4 text-red-600">Rs.{decodeURIComponent(price)}</p>
            <h1 className='text-xl'>Color</h1>
            <div className="flex space-x-2 mb-4 cursor-pointer">
              <span className="block w-6 h-6 bg-green-500 rounded-full"></span>
              <span className="block w-6 h-6 bg-purple-500 rounded-full"></span>
            </div>
            <h1 className='text-xl'>Size</h1>
            <select className={`border cursor-pointer border-gray-300  py-2 mb-4 w-full md:w-72 focus:outline-none h-14`}>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
            <h1 className='text-xl'>Quantity</h1>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="border border-gray-300 w-24 px-4 py-2 mb-4 focus:outline-none"
              min="1"
              max="5"
            />
            <div className='flex flex-wrap flex-col w-full mt-5'>
              <div className='flex w-full mb-1'>
                <button  className='bg-slate-500 hover:bg-slate-400 transition-all duration-500 ease-out text-white text-xl p-2 w-full md:w-80'>
                  Add to Cart
                </button>
                <div className='ml-1 bg-slate-500 text-white hover:bg-slate-400 transition-all duration-500 ease-out flex items-center justify-center text-3xl p-2 w-14'>
                  <CiHeart />
                </div>
              </div>
              <button className='bg-slate-500 hover:bg-slate-400 transition-all duration-500 ease-out text-white text-xl p-2 mb-1 md:w-96'>
                Buy Now
              </button>
            </div>

            <div className='mb-4 mt-16 cursor-pointer flex-col'>
              <div onClick={() => setIsOpenDetail(!isOpenDetail)} className='flex justify-between items-center'>
                <h3 className='font-semibold'>Description</h3>
                {isOpenDetail ? <FaMinus /> : <FaPlus />}
              </div>
              <ul className={`transition-all duration-500 m-0.5 ease-in text-gray-400 ${isOpenDetail ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} space-y-0`}>
                <li>Adorn fresh hues this summer, with this stunning 1 piece lawn ensemble.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClick;
